import { Section, Container } from '@/components/ui/Section';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: t('de', 'pages.cookies.meta.title') as string,
  description: t('de', 'pages.cookies.meta.description') as string,
  path: '/cookies'
});

export default async function Cookies() {
  const locale = await getLocale();
  const whatAre = t(locale, 'pages.cookies.whatAre') as {title: string, content: string};
  const types = t(locale, 'pages.cookies.types') as Array<{title: string, desc: string}>;
  const selection = t(locale, 'pages.cookies.selection') as {title: string, desc: string, open: string, reject: string};

  return (
    <div className="bg-white min-h-screen text-stone-600">
      <Section variant="hero" className="pt-40 pb-24">
        <Container size="lg">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-stone-900">
              {t(locale, 'pages.cookies.h1') as string}
            </h1>
            <p className="text-xl text-stone-500 font-medium">
              {t(locale, 'pages.cookies.intro') as string}
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="pb-32">
        <Container size="lg">
          <div className="max-w-3xl space-y-16">
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">{whatAre.title}</h2>
              <p className="leading-relaxed">{whatAre.content}</p>
            </section>

            <div className="space-y-12">
              {types.map((type, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-stone-50 border border-stone-100">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <span className="text-emerald-600 font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 mb-2">{type.title}</h3>
                      <p className="text-stone-500 text-sm leading-relaxed">{type.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <section className="pt-12 border-t border-stone-100">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">{selection.title}</h2>
              <p className="mb-8">{selection.desc}</p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 rounded-full bg-stone-900 text-white font-bold hover:bg-stone-800 transition-colors">
                  {selection.open}
                </button>
                <button className="px-6 py-3 rounded-full border-2 border-stone-200 text-stone-600 font-bold hover:bg-stone-50 transition-colors">
                  {selection.reject}
                </button>
              </div>
            </section>
          </div>
        </Container>
      </Section>
    </div>
  );
}
