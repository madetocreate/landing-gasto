import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';

export default function UeberUns() {
  return (
    <>
      <Section variant="normal">
        <Container size="lg">
          <h1 className="mb-6">Über uns</h1>
          <p className="text-lg text-foreground-muted mb-12 prose max-w-3xl">
            Lernen Sie Gastro kennen – eine intelligente Lösung für moderne Gastronomie.
          </p>

          <div className="mb-16">
            <h2 className="mb-4">Unsere Mission</h2>
            <p className="text-foreground-muted prose max-w-3xl">
              Wir möchten die Gastronomie mit modernen Technologien unterstützen. 
              Unser Ziel: Gäste zufriedener machen, Personal entlasten, Betriebe effizienter führen.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="mb-4">Unser Ansatz</h2>
            <p className="text-foreground-muted prose max-w-3xl">
              Wir starten pragmatisch und bauen sauber aus. Keine Überkomplizierung, 
              keine Zwangsumstellung. Das System wächst mit Ihren Bedürfnissen.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="mb-4">Unsere Werte</h2>
            <p className="text-foreground-muted prose max-w-3xl">
              Einfachheit, Zuverlässigkeit, Pragmatismus. Wir verstehen die Herausforderungen 
              im Gastgewerbe und bauen Lösungen, die im Alltag funktionieren.
            </p>
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}

