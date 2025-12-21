import { createMetadata } from '@/lib/metadata'
import { SingleApplicationSection, applications } from '@/components/anwendungen/ApplicationDetailSection'
import { FundamentTeaser } from '@/components/anwendungen/FundamentTeaser'
import { ApplicationsCTA } from '@/components/anwendungen/ApplicationsCTA'
import { ApplicationsIntro } from '@/components/anwendungen/ApplicationsIntro'
import { Section, Container } from '@/components/ui/Section'
import { Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { getLocale } from '@/lib/getLocale'
import { t } from '@/lib/i18n'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createMetadata({
    title: t(locale, 'pages.applications.meta.title') as string || 'Anwendungen – KI für deinen Alltag',
    description: t(locale, 'pages.applications.meta.description') as string || 'AKLOW unterstützt Sie genau dort, wo täglich Zeit verloren geht. Ohne neue Tools, ohne komplizierte Dashboards.',
    path: '/anwendungen',
    locale,
  });
}

export default function ApplicationsPage() {
  const firstBatch = applications.slice(0, 3)
  const lastBatch = applications.slice(3)

  return (
    <div className="bg-stone-50 min-h-screen">
      <Section variant="hero" className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-emerald-50/50 rounded-[100%] blur-3xl -z-10" />
        <Container size="xl">
          <div className="text-center max-w-4xl mx-auto mb-20 relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-stone-100 text-stone-600 text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles className="w-4 h-4 text-action" />
              Unsere Lösungen
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold tracking-tighter mb-6 sm:mb-8 leading-[0.9] text-stone-900 break-words px-2">
              Deine KI <br className="hidden sm:block" />
              <span className="text-action underline decoration-emerald-200 decoration-4 sm:decoration-8 underline-offset-4 sm:underline-offset-8">im Einsatz.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground-muted leading-relaxed max-w-2xl mx-auto font-medium px-4 break-words">
              AKLOW unterstützt dich genau dort, wo täglich Zeit verloren geht. Ohne neue Tools, ohne komplizierte Dashboards.
            </p>
          </div>
        </Container>
      </Section>

      <ApplicationsIntro />
      
      {/* Erster Block: 3 Anwendungen */}
      <div className="space-y-32 py-24">
        {firstBatch.map((app, idx) => (
          <SingleApplicationSection key={app.key} app={app} index={idx} />
        ))}
      </div>

      {/* CTA dazwischen geschoben */}
      <ApplicationsCTA />

      {/* Letzter Block: Bewertungen und Kunden & Vorgänge */}
      <div className="space-y-32 py-24">
        {lastBatch.map((app, idx) => (
          <SingleApplicationSection key={app.key} app={app} index={idx + 3} />
        ))}
      </div>

      <FundamentTeaser />

      <Section variant="normal" className="py-16 sm:py-24 md:py-32 bg-stone-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />
        <Container size="md" className="text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 sm:mb-8 break-words px-2">
            Bereit für <br className="hidden sm:block" /> den nächsten Schritt?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-stone-400 font-medium leading-relaxed px-4 break-words">
            In einem kurzen Gespräch finden wir heraus, welche Anwendung bei dir den größten Hebel hat.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
            <Button variant="primary" size="lg" className="h-14 sm:h-16 px-8 sm:px-10 rounded-2xl text-lg sm:text-xl font-bold shadow-emerald-200/50 w-full sm:w-auto" asChild href="/check">
              <span>Jetzt Check starten</span>
            </Button>
            <Button variant="secondary" size="lg" className="h-14 sm:h-16 px-8 sm:px-10 rounded-2xl text-lg sm:text-xl font-bold bg-white/5 border-white/10 text-white hover:bg-white/10 w-full sm:w-auto" asChild href="/kontakt">
              <div className="flex items-center justify-center gap-2">
                <span>Kontakt aufnehmen</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  )
}
