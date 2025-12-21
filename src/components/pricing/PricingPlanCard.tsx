"use client"

import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { Button } from "@/components/ui/Button"
import { Check, Star, Sparkles } from "lucide-react"
import { classNames } from "@/lib/classNames"
import { motion, useReducedMotion } from "framer-motion"

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
  locale?: string
  href?: string
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
  locale = 'de',
  href,
}: PricingPlanCardProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={shouldReduceMotion ? { duration: 0 } : { 
        duration: 0.6, 
        ease: [0.23, 1, 0.32, 1],
        delay: index * 0.1 
      }}
      className="h-full relative"
    >
      {/* Glow Effect for Popular Plan */}
      {isPopular && (
        <div className="absolute -inset-1 bg-gradient-to-r from-action/30 via-action/20 to-action/30 rounded-3xl blur-2xl opacity-60 -z-10" />
      )}

      {isPopular && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="bg-gradient-to-r from-action to-emerald-600 text-white text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full shadow-lg shadow-action/30 flex items-center gap-2 border-2 border-white">
            <Star className="w-3 h-3 fill-current" />
            Beliebt
          </div>
        </motion.div>
      )}

      <SpotlightCard
        className={classNames(
          "p-6 sm:p-8 md:p-10 h-full flex flex-col transition-all duration-500 rounded-2xl sm:rounded-3xl border-2 group",
          isPopular
            ? "bg-white shadow-[0_32px_64px_-12px_rgba(16,185,129,0.25)] border-action/30 sm:scale-[1.03] z-10 ring-1 ring-action/10"
            : "bg-white/50 border-stone-100 hover:border-stone-200 hover:shadow-xl"
        )}
        withBorderBeam={isPopular}
        beamDuration={8}
        beamColor="var(--color-action)"
        spotlightColor={isPopular ? "rgba(var(--action-rgb), 0.12)" : "rgba(var(--brand-rgb), 0.03)"}
      >
        {/* Header */}
        <div className="mb-8">
          <div className={classNames(
            "text-xs font-bold uppercase tracking-[0.2em] mb-3 transition-colors duration-500",
            isPopular ? "text-action" : "text-stone-400 group-hover:text-stone-600"
          )}>
            {tag}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tighter leading-none mb-4 break-words">
            {name}
          </h3>
          
          {/* Price */}
          {price && (
            <div className="flex items-baseline gap-1 mt-4 sm:mt-6">
              <span className="text-xs sm:text-sm font-bold text-stone-400 self-start mt-2">€</span>
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-stone-900">
                {price}
              </span>
              <span className="text-xs sm:text-sm font-bold text-stone-400 ml-1 uppercase tracking-widest">{billingPeriod.replace('/', '')}</span>
            </div>
          )}
        </div>

        <div className="h-px w-full bg-stone-100 mb-8" />

        {/* Features */}
        <ul className="space-y-4 sm:space-y-5 mb-8 sm:mb-10 flex-1">
          {items.map((item, idx) => (
            <li key={idx} className="flex gap-3 sm:gap-4 text-sm sm:text-base">
              <div className={classNames(
                "w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-500",
                isPopular ? "bg-emerald-50 text-emerald-600" : "bg-stone-100 text-stone-400 group-hover:bg-stone-200 group-hover:text-stone-600"
              )}>
                <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={4} />
              </div>
              <span className="leading-relaxed font-medium text-stone-600 group-hover:text-stone-900 transition-colors duration-500 break-words">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="relative">
          <Button
            variant={isPopular ? "primary" : "secondary"}
            size="lg"
            asChild
            href={href || `/${locale}/check`}
            className={classNames(
              "w-full rounded-xl sm:rounded-2xl h-12 sm:h-14 text-base sm:text-lg font-bold tracking-tight transition-all duration-500 shadow-sm",
              isPopular ? "shadow-emerald-200/50 hover:shadow-emerald-300/50 sm:hover:scale-[1.02]" : "hover:bg-stone-100"
            )}
          >
            <div className="flex items-center gap-2">
              {cta}
              {isPopular && <Sparkles className="w-4 h-4" />}
            </div>
          </Button>
        </div>

        {/* Note */}
        {note && isPopular && (
          <p className="text-[10px] font-bold text-stone-400 mt-4 text-center uppercase tracking-widest">
            {note}
          </p>
        )}
      </SpotlightCard>
    </motion.div>
  )
}

