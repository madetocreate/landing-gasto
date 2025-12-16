import { CTASection } from '@/components/ui/CTASection';

export default function Cookies() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-4">Cookies</h1>
        <p className="text-lg text-foreground-muted mb-12">
          Informationen zur Verwendung von Cookies.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Was sind Cookies?</h2>
          <p className="text-foreground-muted">
            Erklärung zu Cookies und ihrer Verwendung.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Cookie-Einstellungen</h2>
          <p className="text-foreground-muted">
            Verwalten Sie Ihre Cookie-Einstellungen.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Cookie-Arten</h2>
          <p className="text-foreground-muted">
            Welche Arten von Cookies wir verwenden.
          </p>
        </section>
      </div>
      <CTASection />
    </>
  );
}

