import { CTASection } from '@/components/ui/CTASection';

export default function ErsteSchritte() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-4">Erste Schritte</h1>
        <p className="text-lg text-foreground-muted mb-12">
          Willkommen bei Gastro! Hier erfahren Sie, wie Sie loslegen.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Registrierung</h2>
          <p className="text-foreground-muted">
            Erstellen Sie Ihr Konto und starten Sie durch.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Erste Einrichtung</h2>
          <p className="text-foreground-muted">
            Konfigurieren Sie Ihr Restaurant und Ihre Einstellungen.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Erste Bestellung</h2>
          <p className="text-foreground-muted">
            Erstellen Sie Ihre erste Bestellung.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Tipps & Tricks</h2>
          <p className="text-foreground-muted">
            Profitieren Sie von unseren Tipps für den optimalen Start.
          </p>
        </section>
      </div>
      <CTASection />
    </>
  );
}

