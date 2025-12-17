import { CTASection } from '@/components/ui/CTASection';
import { Container, Section } from '@/components/ui/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Button } from '@/components/ui/Button';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';
import { Check, Minus } from 'lucide-react';

export default async function Preise() {
  const locale = await getLocale();
  const pricing = t(locale, 'pages.pricing') as any;
  const tiers = (pricing?.tiers ?? []) as Array<{
    name: string;
    tag: string;
    price: string;
    items: string[];
    cta: string;
  }>;

  const comparison = pricing?.comparison;

  return (
    <>
      <Section variant="hero" className="pt-32 pb-16">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="mb-6 tracking-tight">{pricing?.h1}</h1>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">{pricing?.intro}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-32">
            {tiers.map((tier, idx) => {
              const isPro = idx === 1;
              return (
                <SpotlightCard
                  key={tier.name}
                  className={`p-8 h-full flex flex-col ${isPro ? 'bg-surface shadow-xl ring-1 ring-accent/20' : 'bg-surface/60'}`}
                  withBorderBeam={isPro}
                  beamDuration={10}
                >
                  <div className="flex items-start justify-between gap-4 mb-8">
                    <div>
                      <div className="text-sm font-medium text-accent mb-2">{tier.tag}</div>
                      <div className="text-2xl font-bold text-foreground">{tier.name}</div>
                    </div>
                    {isPro && (
                      <div className="text-xs font-semibold px-3 py-1 rounded-full bg-accent text-accent-foreground shadow-sm">
                        {pricing?.badges?.mostPopular}
                      </div>
                    )}
                  </div>

                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-bold tracking-tight text-foreground">{tier.price}€</span>
                    <span className="text-foreground-muted">{pricing?.billing?.perMonth}</span>
                  </div>

                  <ul className="space-y-4 mb-8 flex-1">
                    {tier.items.map((it) => (
                      <li key={it} className="flex gap-3 text-sm text-foreground-muted">
                        <Check className="w-5 h-5 text-accent shrink-0" />
                        <span className="leading-relaxed">{it}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={isPro ? 'primary' : 'secondary'}
                    size="lg"
                    asChild
                    href="/demo"
                    className="w-full rounded-xl h-12 text-base shadow-sm"
                  >
                    {tier.cta}
                  </Button>
                  
                  {isPro && (
                    <p className="text-xs text-foreground-muted mt-4 text-center">
                      {pricing?.note}
                    </p>
                  )}
                </SpotlightCard>
              );
            })}
          </div>

          {/* Comparison Table */}
          {comparison && (
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight mb-4">{comparison.title}</h2>
              </div>

              <div className="border border-border/50 rounded-3xl overflow-hidden bg-surface/50 backdrop-blur-sm shadow-sm">
                {/* Header Row (Desktop) */}
                <div className="hidden md:grid grid-cols-4 gap-4 p-6 border-b border-border/50 bg-background-muted/50">
                  <div className="font-semibold text-foreground">Feature</div>
                  {comparison.columns.map((col: string, i: number) => (
                    <div key={i} className={`text-center font-semibold ${i === 1 ? 'text-accent' : 'text-foreground-muted'}`}>
                      {col}
                    </div>
                  ))}
                </div>

                {/* Categories */}
                {comparison.categories.map((cat: any, i: number) => (
                  <div key={i}>
                    <div className="px-6 py-4 bg-background-muted/30 font-semibold text-sm uppercase tracking-wider text-foreground-muted border-b border-border/50">
                      {cat.name}
                    </div>
                    {cat.features.map((feat: any, j: number) => (
                      <div 
                        key={j} 
                        className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 md:px-6 md:py-5 border-b border-border/50 last:border-0 hover:bg-surface/50 transition-colors items-center"
                      >
                        <div className="font-medium text-foreground text-sm md:text-base">{feat.name}</div>
                        <div className="grid grid-cols-3 md:contents mt-2 md:mt-0 gap-2">
                          {feat.tiers.map((hasIt: boolean, k: number) => (
                            <div key={k} className="flex justify-center items-center">
                              {/* Mobile Label */}
                              <span className="md:hidden text-xs text-foreground-muted mr-2">
                                {comparison.columns[k]}:
                              </span>
                              {hasIt ? (
                                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                                  <Check className="w-4 h-4 text-accent" />
                                </div>
                              ) : (
                                <Minus className="w-4 h-4 text-border" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

        </Container>
      </Section>

      <CTASection />
    </>
  );
}
