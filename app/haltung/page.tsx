import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { createMetadata } from '@/lib/metadata';
import { Heart, Shield, Users, Globe, Lightbulb } from 'lucide-react';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';

export const metadata = createMetadata({
  title: t('de', 'pages.haltung.meta.title') as string,
  description: t('de', 'pages.haltung.meta.description') as string,
  path: '/haltung',
});

export default async function Haltung() {
  const locale = await getLocale();
  const sections = t(locale, 'pages.haltung.sections') as Array<{title: string, p1: string, p2: string}>;
  const sectionIcons = [Users, Lightbulb, Shield, Globe];
  const cta = t(locale, 'pages.haltung.cta') as {title: string, desc: string, contact: string, check: string};

  return (
    <div className="bg-white">
      <Section variant="hero" className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-50/30 rounded-[100%] blur-3xl -z-10" />
        
        <Container size="lg">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-widest mb-8">
              <Heart className="w-3 h-3 fill-current" />
              {t(locale, 'pages.haltung.badge') as string}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-stone-900">
              {t(locale, 'pages.haltung.h1') as string}
            </h1>
            <p className="text-xl md:text-2xl text-stone-500 leading-relaxed font-medium">
              {t(locale, 'pages.haltung.intro') as string}
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="py-24">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {sections.map((section, i) => {
              const Icon = sectionIcons[i];
              return (
                <div key={i} className="group">
                  <div className="w-16 h-16 rounded-2xl bg-stone-50 flex items-center justify-center mb-8 group-hover:bg-emerald-50 transition-colors duration-500">
                    <Icon className="w-8 h-8 text-stone-400 group-hover:text-emerald-600 transition-colors duration-500" />
                  </div>
                  <h2 className="text-3xl font-bold mb-6 text-stone-900 tracking-tight">
                    {section.title}
                  </h2>
                  <p className="text-lg text-stone-500 leading-relaxed mb-6">
                    {section.p1}
                  </p>
                  <p className="text-lg text-stone-500 leading-relaxed">
                    {section.p2}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="py-24 bg-stone-50">
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">{cta.title}</h2>
            <p className="text-lg text-stone-500 mb-12 leading-relaxed">
              {cta.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" asChild href="/kontakt">
                {cta.contact}
              </Button>
              <Button variant="secondary" size="lg" asChild href="/check">
                {cta.check}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection locale={locale} />
    </div>
  );
}
