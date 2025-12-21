import { Section, Container } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { Layers, ArrowRight, CheckCircle2 } from "lucide-react"

export function FundamentTeaser() {
  return (
    <Section variant="normal" className="py-32 bg-stone-50 overflow-hidden">
      <Container size="lg">
        <div className="relative p-12 md:p-20 bg-white border-2 border-stone-100 rounded-[4rem] shadow-xl overflow-hidden">
          {/* Decorative layers icon in background */}
          <Layers className="absolute -bottom-10 -right-10 w-64 h-64 text-stone-50 -rotate-12 pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 text-stone-600 text-xs font-bold uppercase tracking-widest mb-8">
                <Layers className="w-4 h-4 text-action" />
                The Core
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-stone-900 leading-tight">
                Ein <span className="text-action">Fundament</span>,<br />viele Möglichkeiten.
              </h2>
              <p className="text-xl text-stone-500 font-medium leading-relaxed mb-10">
                Alle Anwendungen basieren auf demselben Fundament. So bleibt alles verbunden, verständlich und sicher. Ein System, das mitdenkt.
              </p>
              <Button asChild href="/fundament" variant="secondary" size="lg" className="h-14 px-8 rounded-xl text-lg font-bold group">
                <div className="flex items-center gap-2">
                  <span>Alles zum Fundament</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </Button>
            </div>

            <div>
              <ul className="space-y-6">
                {[
                  'Gedächtnis & Kontext',
                  'Verstehen & Einordnen',
                  'Dokumente verstehen',
                  'Verbinden & Weitergeben',
                  'Kontrolle & Sicherheit'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 group">
                    <div className="p-1 rounded-full bg-emerald-50 text-action group-hover:bg-emerald-100 transition-colors">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold text-stone-800 tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
