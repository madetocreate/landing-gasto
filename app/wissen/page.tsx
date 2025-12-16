import { CTASection } from '@/components/ui/CTASection';

export default function Wissen() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-4">Wissensbasis</h1>
        <p className="text-lg text-foreground-muted mb-12">
          Finden Sie Antworten auf Ihre Fragen.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Erste Schritte</h2>
          <p className="text-foreground-muted">
            Lernen Sie die Grundlagen von Gastro kennen.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Häufige Fragen</h2>
          <p className="text-foreground-muted">
            Antworten auf die am häufigsten gestellten Fragen.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Anleitungen</h2>
          <p className="text-foreground-muted">
            Schritt-für-Schritt Anleitungen für alle Features.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Video-Tutorials</h2>
          <p className="text-foreground-muted">
            Lernen Sie mit unseren Video-Tutorials.
          </p>
        </section>
      </div>
      <CTASection />
    </>
  );
}

