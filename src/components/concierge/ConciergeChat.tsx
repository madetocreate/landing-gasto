'use client';

import { useState, useEffect, useRef } from 'react';
import { ConciergeMode } from './ModeSwitcher';
import { StaticWizardProvider } from './providers/StaticWizardProvider';
import type { ChatMessage, ChatContext } from './providers/ChatProvider';
import { WizardFlow } from './WizardFlow';
import { OnboardingWizard } from './OnboardingWizard';
import { classNames } from '@/lib/classNames';
import Link from 'next/link';

interface ConciergeChatProps {
  mode: ConciergeMode;
  pathname: string;
}

export function ConciergeChat({ mode, pathname }: ConciergeChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [wizardState, setWizardState] = useState<{ type: 'support' | 'onboarding'; category?: string } | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const provider = new StaticWizardProvider();

  const context: ChatContext = {
    currentPage: pathname,
    scrollDepth: 0, // Could be enhanced with scroll tracking
    language: 'de',
  };

  useEffect(() => {
    // Initialize with first message
    const initialMessage = provider.getInitialMessage(mode, context);
    setMessages([initialMessage]);
  }, [mode]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: input,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await provider.sendMessage(mode, input, context);
      setMessages((prev) => [...prev, response.message]);
    } catch (error) {
      console.error('Chat error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAction = async (action: { id: string; type: string; value?: string; href?: string }) => {
    if (action.type === 'link' && action.href) {
      window.location.href = action.href;
      return;
    }

    if (action.type === 'wizard_step') {
      // Handled by WizardFlow/OnboardingWizard
      return;
    }

    // Send as message
    if (action.value) {
      setInput(action.value);
      setTimeout(() => handleSend(), 100);
    }
  };

  const renderMessage = (message: ChatMessage) => {
    if (message.role === 'user') {
      return (
        <div key={message.id} className="flex justify-end mb-4">
          <div className="max-w-[80%] px-4 py-2 bg-accent text-accent-foreground rounded-2xl rounded-tr-sm">
            <p className="text-sm">{message.content}</p>
          </div>
        </div>
      );
    }

    return (
      <div key={message.id} className="flex justify-start mb-4">
        <div className="max-w-[80%]">
          <div className="px-4 py-2 bg-surface rounded-2xl rounded-tl-sm border border-border/50">
            <p className="text-sm text-foreground whitespace-pre-line">{message.content}</p>
          </div>
          {message.actions && message.actions.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {message.actions.map((action) => (
                <button
                  key={action.id}
                  onClick={() => handleAction(action)}
                  className={classNames(
                    'px-3 py-1.5 text-xs font-medium rounded-lg',
                    'bg-background-muted text-foreground',
                    'border border-border/50',
                    'hover:bg-surface hover:border-accent/50',
                    'transition-colors duration-[var(--motion-fast)]',
                    'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1'
                  )}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
          {message.links && message.links.length > 0 && (
            <div className="mt-2 flex flex-col gap-1">
              {message.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="text-xs text-accent hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  // Check if we should show wizard
  useEffect(() => {
    if (mode === 'support' && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.actions?.some((a) => a.type === 'wizard_step')) {
        setWizardState({ type: 'support', category: lastMessage.actions[0]?.value });
      }
    } else if (mode === 'onboarding' && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.actions?.some((a) => a.type === 'wizard_step' && a.value === 'onboarding_start')) {
        setWizardState({ type: 'onboarding' });
      }
    } else {
      setWizardState(null);
    }
  }, [mode, messages]);

  // Render wizards
  if (wizardState?.type === 'support') {
    return (
      <WizardFlow
        initialCategory={wizardState.category}
        onComplete={(result) => {
          setWizardState(null);
          // Add completion message
          const completionMessage: ChatMessage = {
            id: `wizard-complete-${Date.now()}`,
            role: 'assistant',
            content: result.solved
              ? 'Super, dass das Problem gelöst wurde! Brauchst du noch Hilfe?'
              : 'Falls das Problem weiterhin besteht, kontaktiere bitte unseren Support.',
            timestamp: Date.now(),
            actions: [
              { id: 'back-to-support', label: 'Zurück zu Support', type: 'button', value: 'Support' },
              { id: 'contact', label: 'Kontakt', type: 'link', href: '/kontakt' },
            ],
          };
          setMessages((prev) => [...prev, completionMessage]);
        }}
      />
    );
  }

  if (wizardState?.type === 'onboarding') {
    return (
      <OnboardingWizard
        onComplete={(recommendation) => {
          setWizardState(null);
          // Add completion message
          const completionMessage: ChatMessage = {
            id: `onboarding-complete-${Date.now()}`,
            role: 'assistant',
            content: `Empfehlung: ${recommendation.package === 'basic' ? 'Basic' : recommendation.package === 'pro' ? 'Pro' : 'Premium'}\n\n${recommendation.reason}`,
            timestamp: Date.now(),
            actions: [
              { id: 'pricing', label: 'Preise ansehen', type: 'link', href: '/preise' },
              { id: 'demo', label: 'Demo buchen', type: 'link', href: '/demo#form' },
            ],
          };
          setMessages((prev) => [...prev, completionMessage]);
        }}
      />
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(renderMessage)}
        {isLoading && (
          <div className="flex justify-start">
            <div className="px-4 py-2 bg-surface rounded-2xl rounded-tl-sm border border-border/50">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-foreground-muted rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-foreground-muted rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-foreground-muted rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border/50">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Nachricht eingeben..."
            className={classNames(
              'flex-1 px-4 py-2 rounded-lg',
              'bg-background-muted border border-border/50',
              'text-foreground placeholder:text-foreground-muted',
              'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1',
              'transition-colors duration-[var(--motion-fast)]'
            )}
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className={classNames(
              'px-4 py-2 rounded-lg',
              'bg-accent text-accent-foreground',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'hover:bg-accent-hover',
              'transition-colors duration-[var(--motion-fast)]',
              'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1'
            )}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

