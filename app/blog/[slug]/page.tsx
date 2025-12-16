import { CTASection } from '@/components/ui/CTASection';
import Link from 'next/link';

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/blog" className="text-accent hover:text-accent-hover mb-8 inline-block">
          ← Zurück zum Blog
        </Link>
        
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Blog-Artikel: {params.slug}
        </h1>
        <p className="text-lg text-foreground-muted mb-12">
          Hier folgt der Inhalt des Blog-Artikels.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Einleitung</h2>
          <p className="text-foreground-muted">
            Die Einleitung des Artikels.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Hauptinhalt</h2>
          <p className="text-foreground-muted">
            Der Hauptinhalt des Artikels.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Fazit</h2>
          <p className="text-foreground-muted">
            Das Fazit des Artikels.
          </p>
        </section>
      </div>
      <CTASection />
    </>
  );
}

