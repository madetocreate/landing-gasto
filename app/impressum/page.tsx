import { CTASection } from '@/components/ui/CTASection';

export default function Impressum() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">Impressum</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
          <p className="text-foreground-muted">
            Hier folgt der Impressum-Text. Dieser Platzhalter wird später durch
            die vollständigen rechtlichen Angaben ersetzt.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Kontakt</h2>
          <p className="text-foreground-muted">
            Kontaktinformationen und Anschrift.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Verantwortlich</h2>
          <p className="text-foreground-muted">
            Verantwortliche Person für den Inhalt.
          </p>
        </section>
      </div>
      <CTASection />
    </>
  );
}
