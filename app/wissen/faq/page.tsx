import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';

export default async function FAQ() {
  const locale = await getLocale();
  const faqItems = t(locale, 'pages.faq.items') as Array<{ q: string; a: string }>;

  return (
    <>
      <Section variant="hero" className="pt-32">
        <Container size="md">
          <h1 className="mb-6 text-center">{t(locale, 'pages.faq.h1')}</h1>
          <p className="text-xl text-center text-foreground-muted mb-20 max-w-2xl mx-auto">
            {t(locale, 'pages.faq.meta.description')}
          </p>

          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <SpotlightCard key={i} className="p-8">
                <h3 className="text-lg font-bold mb-3 text-foreground">{item.q}</h3>
                <p className="text-foreground-muted leading-relaxed">{item.a}</p>
              </SpotlightCard>
            ))}
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
