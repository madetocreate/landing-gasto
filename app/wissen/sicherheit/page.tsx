import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { createMetadata } from '@/lib/metadata';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { ShieldCheck, Lock, Eye, Key, Activity, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';

export const metadata = createMetadata({
  title: t('de', 'pages.wissen_sicherheit.meta.title') as string,
  description: t('de', 'pages.wissen_sicherheit.meta.description') as string,
  path: '/wissen/sicherheit',
});

export default async function SicherheitWissen() {
  const locale = await getLocale();
  const features = t(locale, 'pages.wissen_sicherheit.features') as Array<{title: string, desc: string}>;
  const featureIcons = [Eye, CheckCircle2, Lock, Activity, ShieldAlert, Key];
  const shield = t(locale, 'pages.wissen_sicherheit.shield') as {title: string, items: Array<{label: string, text: string}>};
  const faq = t(locale, 'pages.wissen_sicherheit.faq') as {title: string, items: Array<{q: string, a: string}>};

  return (
    <div className="bg-stone-900 text-stone-100 min-h-screen selection:bg-emerald-500/30 selection:text-emerald-200">
      <Section variant="hero" className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/5 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/20 rounded-full pointer-events-none" />
        
        <Container size="lg">
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8 border border-emerald-500/20">
              <ShieldCheck className="w-4 h-4" />
              {t(locale, 'pages.wissen_sicherheit.badge') as string}
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
              {t(locale, 'pages.wissen_sicherheit.h1') as string}
            </h1>
            <p className="text-xl md:text-2xl text-stone-400 leading-relaxed max-w-3xl mx-auto font-medium">
              {t(locale, 'pages.wissen_sicherheit.intro') as string}
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="py-24">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => {
              const Icon = featureIcons[i];
              return (
                <SpotlightCard key={i} className="p-8 bg-white/5 border-white/10 hover:border-emerald-500/50 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-stone-400 leading-relaxed">{feature.desc}</p>
                </SpotlightCard>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="py-24 bg-stone-800/50">
        <Container size="lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight text-center">{shield.title}</h2>
            <div className="space-y-6">
              {shield.items.map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-3xl bg-stone-900 border border-white/5 items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0 font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.label}</h4>
                    <p className="text-stone-500">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="py-24">
        <Container size="lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{faq.title}</h2>
            <FAQAccordion items={faq.items} className="text-stone-300" />
          </div>
        </Container>
      </Section>

      <CTASection locale={locale} />
    </div>
  );
}
