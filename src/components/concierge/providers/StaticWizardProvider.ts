import type {
  ChatProvider,
  ChatMessage,
  ChatResponse,
  ChatContext,
  ConciergeMode,
} from './ChatProvider';
import kbData from '@/content/kb/kb_overview.json';
import kbQrGuest from '@/content/kb/kb_qr_guest.json';
import kbAdminImport from '@/content/kb/kb_admin_import.json';
import kbKds from '@/content/kb/kb_kds.json';
import kbPos from '@/content/kb/kb_pos.json';
import kbPricing from '@/content/kb/kb_pricing.json';

type KbEntry = {
  id: string;
  title: string;
  content: string;
  category: string;
  keywords: string[];
  links?: Array<{ label: string; href: string }>;
};

const kbFiles: Record<string, KbEntry[]> = {
  overview: kbData,
  qr_guest: kbQrGuest,
  admin_import: kbAdminImport,
  kds: kbKds,
  pos: kbPos,
  pricing: kbPricing,
};

export class StaticWizardProvider implements ChatProvider {
  async sendMessage(
    mode: ConciergeMode,
    message: string,
    context: ChatContext
  ): Promise<ChatResponse> {
    const lowerMessage = message.toLowerCase();

    // Concierge Mode
    if (mode === 'concierge') {
      if (lowerMessage.includes('was ist') || lowerMessage.includes('was ist das')) {
        return {
          message: {
            id: `msg-${Date.now()}`,
            role: 'assistant',
            content: 'Gastro ist eine intelligente Speisekarte, die wie ChatGPT funktioniert: Gäste scannen QR, stellen Fragen und bestellen per Klick. Küche und Bar bekommen klare Tickets.',
            timestamp: Date.now(),
            actions: [
              { id: 'demo-view', label: 'Demo ansehen', type: 'link', href: '/demo' },
              { id: 'demo-book', label: 'Demo buchen', type: 'link', href: '/demo#form' },
            ],
          },
        };
      }

      if (lowerMessage.includes('wie schnell') || lowerMessage.includes('live')) {
        return {
          message: {
            id: `msg-${Date.now()}`,
            role: 'assistant',
            content: 'In der Regel sind Sie in wenigen Minuten live: Menü importieren → kurz prüfen → QR-Codes ausdrucken. Keine komplizierte Einrichtung.',
            timestamp: Date.now(),
            actions: [
              { id: 'getting-started', label: 'Erste Schritte', type: 'link', href: '/wissen/erste-schritte' },
            ],
          },
        };
      }

      if (lowerMessage.includes('kostet') || lowerMessage.includes('preis')) {
        return {
          message: {
            id: `msg-${Date.now()}`,
            role: 'assistant',
            content: 'Wir haben drei Pakete: Basic (für den Start), Pro (für den Betrieb), Premium (für Wachstum). Alle monatlich kündbar.',
            timestamp: Date.now(),
            actions: [
              { id: 'pricing', label: 'Preise ansehen', type: 'link', href: '/preise' },
            ],
          },
        };
      }

      // Default concierge response
      return {
        message: {
          id: `msg-${Date.now()}`,
          role: 'assistant',
          content: 'Wie kann ich Ihnen helfen?',
          timestamp: Date.now(),
          actions: [
            { id: 'what-is', label: 'Was ist das?', type: 'button', value: 'Was ist das?' },
            { id: 'how-fast', label: 'Wie schnell bin ich live?', type: 'button', value: 'Wie schnell bin ich live?' },
            { id: 'pricing', label: 'Was kostet das?', type: 'button', value: 'Was kostet das?' },
            { id: 'demo-view', label: 'Demo ansehen', type: 'link', href: '/demo' },
            { id: 'demo-book', label: 'Demo buchen', type: 'link', href: '/demo#form' },
          ],
        },
      };
    }

    // Support Mode - Wizard Flow
    if (mode === 'support') {
      // This will be handled by WizardFlow component
      return {
        message: {
          id: `msg-${Date.now()}`,
          role: 'assistant',
          content: 'Wobei brauchst du Hilfe?',
          timestamp: Date.now(),
          actions: [
            { id: 'qr-guest', label: 'QR / Gast', type: 'wizard_step', value: 'qr_guest' },
            { id: 'admin-import', label: 'Admin / Import', type: 'wizard_step', value: 'admin_import' },
            { id: 'kds', label: 'Küche / Bar (KDS)', type: 'wizard_step', value: 'kds' },
            { id: 'pos', label: 'POS', type: 'wizard_step', value: 'pos' },
          ],
        },
      };
    }

    // Onboarding Mode
    if (mode === 'onboarding') {
      return {
        message: {
          id: `msg-${Date.now()}`,
          role: 'assistant',
          content: 'Lass uns gemeinsam herausfinden, welches Paket zu dir passt.',
          timestamp: Date.now(),
          actions: [
            { id: 'start-onboarding', label: 'Los geht\'s', type: 'wizard_step', value: 'onboarding_start' },
          ],
        },
      };
    }

    // Fallback
    return {
      message: {
        id: `msg-${Date.now()}`,
        role: 'assistant',
        content: 'Entschuldigung, ich habe das nicht verstanden. Wie kann ich helfen?',
        timestamp: Date.now(),
      },
    };
  }

  async searchKnowledgeBase(
    query: string,
    category?: string
  ): Promise<ChatMessage[]> {
    const lowerQuery = query.toLowerCase();
    const results: ChatMessage[] = [];

    const searchInKb = (entries: KbEntry[]) => {
      entries.forEach((entry) => {
        const matches =
          entry.title.toLowerCase().includes(lowerQuery) ||
          entry.content.toLowerCase().includes(lowerQuery) ||
          entry.keywords.some((kw) => kw.toLowerCase().includes(lowerQuery));

        if (matches) {
          results.push({
            id: entry.id,
            role: 'assistant',
            content: entry.content,
            timestamp: Date.now(),
            links: entry.links,
          });
        }
      });
    };

    if (category && kbFiles[category]) {
      searchInKb(kbFiles[category]);
    } else {
      Object.values(kbFiles).forEach(searchInKb);
    }

    return results.slice(0, 5); // Max 5 results
  }

  getInitialMessage(mode: ConciergeMode, context: ChatContext): ChatMessage {
    if (mode === 'concierge') {
      return {
        id: 'initial-concierge',
        role: 'assistant',
        content: 'Hallo! Ich bin dein KI Concierge. Wie kann ich dir helfen?',
        timestamp: Date.now(),
        actions: [
          { id: 'what-is', label: 'Was ist das?', type: 'button', value: 'Was ist das?' },
          { id: 'how-fast', label: 'Wie schnell bin ich live?', type: 'button', value: 'Wie schnell bin ich live?' },
          { id: 'pricing', label: 'Was kostet das?', type: 'button', value: 'Was kostet das?' },
          { id: 'demo-view', label: 'Demo ansehen', type: 'link', href: '/demo' },
          { id: 'demo-book', label: 'Demo buchen', type: 'link', href: '/demo#form' },
        ],
      };
    }

    if (mode === 'support') {
      return {
        id: 'initial-support',
        role: 'assistant',
        content: 'KI-Soforthilfe 24/7 · Menschlicher Support nach Verfügbarkeit\n\nWobei brauchst du Hilfe?',
        timestamp: Date.now(),
        actions: [
          { id: 'qr-guest', label: 'QR / Gast', type: 'wizard_step', value: 'qr_guest' },
          { id: 'admin-import', label: 'Admin / Import', type: 'wizard_step', value: 'admin_import' },
          { id: 'kds', label: 'Küche / Bar (KDS)', type: 'wizard_step', value: 'kds' },
          { id: 'pos', label: 'POS', type: 'wizard_step', value: 'pos' },
        ],
      };
    }

    // Onboarding
    return {
      id: 'initial-onboarding',
      role: 'assistant',
      content: 'Lass uns gemeinsam herausfinden, welches Paket zu dir passt. Beantworte ein paar kurze Fragen.',
      timestamp: Date.now(),
      actions: [
        { id: 'start-onboarding', label: 'Los geht\'s', type: 'wizard_step', value: 'onboarding_start' },
      ],
    };
  }
}

