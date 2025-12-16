import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';
import { Section, Container } from '@/components/ui/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

export async function PartnersSection() {
  const locale = await getLocale();
  const items = t(locale, 'pages.home.partners.items') as Array<{ name: string; icon: string }>;

  return (
    <Section variant="tight" className="bg-surface dark:bg-background">
      <Container size="lg">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-4">{t(locale, 'pages.home.partners.h2')}</h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            {t(locale, 'pages.home.partners.p')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <SpotlightCard
              key={i}
              className="flex flex-col items-center justify-center p-6 text-center h-32 hover:bg-surface transition-colors group cursor-default"
              spotlightColor="color-mix(in srgb, var(--color-accent), transparent 90%)"
            >
              <div className="text-3xl mb-3 grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-foreground-muted group-hover:text-foreground transition-colors">
                {item.name}
              </span>
            </SpotlightCard>
          ))}
        </div>
        
        <p className="text-center text-xs text-foreground-muted mt-8 opacity-60">
          {t(locale, 'pages.home.partners.disclaimer')}
        </p>
      </Container>
    </Section>
  );
}
