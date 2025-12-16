import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';
import { createMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createMetadata({
    title: t(locale, 'pages.feature_ordering.meta.title'),
    description: t(locale, 'pages.feature_ordering.meta.description'),
    path: '/features/bestellen',
  });
}

export default async function Bestellen() {
  const locale = await getLocale();
  const sections = t(locale, 'pages.feature_ordering.sections') as Array<{ 
    h2: string; 
    p: string; 
    bullets?: string[];
  }>;
  const intro = t(locale, 'pages.feature_ordering.intro');

  return (
    <>
      <Section variant="normal">
        <Container size="lg">
          <h1 className="mb-6">{t(locale, 'pages.feature_ordering.h1')}</h1>
          {intro && (
            <p className="text-lg text-foreground-muted mb-12 prose max-w-3xl">
              {intro}
            </p>
          )}

          {sections.map((section, i) => (
            <div key={i} className="mb-16">
              <h2 className="mb-4">{section.h2}</h2>
              <p className="text-foreground-muted prose mb-4 max-w-3xl">{section.p}</p>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="list-disc list-inside space-y-2 text-foreground-muted ml-4 max-w-3xl">
                  {section.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="mt-16 text-center">
            <h2 className="mb-6">{t(locale, 'pages.feature_ordering.cta.title')}</h2>
            <Button variant="primary" size="lg" asChild href="/demo#form">
              {t(locale, 'pages.feature_ordering.cta.button')}
            </Button>
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
