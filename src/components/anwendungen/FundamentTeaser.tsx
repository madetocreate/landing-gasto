import { Section, Container } from "@/components/ui/Section"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

export function FundamentTeaser() {
  return (
    <Section variant="normal" className="relative bg-surface/30 dark:bg-surface/10">
      <Container size="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ein Fundament, viele Anwendungen
          </h2>
          <p className="text-lg md:text-xl text-foreground-muted leading-relaxed mb-8">
            Alle Anwendungen basieren auf demselben Fundament. So bleibt alles verbunden und verständlich.
          </p>

          <ul className="text-left max-w-md mx-auto space-y-3 mb-10">
            {[
              'Gedächtnis & Kontext',
              'Verstehen & Einordnen',
              'Dokumente verstehen',
              'Verbinden & Weitergeben',
              'Kontrolle & Sicherheit'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-action mr-3 mt-1">•</span>
                <span className="text-foreground-muted">{item}</span>
              </li>
            ))}
          </ul>

          <Button asChild href="/fundament" variant="primary" size="lg">
            Zum Fundament →
          </Button>
        </div>
      </Container>
    </Section>
  )
}

