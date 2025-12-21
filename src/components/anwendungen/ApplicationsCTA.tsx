import { Section, Container } from "@/components/ui/Section"
import { TrackedButton } from "@/components/ui/TrackedButton"
import { Sparkles, ArrowRight } from "lucide-react"

export function ApplicationsCTA() {
  return (
    <Section variant="normal" className="py-24 md:py-32 overflow-hidden">
      <Container size="lg">
        <div className="relative rounded-[4rem] bg-stone-900 p-12 md:p-24 text-center shadow-2xl overflow-hidden">
          
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-10">
              <Sparkles className="w-4 h-4" />
              Expertise requested
            </div>
            
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 text-white leading-[0.9]">
              Nicht sicher, wo Du <br />
              <span className="text-emerald-400">starten sollst?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-stone-400 leading-relaxed mb-12 font-medium">
              Kein Problem. Wir schauen gemeinsam, welche Anwendung bei Dir den größten Hebel hat und bauen von dort aus Schritt für Schritt weiter.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <TrackedButton 
                asChild 
                href="/check" 
                variant="primary" 
                size="lg" 
                className="h-16 px-10 rounded-2xl text-xl font-bold shadow-emerald-500/20"
                trackEvent="cta_check_click"
                trackProperties={{ source: 'applications_cta' }}
              >
                <span>Zum 3-Minuten-Check</span>
              </TrackedButton>
              <TrackedButton 
                asChild 
                href="/kontakt" 
                variant="secondary" 
                size="lg" 
                className="h-16 px-10 rounded-2xl text-xl font-bold bg-white/5 border-white/10 text-white hover:bg-white/10 group"
                trackEvent="cta_contact_click"
                trackProperties={{ source: 'applications_cta' }}
              >
                <div className="flex items-center gap-2">
                  <span>Persönlicher Kontakt</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </TrackedButton>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
