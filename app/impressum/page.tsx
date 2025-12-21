import { Section, Container } from '@/components/ui/Section';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: t('de', 'pages.impressum.meta.title') as string,
  description: t('de', 'pages.impressum.meta.description') as string,
  path: '/impressum'
});

export default async function Impressum() {
  const locale = await getLocale();
  const sections = t(locale, 'pages.impressum.sections') as Record<string, {title: string, content: string}>;

  return (
    <div className="bg-white min-h-screen">
      <Section variant="hero" className="pt-40 pb-24">
        <Container size="lg">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-stone-900">
              {t(locale, 'pages.impressum.h1') as string}
            </h1>
            <p className="text-xl text-stone-500 font-medium">
              {t(locale, 'pages.impressum.intro') as string}
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="pb-32">
        <Container size="lg">
          <div className="max-w-3xl prose prose-stone prose-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-stone-600">
              <div className="space-y-8">
                <section>
                  <h2 className="text-xs font-bold uppercase tracking-widest text-action mb-4">{sections.tmg.title}</h2>
                  <p className="font-medium text-stone-900 whitespace-pre-line">
                    {sections.tmg.content}
                  </p>
                </section>

                <section>
                  <h2 className="text-xs font-bold uppercase tracking-widest text-action mb-4">{sections.represented.title}</h2>
                  <p className="font-medium text-stone-900">
                    {sections.represented.content}
                  </p>
                </section>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-xs font-bold uppercase tracking-widest text-action mb-4">{sections.contact.title}</h2>
                  <p className="font-medium text-stone-900 whitespace-pre-line">
                    {sections.contact.content}
                  </p>
                </section>

                <section>
                  <h2 className="text-xs font-bold uppercase tracking-widest text-action mb-4">{sections.register.title}</h2>
                  <p className="font-medium text-stone-900 whitespace-pre-line">
                    {sections.register.content}
                  </p>
                </section>
              </div>
            </div>

            <div className="mt-20 pt-12 border-t border-stone-100">
              <section className="mb-12">
                <h2 className="text-xl font-bold text-stone-900 mb-6">{sections.vat.title}</h2>
                <p className="text-stone-600 whitespace-pre-line">
                  {sections.vat.content}
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-xl font-bold text-stone-900 mb-6">{sections.responsible.title}</h2>
                <p className="text-stone-600 whitespace-pre-line">
                  {sections.responsible.content}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-stone-900 mb-6">{sections.dispute.title}</h2>
                <p className="text-stone-600 whitespace-pre-line">
                  {sections.dispute.content}
                </p>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
