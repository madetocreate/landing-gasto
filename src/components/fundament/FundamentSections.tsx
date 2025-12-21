import { Section, Container } from "@/components/ui/Section"
import { classNames } from "@/lib/classNames"
import { Button } from "@/components/ui/Button"

interface Fundament {
  key: string
  title: string
  paragraphs: string[]
  everyday: string
}

const fundamente: Fundament[] = [
  {
    key: 'gedaechtnis-kontext',
    title: 'Gedächtnis & Kontext',
    paragraphs: [
      'Das System merkt sich, was passiert ist. Nicht nur die letzten Nachrichten, sondern auch die Zusammenhänge: Wer hat wann was gesagt? Welche Entscheidungen wurden getroffen? Was steht noch aus?',
      'Dieses Gedächtnis ist kein Archiv. Es ist aktiv. Wenn eine neue Nachricht kommt, erkennt das System automatisch, ob es einen Bezug zu früheren Gesprächen gibt, ob ein Vorgang betroffen ist oder ob eine Entscheidung ansteht.',
      'Du musst nichts nachschlagen. Der Kontext ist da, wenn du ihn brauchst.'
    ],
    everyday: 'Du öffnest eine Nachricht und siehst sofort: letzte Kontakte, relevante Dokumente, offene Aufgaben – alles an einem Ort, ohne zu suchen.'
  },
  {
    key: 'verstehen-einordnen',
    title: 'Verstehen & Einordnen',
    paragraphs: [
      'Das System versteht, worum es geht. Nicht nur einzelne Wörter, sondern die Bedeutung: Ist das dringend? Geht es um einen Kunden? Braucht es eine Entscheidung?',
      'Diese Einordnung passiert automatisch. Das System erkennt Muster, zieht Schlüsse, filtert Wichtiges heraus. Du bekommst nicht alle Informationen – du bekommst die richtigen.',
      'Das Ergebnis: weniger Lärm, mehr Signal.'
    ],
    everyday: 'Eine E-Mail kommt rein. Das System erkennt: Das ist eine Anfrage, sie betrifft einen bestehenden Vorgang, sie braucht eine Antwort bis morgen. Du siehst das sofort, ohne zu lesen.'
  },
  {
    key: 'dokumente-verstehen',
    title: 'Dokumente verstehen',
    paragraphs: [
      'Dokumente sind mehr als Dateien. Sie enthalten Informationen, die wichtig sind: Rechnungen, Angebote, Verträge, Notizen. Das System liest sie, versteht sie, ordnet sie zu.',
      'Du musst keine Ordnerstruktur erfinden. Du wirfst Dokumente rein, und das System findet sie wieder – nicht nach Dateinamen, sondern nach Inhalt.',
      'Alles ist auffindbar, ohne dass du dich erinnern musst, wo du es abgelegt hast.'
    ],
    everyday: 'Du suchst nach einer Rechnung von vor drei Monaten. Statt durch Ordner zu klicken, fragst du einfach: "Rechnung für Projekt X". Das System findet sie, weil es den Inhalt versteht.'
  },
  {
    key: 'verbinden-weitergeben',
    title: 'Verbinden & Weitergeben',
    paragraphs: [
      'Informationen sind wertlos, wenn sie isoliert bleiben. Das System verbindet sie: Nachrichten mit Dokumenten, Gespräche mit Vorgängen, Entscheidungen mit Konsequenzen.',
      'Diese Verbindungen entstehen automatisch. Wenn eine Nachricht kommt, die zu einem Vorgang gehört, wird sie automatisch zugeordnet. Wenn ein Dokument relevant ist, wird es verknüpft.',
      'Du musst nichts manuell verbinden. Das System macht es für dich.'
    ],
    everyday: 'Ein Kunde schreibt eine Nachricht. Das System erkennt: Das gehört zu Vorgang Y, dazu gibt es Dokumente, die letzte Entscheidung war Z. Alles ist verbunden, alles ist sichtbar.'
  },
  {
    key: 'kontrolle-sicherheit',
    title: 'Kontrolle & Sicherheit',
    paragraphs: [
      'Automatisierung bedeutet nicht Kontrollverlust. Du bestimmst, was automatisch passiert und was deine Freigabe braucht. Das System schlägt vor, du entscheidest.',
      'Jede Entscheidung ist nachvollziehbar. Du siehst, warum das System etwas vorgeschlagen hat, welche Informationen es genutzt hat, welche Alternativen es gab.',
      'Vertrauen entsteht durch Transparenz. Das System ist transparent.'
    ],
    everyday: 'Das System schlägt eine Antwort vor. Du siehst: Warum diese Antwort? Welche Informationen wurden genutzt? Was wäre die Alternative? Du entscheidest mit vollem Kontext.'
  }
]

export function FundamentSections() {
  return (
    <div className="space-y-32 md:space-y-64 py-24">
      {fundamente.map((fundament, idx) => {
        const isReversed = idx % 2 === 1;
        return (
          <Section key={fundament.key} variant="normal" className="py-0 relative" id={fundament.key}>
            {/* Ambient Background for each section to break the "sadness" */}
            <div className={classNames(
              "absolute inset-0 -z-10 opacity-[0.03] pointer-events-none transition-opacity",
              isReversed ? "bg-gradient-to-tr from-action to-transparent" : "bg-gradient-to-bl from-[#1F2937] to-transparent"
            )} />

            <Container size="lg" className="max-w-5xl mx-auto">
              <div className={classNames(
                "flex flex-col md:flex-row gap-12 md:gap-24 items-center",
                isReversed ? "md:flex-row-reverse" : ""
              )}>
                {/* Visual / Number Block */}
                <div className="relative flex-shrink-0 w-full md:w-1/3 flex justify-center items-center">
                  <span className="text-[15rem] md:text-[20rem] font-bold leading-none select-none opacity-[0.1] dark:opacity-[0.15] absolute -translate-y-8 pointer-events-none font-mono">
                    {idx + 1}
                  </span>
                  <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-[#111827] dark:bg-white/5 flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] rotate-3">
                    <span className="text-4xl md:text-5xl font-bold text-action">
                      {idx + 1}
                    </span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="flex-1 space-y-8">
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                    {fundament.title}
                  </h2>

                  <div className="prose prose-xl max-w-none space-y-6 text-foreground-muted leading-relaxed">
                    {fundament.paragraphs.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-xl md:text-2xl font-light">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="pt-8 space-y-6">
                    <div className="inline-block px-8 py-6 rounded-3xl bg-[#111827]/5 dark:bg-white/5 border border-border/50 shadow-sm">
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-action mb-3">
                        Im Alltag heißt das:
                      </p>
                      <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
                        {fundament.everyday}
                      </p>
                    </div>
                    <div>
                      <Button variant="secondary" size="md" asChild href={`/fundament/${fundament.key}`}>
                        Mehr erfahren →
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </Section>
        );
      })}
    </div>
  )
}

