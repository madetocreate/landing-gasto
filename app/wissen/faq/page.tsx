import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { Button } from '@/components/ui/Button';
import { createMetadata } from '@/lib/metadata';
import { HelpCircle, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';
import { StructuredData } from '@/components/seo/StructuredData';

export async function generateMetadata() {
  const locale = await getLocale();
  return createMetadata({
    title: t(locale, 'pages.wissen_faq.meta.title') as string,
    description: t(locale, 'pages.wissen_faq.meta.description') as string,
    path: '/wissen/faq',
    locale,
  });
}

export default async function FAQ() {
  const locale = await getLocale();
  const faqItems = t(locale, 'pages.wissen_faq.items') as Array<{q: string, a: string}>;
  const more = t(locale, 'pages.wissen_faq.more') as {title: string, desc: string, cta: string};
  const check = t(locale, 'pages.wissen_faq.check') as {title: string, desc: string, cta: string};

  return (
    <>
      <StructuredData 
        locale={locale}
        type="faq"
        faqItems={faqItems.map(item => ({ question: item.q, answer: item.a }))}
      />
      <div className="bg-stone-50 min-h-screen">
      <Section variant="hero" className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-action/10 rounded-full blur-[120px] -z-10" />
        
        <Container size="lg">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-widest mb-8">
              <HelpCircle className="w-4 h-4" />
              {t(locale, 'pages.wissen_faq.badge') as string}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold tracking-tighter mb-6 sm:mb-8 leading-[0.9] break-words px-2">
              {t(locale, 'pages.wissen_faq.h1') as string}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground-muted leading-relaxed max-w-2xl mx-auto px-4 break-words">
              {t(locale, 'pages.wissen_faq.intro') as string}
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="py-24">
        <Container size="lg">
          <div className="max-w-4xl mx-auto mb-24">
            <FAQAccordion items={faqItems} />
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white border-2 border-stone-100 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                  <MessageCircle className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{more.title}</h3>
                <p className="text-foreground-muted leading-relaxed mb-8">
                  {more.desc}
                </p>
                <Button variant="secondary" className="group" asChild href="/kontakt">
                  <span>{more.cta}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-stone-900 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-[0.1] group-hover:scale-110 transition-transform duration-700">
                  <Sparkles className="w-32 h-32 text-action" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{check.title}</h3>
                <p className="text-white/60 leading-relaxed mb-8">
                  {check.desc}
                </p>
                <Button variant="primary" className="group" asChild href="/check">
                  <span>{check.cta}</span>
                  <Sparkles className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection locale={locale} />
      </div>
    </>
  );
}
