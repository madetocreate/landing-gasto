import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Handshake, Share2, Rocket, Sparkles, Globe } from 'lucide-react';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: t('de', 'pages.partner.meta.title') as string,
  description: t('de', 'pages.partner.meta.description') as string,
  path: '/partner'
});

export default async function Partner() {
  const locale = await getLocale();
  
  return (
    <div className="bg-white min-h-screen">
      <Section variant="hero" className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-emerald-50/50 rounded-full blur-3xl -z-10" />
        
        <Container size="lg">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 text-stone-600 text-xs font-bold uppercase tracking-widest mb-8">
              <Handshake className="w-4 h-4 text-action" />
              {t(locale, 'pages.partner.badge') as string}
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] text-stone-900">
              {t(locale, 'pages.partner.h1') as string}
            </h1>
            <p className="text-xl md:text-2xl text-stone-500 max-w-2xl mx-auto font-medium">
              {t(locale, 'pages.partner.intro') as string}
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="py-24 bg-stone-50">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            <SpotlightCard className="p-12 rounded-[3rem] bg-white border-2 border-stone-100">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 shadow-sm">
                <Share2 className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">{t(locale, 'pages.partner.integrations.title') as string}</h2>
              <p className="text-lg text-stone-500 leading-relaxed mb-8">
                {t(locale, 'pages.partner.integrations.desc') as string}
              </p>
              <div className="flex flex-wrap gap-3">
                {(t(locale, 'pages.partner.integrations.tech') as string[]).map((tech: string) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-stone-100 text-stone-400 text-xs font-bold uppercase tracking-widest">{tech}</span>
                ))}
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-12 rounded-[3rem] bg-stone-900 text-white shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-white/10 text-emerald-400 flex items-center justify-center mb-8 shadow-sm">
                <Rocket className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-6 text-emerald-400">{t(locale, 'pages.partner.program.title') as string}</h2>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                {t(locale, 'pages.partner.program.desc') as string}
              </p>
              <Button variant="primary" asChild href="mailto:partner@aklow.com">
                <span>{t(locale, 'pages.partner.program.cta') as string}</span>
              </Button>
            </SpotlightCard>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tighter mb-12">{t(locale, 'pages.partner.why.title') as string}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {(t(locale, 'pages.partner.why.items') as Array<{title: string, desc: string}>).map((item, i) => {
                const icons = [Globe, Handshake, Sparkles];
                const Icon = icons[i];
                return (
                  <div key={i} className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-stone-100 flex items-center justify-center mx-auto shadow-sm">
                      <Icon className="w-6 h-6 text-action" />
                    </div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <CTASection locale={locale} />
    </div>
  );
}
