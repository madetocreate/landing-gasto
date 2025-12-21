import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { createMetadata } from '@/lib/metadata';
import { CheckCircle2, AlertCircle, Server, Globe, Database, Cpu, Activity, History, ArrowRight } from 'lucide-react';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';

export const metadata = createMetadata({
  title: t('de', 'pages.status.meta.title') as string,
  description: t('de', 'pages.status.meta.description') as string,
  path: '/status',
});

export default async function Status() {
  const locale = await getLocale();
  const services = t(locale, 'pages.status.services') as Array<{name: string, status: string, uptime: string}>;
  const serviceIcons = [Cpu, Database, Server, Globe];
  const history = t(locale, 'pages.status.history') as {title: string, items: Array<{date: string, event: string, type: string, typeLabel: string, duration?: string}>};
  const support = t(locale, 'pages.status.support') as {title: string, value: string, desc: string};
  const report = t(locale, 'pages.status.report') as {title: string, desc: string, cta: string};

  return (
    <div className="bg-stone-50 min-h-screen">
      <Section variant="normal" className="pt-32 pb-20">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-sm font-bold mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              {t(locale, 'pages.status.badge') as string}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">{t(locale, 'pages.status.h1') as string}</h1>
            <p className="text-xl text-foreground-muted leading-relaxed">
              {t(locale, 'pages.status.intro') as string}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <SpotlightCard key={service.name} className="p-6 border-2 border-stone-100 transition-all hover:border-emerald-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-stone-50 rounded-lg">
                      <Icon className="w-5 h-5 text-stone-600" />
                    </div>
                    <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded">
                      {service.uptime}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{service.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-foreground-muted">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    {t(locale, 'pages.status.operational') as string}
                  </div>
                  
                  <div className="mt-6 flex gap-1 h-6">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`flex-1 rounded-sm ${i === 15 ? 'bg-amber-300' : 'bg-emerald-400'} opacity-60 hover:opacity-100 transition-opacity cursor-help`}
                        title="99.9% Uptime"
                      />
                    ))}
                  </div>
                </SpotlightCard>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <History className="w-6 h-6 text-action" />
                <h2 className="text-3xl font-bold">{history.title}</h2>
              </div>
              <div className="bg-white rounded-3xl border-2 border-stone-100 overflow-hidden shadow-sm">
                {history.items.map((item, idx) => (
                  <div key={idx} className={`p-6 flex items-center justify-between ${idx !== history.items.length - 1 ? 'border-b border-stone-100' : ''}`}>
                    <div className="flex items-center gap-6">
                      <div className="text-sm font-bold text-stone-400 w-16 uppercase">
                        {item.date}
                      </div>
                      <div>
                        <div className="font-bold text-lg">{item.event}</div>
                        <div className="text-sm text-foreground-muted">
                          {item.typeLabel}
                        </div>
                      </div>
                    </div>
                    {item.duration ? (
                      <div className="text-xs font-bold bg-amber-50 text-amber-600 px-3 py-1 rounded-full">
                        {item.duration}
                      </div>
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-action rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                <Activity className="absolute -right-8 -bottom-8 w-48 h-48 opacity-10" />
                <h3 className="text-2xl font-bold mb-4">{support.title}</h3>
                <div className="text-5xl font-bold mb-2">{support.value}</div>
                <p className="text-white/80 text-sm">{support.desc}</p>
              </div>

              <SpotlightCard className="p-8 border-2 border-stone-100">
                <AlertCircle className="w-10 h-10 text-action mb-6" />
                <h3 className="text-xl font-bold mb-2">{report.title}</h3>
                <p className="text-foreground-muted text-sm mb-6 leading-relaxed">
                  {report.desc}
                </p>
                <a href="/kontakt" className="inline-flex items-center gap-2 text-action font-bold hover:underline">
                  {report.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </SpotlightCard>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection locale={locale} />
    </div>
  );
}
