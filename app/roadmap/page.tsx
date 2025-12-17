import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { createMetadata } from '@/lib/metadata';
import { Check } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Roadmap – Woran wir arbeiten',
  description: 'Hier zeigen wir, woran wir gerade arbeiten und was als Nächstes kommt.',
  path: '/roadmap',
});

const roadmapPhases = [
  {
    phase: 'Jetzt',
    title: 'Was gerade live ist',
    description: 'Diese Funktionen sind bereits verfügbar und werden kontinuierlich verbessert.',
    items: [
      'Intelligenter Posteingang mit automatischer Sortierung',
      'Dokumente verstehen und strukturieren',
      'Basis-Integrationen für E-Mail und Kalender',
      'Kunden & Vorgänge im Überblick',
      'Einfache Freigabe-Workflows',
    ],
  },
  {
    phase: 'Als Nächstes',
    title: 'In den kommenden Wochen',
    description: 'Diese Verbesserungen stehen kurz vor dem Start.',
    items: [
      'Erweiterte Antwortvorschläge mit mehr Kontext',
      'Mehr Integrationen für gängige Tools',
      'Verbesserte Dokumentenerkennung',
      'Erweiterte Wiedervorlage-Funktionen',
      'Mobile Optimierungen',
    ],
  },
  {
    phase: 'In Arbeit',
    title: 'Aktuell in Entwicklung',
    description: 'Wir arbeiten aktiv an diesen Features.',
    items: [
      'Website & Telefon Assistent',
      'Automatische Bewertungsanfragen',
      'Erweiterte Automatisierungsregeln',
      'Mehrsprachige Unterstützung',
      'Erweiterte Suchfunktionen',
    ],
  },
  {
    phase: 'In Planung',
    title: 'Auf der Wunschliste',
    description: 'Diese Ideen sammeln wir und prüfen, ob sie für dich Sinn machen.',
    items: [
      'Erweiterte Reporting-Funktionen',
      'API für eigene Integrationen',
      'Team-Kollaboration Features',
      'Erweiterte Sicherheitsoptionen',
      'Weitere Sprachunterstützung',
    ],
  },
];

export default function Roadmap() {
  return (
    <>
      <Section variant="normal">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="mb-6 text-4xl md:text-5xl font-bold tracking-tight">Roadmap</h1>
            <p className="text-lg text-foreground-muted mb-12 prose max-w-3xl mx-auto leading-relaxed">
              Hier zeigen wir, woran wir gerade arbeiten und was als Nächstes kommt.
              Transparent, ehrlich – ohne Versprechen mit festen Daten.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto space-y-12 mb-16">
            {roadmapPhases.map((phase, idx) => (
              <div key={phase.phase} className="relative">
                {/* Timeline Line */}
                {idx < roadmapPhases.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border" />
                )}
                
                <div className="flex gap-6">
                  {/* Timeline Dot */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${
                      idx === 0 ? 'bg-action text-action-foreground' : 
                      idx === 1 ? 'bg-action/80 text-action-foreground' :
                      idx === 2 ? 'bg-[#1F2937] text-white' :
                      'bg-muted text-foreground-muted'
                    }`}>
                      {idx + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-12">
                    <div className="mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-foreground-muted">
                        {phase.phase}
                      </span>
                    </div>
                    <SpotlightCard 
                      className="p-6 md:p-8" 
                      spotlightColor={idx === 0 ? "rgba(var(--action-rgb), 0.1)" : "rgba(var(--accent-rgb), 0.05)"}
                    >
                      <h2 className="text-2xl font-bold mb-3">{phase.title}</h2>
                      <p className="text-foreground-muted mb-6 leading-relaxed">
                        {phase.description}
                      </p>
                      <ul className="space-y-3">
                        {phase.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-action shrink-0 mt-0.5" strokeWidth={2.5} />
                            <span className="text-foreground-muted">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </SpotlightCard>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hinweis */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-background-muted rounded-2xl p-6 md:p-8 border border-border/50">
              <p className="text-foreground-muted leading-relaxed">
                <strong className="text-foreground">Wichtig:</strong> Diese Roadmap ist eine Momentaufnahme.
                Prioritäten können sich ändern, wenn wir sehen, was dir wirklich hilft.
                Wir bleiben flexibel und fokussieren uns auf das, was im Alltag wirklich zählt.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
