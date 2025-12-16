import { CTASection } from '@/components/ui/CTASection';
import { Container, Section } from '@/components/ui/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Button } from '@/components/ui/Button';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';

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

  return (
    <>
      <Section variant="hero" className="pt-28">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h1 className="mb-6 tracking-tight">{pricing?.h1}</h1>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">{pricing?.intro}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            {tiers.map((tier, idx) => {
              const isPro = idx === 1;
              return (
                <SpotlightCard
                  key={tier.name}
                  className="p-7 md:p-8 h-full flex flex-col bg-surface/80"
                  withBorderBeam={isPro}
                  beamDuration={10}
                >
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="text-sm font-medium text-foreground-muted">{tier.tag}</div>
                      <div className="text-2xl font-semibold text-foreground mt-1">{tier.name}</div>
                    </div>
                    {isPro && (
                      <div className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent border border-border/60">
                        {pricing?.badges?.mostPopular}
                      </div>
                    )}
                  </div>

                  <div className="flex items-end gap-2 mb-6">
                    <div className="text-5xl font-semibold tracking-tight text-foreground">
                      <span className="text-2xl align-top mr-1">€</span>
                      {tier.price}
                    </div>
                    <div className="text-sm text-foreground-muted pb-2">{pricing?.billing?.perMonth}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.items.map((it) => (
                      <li key={it} className="flex gap-3 text-sm text-foreground-muted">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                        <span className="leading-relaxed">{it}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-2">
                    <Button
                      variant={isPro ? 'primary' : 'secondary'}
                      size="lg"
                      asChild
                      href="/demo"
                      className={isPro ? 'w-full rounded-xl' : 'w-full rounded-xl'}
                    >
                      {tier.cta}
                    </Button>
                    {isPro && (
                      <div className="text-xs text-foreground-muted mt-3 text-center opacity-80">
                        {pricing?.note}
                      </div>
                    )}
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}

