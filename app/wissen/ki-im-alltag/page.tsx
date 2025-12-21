import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { createMetadata } from '@/lib/metadata';
import { Coffee, Zap, MessageCircle, FileText, Smile, Info, ListChecks } from 'lucide-react';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';

export const metadata = createMetadata({
  title: t('de', 'pages.wissen_ki_alltag.meta.title') as string,
  description: t('de', 'pages.wissen_ki_alltag.meta.description') as string,
  path: '/wissen/ki-im-alltag',
});

export default async function KIImAlltag() {
  const locale = await getLocale();
  const toc = t(locale, 'pages.wissen_ki_alltag.toc') as {title: string, links: Array<{id: string, label: string}>};
  const sections = t(locale, 'pages.wissen_ki_alltag.sections') as {
    wasIst: {title: string, p1: string, p2: string, quote: string},
    beispiele: {title: string, items: Array<{title: string, desc: string}>},
    starten: {title: string, desc: string, check: string, chat: string}
  };
  const exampleIcons = [MessageCircle, FileText, Zap, Coffee, Info];
  const exampleColors = ['bg-blue-50 text-blue-500', 'bg-purple-50 text-purple-500', 'bg-amber-50 text-amber-500', 'bg-emerald-50 text-emerald-500', 'bg-stone-50 text-stone-500'];

  return (
    <div className="bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Section variant="hero" className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl -z-10 animate-float-slow" />
        
        <Container size="lg">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-600 text-xs font-bold uppercase tracking-widest mb-8">
              <Smile className="w-4 h-4" />
              {t(locale, 'pages.wissen_ki_alltag.badge') as string}
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              {t(locale, 'pages.wissen_ki_alltag.h1') as string}
            </h1>
            <p className="text-2xl text-foreground-muted leading-relaxed max-w-2xl">
              {t(locale, 'pages.wissen_ki_alltag.intro') as string}
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="py-20">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <SpotlightCard className="p-8 rounded-[2rem] bg-stone-50 border-2 border-stone-100">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <ListChecks className="w-5 h-5 text-action" />
                  {toc.title}
                </h2>
                <nav className="space-y-4">
                  {toc.links.map((link) => (
                    <a 
                      key={link.id}
                      href={`#${link.id}`} 
                      className="block text-stone-500 hover:text-action hover:translate-x-1 transition-all font-medium"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </SpotlightCard>
            </div>

            <div className="lg:col-span-8 space-y-32">
              <section id="was-ist-ki">
                <h2 className="text-4xl font-bold mb-8 tracking-tight">{sections.wasIst.title}</h2>
                <div className="prose prose-xl text-stone-600 leading-relaxed space-y-6">
                  <p>
                    {sections.wasIst.p1}
                  </p>
                  <p>
                    {sections.wasIst.p2}
                  </p>
                  <div className="p-8 bg-amber-50 rounded-[2rem] border-2 border-amber-100 rotate-1">
                    <p className="text-amber-900 font-bold text-lg m-0 italic">
                      &quot;{sections.wasIst.quote}&quot;
                    </p>
                  </div>
                </div>
              </section>

              <section id="beispiele">
                <h2 className="text-4xl font-bold mb-12 tracking-tight">{sections.beispiele.title}</h2>
                <div className="space-y-8">
                  {sections.beispiele.items.map((item, i) => {
                    const Icon = exampleIcons[i];
                    return (
                      <div key={i} className="flex gap-6 group p-6 rounded-3xl hover:bg-stone-50 transition-colors">
                        <div className={`w-16 h-16 rounded-2xl ${exampleColors[i]} flex items-center justify-center shrink-0 shadow-sm`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-action transition-colors">{item.title}</h3>
                          <p className="text-stone-500 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section id="starten">
                <SpotlightCard className="p-12 rounded-[3rem] bg-stone-900 text-white overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-action opacity-20 blur-[100px]" />
                  <h2 className="text-4xl font-bold mb-8">{sections.starten.title}</h2>
                  <p className="text-xl text-white/70 mb-10 leading-relaxed">
                    {sections.starten.desc}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="primary" size="lg" asChild href="/check">
                      {sections.starten.check}
                    </Button>
                    <Button variant="secondary" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild href="/kontakt">
                      {sections.starten.chat}
                    </Button>
                  </div>
                </SpotlightCard>
              </section>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection locale={locale} />
    </div>
  );
}
