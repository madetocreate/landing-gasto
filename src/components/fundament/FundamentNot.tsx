import { Section, Container } from "@/components/ui/Section"

export function FundamentNot() {
  return (
    <Section variant="normal" className="py-24 bg-surface/30 dark:bg-surface/10">
      <Container size="lg" className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
          Was dieses Fundament bewusst nicht ist
        </h2>
        
        <div className="prose prose-lg max-w-none space-y-6 text-foreground-muted leading-relaxed">
          <p>
            <strong className="text-foreground">Kein Alleskönner.</strong> Das System löst nicht jedes Problem. Es fokussiert auf das, was im Alltag wirklich zählt: Kommunikation, Dokumente, Entscheidungen, Zusammenhänge.
          </p>
          
          <p>
            <strong className="text-foreground">Kein Ersatz für deine Tools.</strong> Du arbeitest weiter mit deinen gewohnten Systemen. Das Fundament verbindet sie, es ersetzt sie nicht.
          </p>
          
          <p>
            <strong className="text-foreground">Kein Black Box.</strong> Du siehst, warum das System etwas vorschlägt, welche Informationen es nutzt, welche Alternativen es gibt. Transparenz schafft Vertrauen.
          </p>
          
          <p>
            <strong className="text-foreground">Kein Selbstläufer.</strong> Das System schlägt vor, du entscheidest. Automatisierung bedeutet nicht Kontrollverlust.
          </p>
        </div>
      </Container>
    </Section>
  )
}

