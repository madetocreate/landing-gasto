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
import kbAklow from '@/content/kb/kb_aklow.json';

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
  aklow: kbAklow,
};

export class StaticWizardProvider implements ChatProvider {
  private isGastroContext(path: string): boolean {
    return path.includes('/features') || 
           path.includes('/solutions/gastro') || 
           path.includes('/demo');
  }

  async sendMessage(
    mode: ConciergeMode,
    message: string,
    context: ChatContext
  ): Promise<ChatResponse> {
    const lowerMessage = message.toLowerCase();
    const isGastro = this.isGastroContext(context.currentPage);

    // Concierge Mode
    if (mode === 'concierge') {
      if (lowerMessage.includes('was ist') || lowerMessage.includes('was ist das')) {
        if (isGastro) {
          return {
            message: {
              id: `msg-${Date.now()}`,
              role: 'assistant',
              content: 'Gastro ist eine intelligente Speisekarte, die wie ChatGPT funktioniert: Gäste scannen QR, stellen Fragen und bestellen per Klick. Küche und Bar bekommen klare Tickets.',
              timestamp: Date.now(),
              actions: [
                { id: 'demo-view', label: 'Demo ansehen', type: 'link', href: '/demo' },
              ],
            },
          };
        } else {
          return {
            message: {
              id: `msg-${Date.now()}`,
              role: 'assistant',
              content: 'AKLOW modernisiert KMUs mit KI. Wir bieten fertige Lösungen und individuelle Integrationen an.',
              timestamp: Date.now(),
              actions: [
                { id: 'anwendungen', label: 'Anwendungen ansehen', type: 'link', href: '/anwendungen' },
              ],
            },
          };
        }
      }

      if (lowerMessage.includes('wie schnell') || lowerMessage.includes('live')) {
        if (isGastro) {
          return {
            message: {
              id: `msg-${Date.now()}`,
              role: 'assistant',
              content: 'In der Regel sind Sie in wenigen Minuten live: Menü importieren → kurz prüfen → QR-Codes ausdrucken.',
              timestamp: Date.now(),
              actions: [
                { id: 'getting-started', label: 'Erste Schritte', type: 'link', href: '/wissen/erste-schritte' },
              ],
            },
          };
        } else {
          return {
            message: {
              id: `msg-${Date.now()}`,
              role: 'assistant',
              content: 'Fertige Lösungen sind oft in 14 Tagen live. Individuelle Integrationen hängen vom Umfang ab, starten aber meist mit einem schnellen Piloten.',
              timestamp: Date.now(),
              actions: [
                { id: 'check', label: '3-Minuten-Check machen', type: 'link', href: '/check' },
              ],
            },
          };
        }
      }

      if (lowerMessage.includes('kostet') || lowerMessage.includes('preis')) {
        if (isGastro) {
          return {
            message: {
              id: `msg-${Date.now()}`,
              role: 'assistant',
              content: 'Wir haben drei Pakete: Basic, Pro und Premium. Alle monatlich kündbar.',
              timestamp: Date.now(),
              actions: [
                { id: 'pricing', label: 'Preise ansehen', type: 'link', href: '/preise' },
              ],
            },
          };
        } else {
          return {
            message: {
              id: `msg-${Date.now()}`,
              role: 'assistant',
              content: 'Fertige Lösungen gibt es ab 29€/Monat. Für individuelle Projekte erstellen wir ein Angebot nach dem Check.',
              timestamp: Date.now(),
              actions: [
                { id: 'pricing', label: 'Preise ansehen', type: 'link', href: '/preise' },
              ],
            },
          };
        }
      }

      // Default concierge response
      return {
        message: {
          id: `msg-${Date.now()}`,
          role: 'assistant',
          content: 'Wie kann ich Ihnen helfen?',
          timestamp: Date.now(),
          actions: isGastro 
            ? [
              { id: 'what-is', label: 'Was ist das?', type: 'button', value: 'Was ist das?' },
              { id: 'demo-view', label: 'Demo ansehen', type: 'link', href: '/demo' },
            ] 
            : [
              { id: 'what-is', label: 'Was ist AKLOW?', type: 'button', value: 'Was ist das?' },
              { id: 'check', label: 'Check starten', type: 'link', href: '/check' },
            ],
        },
      };
    }

    // Support Mode - Wizard Flow (Handled by component, but fallback here)
    if (mode === 'support') {
      return {
        message: {
          id: `msg-${Date.now()}`,
          role: 'assistant',
          content: 'Wobei brauchst du Hilfe?',
          timestamp: Date.now(),
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
    const isGastro = this.isGastroContext(context.currentPage);

    if (mode === 'concierge') {
      return {
        id: 'initial-concierge',
        role: 'assistant',
        content: isGastro 
          ? 'Hallo! Ich bin dein Gastro-Assistent. Fragen zur Demo oder Features?' 
          : 'Hallo! Ich bin dein AKLOW Concierge. Fragen zur Modernisierung?',
        timestamp: Date.now(),
        actions: isGastro
          ? [
            { id: 'what-is', label: 'Was ist das?', type: 'button', value: 'Was ist das?' },
            { id: 'how-fast', label: 'Wie schnell?', type: 'button', value: 'Wie schnell bin ich live?' },
            { id: 'demo-view', label: 'Demo ansehen', type: 'link', href: '/demo' },
          ]
          : [
            { id: 'what-is', label: 'Was ist AKLOW?', type: 'button', value: 'Was ist das?' },
            { id: 'anwendungen', label: 'Anwendungen?', type: 'link', href: '/anwendungen' },
            { id: 'check', label: '3-Minuten-Check', type: 'link', href: '/check' },
          ],
      };
    }

    if (mode === 'support') {
      // Support Mode
      if (isGastro) {
        return {
          id: 'initial-support',
          role: 'assistant',
          content: 'KI-Soforthilfe für Gastro Starter.\n\nWobei brauchst du Hilfe?',
          timestamp: Date.now(),
          actions: [
            { id: 'qr-guest', label: 'QR / Gast', type: 'wizard_step', value: 'qr_guest' },
            { id: 'admin-import', label: 'Admin / Import', type: 'wizard_step', value: 'admin_import' },
            { id: 'kds', label: 'Küche / Bar (KDS)', type: 'wizard_step', value: 'kds' },
          ],
        };
      } else {
         return {
          id: 'initial-support',
          role: 'assistant',
          content: 'Support & Hilfe.\n\nWorum geht es?',
          timestamp: Date.now(),
          actions: [
             // General support actions or empty to rely on WizardFlow component logic (which we need to update too)
             { id: 'aklow-general', label: 'Allgemein', type: 'wizard_step', value: 'aklow_general' }
          ],
        };
      }
    }

    // Onboarding
    return {
      id: 'initial-onboarding',
      role: 'assistant',
      content: 'Lass uns herausfinden, was du brauchst.',
      timestamp: Date.now(),
      actions: [
        { id: 'start-onboarding', label: 'Los geht\'s', type: 'wizard_step', value: 'onboarding_start' },
      ],
    };
  }
}
