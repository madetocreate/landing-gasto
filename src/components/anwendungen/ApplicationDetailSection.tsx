import { Section, Container } from "@/components/ui/Section"
import Image from "next/image"
import Link from "next/link"
import { classNames } from "@/lib/classNames"

interface ApplicationDetail {
  key: string
  title: string
  headline?: string
  shortText: string
  features: string[]
  example: string
  result: string
  imagePath: string
  href: string
}

export const applications: ApplicationDetail[] = [
  {
    key: 'inbox',
    title: 'Intelligenter Posteingang',
    shortText: 'Alle deine Nachrichten an einem Ort – und nur das Wichtige kommt bei dir an. AKLOW sammelt E-Mails, Anfragen, Support-Nachrichten und Kontaktformulare und erkennt automatisch, worum es geht.',
    features: [
      'erkennt dringende Themen',
      'sortiert nach Wichtigkeit',
      'fasst Inhalte zusammen',
      'schlägt Antworten vor',
      'benachrichtigt dich nur dann, wenn du es willst'
    ],
    example: 'Du bekommst neue E-Mails, mehrere Nachrichten und eine Support-Anfrage. AKLOW filtert das Entscheidende heraus, erstellt auf Wunsch eine kurze Zusammenfassung und legt dir Antwort-Vorschläge bereit – per Knopfdruck.',
    result: 'Du verpasst nichts, aber du wirst auch nicht ständig unterbrochen.',
    imagePath: '/media/previews/inbox.jpg',
    href: '/anwendungen/intelligenter-posteingang'
  },
  {
    key: 'website-telefon',
    title: 'Website & Telefon Assistent',
    shortText: 'Verpasse nie wieder eine Anfrage oder einen Termin. AKLOW unterstützt dich auf der Website und am Telefon und erkennt, was deine Kunden wirklich wollen.',
    features: [
      'beantwortet häufige Fragen',
      'erkennt Anliegen und Termine',
      'sammelt relevante Informationen',
      'leitet Gespräche gezielt weiter',
      'merkt sich vorherige Kontakte'
    ],
    example: 'Ein Kunde schreibt über die Website oder ruft an. AKLOW erkennt das Anliegen, kennt den Kontext und sorgt dafür, dass die Anfrage richtig ankommt – oder direkt beantwortet wird.',
    result: 'Deine Kunden fühlen sich verstanden, und du verpasst keine Anfrage mehr.',
    imagePath: '/media/previews/website-telefon.jpg',
    href: '/anwendungen/website-telefon'
  },
  {
    key: 'dokumente-ordnung',
    title: 'Dokumente & Ordnung',
    headline: 'Nie wieder Zettelchaos.',
    shortText: 'Schmeiß deine Dokumente einfach bei AKLOW rein und bekomme strukturierte Ergebnisse zurück.',
    features: [
      'liest Dateien und PDFs',
      'erkennt Inhalte und Zusammenhänge',
      'fasst Informationen zusammen',
      'ordnet alles dem richtigen Vorgang zu'
    ],
    example: 'Du lädst Angebote, Rechnungen oder Notizen hoch. AKLOW versteht die Inhalte, bereitet sie auf und macht sie jederzeit wieder auffindbar.',
    result: 'Weniger Suchen. Mehr Überblick. Alles an einem Ort.',
    imagePath: '/media/previews/dokumente-ordnung.jpg',
    href: '/anwendungen/dokumente-ordnung'
  },
  {
    key: 'kunden-vorgaenge',
    title: 'Kunden & Vorgänge',
    shortText: 'Behalte den Überblick, ohne ein neues System pflegen zu müssen. AKLOW verbindet Gespräche, Nachrichten und Dokumente und hält den Verlauf sauber zusammen.',
    features: [
      'wer der Kunde ist',
      'was bereits passiert ist',
      'welche Dokumente dazugehören',
      'was als Nächstes ansteht'
    ],
    example: 'Du öffnest einen Vorgang und siehst sofort: letzte Nachricht, letzte Entscheidung, nächste Aufgabe.',
    result: 'Weniger Rückfragen. Weniger Kontextverlust. Mehr Klarheit.',
    imagePath: '/media/previews/kunden-vorgaenge.jpg',
    href: '/anwendungen/kunden-vorgaenge'
  },
  {
    key: 'bewertungen',
    title: 'Bewertungen',
    shortText: 'Mach dein Business besser – durch echtes Feedback und schnellere Reaktionen. AKLOW hilft dir, Bewertungen einzuholen und auf Feedback zu reagieren, ohne Mehraufwand.',
    features: [
      'erinnert nach Kontakten an Bewertungen',
      'sammelt Feedback automatisch',
      'erkennt positives und kritisches Feedback früh'
    ],
    example: 'Nach einem Termin oder Kontakt fragt AKLOW dezent nach Feedback. Du bekommst Überblick, ohne ständig nachfassen zu müssen.',
    result: 'Mehr Bewertungen. Bessere Außenwirkung. Mehr Vertrauen.',
    imagePath: '/media/previews/bewertungen.jpg',
    href: '/anwendungen/bewertungen'
  }
]

export function SingleApplicationSection({ app, index }: { app: ApplicationDetail, index: number }) {
  const isReversed = index % 2 === 1
  
  return (
    <Section id={app.key} variant="normal" className="py-0">
      <Container size="xl">
        <div className="rounded-3xl overflow-hidden bg-surface dark:bg-surface/5 border border-border/50 shadow-sm">
          <div className={classNames(
            "grid md:grid-cols-2 gap-0 items-center",
            isReversed ? "md:grid-flow-dense" : ""
          )}>
            {/* Text Content */}
            <div className={classNames(
              "p-8 md:p-12 lg:p-16 flex flex-col justify-center",
              isReversed ? "md:col-start-2" : ""
            )}>
              {app.headline && (
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-action">
                  {app.headline}
                </h2>
              )}
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                {app.title}
              </h3>
              <p className="text-lg text-foreground-muted leading-relaxed mb-8">
                {app.shortText}
              </p>

              <div className="mb-8">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground-muted mb-4 opacity-70">
                  Funktionen
                </h4>
                <ul className="space-y-3">
                  {app.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start">
                      <span className="text-action mr-3 mt-0.5">•</span>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-8 border-t border-border/50">
                <div className="bg-muted/30 -mx-4 -mb-4 p-6 rounded-xl">
                  <p className="text-sm font-medium text-foreground-muted mb-2 uppercase tracking-wide opacity-70">Ergebnis</p>
                  <p className="text-lg font-medium text-foreground">
                    {app.result}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href={app.href}
                  className="inline-flex items-center text-sm font-semibold text-action hover:text-action-hover transition-colors"
                >
                  <span className="mr-2">Details ansehen</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className={classNames(
              "relative aspect-square md:aspect-auto md:h-full min-h-[400px] bg-muted",
              isReversed ? "md:col-start-1 md:row-start-1" : ""
            )}>
              <Image
                src={app.imagePath}
                alt={app.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay Gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export function ApplicationDetailSections() {
  return (
    <div className="space-y-8 md:space-y-12 py-12 md:py-24">
      {applications.map((app, idx) => (
        <SingleApplicationSection key={app.key} app={app} index={idx} />
      ))}
    </div>
  )
}

