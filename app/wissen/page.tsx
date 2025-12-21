import { Section, Container } from '@/components/ui/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Button } from '@/components/ui/Button';
import { BookOpen, Zap, Shield, HelpCircle, ArrowRight, Lightbulb } from 'lucide-react';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: t('de', 'pages.wissen.meta.title') as string,
  description: t('de', 'pages.wissen.meta.description') as string,
  path: '/wissen'
});

export default async function WissenHub() {
  const locale = await getLocale();
  const categories = t(locale, 'pages.wissen.categories') as Array<{title: string, desc: string}>;
  const categoryIcons = [Zap, Lightbulb, Shield, HelpCircle];
  const categoryColors = ['text-yellow-500', 'text-action', 'text-blue-500', 'text-purple-500'];
  const categoryBgs = ['bg-yellow-50', 'bg-emerald-50', 'bg-blue-50', 'bg-purple-50'];
  const categoryHrefs = ['/wissen/erste-schritte', '/wissen/ki-im-alltag', '/wissen/sicherheit', '/wissen/faq'];

  return (
    <div className="bg-white min-h-screen">
      <Section variant="hero" className="pt-40 pb-24">
        <Container size="lg">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 text-stone-600 text-xs font-bold uppercase tracking-widest mb-8">
              <BookOpen className="w-4 h-4 text-action" />
              {t(locale, 'pages.wissen.badge') as string}
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] text-stone-900">
              {t(locale, 'pages.wissen.h1') as string}
            </h1>
            <p className="text-xl md:text-2xl text-stone-500 max-w-2xl font-medium leading-relaxed">
              {t(locale, 'pages.wissen.intro') as string}
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="pb-32">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, i) => {
              const Icon = categoryIcons[i];
              return (
                <SpotlightCard key={i} className="p-10 rounded-[3rem] bg-white border-2 border-stone-100 hover:border-action/20 transition-all group">
                  <div className={`w-16 h-16 rounded-2xl ${categoryBgs[i]} ${categoryColors[i]} flex items-center justify-center mb-8 shadow-sm`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight mb-4 text-stone-900">{cat.title}</h2>
                  <p className="text-lg text-stone-500 leading-relaxed mb-8">
                    {cat.desc}
                  </p>
                  <Button variant="secondary" asChild href={categoryHrefs[i]} className="group/btn">
                    <span>{t(locale, 'pages.wissen.learnMore') as string}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </SpotlightCard>
              );
            })}
          </div>

          <div className="mt-24 p-12 rounded-[4rem] bg-stone-900 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-action/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold tracking-tight mb-6">{(t(locale, 'pages.wissen.stillQuestions') as {title: string, desc: string, cta: string}).title}</h2>
                <p className="text-xl text-white/60 leading-relaxed">
                  {(t(locale, 'pages.wissen.stillQuestions') as {title: string, desc: string, cta: string}).desc}
                </p>
              </div>
              <div className="flex justify-start md:justify-end gap-4">
                <Button variant="primary" size="lg" asChild href="/kontakt">
                  <span>{(t(locale, 'pages.wissen.stillQuestions') as {title: string, desc: string, cta: string}).cta}</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
