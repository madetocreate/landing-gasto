"use client"

import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { Button } from "@/components/ui/Button"
import { Check } from "lucide-react"
import { classNames } from "@/lib/classNames"
import { motion, useReducedMotion } from "framer-motion"
import { motion as motionPolicy } from "@/lib/motion"

interface PricingPlanCardProps {
  name: string
  tag: string
  price: string
  items: string[]
  cta: string
  isPopular?: boolean
  billingPeriod?: string
  note?: string
  index?: number
}

export function PricingPlanCard({
  name,
  tag,
  price,
  items,
  cta,
  isPopular = false,
  billingPeriod = "/Monat",
  note,
  index = 0,
}: PricingPlanCardProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={shouldReduceMotion ? { duration: 0 } : { 
        duration: motionPolicy.reveal.duration, 
        ease: motionPolicy.reveal.ease,
        delay: index * 0.1 
      }}
      className="h-full"
    >
      <SpotlightCard
        className={classNames(
          "p-8 h-full flex flex-col transition-all duration-300",
          isPopular
            ? "bg-surface shadow-xl ring-1 ring-action/20 border-action/10"
            : "bg-surface/60"
        )}
        withBorderBeam={isPopular}
        beamDuration={10}
        beamColor="var(--color-action)"
        spotlightColor={isPopular ? "rgba(var(--action-rgb), 0.15)" : undefined}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex-1">
            <div className="text-sm font-medium text-action mb-2 uppercase tracking-wider">
              {tag}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              {name}
            </h3>
          </div>
          {isPopular && (
            <div className="text-xs font-semibold px-3 py-1 rounded-full bg-action text-action-foreground shadow-sm whitespace-nowrap">
              Empfohlen
            </div>
          )}
        </div>

        {/* Price - Only show if price is provided */}
        {price && (
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              {price}€
            </span>
            <span className="text-base text-foreground-muted">{billingPeriod}</span>
          </div>
        )}

        {/* Features */}
        <ul className="space-y-4 mb-8 flex-1">
          {items.map((item, idx) => (
            <li key={idx} className="flex gap-3 text-sm md:text-base text-foreground-muted">
              <Check className="w-5 h-5 text-action shrink-0 mt-0.5" strokeWidth={2.5} />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          variant={isPopular ? "primary" : "secondary"}
          size="lg"
          asChild
          href="/check"
          className="w-full rounded-xl h-12 text-base font-semibold shadow-sm"
        >
          {cta}
        </Button>

        {/* Note */}
        {note && isPopular && (
          <p className="text-xs text-foreground-muted mt-4 text-center leading-relaxed">
            {note}
          </p>
        )}
      </SpotlightCard>
    </motion.div>
  )
}

