"use client"

import { Section, Container } from "@/components/ui/Section"
import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { useReducedMotion } from "framer-motion"
import { classNames } from "@/lib/classNames"

interface FAQItem {
  q: string
  a: string
}

interface PricingFAQProps {
  title?: string
  items: FAQItem[]
}

export function PricingFAQ({ title = "Häufige Fragen", items }: PricingFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const shouldReduceMotion = useReducedMotion()

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section variant="normal" className="bg-background">
      <Container size="md">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{title}</h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Kurze Antworten auf die wichtigsten Fragen zu unseren Plänen
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <SpotlightCard
                key={idx}
                className={classNames(
                  "overflow-hidden",
                  !shouldReduceMotion && "transition-all duration-200"
                )}
                spotlightColor="rgba(var(--accent-rgb), 0.05)"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className={classNames(
                    "w-full p-6 flex items-start justify-between gap-4 text-left hover:bg-surface/50",
                    !shouldReduceMotion && "transition-colors"
                  )}
                  aria-expanded={isOpen}
                >
                  <h3 className="font-bold text-foreground text-lg pr-8 flex-1">
                    {item.q}
                  </h3>
                  <ChevronDown
                    className={classNames(
                      "w-5 h-5 text-foreground-muted shrink-0",
                      !shouldReduceMotion && "transition-transform duration-200",
                      isOpen && "transform rotate-180"
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-foreground-muted leading-relaxed">{item.a}</p>
                  </div>
                )}
              </SpotlightCard>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

