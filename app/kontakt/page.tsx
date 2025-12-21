import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { createMetadata } from '@/lib/metadata';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Mail, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';
import { ContactForm } from '@/components/forms/ContactForm';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createMetadata({
    title: t(locale, 'pages.kontakt.meta.title') as string,
    description: t(locale, 'pages.kontakt.meta.description') as string,
    path: '/kontakt',
    locale,
  });
}

export default async function Kontakt() {
  const locale = await getLocale();
  const contact = t(locale, 'pages.kontakt.contact') as {email: {label: string, value: string}, chat: {label: string, value: string}};
  const form = t(locale, 'pages.kontakt.form') as {title: string, name: string, email: string, message: string, namePlaceholder: string, emailPlaceholder: string, messagePlaceholder: string, submit: string};
  const badgeResponse = t(locale, 'pages.kontakt.badgeResponse') as {title: string, subtitle: string};
  const why = t(locale, 'pages.kontakt.why') as {title: string, desc: string, items: Array<{title: string, desc: string}>};

  return (
    <div className="bg-stone-50 min-h-screen">
      <Section variant="hero" className="pt-32 pb-20 overflow-hidden">
        <Container size="lg">
          <div className="relative">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-action/10 rounded-full blur-3xl -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-widest mb-6">
                  <Sparkles className="w-3 h-3" />
                  {t(locale, 'pages.kontakt.badge') as string}
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                  {t(locale, 'pages.kontakt.h1') as string}
                </h1>
                <p className="text-xl text-foreground-muted leading-relaxed mb-10 max-w-xl">
                  {t(locale, 'pages.kontakt.intro') as string}
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-foreground-muted">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-stone-100 flex items-center justify-center text-action">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">{contact.email.label}</div>
                      <div className="text-lg">{contact.email.value}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-foreground-muted">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-stone-100 flex items-center justify-center text-action">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">{contact.chat.label}</div>
                      <div className="text-lg">{contact.chat.value}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <SpotlightCard className="p-8 md:p-10 rounded-3xl border-2 border-stone-100 shadow-2xl bg-white/80 backdrop-blur-xl">
                  <h2 className="text-3xl font-bold mb-8">{form.title}</h2>
                  <ContactForm form={form} />
                </SpotlightCard>
                
                <div className="absolute -bottom-6 -right-6 md:-right-12 bg-action text-white p-6 rounded-2xl shadow-xl rotate-3 hidden md:block">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-8 h-8" />
                    <div>
                      <div className="font-bold text-lg">{badgeResponse.title}</div>
                      <div className="text-white/80 text-sm">{badgeResponse.subtitle}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="pb-32">
        <Container size="lg">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{why.title}</h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              {why.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {why.items.map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-action font-bold text-xl mb-3">#0{i + 1}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-foreground-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection locale={locale} />
    </div>
  );
}


