import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Sparkles, Zap, Heart, Coffee, Globe, ArrowRight } from 'lucide-react';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: t('de', 'pages.jobs.meta.title') as string,
  description: t('de', 'pages.jobs.meta.description') as string,
  path: '/jobs'
});

export default async function Jobs() {
  const locale = await getLocale();
  const jobs = t(locale, 'pages.jobs.positions') as Array<{title: string, type: string, focus: string}>;
  const benefits = t(locale, 'pages.jobs.why.items') as Array<{text: string}>;
  const benefitIcons = [Zap, Coffee, Heart, Globe];

  return (
    <div className="bg-white min-h-screen">
      <Section variant="hero" className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-action/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        
        <Container size="lg">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 text-stone-600 text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles className="w-4 h-4 text-action" />
              {t(locale, 'pages.jobs.badge') as string}
            </div>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.8] text-stone-900">
              {t(locale, 'pages.jobs.h1') as string}
            </h1>
            <p className="text-xl md:text-2xl text-stone-500 max-w-2xl font-medium leading-relaxed">
              {t(locale, 'pages.jobs.intro') as string}
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="py-24 bg-stone-50">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-4xl font-bold tracking-tighter mb-12">{t(locale, 'pages.jobs.openPositions') as string}</h2>
              {jobs.map((job, i) => (
                <SpotlightCard key={i} className="group p-8 rounded-3xl bg-white border-2 border-stone-100 hover:border-action/20 transition-all flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2 flex items-center gap-4">
                      <span>{job.type}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-200" />
                      <span>{job.focus}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900">{job.title}</h3>
                  </div>
                  <Button variant="secondary" size="sm" className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all">
                    <span>{t(locale, 'pages.jobs.details') as string}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </SpotlightCard>
              ))}
              <p className="text-stone-400 text-center pt-8 font-medium italic">
                {t(locale, 'pages.jobs.noMatch') as string} <a href="mailto:jobs@aklow.com" className="text-action underline decoration-action/20 hover:decoration-action">{t(locale, 'pages.jobs.initiative') as string}</a>
              </p>
            </div>

            <div className="space-y-8">
              <div className="p-8 rounded-[2.5rem] bg-stone-900 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-8 text-emerald-400 leading-tight">{t(locale, 'pages.jobs.why.title') as string}</h3>
                <ul className="space-y-6">
                  {benefits.map((benefit, i) => {
                    const Icon = benefitIcons[i];
                    return (
                      <li key={i} className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-emerald-400" />
                        </div>
                        <span className="text-white/70 text-sm font-medium leading-relaxed">{benefit.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection locale={locale} />
    </div>
  );
}
