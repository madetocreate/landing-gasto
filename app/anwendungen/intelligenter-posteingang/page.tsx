import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { createMetadata } from '@/lib/metadata';
import Image from 'next/image';
import Link from 'next/link';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { Check } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Intelligenter Posteingang – Anfragen, E‑Mails & Nachrichten mit KI sortieren',
  description: 'Alle Anfragen an einem Ort. Die KI priorisiert, fasst zusammen und schlägt Antworten vor – ohne komplizierte Dashboards. Du behältst die Kontrolle.',
  path: '/anwendungen/intelligenter-posteingang',
});

export default function IntelligenterPosteingang() {
  const faqItems = [
    {
      q: 'Kann die KI auch „deutsch im Alltag" – ohne Floskeln?',
      a: 'Ja. Die KI lernt deinen Tonfall und passt sich an. Du kannst Beispiele geben und Feedback geben, damit Antworten natürlich klingen – nicht wie aus der Maschine.',
    },
    {
      q: 'Kann ich einstellen, wann ich Benachrichtigungen bekomme?',
      a: 'Ja. Du bestimmst, wann du informiert wirst: nur bei Dringendem, zu bestimmten Zeiten oder gar nicht. Du behältst die Kontrolle über deine Ruhezeiten.',
    },
    {
      q: 'Muss ich dafür ein neues System pflegen?',
      a: 'Nein. Der Posteingang verbindet sich mit deinen bestehenden Kanälen – E-Mail, Kontaktformular, Support. Keine neue Oberfläche, keine doppelte Pflege.',
    },
    {
      q: 'Wie verhindert ihr falsche Antworten?',
      a: 'Jede Antwort wird dir vorgeschlagen, bevor sie rausgeht. Du prüfst, passt an und sendest. Nichts passiert ohne deine Freigabe. Zusätzlich gibt es klare Regeln, was automatisch gehen darf und was nicht.',
    },
  ];

  return (
    <>
      {/* Hero - Split Layout */}
      <Section variant="hero" className="pt-32 pb-20">
        <Container size="lg">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Intelligenter Posteingang
              </h1>
              <p className="text-lg md:text-xl text-foreground-muted leading-relaxed mb-6">
                Alles landet an einem Ort: E‑Mails, Kontaktformulare, Support-Nachrichten und Rückfragen.
                Die KI erkennt, worum es geht, priorisiert automatisch und legt dir Zusammenfassungen und Antwortvorschläge bereit.
                Du entscheidest, was rausgeht – und wann du benachrichtigt wirst.
              </p>
              
              {/* Mini-Highlights */}
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 rounded-full bg-action-soft text-action text-sm font-medium">Wichtiges zuerst</span>
                <span className="px-3 py-1.5 rounded-full bg-action-soft text-action text-sm font-medium">Antworten per Knopfdruck</span>
                <span className="px-3 py-1.5 rounded-full bg-action-soft text-action text-sm font-medium">Zusammenfassungen statt Suchen</span>
                <span className="px-3 py-1.5 rounded-full bg-action-soft text-action text-sm font-medium">Wiedervorlagen, wenn es zählt</span>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted/30 border border-border/50">
              <Image
                src="/media/previews/inbox.jpg"
                alt="Intelligenter Posteingang"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F2937]/20 to-[#111827]/40" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Was dich im Alltag ausbremst */}
      <Section variant="normal">
        <Container size="lg">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Was dich im Alltag ausbremst
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-6">
              Wenn Anfragen über mehrere Kanäle reinkommen, passiert immer dasselbe:
              Man springt hin und her, sucht Informationen, vergisst Follow-ups und beantwortet Dinge doppelt.
              Das kostet Zeit – und oft auch Aufträge.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Nachrichten verteilen sich auf zu viele Kanäle</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Wichtiges geht im „Rauschen" unter</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Rückfragen kosten jedes Mal Kontext</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Antworten dauern länger als nötig</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Wiedervorlagen passieren per Bauchgefühl</span>
              </li>
            </ul>
          </div>

          {/* So wird daraus ein ruhiger Morgen */}
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              So wird daraus ein ruhiger Morgen
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Stell dir vor: Du öffnest den Posteingang und siehst sofort, was heute wirklich wichtig ist.
              Die KI hat schon sortiert, zusammengefasst und passende Antwortentwürfe vorbereitet.
              Du klickst dich nicht durch E-Mail-Ketten – du triffst Entscheidungen.
            </p>
          </div>

          {/* Was der Posteingang automatisch übernimmt */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Was der Posteingang automatisch übernimmt
            </h2>
            <p className="text-lg text-foreground-muted mb-8 max-w-3xl">
              Nicht „magisch", sondern nachvollziehbar – mit klaren Regeln.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-action shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Kanal-Zusammenführung</h3>
                  <p className="text-sm text-foreground-muted">Alles landet im gleichen Strom</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-action shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Erkennen & Einordnen</h3>
                  <p className="text-sm text-foreground-muted">Anliegen, Dringlichkeit, Thema</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-action shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Zusammenfassen</h3>
                  <p className="text-sm text-foreground-muted">kurze Übersicht statt langer Threads</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-action shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Antwortvorschläge</h3>
                  <p className="text-sm text-foreground-muted">passend zum Anliegen, in deinem Ton</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-action shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Zuordnen</h3>
                  <p className="text-sm text-foreground-muted">Kunde/Vorgang/Dokumente verknüpfen</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-action shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Wiedervorlage</h3>
                  <p className="text-sm text-foreground-muted">wenn jemand nicht antwortet oder etwas offen bleibt</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-action shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Benachrichtigen</h3>
                  <p className="text-sm text-foreground-muted">nur wenn du es willst (z. B. „nur dringend")</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-action shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Übergaben</h3>
                  <p className="text-sm text-foreground-muted">wenn ihr zu zweit/zu fünft seid, sieht jeder sofort den Stand</p>
                </div>
              </div>
            </div>
          </div>

          {/* Beispiel aus dem Alltag */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Beispiel aus dem Alltag
            </h2>
            <SpotlightCard className="p-8 md:p-12" spotlightColor="rgba(var(--action-rgb), 0.1)">
              <h3 className="text-2xl font-bold mb-4">Montagmorgen, ohne Chaos</h3>
              <p className="text-lg text-foreground-muted leading-relaxed">
                Es kommen drei Dinge gleichzeitig rein: eine neue Anfrage, eine Rückfrage zu einem Angebot und ein Support-Thema.
                Die KI ordnet alles ein, markiert das Dringende, legt dir eine Kurzfassung hin und schlägt Antworten vor.
                Du musst nicht suchen – du arbeitest ab.
              </p>
            </SpotlightCard>
          </div>

          {/* Kontrolle statt Autopilot */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Kontrolle statt Autopilot
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-6">
              Automatisierung hilft nur dann, wenn du sie steuern kannst.
              Darum gibt es klare Regeln, Freigaben und Nachvollziehbarkeit.
              Auf Wunsch gehen Vorschläge erst raus, wenn du sie freigibst.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Freigabe statt „einfach senden"</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Regeln pro Kanal/Thema</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Nachvollziehbarkeit (was wurde warum vorgeschlagen)</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-background-muted rounded-2xl p-8 md:p-12 mb-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Willst du sehen, wie das bei dir aussehen kann?
            </h2>
            <p className="text-lg text-foreground-muted mb-8 max-w-2xl mx-auto">
              Wir schauen uns kurz an, welche Kanäle du hast – und was sich realistisch automatisieren lässt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="primary" size="lg" asChild href="/check">
                10-Minuten-Check
              </Button>
              <Button variant="secondary" size="lg" asChild href="/kontakt">
                Kontakt
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground-muted">
              <Link href="/anwendungen" className="hover:text-action transition-colors">
                Zurück zu Anwendungen
              </Link>
              <span>•</span>
              <Link href="/fundament" className="hover:text-action transition-colors">
                Zum Fundament
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              Häufige Fragen
            </h2>
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </Section>
    </>
  );
}
