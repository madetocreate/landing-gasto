"use client"

import { Section, Container } from "@/components/ui/Section"
import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { Shield, Lock, Zap, CheckCircle2 } from "lucide-react"

interface TrustItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  text: string
}

const defaultTrustItems: TrustItem[] = [
  {
    icon: Shield,
    title: "Sicherheit & Kontrolle",
    text: "Alle Freigaben manuell, vollständige Auditierbarkeit, EU-Hosting",
  },
  {
    icon: Lock,
    title: "Daten & Compliance",
    text: "DSGVO-konform, verschlüsselte Übertragung, keine Datenweitergabe",
  },
  {
    icon: Zap,
    title: "Integrationen",
    text: "Mail, Kalender, CRM, Dokumente – nahtlos in eure bestehenden Tools",
  },
  {
    icon: CheckCircle2,
    title: "Transparenz",
    text: "Klare Regeln, dokumentierte Workflows, messbarer Impact",
  },
]

interface PricingTrustProps {
  items?: TrustItem[]
}

export function PricingTrust({ items = defaultTrustItems }: PricingTrustProps) {
  return (
    <Section variant="normal" className="bg-surface dark:bg-background">
      <Container size="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Was ist enthalten
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Alle Pläne beinhalten diese Grundlagen für sichere, kontrollierte KI-Modernisierung
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon
            return (
              <SpotlightCard
                key={idx}
                className="p-6 text-center flex flex-col items-center gap-4 hover:border-action/20 transition-colors"
                spotlightColor="rgba(var(--action-rgb), 0.08)"
              >
                <div className="w-12 h-12 rounded-xl bg-action-soft flex items-center justify-center text-action">
                  <Icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">{item.title}</h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </SpotlightCard>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

