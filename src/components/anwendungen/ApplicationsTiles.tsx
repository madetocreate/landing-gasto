"use client"

import { Section, Container } from "@/components/ui/Section"
import Link from "next/link"
import { classNames } from "@/lib/classNames"
import { useReducedMotion } from "framer-motion"

interface ApplicationTile {
  key: string
  label: string
  href: string
  description: string
}

const tiles: ApplicationTile[] = [
  {
    key: 'inbox',
    label: 'Intelligenter Posteingang',
    href: '/anwendungen/intelligenter-posteingang',
    description: 'Alle Nachrichten an einem Ort – nur das Wichtige kommt bei dir an.'
  },
  {
    key: 'website-telefon',
    label: 'Website & Telefon Assistent',
    href: '/anwendungen/website-telefon',
    description: 'Verpasse nie wieder eine Anfrage oder einen Termin.'
  },
  {
    key: 'dokumente-ordnung',
    label: 'Dokumente & Ordnung',
    href: '/anwendungen/dokumente-ordnung',
    description: 'Nie wieder Zettelchaos. Strukturierte Ergebnisse aus deinen Dokumenten.'
  },
  {
    key: 'kunden-vorgaenge',
    label: 'Kunden & Vorgänge',
    href: '/anwendungen/kunden-vorgaenge',
    description: 'Behalte den Überblick, ohne ein neues System pflegen zu müssen.'
  },
  {
    key: 'bewertungen',
    label: 'Bewertungen',
    href: '/anwendungen/bewertungen',
    description: 'Mehr Bewertungen, bessere Außenwirkung, mehr Vertrauen.'
  }
]

export function ApplicationsTiles() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section variant="normal" id="anwendungen" className="relative">
      <Container size="xl">
        <div className="space-y-4">
          {tiles.map((tile) => (
            <Link
              key={tile.key}
              href={tile.href}
              className={classNames(
                "block group relative",
                "p-6 md:p-8 rounded-lg",
                "bg-surface/50 dark:bg-surface/30 border border-border/50",
                "hover:bg-surface/70 dark:hover:bg-surface/50 hover:border-action/30",
                "transition-all duration-300 ease-out",
                shouldReduceMotion ? "" : "hover:shadow-lg"
              )}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-action transition-colors">
                    {tile.label}
                  </h3>
                  <p className="text-foreground-muted leading-relaxed">
                    {tile.description}
                  </p>
                </div>
                <div className="flex items-center text-action opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium mr-2">Mehr erfahren</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  )
}

