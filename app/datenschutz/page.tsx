import { Section, Container } from '@/components/ui/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: t('de', 'pages.datenschutz.meta.title') as string,
  description: t('de', 'pages.datenschutz.meta.description') as string,
  path: '/datenschutz'
});

export default async function Datenschutz() {
  const locale = await getLocale();
  const sections = t(locale, 'pages.datenschutz.sections') as Array<{title: string, content: string[]}>;
  const contact = t(locale, 'pages.datenschutz.contact') as {title: string, content: string};
  const dataCollection = t(locale, 'pages.datenschutz.dataCollection') as {title: string, cookies: {title: string, content: string}, contactForm: {title: string, content: string}};

  return (
    <div className="bg-white min-h-screen text-stone-600">
      <Section variant="hero" className="pt-40 pb-24">
        <Container size="lg">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-stone-900">
              {t(locale, 'pages.datenschutz.h1') as string}
            </h1>
            <p className="text-xl text-stone-500 font-medium">
              {t(locale, 'pages.datenschutz.intro') as string}
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="pb-32">
        <Container size="lg">
          <div className="max-w-3xl space-y-16">
            {sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-2xl font-bold text-stone-900 mb-6">{section.title}</h2>
                <div className="space-y-4 leading-relaxed">
                  {section.content.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
              </section>
            ))}

            <SpotlightCard className="p-8 rounded-[2rem] bg-stone-50 border border-stone-100">
              <h2 className="text-xl font-bold text-stone-900 mb-4">{contact.title}</h2>
              <p className="font-medium text-stone-900 whitespace-pre-line">
                {contact.content}
              </p>
            </SpotlightCard>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">{dataCollection.title}</h2>
              <h3 className="text-lg font-bold text-stone-900 mb-4">{dataCollection.cookies.title}</h3>
              <p className="mb-6 leading-relaxed">{dataCollection.cookies.content}</p>
              <h3 className="text-lg font-bold text-stone-900 mb-4">{dataCollection.contactForm.title}</h3>
              <p className="leading-relaxed">{dataCollection.contactForm.content}</p>
            </section>
          </div>
        </Container>
      </Section>
    </div>
  );
}
