import { Section, Container } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"

export function ApplicationsCTA() {
  return (
    <Section variant="normal" className="py-24 md:py-32">
      <Container size="lg">
        <div className="relative rounded-3xl overflow-hidden bg-[rgba(31,41,55,0.03)] dark:bg-[rgba(229,231,235,0.05)] border border-border/50 p-8 md:p-16 text-center">
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Du bist dir noch nicht sicher, wo AKLOW dir am meisten hilft?
            </h2>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed mb-10">
              Wir schauen gemeinsam, welche Anwendung zuerst Sinn macht und bauen von dort aus weiter.
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

