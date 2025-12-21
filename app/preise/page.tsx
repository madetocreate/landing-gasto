import { Container, Section } from '@/components/ui/Section';
import { TrackedButton } from '@/components/ui/TrackedButton';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';
import { PricingPlanCard } from '@/components/pricing/PricingPlanCard';
import { FeatureComparison } from '@/components/pricing/FeatureComparison';
import { PricingTrust } from '@/components/pricing/PricingTrust';
import { PricingFAQ } from '@/components/pricing/PricingFAQ';
import { Sparkles, ArrowRight } from 'lucide-react';
import { createMetadata } from '@/lib/metadata';
import { InternalLinks } from '@/components/seo/InternalLinks';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const pricing = t(locale, 'pages.pricing') as { h1?: string; intro?: string };
  return createMetadata({
    title: t(locale, 'pages.pricing.meta.title') as string || 'Preise – KI-Modernisierung für KMU',
    description: pricing?.intro || 'Transparente Preise für KI-Modernisierung. Starterkits ab X€/Monat. Ohne versteckte Kosten, ohne Tool-Chaos.',
    path: '/preise',
    locale,
  });
}

export default async function Preise() {
  const locale = await getLocale();
  type PricingComparisonCategory = {
    name: string;
    features: Array<{
      name: string;
      tiers: boolean[];
    }>;
  };

  type PricingContent = {
    h1?: string;
    intro?: string;
    note?: string;
    billing?: { perMonth?: string };
    badges?: { mostPopular?: string };
    tiers?: Array<{
      name: string;
      tag: string;
      price: string;
      items: string[];
      cta: string;
    }>;
    comparison?: {
      title: string;
      columns: string[];
      categories: PricingComparisonCategory[];
    };
  };

  const pricing = t(locale, 'pages.pricing') as PricingContent;
  const tiers = (pricing?.tiers ?? []) as Array<{
    name: string;
    tag: string;
    price: string;
    items: string[];
    cta: string;
  }>;

  const comparison = pricing?.comparison;

  const faqItems = [
    {
      q: "Wie schnell kann ich starten?",
      a: "Nach dem 3-Minuten-Check und der Klärung des Scopes geht es meist innerhalb weniger Tage live. Starter-Pakete sind besonders schnell umsetzbar.",
    },
    {
      q: "Kann ich später upgraden?",
      a: "Ja, alle Pläne sind modular aufgebaut. Du startest mit dem passenden Paket und erweiterst nach Bedarf – ohne komplizierte Migration.",
    },
    {
      q: "Was passiert mit meinen Daten?",
      a: "Alle Daten bleiben in deiner Kontrolle. EU-Hosting, verschlüsselte Übertragung, keine Weitergabe an Dritte. Vollständige DSGVO-Konformität.",
    },
    {
      q: "Brauche ich neue Tools oder Systeme?",
      a: "Nein. Wir integrieren uns in deine bestehenden Tools (Mail, Kalender, CRM, Dokumente). Kein Tool-Wechsel nötig.",
    },
    {
      q: "Wie funktionieren Freigaben und Kontrolle?",
      a: "Alle AI-Aktionen erfordern manuelle Freigabe. Du behältst die volle Kontrolle, alles ist auditierbar und nachvollziehbar.",
    },
    {
      q: "Was ist im Preis enthalten?",
      a: "Je nach Plan: Setup, Integration, dokumentierte Workflows, Monitoring, Support. Details klären wir im 3-Minuten-Check.",
    },
  ] as Array<{ q: string; a: string }>;

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero */}
      <Section variant="hero" className="pt-40 pb-24 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-emerald-50/50 rounded-[100%] blur-3xl -z-10" />
        
        <Container size="xl">
          <div className="text-center max-w-4xl mx-auto mb-20 relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-stone-100 text-stone-600 text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles className="w-4 h-4 text-action" />
              Preise & Pakete
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold tracking-tighter mb-6 sm:mb-8 leading-[0.9] text-stone-900 break-words px-2">
              Investiere in <br className="hidden sm:block" />
              <span className="text-action underline decoration-emerald-200 decoration-4 sm:decoration-8 underline-offset-4 sm:underline-offset-8">deine Freiheit.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground-muted leading-relaxed max-w-2xl mx-auto font-medium px-4 break-words">
              Wähle den Plan, der heute zu deinem Alltag passt. Skaliere, wenn du bereit für mehr Zeitgewinn bist.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24 md:mb-32 relative z-10">
            {tiers.map((tier, idx) => (
              <PricingPlanCard
                key={tier.name}
                name={tier.name}
                tag={tier.tag}
                price={tier.price}
                items={tier.items}
                cta={tier.cta}
                isPopular={idx === 1}
                billingPeriod={pricing?.billing?.perMonth}
                note={idx === 1 ? pricing?.note : undefined}
                index={idx}
                locale={locale}
              />
            ))}
          </div>

          {/* Feature Comparison */}
          {comparison && (
            <div className="max-w-6xl mx-auto mb-16 sm:mb-24 md:mb-32 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-stone-100 shadow-sm overflow-x-auto">
              <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4 break-words px-2">{comparison.title}</h2>
                <p className="text-base sm:text-lg text-stone-500 font-medium px-4">Alle Funktionen im direkten Vergleich</p>
              </div>
              <FeatureComparison
                title=""
                columns={comparison.columns}
                categories={comparison.categories}
                popularIndex={1}
              />
            </div>
          )}
        </Container>
      </Section>

      {/* Trust Section */}
      <div className="bg-white">
        <PricingTrust />
      </div>

      {/* FAQ Section */}
      <div className="bg-stone-50">
        <PricingFAQ items={faqItems} />
      </div>

      {/* Internal Links */}
      <InternalLinks
        links={[
          {
            href: '/anwendungen',
            label: 'Anwendungen',
            description: 'Alle KI-Anwendungen im Überblick',
          },
          {
            href: '/fundament',
            label: 'Fundament',
            description: 'Die Basis unserer KI-Lösung',
          },
          {
            href: '/wissen/faq',
            label: 'FAQ',
            description: 'Häufige Fragen zu Preisen und Features',
          },
          {
            href: '/kontakt',
            label: 'Kontakt',
            description: 'Persönliche Beratung zu Ihrem Paket',
          },
        ]}
        title="Weiterführende Informationen"
        className="bg-white"
      />

      {/* CTA Section */}
      <Section variant="normal" className="bg-stone-900 text-white py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full" />
        
        <Container size="md" className="text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            Noch unsicher?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-stone-400 font-medium leading-relaxed">
            Lass uns gemeinsam schauen, welches Paket für deinen aktuellen Workload am meisten Sinn macht. 
            Ehrlich, direkt und ohne Schnickschnack.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <TrackedButton 
              variant="primary" 
              size="lg" 
              className="h-16 px-10 rounded-2xl text-xl font-bold" 
              asChild 
              href="/check"
              trackEvent="cta_check_click"
              trackProperties={{ source: 'pricing_cta' }}
            >
              <span>Jetzt Check starten</span>
            </TrackedButton>
            <TrackedButton 
              variant="secondary" 
              size="lg" 
              className="h-16 px-10 rounded-2xl text-xl font-bold bg-white/5 border-white/10 text-white hover:bg-white/10" 
              asChild 
              href="/kontakt"
              trackEvent="cta_contact_click"
              trackProperties={{ source: 'pricing_cta' }}
            >
              <div className="flex items-center gap-2">
                <span>Frage stellen</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </TrackedButton>
          </div>
        </Container>
      </Section>
    </div>
  );
}
