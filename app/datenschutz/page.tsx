import { CTASection } from '@/components/ui/CTASection';

export default function Datenschutz() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">Datenschutz</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Datenschutzerklärung gemäß DSGVO</h2>
          <p className="text-foreground-muted">
            Hier folgt der Datenschutz-Text. Dieser Platzhalter wird später durch
            die vollständige Datenschutzerklärung ersetzt.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Erhebung von Daten</h2>
          <p className="text-foreground-muted">
            Informationen zur Erhebung und Verarbeitung von Daten.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ihre Rechte</h2>
          <p className="text-foreground-muted">
            Ihre Rechte bezüglich Ihrer personenbezogenen Daten.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Cookies</h2>
          <p className="text-foreground-muted">
            Informationen zur Verwendung von Cookies.
          </p>
        </section>
      </div>
      <CTASection />
    </>
  );
}
