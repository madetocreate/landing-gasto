import { Section, Container } from '@/components/ui/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Brain, Cpu, Database, Network, ShieldCheck, Zap } from 'lucide-react';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: t('de', 'pages.wissen_system.meta.title') as string,
  description: t('de', 'pages.wissen_system.meta.description') as string,
  path: '/wissen/system'
});

export default async function WissenSystem() {
  const locale = await getLocale();
  const features = t(locale, 'pages.wissen_system.features') as Array<{title: string, desc: string}>;
  const featureIcons = [Brain, Database, Network, ShieldCheck];
  const performance = t(locale, 'pages.wissen_system.performance') as {badge: string, title: string, desc: string};

  return (
    <div className="bg-white min-h-screen">
      <Section variant="hero" className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-stone-50 rounded-full blur-3xl -z-10" />
        
        <Container size="lg">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 text-stone-600 text-xs font-bold uppercase tracking-widest mb-8">
              <Cpu className="w-4 h-4 text-action" />
              {t(locale, 'pages.wissen_system.badge') as string}
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] text-stone-900">
              {t(locale, 'pages.wissen_system.h1') as string}
            </h1>
            <p className="text-xl md:text-2xl text-stone-500 max-w-2xl font-medium leading-relaxed">
              {t(locale, 'pages.wissen_system.intro') as string}
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="pb-32">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {features.map((feature, i) => {
              const Icon = featureIcons[i];
              const isLast = i === features.length - 1;
              return (
                <SpotlightCard key={i} className={`p-10 rounded-[3rem] ${isLast ? 'bg-stone-900 text-white shadow-xl' : 'bg-white border-2 border-stone-100 shadow-sm'}`}>
                  <div className={`w-14 h-14 rounded-2xl ${isLast ? 'bg-white/10 text-emerald-400' : 'bg-stone-50 text-stone-900'} flex items-center justify-center mb-6 ${!isLast ? 'border border-stone-100' : ''}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h2 className={`text-2xl font-bold mb-4 ${isLast ? 'text-emerald-400' : ''}`}>{feature.title}</h2>
                  <p className={`${isLast ? 'text-white/60' : 'text-stone-500'} leading-relaxed font-medium`}>
                    {feature.desc}
                  </p>
                </SpotlightCard>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-action text-xs font-bold uppercase tracking-widest mb-6">
              <Zap className="w-4 h-4" />
              {performance.badge}
            </div>
            <h2 className="text-3xl font-bold mb-6">{performance.title}</h2>
            <p className="text-lg text-stone-500 font-medium leading-relaxed">
              {performance.desc}
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
