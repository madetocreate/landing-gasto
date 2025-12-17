import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Kontakt – Lass uns kurz sprechen',
  description: 'Du hast Fragen oder willst wissen, ob KI in deinem Alltag wirklich Sinn macht? Dann lass uns kurz sprechen.',
  path: '/kontakt',
});

export default function Kontakt() {
  return (
    <>
      <Section variant="hero" className="pt-32 pb-20">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Kontakt
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
              Du hast Fragen oder willst wissen,<br />
              ob KI in Deinem Alltag wirklich Sinn macht?
            </p>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed mt-4">
              Dann lass uns kurz sprechen.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal">
        <Container size="lg">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-foreground-muted leading-relaxed">
              Wir verkaufen Dir nichts am Telefon.
              Wir hören zu, schauen auf Deinen Alltag
              und sagen Dir ehrlich, was realistisch ist – und was nicht.
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed mt-6">
              Manchmal ist KI sofort sinnvoll.
              Manchmal noch nicht.
              Beides ist okay.
            </p>
          </div>

          {/* So erreichst Du uns */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              So erreichst Du uns
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-8">
              Am einfachsten ist ein kurzer Check.
              In 10 Minuten klären wir:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>wo bei Dir Zeit verloren geht</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>welche Abläufe sich eignen</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>und wo Du (noch) nichts automatisieren solltest</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" asChild href="/check">
                10-Minuten-Check
              </Button>
              <Button variant="secondary" size="lg" asChild href="mailto:hallo@aklow.com">
                Oder schreib uns direkt
              </Button>
            </div>
          </div>

          {/* Was danach passiert */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Was danach passiert
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Du bekommst eine ehrliche Einschätzung</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Kein Druck, kein Verkaufsmonolog</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Wenn es passt: nächster Schritt</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Wenn nicht: klare Empfehlung</span>
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
