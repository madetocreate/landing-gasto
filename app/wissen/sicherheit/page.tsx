import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { createMetadata } from '@/lib/metadata';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { Shield, Lock, Eye, CheckCircle2 } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Sicherheit – KI mit Kontrolle und Transparenz',
  description: 'Warum Sicherheit bei KI wichtig ist. Kontrolle statt Blackbox, Datensicherheit pragmatisch umgesetzt.',
  path: '/wissen/sicherheit',
});

export default function SicherheitWissen() {
  const faqItems = [
    {
      q: 'Was bedeutet „Kontrolle statt Blackbox"?',
      a: 'Jeder Schritt ist nachvollziehbar. Du siehst, was die KI vorschlägt und warum. Nichts passiert ohne deine Freigabe.',
    },
    {
      q: 'Wie werden meine Daten geschützt?',
      a: 'Sensible Daten bleiben serverseitig. Zugriffe sind klar geregelt, Tokens werden nicht unkontrolliert weitergegeben.',
    },
    {
      q: 'Was ist AI Shield?',
      a: 'AI Shield ist eine Sicherheitsschicht, die das System vor Manipulationen schützt: Prompt Injection, Tool-Missbrauch, Context Poisoning. Alles wird überwacht und protokolliert.',
    },
    {
      q: 'Kann ich sehen, was die KI gemacht hat?',
      a: 'Ja. Alle Aktionen sind nachvollziehbar dokumentiert. Du kannst jederzeit prüfen, was passiert ist und warum.',
    },
  ];

  return (
    <>
      <Section variant="hero" className="pt-32 pb-20">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Sicherheit
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
              KI kann im Alltag enorm helfen – aber nur, wenn sie sicher und kontrollierbar bleibt.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal">
        <Container size="lg">
          {/* Warum Sicherheit bei KI wichtig ist */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Warum Sicherheit bei KI wichtig ist
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              KI ist mächtig. Und genau deshalb braucht sie klare Grenzen und Kontrolle.
              Sicherheit bedeutet nicht nur Verschlüsselung, sondern vor allem: Du weißt, was passiert – und Du behältst die Kontrolle.
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Das System arbeitet nicht „irgendwie im Hintergrund", sondern nachvollziehbar und prüfbar.
            </p>
          </div>

          {/* Kontrolle statt Blackbox */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Kontrolle statt Blackbox
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-6">
              Jeder Schritt ist erklärbar. Jede Entscheidung ist nachvollziehbar.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Freigaben bleiben bei Dir – nichts passiert ohne deine Zustimmung</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Rollen und Rechte sind klar definiert</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Vorschläge bleiben Vorschläge – Du entscheidest</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Nachvollziehbarkeit über den gesamten Ablauf</span>
              </li>
            </ul>
          </div>

          {/* Datensicherheit pragmatisch */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Datensicherheit pragmatisch
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              Sensible Informationen gehören nicht unkontrolliert in den Browser oder in fremde Oberflächen.
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              Darum ist das System so aufgebaut:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Zugriffe und Tokens bleiben serverseitig – kontrolliert und nachvollziehbar</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Keine sensiblen Daten im Browser</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Klare Berechtigungen: Wer darf was?</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Du behältst jederzeit die Hoheit über deine Daten</span>
              </li>
            </ul>
          </div>

          {/* AI Shield als Sicherheits-Layer */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              AI Shield als Sicherheits-Layer
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-6">
              AI Shield ist eine zusätzliche Sicherheitsschicht, die das System vor Manipulationen schützt.
            </p>
            <SpotlightCard 
              className="p-6 md:p-8 bg-[#1F2937]/30 border border-border/50" 
              spotlightColor="rgba(var(--action-rgb), 0.15)"
            >
              <h3 className="text-xl font-bold mb-4">Was AI Shield schützt:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-foreground-muted">
                  <Shield className="w-5 h-5 text-action shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <span className="font-semibold text-foreground">Prompt Injection:</span>
                    <span className="ml-2">Verhindert, dass externe Eingaben das System manipulieren</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-foreground-muted">
                  <Lock className="w-5 h-5 text-action shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <span className="font-semibold text-foreground">Tool-Missbrauch:</span>
                    <span className="ml-2">Überwacht, welche Tools verwendet werden und ob sie autorisiert sind</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-foreground-muted">
                  <Eye className="w-5 h-5 text-action shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <span className="font-semibold text-foreground">Context Poisoning:</span>
                    <span className="ml-2">Erkennt, wenn Kontext manipuliert wird</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-foreground-muted">
                  <CheckCircle2 className="w-5 h-5 text-action shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <span className="font-semibold text-foreground">Logging & Monitoring:</span>
                    <span className="ml-2">Alle Aktionen werden protokolliert und überwacht</span>
                  </div>
                </li>
              </ul>
            </SpotlightCard>
            <p className="text-lg text-foreground-muted leading-relaxed mt-6">
              Das klingt technisch – ist aber wichtig, damit das System im Alltag zuverlässig funktioniert.
              Ohne Panik, ohne Paranoia. Einfach sauber und kontrolliert.
            </p>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              Häufige Fragen
            </h2>
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}

