import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { createMetadata } from '@/lib/metadata';
import { ArrowDown, Target, Zap, Coffee, ShieldAlert, Star } from 'lucide-react';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';

export const metadata = createMetadata({
  title: t('de', 'pages.wissen_erste_schritte.meta.title') as string,
  description: t('de', 'pages.wissen_erste_schritte.meta.description') as string,
  path: '/wissen/erste-schritte',
});

export default async function ErsteSchritte() {
  const locale = await getLocale();
  const steps = t(locale, 'pages.wissen_erste_schritte.steps') as Array<{number: string, title: string, desc: string}>;
  const stepIcons = [Target, Zap, Coffee];
  const stepColors = ['text-blue-500', 'text-amber-500', 'text-emerald-500'];
  const stepBgColors = ['bg-blue-50', 'bg-amber-50', 'bg-emerald-50'];
  const dontDo = t(locale, 'pages.wissen_erste_schritte.dontDo') as {title: string, items: string[]};
  const success = t(locale, 'pages.wissen_erste_schritte.success') as {title: string, desc: string, cta: string};

  return (
    <div className="bg-stone-50 min-h-screen">
      <Section variant="hero" className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-10 left-10 text-9xl font-bold text-stone-100/80 -rotate-12 pointer-events-none select-none uppercase tracking-tighter">
          {t(locale, 'pages.wissen_erste_schritte.bgText') as string}
        </div>
        
        <Container size="lg">
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              {t(locale, 'pages.wissen_erste_schritte.h1') as string}
            </h1>
            <p className="text-xl md:text-2xl text-foreground-muted leading-relaxed max-w-3xl mx-auto">
              {t(locale, 'pages.wissen_erste_schritte.intro') as string}
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="py-20">
        <Container size="lg">
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-amber-200 to-emerald-200 -translate-y-1/2 hidden lg:block" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
              {steps.map((step, idx) => {
                const Icon = stepIcons[idx];
                return (
                  <div key={step.number} className="relative group">
                    <SpotlightCard className="p-10 rounded-[2.5rem] border-2 border-white shadow-xl bg-white/80 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-4">
                      <div className={`w-20 h-20 rounded-3xl ${stepBgColors[idx]} ${stepColors[idx]} flex items-center justify-center mb-8 shadow-inner`}>
                        <Icon className="w-10 h-10" />
                      </div>
                      <div className="text-4xl font-bold text-stone-100 absolute top-8 right-10">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                      <p className="text-foreground-muted leading-relaxed">
                        {step.desc}
                      </p>
                    </SpotlightCard>
                    
                    {idx < steps.length - 1 && (
                      <div className="flex lg:hidden justify-center py-6">
                        <ArrowDown className="text-stone-300 w-10 h-10" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="py-20 bg-white">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 tracking-tight">{dontDo.title}</h2>
              <div className="space-y-6">
                {dontDo.items.map((text, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100">
                    <ShieldAlert className="w-6 h-6 text-red-400 flex-shrink-0" />
                    <span className="text-stone-600 font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-action/5 rounded-3xl blur-2xl" />
              <SpotlightCard className="p-10 rounded-3xl border-2 border-action/10 bg-white relative z-10">
                <Star className="w-12 h-12 text-action mb-6" />
                <h3 className="text-2xl font-bold mb-4">{success.title}</h3>
                <p className="text-foreground-muted leading-relaxed mb-8">
                  {success.desc}
                </p>
                <Button variant="primary" size="lg" className="w-full" asChild href="/check">
                  {success.cta}
                </Button>
              </SpotlightCard>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection locale={locale} />
    </div>
  );
}
