import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { BookOpen, Lightbulb, Settings, Shield, FileText } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Wissenshub – Wissen rund um KI',
  description: 'Wissen rund um KI – verständlich, praxisnah und ohne Buzzwords.',
  path: '/wissen',
});

const categories = [
  {
    icon: BookOpen,
    title: 'Erste Schritte mit KI',
    href: '/wissen/erste-schritte',
    description: 'Einstieg in KI ohne Überforderung',
  },
  {
    icon: Lightbulb,
    title: 'KI im Alltag erklärt',
    href: '/wissen/faq',
    description: 'Antworten auf häufige Fragen',
  },
  {
    icon: Settings,
    title: 'Automatisierung verstehen',
    href: '#',
    description: 'Wie Automatisierung im Alltag funktioniert',
  },
  {
    icon: Shield,
    title: 'Sicherheit & Verantwortung',
    href: '/sicherheit',
    description: 'Kontrolle und Transparenz',
  },
  {
    icon: FileText,
    title: 'Praxisbeispiele & Einordnung',
    href: '#',
    description: 'Echte Anwendungsfälle aus dem Alltag',
  },
];

export default function Wissen() {
  return (
    <>
      <Section variant="hero" className="pt-32 pb-20">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Wissenshub
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
              Wissen rund um KI –<br />
              verständlich, praxisnah und ohne Buzzwords.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal">
        <Container size="lg">
          {/* Was Du hier findest */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Was Du hier findest
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              Der Wissenshub sammelt Inhalte,
              die Dir helfen, KI besser zu verstehen
              und sinnvoll im Alltag einzuordnen.
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Keine Hype-Themen.
              Keine Verkaufsartikel.
              Sondern Antworten auf echte Fragen.
            </p>
          </div>

          {/* Themen im Wissenshub - Kacheln */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
              Themen im Wissenshub
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {categories.map((category, idx) => {
                const Icon = category.icon;
                const isLink = category.href !== '#';
                const content = (
                  <div className="p-6 h-full flex flex-col bg-surface border border-border/50 rounded-xl hover:border-action/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-action/20 flex items-center justify-center mb-4 shrink-0">
                      <Icon className="w-5 h-5 text-action" strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">{category.title}</h3>
                    <p className="text-sm text-foreground-muted leading-relaxed flex-1">
                      {category.description}
                    </p>
                  </div>
                );

                if (isLink) {
                  return (
                    <Link key={idx} href={category.href} className="block">
                      {content}
                    </Link>
                  );
                }
                return <div key={idx}>{content}</div>;
              })}
            </div>
          </div>

          {/* Ein lebender Bereich */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ein lebender Bereich
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              Der Wissenshub wird laufend erweitert.
              Neue Inhalte entstehen aus:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>echten Kundenfragen</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Erfahrungen aus Projekten</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>aktuellen Entwicklungen rund um KI</span>
              </li>
            </ul>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Ein Teil der Inhalte wird automatisiert erstellt
              und anschließend geprüft und eingeordnet.
            </p>
          </div>

          {/* Nicht sicher, wo Du anfangen sollst? */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Nicht sicher, wo Du anfangen sollst?
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-8">
              Wenn Du gerade erst einsteigst,
              empfehlen wir die ersten Schritte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" asChild href="/wissen/erste-schritte">
                Erste Schritte
              </Button>
              <Button variant="secondary" size="lg" asChild href="/anwendungen">
                Zu den Anwendungen
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
