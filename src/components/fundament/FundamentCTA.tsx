import { Section, Container } from "@/components/ui/Section"
import { TrackedButton } from "@/components/ui/TrackedButton"

export function FundamentCTA() {
  return (
    <Section variant="normal" className="py-24">
      <Container size="lg" className="max-w-3xl mx-auto">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[rgba(31,41,55,0.03)] dark:bg-[rgba(229,231,235,0.05)] border border-border/50 p-6 sm:p-8 md:p-16 text-center">
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 sm:mb-6 break-words px-2">
              Fragen zum Fundament?
            </h2>
            <p className="text-base sm:text-lg text-foreground-muted leading-relaxed mb-8 sm:mb-10 px-4 break-words">
              Wir erklären dir gerne, wie das System in deinem Alltag funktioniert.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <TrackedButton 
                asChild 
                href="/kontakt" 
                variant="primary" 
                size="lg" 
                className="w-full sm:w-auto min-w-[140px] h-12 sm:h-14"
                trackEvent="cta_contact_click"
                trackProperties={{ source: 'fundament_cta' }}
              >
                <span>Kontakt</span>
              </TrackedButton>
              <TrackedButton 
                asChild 
                href="/check" 
                variant="secondary" 
                size="lg" 
                className="w-full sm:w-auto min-w-[180px] h-12 sm:h-14"
                trackEvent="cta_check_click"
                trackProperties={{ source: 'fundament_cta' }}
              >
                <span>3-Minuten-Check</span>
              </TrackedButton>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

