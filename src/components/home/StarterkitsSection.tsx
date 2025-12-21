"use client"

import { Section, Container } from "@/components/ui/Section"
import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { Button } from "@/components/ui/Button"

export function StarterkitsSection() {
  return (
    <Section variant="normal" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid-pattern opacity-[0.03] pointer-events-none" />
      
      <Container size="xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Startpakete für schnelle Ergebnisse
          </h2>
          <p className="text-xl text-foreground-muted leading-relaxed">
            Keine langen Consulting-Projekte. Wähle ein Starterkit, um ein konkretes Problem zu lösen. In Wochen live, nicht in Monaten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Gastro Starter */}
          <SpotlightCard className="h-full flex flex-col group" spotlightColor="rgba(var(--accent-rgb), 0.2)">
            <div className="p-8 flex-1 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300">
                🍽️
              </div>
              <h3 className="text-2xl font-bold mb-3">Gastro Starter</h3>
              <p className="text-foreground-muted mb-6 flex-1 leading-relaxed">
                Das komplette Betriebssystem: QR-Bestellung, KDS, POS-Lite und Service-Inbox. Für Restaurants, Bars und Cafés.
              </p>
              
              <div className="mt-auto pt-6 border-t border-border/50">
                <ul className="space-y-3 text-sm text-foreground-muted mb-8">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Chat-first Bestellen
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Küche & Bar (KDS)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Mehrsprachig
                  </li>
                </ul>
                <Button variant="primary" className="w-full" asChild href="/solutions/gastro">
                  Details ansehen
                </Button>
              </div>
            </div>
          </SpotlightCard>

          {/* Inbox Starter */}
          <SpotlightCard className="h-full flex flex-col group" spotlightColor="rgba(50, 50, 200, 0.1)">
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  📬
                </div>
                <span className="px-2 py-1 rounded-md bg-blue-500/10 text-blue-500 text-xs font-bold uppercase tracking-wider">
                  Pilot
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">Inbox Starter</h3>
              <p className="text-foreground-muted mb-6 flex-1 leading-relaxed">
                KI liest und kategorisiert E-Mails & Nachrichten. Entwürfe werden vorbereitet, Daten ins CRM übernommen.
              </p>
              
              <div className="mt-auto pt-6 border-t border-border/50">
                <ul className="space-y-3 text-sm text-foreground-muted mb-8">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Auto-Kategorisierung
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Antwort-Entwürfe
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> CRM-Integration
                  </li>
                </ul>
                <Button variant="secondary" className="w-full hover:border-blue-500/50 hover:bg-blue-500/5" asChild href="/kontakt?topic=inbox">
                  Pilot anfragen
                </Button>
              </div>
            </div>
          </SpotlightCard>

          {/* Backoffice Starter */}
          <SpotlightCard className="h-full flex flex-col group" spotlightColor="rgba(50, 200, 100, 0.1)">
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  📂
                </div>
                <span className="px-2 py-1 rounded-md bg-green-500/10 text-green-500 text-xs font-bold uppercase tracking-wider">
                  Pilot
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3">Backoffice Starter</h3>
              <p className="text-foreground-muted mb-6 flex-1 leading-relaxed">
                Dokumente automatisch verarbeiten. Rechnungen auslesen, Verträge prüfen, Daten strukturieren.
              </p>
              
              <div className="mt-auto pt-6 border-t border-border/50">
                <ul className="space-y-3 text-sm text-foreground-muted mb-8">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> OCR & Extraktion
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Plausibilitäts-Check
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Datev-Export
                  </li>
                </ul>
                <Button variant="secondary" className="w-full hover:border-green-500/50 hover:bg-green-500/5" asChild href="/kontakt?topic=backoffice">
                  Pilot anfragen
                </Button>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </Container>
    </Section>
  )
}

