import { CTASection } from '@/components/ui/CTASection';

export default function Kontakt() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-4">Kontakt</h1>
        <p className="text-lg text-foreground-muted mb-12">
          Wir freuen uns auf Ihre Nachricht.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Kontaktformular</h2>
          <p className="text-foreground-muted">
            Senden Sie uns eine Nachricht über unser Kontaktformular.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">E-Mail</h2>
          <p className="text-foreground-muted">
            Schreiben Sie uns direkt an: info@gastro.example
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Telefon</h2>
          <p className="text-foreground-muted">
            Rufen Sie uns an: +49 (0) 123 456 789
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Adresse</h2>
          <p className="text-foreground-muted">
            Besuchen Sie uns in unserem Büro.
          </p>
        </section>
      </div>
      <CTASection />
    </>
  );
}

