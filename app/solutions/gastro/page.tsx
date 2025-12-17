import { AppShell } from "@/components/shell/AppShell"
import { Section, Container } from "@/components/ui/Section"
import { createMetadata } from "@/lib/metadata"
import { Button } from "@/components/ui/Button"
import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { ArrowRight, MessageSquare, ChefHat, LayoutDashboard, Clock } from "lucide-react"

export const metadata = createMetadata({
  title: "Gastro Starter",
  description: "Die Komplettlösung für moderne Gastronomie. Bestellen, KDS, POS und Service.",
  path: "/solutions/gastro",
})

export default function GastroPage() {
  return (
    <AppShell>
       <Section variant="hero" className="pt-32 pb-24">
        <Container size="lg" className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-action-soft text-action text-sm font-medium mb-6">
            Gastro Starter
          </div>
          <h1 className="tracking-tight text-5xl md:text-6xl font-bold mb-8">
            Das Betriebssystem für<br />moderne Gastronomie.
          </h1>
          <p className="text-xl md:text-2xl text-foreground-muted prose-wide mx-auto leading-relaxed mb-10">
            QR-Bestellung, KDS, POS-Lite und Service-Inbox. Alles in einem Flow.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="primary" size="lg" asChild href="/demo">
              Demo ausprobieren
            </Button>
            <Button variant="secondary" size="lg" asChild href="/check">
              Check machen
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="xl">
          <div className="grid md:grid-cols-2 gap-8">
            <SpotlightCard className="p-8">
              <MessageSquare className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Chat-first Ordering</h3>
              <p className="text-foreground-muted">Gäste bestellen natürlich wie im Chat. Keine App, kein Download.</p>
            </SpotlightCard>
            <SpotlightCard className="p-8">
              <ChefHat className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Küche & Bar KDS</h3>
              <p className="text-foreground-muted">Klare Tickets, sortiert nach Stationen. Nichts geht verloren.</p>
            </SpotlightCard>
            <SpotlightCard className="p-8">
              <LayoutDashboard className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">POS-Lite</h3>
              <p className="text-foreground-muted">Tischplan, Split-Rechnungen und Tagesabschluss auf dem Tablet.</p>
            </SpotlightCard>
            <SpotlightCard className="p-8">
              <Clock className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Schnell live</h3>
              <p className="text-foreground-muted">Menü importieren, QR drucken, starten. In Minuten.</p>
            </SpotlightCard>
          </div>
        </Container>
      </Section>
    </AppShell>
  )
}
