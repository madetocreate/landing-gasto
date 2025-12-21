'use client';

import { useState } from 'react';
import { useLocale } from '@/hooks/useLocale';
import { t } from '@/lib/i18n';

type ChatState = 'welcome' | 'recommendation' | 'upsell' | 'confirmation' | 'bill';

export function MiniChatDemo() {
  const locale = useLocale();
  const [state, setState] = useState<ChatState>('welcome');

  const handleAction = (action: string) => {
    if (action === 'recommendation') {
      setState('recommendation');
    } else if (action === 'waiter') {
      setState('bill');
    }
  };

  const handleAddItem = () => {
    setState('upsell');
  };

  const handleUpsell = (option: string) => {
    if (option !== 'Nein') {
      setState('confirmation');
    } else {
      setState('confirmation');
    }
  };

  const handleReset = () => {
    setState('welcome');
  };

  return (
    <div className="w-full max-w-md mx-auto bg-surface rounded-2xl shadow-glass overflow-hidden border border-border/50">
      {/* Chat Header */}
      <div className="px-4 py-3 bg-background-muted border-b border-border/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <span className="text-sm font-medium text-foreground">Gastro Chat</span>
        </div>
      </div>

      {/* Chat Content */}
      <div className="p-4 space-y-4 min-h-[300px] max-h-[400px] overflow-y-auto">
        {state === 'welcome' && (
          <>
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-background-muted flex items-center justify-center flex-shrink-0">
                <span className="text-sm">🤖</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground bg-background-muted rounded-lg px-4 py-2">
                  {t(locale, 'pages.home.miniChat.welcome') as string}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {(['menu', 'drinks', 'recommendation', 'waiter'] as const).map((action) => (
                <button
                  key={action}
                  onClick={() => handleAction(action)}
                  className="px-4 py-2.5 text-sm font-medium text-foreground bg-background-muted hover:bg-background-muted/80 rounded-xl transition-all duration-[var(--motion-fast)]"
                >
                  {t(locale, `pages.home.miniChat.actions.${action}`) as string}
                </button>
              ))}
            </div>
          </>
        )}

        {state === 'recommendation' && (
          <>
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-background-muted flex items-center justify-center flex-shrink-0">
                <span className="text-sm">🤖</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground-muted mb-3">
                  {t(locale, 'pages.home.miniChat.recommendation.title') as string}
                </p>
                <div className="space-y-2">
                  {(t(locale, 'pages.home.miniChat.recommendation.items') as Array<{ name: string; price: string; add: string }>).map((item, i) => (
                    <div
                      key={i}
                      className="bg-background rounded-lg p-3 border border-border/50"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{item.name}</span>
                        <span className="text-sm text-foreground-muted">{item.price}</span>
                      </div>
                      <button
                        onClick={handleAddItem}
                        className="w-full px-3 py-1.5 text-xs font-medium text-accent hover:bg-background-muted rounded-md transition-all duration-[var(--motion-fast)]"
                      >
                        {item.add}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {state === 'upsell' && (
          <>
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-background-muted flex items-center justify-center flex-shrink-0">
                <span className="text-sm">🤖</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground-muted mb-3">
                  {t(locale, 'pages.home.miniChat.upsell.question') as string}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(t(locale, 'pages.home.miniChat.upsell.options') as string[]).map((option, i) => (
                    <button
                      key={i}
                      onClick={() => handleUpsell(option)}
                      className="px-4 py-2 text-sm font-medium text-foreground bg-background-muted hover:bg-background-muted/80 rounded-full transition-all duration-[var(--motion-fast)]"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {state === 'confirmation' && (
          <>
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-background-muted flex items-center justify-center flex-shrink-0">
                <span className="text-sm">🤖</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground bg-background-muted rounded-lg px-4 py-2 mb-3">
                  {t(locale, 'pages.home.miniChat.confirmation.text') as string}
                </p>
                <button
                  onClick={handleReset}
                  className="text-sm text-accent hover:text-accent-hover font-medium"
                >
                  {t(locale, 'pages.home.miniChat.confirmation.viewOrders') as string}
                </button>
              </div>
            </div>
          </>
        )}

        {state === 'bill' && (
          <>
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-background-muted flex items-center justify-center flex-shrink-0">
                <span className="text-sm">🤖</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground bg-background-muted rounded-lg px-4 py-2">
                  {t(locale, 'pages.home.miniChat.bill.text') as string}
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Reset Button */}
      {state !== 'welcome' && (
        <div className="px-4 py-3 border-t border-border/50 bg-background-muted">
          <button
            onClick={handleReset}
            className="text-xs text-foreground-muted hover:text-foreground transition-colors duration-[var(--motion-fast)]"
          >
            Neu starten →
          </button>
        </div>
      )}
    </div>
  );
}

