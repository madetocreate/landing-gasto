import { Section, Container } from "@/components/ui/Section"

export function FundamentOverview() {
  return (
    <Section variant="normal" className="py-24 bg-surface/30 dark:bg-surface/10">
      <Container size="lg" className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
          Ein Fundament – viele Anwendungen
        </h2>
        
        <div className="prose prose-lg max-w-none space-y-6 text-foreground-muted leading-relaxed">
          <p>
            Alle Anwendungen – ob Posteingang, Dokumente oder Bewertungen – basieren auf demselben Fundament. Das bedeutet: Sie verstehen sich, sie arbeiten zusammen, sie teilen Kontext.
          </p>
          
          <p>
            Wenn du eine E-Mail bekommst, erkennt das System automatisch, ob es ein Dokument dazu gibt, ob es einen Vorgang betrifft oder ob es eine Bewertung auslösen sollte. Alles läuft zusammen, ohne dass du Systeme wechseln oder Informationen manuell verbinden musst.
          </p>
        </div>

        <div className="mt-12 pt-12 border-t border-border/50">
          <div className="grid md:grid-cols-5 gap-6 text-center">
            {[
              'Gedächtnis & Kontext',
              'Verstehen & Einordnen',
              'Dokumente verstehen',
              'Verbinden & Weitergeben',
              'Kontrolle & Sicherheit'
            ].map((item, idx) => (
              <div key={idx} className="p-4">
                <div className="text-2xl font-bold text-action mb-2">{idx + 1}</div>
                <div className="text-sm text-foreground-muted leading-relaxed">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

