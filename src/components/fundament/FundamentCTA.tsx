import { Section, Container } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"

export function FundamentCTA() {
  return (
    <Section variant="normal" className="py-24">
      <Container size="lg" className="max-w-3xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-[rgba(31,41,55,0.03)] dark:bg-[rgba(229,231,235,0.05)] border border-border/50 p-8 md:p-16 text-center">
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
              Fragen zum Fundament?
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-10">
              Wir erklären dir gerne, wie das System in deinem Alltag funktioniert.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild href="/kontakt" variant="primary" size="lg" className="w-full sm:w-auto min-w-[140px]">
                <span>Kontakt</span>
              </Button>
              <Button asChild href="/check" variant="secondary" size="lg" className="w-full sm:w-auto min-w-[180px]">
                <span>10-Minuten-Check</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

