import type { Locale } from '@/lib/i18n';

export type ConciergeMode = 'concierge' | 'support' | 'onboarding';

export interface ChatContext {
  currentPage: string;
  scrollDepth: number;
  language: Locale;
  userActions?: string[]; // e.g., ['cta_clicked', 'demo_viewed']
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
  actions?: ChatAction[];
  links?: ChatLink[];
}

export interface ChatAction {
  id: string;
  label: string;
  type: 'button' | 'link' | 'wizard_step';
  value?: string;
  href?: string;
}

export interface ChatLink {
  label: string;
  href: string;
  description?: string;
}

export interface ChatResponse {
  message: ChatMessage;
  nextStep?: string;
  completed?: boolean;
}

/**
 * ChatProvider Interface
 * Phase 1: StaticWizardProvider (frontend-only)
 * Phase 2: ApiLLMProvider (with real LLM calls)
 */
export interface ChatProvider {
  sendMessage(
    mode: ConciergeMode,
    message: string,
    context: ChatContext
  ): Promise<ChatResponse>;
  
  searchKnowledgeBase(
    query: string,
    category?: string
  ): Promise<ChatMessage[]>;
  
  getInitialMessage(mode: ConciergeMode, context: ChatContext): ChatMessage;
}

