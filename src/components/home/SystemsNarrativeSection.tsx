"use client"

import { Section, Container } from "@/components/ui/Section"
import Image from "next/image"
import { useReducedMotion } from "framer-motion"
import { classNames } from "@/lib/classNames"

export function SystemsNarrativeSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section variant="normal" className="bg-background-muted dark:bg-background">
      <Container size="lg">
        {/* Header */}
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Anschluss an Deine bestehenden Abläufe
          </h2>
          <p className="text-lg text-foreground-muted leading-relaxed whitespace-pre-line">
            Dein Alltag besteht aus E-Mails, Anfragen, Dokumenten und Entscheidungen.
            Genau dort setzt die KI an.

            Informationen, die bisher verstreut waren,
            werden sinnvoll zusammengeführt und bleiben im richtigen Zusammenhang verfügbar.

            Statt ständig nachzuschauen oder Dinge weiterzuleiten,
            entsteht ein ruhiger, durchgängiger Arbeitsfluss.
          </p>
        </div>

        {/* Block 1: Bild links, Text rechts */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <div className="relative group mx-auto w-full max-w-sm md:max-w-none">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted/30 shadow-xl border border-border/50">
              <Image
                src="/media/system-1.jpg"
                alt="System-Integration: E-Mails, Dokumente und Anfragen in einem System"
                fill
                className={classNames(
                  "object-cover",
                  !shouldReduceMotion && "transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                )}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 500px"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
              {/* Fallback Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-muted/30 to-background-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/5 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-xs text-foreground-muted/60 uppercase tracking-widest font-semibold">Workflow Sync</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Alles läuft zusammen.
              </h3>
              <p className="text-lg text-foreground-muted leading-relaxed">
                E-Mails, Dokumente, Anfragen und Entscheidungen landen oft in unterschiedlichen Silos. Die KI führt diese Stränge zusammen.
              </p>
              <p className="text-lg text-foreground-muted leading-relaxed">
                Statt manueller Übergaben und Informationsverlust entsteht ein <span className="text-accent font-semibold">zentraler Wissensfluss</span>. Jede Entscheidung ist nachvollziehbar, jedes Dokument sofort im Kontext der Anfrage verfügbar.
              </p>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-foreground-muted">
                <div className="w-1.5 h-1.5 rounded-full bg-action/40" />
                <span>Alles läuft an einem Ort zusammen</span>
              </li>
              <li className="flex items-center gap-3 text-foreground-muted">
                <div className="w-1.5 h-1.5 rounded-full bg-action/40" />
                <span>Dokumente finden automatisch ihren Kontext</span>
              </li>
              <li className="flex items-center gap-3 text-foreground-muted">
                <div className="w-1.5 h-1.5 rounded-full bg-action/40" />
                <span>Entscheidungen bleiben nachvollziehbar</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Block 2: Bild rechts, Text links */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Integration ohne Umwege
              </h3>
              <p className="text-lg text-foreground-muted leading-relaxed whitespace-pre-line">
                Bestehende Systeme bleiben, wie sie sind.
                Sie werden nicht ersetzt, sondern sinnvoll ergänzt.

                Informationen fließen automatisch weiter,
                ohne dass Du Daten kopieren oder doppelt pflegen musst.

                Freigaben und Kontrolle laufen unauffällig im Hintergrund mit –
                Du entscheidest, was automatisch passiert und was nicht.
              </p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-foreground-muted">
                <div className="w-1.5 h-1.5 rounded-full bg-action/40" />
                <span>Keine zusätzlichen Oberflächen</span>
              </li>
              <li className="flex items-center gap-3 text-foreground-muted">
                <div className="w-1.5 h-1.5 rounded-full bg-action/40" />
                <span>Keine neue Komplexität</span>
              </li>
              <li className="flex items-center gap-3 text-foreground-muted">
                <div className="w-1.5 h-1.5 rounded-full bg-action/40" />
                <span>Volle Kontrolle</span>
              </li>
            </ul>
          </div>

          <div className="relative group mx-auto w-full max-w-sm md:max-w-none order-1 md:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted/30 shadow-xl border border-border/50">
              <Image
                src="/media/system-2.jpg"
                alt="System-Integration: Verbindung vorhandener Systeme ohne Tool-Chaos"
                fill
                className={classNames(
                  "object-cover",
                  !shouldReduceMotion && "transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                )}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 500px"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
              {/* Fallback Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-accent/10 to-background-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/5 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-xs text-foreground-muted/60 uppercase tracking-widest font-semibold">Data Bridge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
