"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion"
import { useLocale } from "@/hooks/useLocale"
import { t } from "@/lib/i18n"
import { Button } from "@/components/ui/Button"
import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { MessageSquareText, Globe, ChefHat, MonitorSmartphone, BellRing, FileDown } from "lucide-react"
import type { ComponentType } from "react"

export function FeatureShowcase() {
  const locale = useLocale()
  const containerRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  // Feature Items with Icons
  const items = (t(locale, "pages.home.featureShowcase.items") as string[]) || []
  const icons = [MessageSquareText, Globe, ChefHat, MonitorSmartphone, BellRing, FileDown]

  // Scroll Progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] // Start animation later
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  // Optimized Parallax Transforms (Smoother, earlier entry)
  // Left Side
  const yLeft1 = useTransform(smoothProgress, [0.1, 0.4], [150, 0])
  const opacityLeft1 = useTransform(smoothProgress, [0.1, 0.3], [0, 1])

  const yLeft2 = useTransform(smoothProgress, [0.25, 0.55], [150, 0])
  const opacityLeft2 = useTransform(smoothProgress, [0.25, 0.45], [0, 1])

  const yLeft3 = useTransform(smoothProgress, [0.4, 0.7], [150, 0])
  const opacityLeft3 = useTransform(smoothProgress, [0.4, 0.6], [0, 1])

  // Right Side
  const yRight1 = useTransform(smoothProgress, [0.15, 0.45], [150, 0])
  const opacityRight1 = useTransform(smoothProgress, [0.15, 0.35], [0, 1])

  const yRight2 = useTransform(smoothProgress, [0.3, 0.6], [150, 0])
  const opacityRight2 = useTransform(smoothProgress, [0.3, 0.5], [0, 1])

  const yRight3 = useTransform(smoothProgress, [0.45, 0.75], [150, 0])
  const opacityRight3 = useTransform(smoothProgress, [0.45, 0.65], [0, 1])

  // Mobile / Reduced Motion View
  if (shouldReduceMotion) {
    return (
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Phone Static */}
            <div className="relative mx-auto w-72 sm:w-80 aspect-[9/19] bg-[color:var(--color-inverse-bg)] rounded-2xl border border-[color:var(--color-inverse-border)] shadow-glass overflow-hidden order-2 md:order-1">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-6 rounded-full bg-[color:var(--color-inverse-bg)] border border-[color:var(--color-inverse-border)] z-30" />
              <video src="/demo.mp4" className="w-full h-full object-cover" autoPlay muted loop playsInline />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-[color:var(--color-inverse-border)]" />
            </div>

            {/* Bento Grid Static */}
            <div className="grid gap-6 sm:grid-cols-2 order-1 md:order-2">
              {items.map((text, i) => {
                const Icon = icons[i] || MessageSquareText
                return (
                  <SpotlightCard key={i} className="p-6">
                    <Icon className="w-8 h-8 text-accent mb-4" />
                    <p className="text-base font-semibold text-foreground leading-snug">{text}</p>
                  </SpotlightCard>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={containerRef} className="relative h-[220vh] bg-background">
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden">
        
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-center items-center">
          
          {/* Phone Mockup (Center) */}
          <div className="relative z-20 w-72 sm:w-80 aspect-[9/19] bg-[color:var(--color-inverse-bg)] rounded-2xl border border-[color:var(--color-inverse-border)] shadow-glass overflow-hidden transform-gpu">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-6 rounded-full bg-[color:var(--color-inverse-bg)] border border-[color:var(--color-inverse-border)] z-30" />
            <video
              src="/demo.mp4"
              className="w-full h-full object-cover bg-[color:var(--color-inverse-surface)]"
              autoPlay
              muted
              loop
              playsInline
              poster="/demo-poster.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--color-inverse-border)] to-transparent pointer-events-none z-20 mix-blend-overlay" />
          </div>

          {/* Denser Layout: Reduced Gap from 32 to 16/24 */}
          
          {/* Left Side Cards */}
          <div className="absolute left-4 lg:left-24 top-1/2 -translate-y-1/2 w-[280px] lg:w-[300px] hidden md:flex flex-col gap-24 pointer-events-none">
            <motion.div style={{ y: yLeft1, opacity: opacityLeft1 }} className="transform-gpu pointer-events-auto">
              <FeatureCard icon={icons[0]} text={items[0]} align="left" />
            </motion.div>
            <motion.div style={{ y: yLeft2, opacity: opacityLeft2 }} className="transform-gpu pl-8 pointer-events-auto">
              <FeatureCard icon={icons[2]} text={items[2]} align="left" />
            </motion.div>
            <motion.div style={{ y: yLeft3, opacity: opacityLeft3 }} className="transform-gpu pointer-events-auto">
              <FeatureCard icon={icons[4]} text={items[4]} align="left" />
            </motion.div>
          </div>

          {/* Right Side Cards */}
          <div className="absolute right-4 lg:right-24 top-1/2 -translate-y-1/2 w-[280px] lg:w-[300px] hidden md:flex flex-col gap-24 pointer-events-none">
            <motion.div style={{ y: yRight1, opacity: opacityRight1 }} className="transform-gpu pr-8 pointer-events-auto">
              <FeatureCard icon={icons[1]} text={items[1]} align="right" />
            </motion.div>
            <motion.div style={{ y: yRight2, opacity: opacityRight2 }} className="transform-gpu pointer-events-auto">
              <FeatureCard icon={icons[3]} text={items[3]} align="right" />
            </motion.div>
            <motion.div style={{ y: yRight3, opacity: opacityRight3 }} className="transform-gpu pr-6 pointer-events-auto">
              <FeatureCard icon={icons[5]} text={items[5]} align="right" />
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Mobile Fallback */}
      <div className="md:hidden absolute inset-0 bg-background z-40 overflow-y-auto py-24 px-4">
         <div className="flex justify-center mb-12">
            <div className="w-64 aspect-[9/19] bg-[color:var(--color-inverse-bg)] rounded-2xl border border-[color:var(--color-inverse-border)] shadow-glass overflow-hidden">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-[color:var(--color-inverse-bg)] border border-[color:var(--color-inverse-border)] z-30" />
              <video src="/demo.mp4" className="w-full h-full object-cover" autoPlay muted loop playsInline />
            </div>
         </div>
         <div className="grid gap-4">
             {items.map((text, i) => {
                const Icon = icons[i] || MessageSquareText
                return (
                  <SpotlightCard key={i} className="flex items-center gap-4 p-5">
                    <div className="p-2.5 bg-accent/10 rounded-xl text-accent">
                       <Icon className="w-5 h-5" />
                    </div>
                    <p className="text-base font-medium">{text}</p>
                  </SpotlightCard>
                )
             })}
         </div>
      </div>

    </section>
  )
}

type IconComponent = ComponentType<{ className?: string }>

function FeatureCard({
  icon: Icon,
  text,
  align = "left",
}: {
  icon: IconComponent
  text: string
  align?: "left" | "right"
}) {
  return (
    <SpotlightCard className={`flex items-center gap-4 p-5 max-w-sm ${align === "right" ? "flex-row-reverse text-right" : "flex-row text-left"} bg-surface/90 backdrop-blur-md`}>
      <div className="flex-shrink-0 p-3 bg-accent/10 rounded-xl text-accent">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-base font-semibold text-foreground leading-snug">{text}</p>
      </div>
    </SpotlightCard>
  )
}
