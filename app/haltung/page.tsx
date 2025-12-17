import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Haltung & Verantwortung – KI sinnvoll einsetzen',
  description: 'Wir finden: KI ist zu nützlich, um nur „irgendwie" eingesetzt zu werden. Sie sollte Menschen im Alltag entlasten – verständlich, kontrollierbar und sinnvoll.',
  path: '/haltung',
});

export default function Haltung() {
  return (
    <>
      <Section variant="hero" className="pt-32 pb-20">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Haltung & Verantwortung
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
              Wir finden: KI ist zu nützlich, um nur „irgendwie" eingesetzt zu werden.
              Sie sollte Menschen im Alltag entlasten – verständlich, kontrollierbar und sinnvoll.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal">
        <Container size="lg">
          {/* KI näher an den Menschen bringen */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              KI näher an den Menschen bringen
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              Viele sehen KI als etwas Technisches, Abstraktes oder sogar Einschüchterndes.
              Wir wollen das Gegenteil: KI so bauen und erklären, dass Du sie im Alltag wirklich nutzen kannst.
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              Ohne komplizierte Oberflächen. Ohne neue Systeme, die Du erst lernen musst.
              Sondern als Unterstützung dort, wo Arbeit heute sowieso passiert.
            </p>
          </div>

          {/* Sinnvoll statt maximal */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Sinnvoll statt maximal
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              Unser Ziel ist nicht, möglichst viel KI einzubauen.
              Unser Ziel ist, dass KI an den richtigen Stellen hilft:
              weniger Unterbrechungen, weniger Sucherei, weniger Routine.
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Und gleichzeitig klare Regeln, klare Kontrolle und nachvollziehbare Abläufe.
            </p>
          </div>

          {/* Technologie mit Verantwortung */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Technologie mit Verantwortung
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              Technologie ist nie nur „neutral" – sie hat Auswirkungen.
              Darum gehen wir bewusst verantwortungsvoll mit KI um:
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Wir bevorzugen Lösungen, die transparent sind und im Alltag funktionieren.
              Und wir vermeiden „Blackbox"-Automatik, die niemand mehr versteht.
            </p>
          </div>

          {/* KI auch für Gutes nutzen */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              KI auch für Gutes nutzen
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              Ein Teil unserer Erlöse fließt in Projekte, die über Business hinausgehen:
              humanitäre Initiativen und Tierschutz-Projekte, bei denen KI sinnvoll unterstützen kann.
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Nicht als laute Kampagne.
              Sondern, weil wir überzeugt sind, dass Technologie Verantwortung mit sich bringt.
            </p>
          </div>

          {/* Ein kleines, fokussiertes Team */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ein kleines, fokussiertes Team
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              Wir sind kein anonymer Konzern und keine klassische Agentur.
              Wir bauen lieber ruhig und sauber, als laut und schnell.
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Und wir hören genau hin, was im Alltag wirklich gebraucht wird.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-background-muted rounded-2xl p-8 md:p-12 mb-16 text-center max-w-3xl mx-auto">
            <p className="text-lg text-foreground-muted mb-8 leading-relaxed">
              Wenn Du Fragen hast oder wissen willst, ob KI bei Dir sinnvoll passt, melde Dich gern.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" asChild href="/kontakt">
                Kontakt
              </Button>
              <Button variant="secondary" size="lg" asChild href="/check">
                10-Minuten-Check
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}

