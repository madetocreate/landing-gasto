import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { createMetadata } from '@/lib/metadata';
import { CheckCircle2, AlertCircle, Clock } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Status & Updates – Systemstatus und aktuelle Informationen',
  description: 'Aktueller Systemstatus, geplante Wartungsarbeiten und neueste Updates.',
  path: '/status',
});

export default function Status() {
  return (
    <>
      <Section variant="normal">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Status & Updates</h1>
            <p className="text-lg text-foreground-muted mb-12 leading-relaxed">
              Hier findest du den aktuellen Systemstatus und wichtige Updates.
              Transparent, aktuell – damit du immer weißt, was los ist.
            </p>
          </div>

          {/* Systemstatus Card */}
          <div className="max-w-3xl mx-auto mb-16">
            <SpotlightCard 
              className="p-8 md:p-12" 
              spotlightColor="rgba(var(--action-rgb), 0.1)"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-action text-action-foreground flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">Alle Systeme stabil</h2>
                  <p className="text-foreground-muted">Alle Dienste laufen normal</p>
                </div>
              </div>
              <p className="text-foreground-muted leading-relaxed">
                Alle Systeme sind aktuell vollständig verfügbar und laufen ohne Einschränkungen.
                Wir überwachen kontinuierlich die Performance und reagieren sofort, falls etwas nicht stimmt.
              </p>
            </SpotlightCard>
          </div>

          {/* Wartungsarbeiten */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Geplante Wartungsarbeiten</h2>
            <div className="bg-background-muted rounded-2xl p-6 md:p-8 border border-border/50">
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-foreground-muted shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <p className="text-foreground-muted leading-relaxed">
                    Aktuell sind keine Wartungsarbeiten geplant.
                    Falls Wartungen anstehen, informieren wir dich rechtzeitig.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Changelog */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Neueste Updates</h2>
            <div className="space-y-4">
              <div className="bg-surface border border-border/50 rounded-xl p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-semibold text-foreground">Kontinuierliche Verbesserungen</h3>
                  <span className="text-xs text-foreground-muted whitespace-nowrap">Laufend</span>
                </div>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  Wir arbeiten kontinuierlich an Verbesserungen und neuen Funktionen.
                  Die wichtigsten Updates findest du in der Roadmap.
                </p>
              </div>
            </div>
          </div>

          {/* Hinweis */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-background-muted rounded-2xl p-6 md:p-8 border border-border/50">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-5 h-5 text-foreground-muted shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Probleme melden</h3>
                  <p className="text-foreground-muted leading-relaxed text-sm">
                    Falls du Probleme bemerkst oder etwas nicht wie erwartet funktioniert,
                    melde es uns bitte. Wir kümmern uns schnell darum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Support Section */}
      <Section variant="normal" className="bg-background-muted">
        <Container size="lg">
          <div className="mx-auto max-w-2xl sm:text-center mb-20">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
              Kontakt & Support
            </h2>
            <p className="mt-2 text-lg text-foreground-muted leading-relaxed">
              Wir helfen dir gerne weiter – bei Fragen, Problemen oder wenn du einfach mehr wissen möchtest.
            </p>
          </div>
          <div className="mx-auto mt-20 max-w-lg space-y-16">
            <div className="flex gap-x-6">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-action">
                <CheckCircle2 aria-hidden="true" className="size-6 text-white" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">Verkauf & Beratung</h3>
                <p className="mt-2 text-base text-foreground-muted leading-relaxed">
                  Du hast Fragen zu unseren Anwendungen oder möchtest wissen, wie Aklow in deinem Alltag helfen kann? Wir beraten dich gerne.
                </p>
                <p className="mt-4 text-sm font-semibold">
                  <a href="/kontakt" className="text-action hover:text-action-hover transition-colors">
                    Kontakt aufnehmen <span aria-hidden="true">&rarr;</span>
                  </a>
                </p>
              </div>
            </div>
            <div className="flex gap-x-6">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-action">
                <AlertCircle aria-hidden="true" className="size-6 text-white" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">Fehler melden</h3>
                <p className="mt-2 text-base text-foreground-muted leading-relaxed">
                  Du hast einen Fehler entdeckt oder etwas funktioniert nicht wie erwartet? Melde es uns, damit wir es schnell beheben können.
                </p>
                <p className="mt-4 text-sm font-semibold">
                  <a href="/kontakt" className="text-action hover:text-action-hover transition-colors">
                    Fehler melden <span aria-hidden="true">&rarr;</span>
                  </a>
                </p>
              </div>
            </div>
            <div className="flex gap-x-6">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-action">
                <Clock aria-hidden="true" className="size-6 text-white" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">Technischer Support</h3>
                <p className="mt-2 text-base text-foreground-muted leading-relaxed">
                  Du brauchst Hilfe bei der Einrichtung, Integration oder hast technische Fragen? Unser Support-Team hilft dir gerne weiter.
                </p>
                <p className="mt-4 text-sm font-semibold">
                  <a href="/kontakt" className="text-action hover:text-action-hover transition-colors">
                    Support kontaktieren <span aria-hidden="true">&rarr;</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
