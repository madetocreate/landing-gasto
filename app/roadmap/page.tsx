import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { createMetadata } from '@/lib/metadata';
import { Rocket, Zap, Clock, Star, ArrowRight } from 'lucide-react';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';

export const metadata = createMetadata({
  title: t('de', 'pages.roadmap.meta.title') as string,
  description: t('de', 'pages.roadmap.meta.description') as string,
  path: '/roadmap',
});

export default async function Roadmap() {
  const locale = await getLocale();
  const phases = t(locale, 'pages.roadmap.phases') as Array<{phase: string, title: string, items: string[]}>;
  const phaseIcons = [Rocket, Zap, Clock, Star];
  const phaseColors = ['text-emerald-500', 'text-amber-500', 'text-blue-500', 'text-purple-500'];
  const phaseBgColors = ['bg-emerald-50', 'bg-amber-50', 'bg-blue-50', 'bg-purple-50'];
  const phaseBorderColors = ['border-emerald-100', 'border-amber-100', 'border-blue-100', 'border-purple-100'];

  return (
    <div className="bg-stone-50 min-h-screen">
      <Section variant="normal" className="pt-32 pb-20">
        <Container size="lg">
          <div className="relative text-center max-w-3xl mx-auto mb-24">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none rotate-12">
              <Star className="w-24 h-24 text-action" />
            </div>
            <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight">{t(locale, 'pages.roadmap.h1') as string}</h1>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed">
              {t(locale, 'pages.roadmap.intro') as string}
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-action to-stone-200 -translate-x-1/2 hidden md:block" />

            <div className="space-y-24">
              {phases.map((phase, idx) => {
                const Icon = phaseIcons[idx];
                const isEven = idx % 2 === 0;

                return (
                  <div key={phase.phase} className="relative group">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-white border-4 border-stone-50 shadow-xl transition-transform duration-500 group-hover:scale-110">
                      <Icon className={`w-6 h-6 ${phaseColors[idx]}`} />
                    </div>

                    <div className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                      <div className="hidden md:block w-1/2" />

                      <div className="w-full md:w-1/2">
                        <SpotlightCard 
                          className={`p-8 rounded-3xl border-2 transition-all duration-500 group-hover:shadow-2xl ${phaseBorderColors[idx]} ${isEven ? 'md:ml-4' : 'md:mr-4'}`}
                          spotlightColor={`rgba(var(--action-rgb), 0.05)`}
                        >
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 ${phaseBgColors[idx]} ${phaseColors[idx]}`}>
                            {phase.phase}
                          </div>
                          
                          <h2 className="text-3xl font-bold mb-4 tracking-tight">{phase.title}</h2>
                          
                          <ul className="space-y-4">
                            {phase.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-start gap-4 group/item">
                                <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-stone-50 group-hover/item:${phaseBgColors[idx]} transition-colors`}>
                                  <ArrowRight className={`w-3 h-3 ${phaseColors[idx]}`} strokeWidth={3} />
                                </div>
                                <span className="text-foreground-muted group-hover/item:text-foreground transition-colors font-medium">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </SpotlightCard>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-32 max-w-3xl mx-auto text-center">
            <div className="inline-block p-1 rounded-2xl bg-gradient-to-br from-emerald-100 to-stone-100 border border-emerald-200">
              <div className="bg-white rounded-[calc(var(--radius-2xl)-4px)] p-8 shadow-sm">
                <p className="text-foreground-muted leading-relaxed font-medium italic">
                  &quot;{t(locale, 'pages.roadmap.quote') as string}&quot;
                </p>
                <div className="mt-4 flex items-center justify-center gap-2 text-action">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <CTASection locale={locale} />
    </div>
  );
}
