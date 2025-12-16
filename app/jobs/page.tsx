import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';

export default function Jobs() {
  return (
    <>
      <Section variant="normal">
        <Container size="lg">
          <h1 className="mb-6">Jobs</h1>
          <p className="text-lg text-foreground-muted mb-12 prose max-w-3xl">
            Werden Sie Teil unseres Teams und helfen Sie uns, die Gastronomie zu modernisieren.
          </p>

          <div className="mb-16">
            <h2 className="mb-4">Offene Stellen</h2>
            <p className="text-foreground-muted prose max-w-3xl">
              Aktuell haben wir keine offenen Stellen ausgeschrieben. 
              Bei Interesse kontaktieren Sie uns gerne initiativ.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="mb-4">Bewerbung</h2>
            <p className="text-foreground-muted prose max-w-3xl">
              Senden Sie uns Ihre Bewerbung per E-Mail. Wir melden uns schnell zurück.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="mb-4">Was uns wichtig ist</h2>
            <p className="text-foreground-muted prose max-w-3xl">
              Pragmatismus, Qualität, Teamgeist. Wir bauen Produkte, die im Alltag funktionieren.
            </p>
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}

