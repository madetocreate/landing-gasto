import { DemoTabs } from '@/components/demo/DemoTabs';
import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { createMetadata } from '@/lib/metadata';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';
import { DemoForm } from '@/components/forms/DemoForm';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createMetadata({
    title: t(locale, 'pages.demo.meta.title') as string,
    description: t(locale, 'pages.demo.meta.description') as string,
    path: '/demo',
    locale,
  });
}

export default async function Demo() {
  const locale = await getLocale();

  return (
    <>
      <Section variant="normal">
        <Container size="lg">
          <div className="text-center mb-12">
            <h1 className="mb-4">{t(locale, 'pages.demo.h1') as string}</h1>
            <p className="text-lg text-foreground-muted prose mx-auto">
              {t(locale, 'pages.demo.intro') as string}
            </p>
          </div>

          <DemoTabs />
        </Container>
      </Section>

      {/* CTA Section */}
      <Section variant="normal" className="bg-background-muted">
        <Container size="md" className="text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            {t(locale, 'pages.demo.form.title') as string}
          </h2>
          <p className="text-foreground-muted mb-8 prose mx-auto">
            {t(locale, 'pages.demo.form.intro') as string}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" asChild href="/demo#form">
              {t(locale, 'pages.demo.cta.primary') as string}
            </Button>
            <Button variant="secondary" size="lg" asChild href="/preise">
              {t(locale, 'pages.demo.cta.secondary') as string}
            </Button>
          </div>
        </Container>
      </Section>

      {/* Form Section */}
      <Section variant="normal" id="form">
        <Container size="md">
          <div className="max-w-lg mx-auto bg-surface rounded-lg p-8 shadow-[var(--shadow-2)]">
            <DemoForm 
              messages={{
                name: t(locale, 'pages.demo.form.name') as string,
                restaurant: t(locale, 'pages.demo.form.restaurant') as string,
                city: t(locale, 'pages.demo.form.city') as string,
                email: t(locale, 'pages.demo.form.email') as string,
                phone: t(locale, 'pages.demo.form.phone') as string,
                message: t(locale, 'pages.demo.form.message') as string,
                submit: t(locale, 'pages.demo.form.submit') as string,
                privacyHint: t(locale, 'pages.demo.form.privacyHint') as string,
              }}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
