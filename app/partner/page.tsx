import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';

export default function Partner() {
  return (
    <>
      <Section variant="normal">
        <Container size="lg">
          <h1 className="mb-6">Partner</h1>
          <p className="text-lg text-foreground-muted mb-12 prose max-w-3xl">
            Wir arbeiten mit Partnern zusammen, um die beste Lösung für Ihre Gastronomie zu bieten.
          </p>

          <div className="mb-16">
            <h2 className="mb-4">Integrationen</h2>
            <p className="text-foreground-muted prose max-w-3xl">
              Wir integrieren uns in bestehende Systeme. Kassensysteme, Zahlungsanbieter, 
              Reservierungssysteme – wir bauen die passenden Verbindungen aus.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="mb-4">Partnerprogramm</h2>
            <p className="text-foreground-muted prose max-w-3xl">
              Unser Partnerprogramm befindet sich im Aufbau. Bei Interesse kontaktieren Sie uns gerne.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="mb-4">Kontakt</h2>
            <p className="text-foreground-muted prose max-w-3xl">
              Haben Sie Fragen zu Partnerschaften oder Integrationen? Wir freuen uns auf Ihre Nachricht.
            </p>
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}

