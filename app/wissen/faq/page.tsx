import { CTASection } from '@/components/ui/CTASection';

export default function FAQ() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-4">FAQ</h1>
        <p className="text-lg text-foreground-muted mb-12">
          Häufig gestellte Fragen und Antworten.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Allgemeine Fragen</h2>
          <p className="text-foreground-muted">
            Antworten auf allgemeine Fragen zu Gastro.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Technische Fragen</h2>
          <p className="text-foreground-muted">
            Hilfe bei technischen Problemen und Fragen.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Preise & Abrechnung</h2>
          <p className="text-foreground-muted">
            Informationen zu Preisen und Abrechnungsmodellen.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Support</h2>
          <p className="text-foreground-muted">
            Wie Sie unseren Support erreichen können.
          </p>
        </section>
      </div>
      <CTASection />
    </>
  );
}

