import { CTASection } from '@/components/ui/CTASection';
import Link from 'next/link';

export default function Blog() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-4">Blog</h1>
        <p className="text-lg text-foreground-muted mb-12">
          Neuigkeiten, Tipps und Insights aus der Gastronomie.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Neueste Artikel</h2>
          <p className="text-foreground-muted">
            Hier finden Sie unsere neuesten Blog-Artikel.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Kategorien</h2>
          <p className="text-foreground-muted">
            Durchsuchen Sie Artikel nach Kategorien.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Newsletter</h2>
          <p className="text-foreground-muted">
            Abonnieren Sie unseren Newsletter für regelmäßige Updates.
          </p>
        </section>
      </div>
      <CTASection />
    </>
  );
}

