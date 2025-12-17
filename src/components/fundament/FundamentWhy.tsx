import { Section, Container } from "@/components/ui/Section"

export function FundamentWhy() {
  return (
    <Section variant="normal" className="py-24">
      <Container size="lg" className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
          Warum ein Fundament?
        </h2>
        
        <div className="prose prose-lg max-w-none space-y-6 text-foreground-muted leading-relaxed">
          <p>
            Die meisten Tools lösen ein Problem, indem sie ein neues schaffen. Du bekommst eine App für E-Mails, eine für Dokumente, eine für Termine. Jede funktioniert für sich, aber zusammen entsteht Chaos. Du musst zwischen Systemen wechseln, Informationen suchen, Kontext verlieren.
          </p>
          
          <p>
            Ein Fundament ist anders. Es ist die Basis, auf der alles aufbaut. Statt einzelner Tools gibt es ein System, das Zusammenhänge erkennt, Kontext behält und Entscheidungen vorbereitet. Du arbeitest weiter wie gewohnt – das System denkt mit.
          </p>
          
          <p>
            Das Ergebnis: weniger Suchen, weniger Wechseln, weniger Kontextverlust. Mehr Übersicht, mehr Klarheit, mehr Ruhe im Alltag.
          </p>
        </div>
      </Container>
    </Section>
  )
}

