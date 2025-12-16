import { CTASection } from '@/components/ui/CTASection';

export default function Preise() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-4">Preise</h1>
        <p className="text-lg text-foreground-muted mb-12">
          Transparente Preise für alle Bedürfnisse.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Starter</h2>
          <p className="text-foreground-muted">
            Perfekt für kleine Restaurants und Cafés.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Professional</h2>
          <p className="text-foreground-muted">
            Umfassende Features für wachsende Betriebe.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Enterprise</h2>
          <p className="text-foreground-muted">
            Individuelle Lösungen für große Unternehmen.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Zusatzfeatures</h2>
          <p className="text-foreground-muted">
            Erweitern Sie Ihr Paket nach Bedarf.
          </p>
        </section>
      </div>
      <CTASection />
    </>
  );
}

