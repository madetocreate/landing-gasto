import { Container, Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';
import { PricingPlanCard } from '@/components/pricing/PricingPlanCard';
import { FeatureComparison } from '@/components/pricing/FeatureComparison';
import { PricingTrust } from '@/components/pricing/PricingTrust';
import { PricingFAQ } from '@/components/pricing/PricingFAQ';

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

  // FAQ items - using pricing-specific or general FAQ
  const faqItems = [
    {
      q: "Wie schnell kann ich starten?",
      a: "Nach dem 10-Minuten-Check und der Klärung des Scopes geht es meist innerhalb weniger Tage live. Starter-Pakete sind besonders schnell umsetzbar.",
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
      a: "Je nach Plan: Setup, Integration, dokumentierte Workflows, Monitoring, Support. Details klären wir im 10-Minuten-Check.",
    },
  ] as Array<{ q: string; a: string }>;

  return (
    <>
      {/* Hero */}
      <Section variant="hero" className="pt-32 pb-20">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {pricing?.h1}
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed whitespace-pre-line">
              {pricing?.intro}
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
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
              />
            ))}
          </div>

          {/* Feature Comparison */}
          {comparison && (
            <div className="max-w-6xl mx-auto mb-24">
              <FeatureComparison
                title={comparison.title}
                columns={comparison.columns}
                categories={comparison.categories}
                popularIndex={1}
              />
            </div>
          )}
        </Container>
      </Section>

      {/* Trust Section */}
      <PricingTrust />

      {/* FAQ Section */}
      <PricingFAQ items={faqItems} />

      {/* CTA Section */}
      <Section variant="normal" className="bg-[color:var(--color-inverse-bg)] text-[color:var(--color-inverse-fg)]">
        <Container size="md" className="text-center">
          <h2 className="text-3xl font-semibold mb-4">
            {t(locale, 'pages.pricing.pricingCta.h2')}
          </h2>
          <p className="text-lg mb-8 prose mx-auto text-[color:var(--color-inverse-fg-muted)] whitespace-pre-line">
            {t(locale, 'pages.pricing.pricingCta.p')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" asChild href="/check">
              {t(locale, 'pages.pricing.pricingCta.ctaPrimary')}
            </Button>
            <Button variant="secondary" size="lg" asChild href="/kontakt">
              {t(locale, 'pages.pricing.pricingCta.ctaSecondary')}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
