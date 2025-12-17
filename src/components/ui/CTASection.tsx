import Link from 'next/link';
import { Button } from './Button';
import { Section, Container } from './Section';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';

export async function CTASection() {
  const locale = await getLocale();

  return (
    <Section
      variant="normal"
      className="bg-[color:var(--color-inverse-bg)] text-[color:var(--color-inverse-fg)]"
    >
      <Container size="md" className="text-center">
        <h2 className="text-3xl font-semibold mb-4">
          {t(locale, 'pages.home.finalCta.h2')}
        </h2>
        <p className="text-lg mb-8 prose mx-auto text-[color:var(--color-inverse-fg-muted)] whitespace-pre-line">
          {t(locale, 'pages.home.finalCta.p')}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" size="lg" asChild href="/demo#form">
            {t(locale, 'pages.home.finalCta.ctaPrimary')}
          </Button>
          <Button variant="secondary" size="lg" asChild href="/kontakt">
            {t(locale, 'pages.home.finalCta.ctaSecondary')}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
