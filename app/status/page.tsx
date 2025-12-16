import { CTASection } from '@/components/ui/CTASection';

export default function Status() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-4">Status & Updates</h1>
        <p className="text-lg text-foreground-muted mb-12">
          Aktuelle Systemstatus und Updates.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Systemstatus</h2>
          <p className="text-foreground-muted">
            Aktueller Status aller Systeme.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Wartungsarbeiten</h2>
          <p className="text-foreground-muted">
            Geplante Wartungsarbeiten und Updates.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Changelog</h2>
          <p className="text-foreground-muted">
            Neueste Änderungen und Verbesserungen.
          </p>
        </section>
      </div>
      <CTASection />
    </>
  );
}

