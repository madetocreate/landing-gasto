import { Section, Container } from "@/components/ui/Section"
import { Brain, Coffee } from "lucide-react"

export function ApplicationsIntro() {
  return (
    <Section variant="normal" className="py-24 bg-white overflow-hidden">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-stone-900 leading-tight">
              Ein Chat.<br />
              <span className="text-action underline decoration-emerald-200 decoration-8 underline-offset-4">Alles erledigt.</span>
            </h2>
            <p className="text-xl text-stone-500 font-medium leading-relaxed mb-8">
              Sag der KI, was du brauchst. Sie sortiert deine Nachrichten, versteht deine Dokumente und merkt sich deine Kunden. Alles fließt in einen Posteingang.
            </p>
            <div className="space-y-6">
              {[
                { icon: Brain, title: "Die KI versteht", text: "Sie liest, sortiert und fasst zusammen. Du bekommst nur das Wichtige." },
                { icon: Coffee, title: "Du entscheidest", text: "Die KI schlägt vor, du gibst frei. Nichts passiert ohne dich." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-stone-50 text-stone-600 flex items-center justify-center shrink-0 border border-stone-100 shadow-sm">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1 uppercase tracking-tight text-sm">{item.title}</h3>
                    <p className="text-stone-500 text-sm font-medium leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-50 rounded-[4rem] -rotate-3 -z-10" />
            <div className="bg-white border-2 border-stone-100 p-8 md:p-12 rounded-[4rem] shadow-xl relative overflow-hidden">
              <div className="flex flex-wrap gap-3">
                {[
                  "E-Mails", "WhatsApp", "Rechnungen", "Verträge", "Bewertungen", "Termine", "Notizen", "Scans"
                ].map((tag, i) => (
                  <span key={i} className="px-5 py-2 rounded-full bg-stone-50 border border-stone-100 text-stone-500 text-sm font-bold uppercase tracking-widest whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-stone-50">
                <p className="text-stone-400 text-sm font-medium italic">
                  &quot;Alles an einem Ort. Ein Chat. Eine KI.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
