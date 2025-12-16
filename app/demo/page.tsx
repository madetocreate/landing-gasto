import { DemoTabs } from '@/components/demo/DemoTabs';
import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { createMetadata } from '@/lib/metadata';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createMetadata({
    title: t(locale, 'pages.demo.meta.title'),
    description: t(locale, 'pages.demo.meta.description'),
    path: '/demo',
  });
}

export default async function Demo() {
  const locale = await getLocale();

  return (
    <>
      <Section variant="normal">
        <Container size="lg">
          <div className="text-center mb-12">
            <h1 className="mb-4">{t(locale, 'pages.demo.h1')}</h1>
            <p className="text-lg text-foreground-muted prose mx-auto">
              {t(locale, 'pages.demo.intro')}
            </p>
          </div>

          <DemoTabs />
        </Container>
      </Section>

      {/* CTA Section */}
      <Section variant="normal" className="bg-background-muted">
        <Container size="md" className="text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            {t(locale, 'pages.demo.form.title')}
          </h2>
          <p className="text-foreground-muted mb-8 prose mx-auto">
            {t(locale, 'pages.demo.form.intro')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" asChild href="/demo#form">
              {t(locale, 'pages.demo.cta.primary')}
            </Button>
            <Button variant="secondary" size="lg" asChild href="/preise">
              {t(locale, 'pages.demo.cta.secondary')}
            </Button>
          </div>
        </Container>
      </Section>

      {/* Form Section */}
      <Section variant="normal" id="form">
        <Container size="md">
          <div className="max-w-lg mx-auto bg-surface rounded-lg p-8 shadow-[var(--shadow-2)]">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t(locale, 'pages.demo.form.name')}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t(locale, 'pages.demo.form.restaurant')}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t(locale, 'pages.demo.form.city')}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t(locale, 'pages.demo.form.email')}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t(locale, 'pages.demo.form.phone')}
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t(locale, 'pages.demo.form.message')}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <Button variant="primary" size="lg" className="w-full" type="submit">
                {t(locale, 'pages.demo.form.submit')}
              </Button>

              <p className="text-xs text-foreground-muted text-center">
                {t(locale, 'pages.demo.form.privacyHint')}
              </p>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
}
