"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Section, Container } from "@/components/ui/Section"
import { useLocale } from "@/hooks/useLocale"
import { t } from "@/lib/i18n"
import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { motion as motionPolicy } from "@/lib/motion"

export function ProofSection() {
  const locale = useLocale()
  const shouldReduceMotion = useReducedMotion()

  const items = t(locale, "pages.home.proof.items") as Array<{ title: string; subtitle: string }>

  return (
    <Section variant="normal" className="bg-surface dark:bg-background">
      <Container size="lg">
        <div className="text-center mb-16">
          <h2 className="mb-4 tracking-tight">{t(locale, "pages.home.proof.h2")}</h2>
          <p className="text-lg text-foreground-muted prose-wide mx-auto leading-relaxed whitespace-pre-line">
            {t(locale, "pages.home.proof.p")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 grid-rows-[auto_auto] lg:grid-rows-2">
          {items.map((it, idx) => {
             const isHero = idx === 0
             return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: motionPolicy.reveal.duration, ease: motionPolicy.reveal.ease, delay: idx * 0.05 }}
                className={isHero ? "lg:col-span-2 lg:row-span-2" : "col-span-1"}
              >
                <SpotlightCard className="p-6 h-full flex flex-col" withBorderBeam={isHero}>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className={`font-semibold text-foreground mb-1 ${isHero ? "text-2xl" : "text-lg"}`}>{it.title}</h3>
                      <p className="text-sm text-foreground-muted leading-relaxed">{it.subtitle}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-accent/10 ring-1 ring-accent/20 flex items-center justify-center shrink-0">
                       <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                  </div>

                  <div className="mt-auto pt-4">
                     <DeviceFrame seed={idx} isHero={isHero} />
                  </div>
                </SpotlightCard>
              </motion.div>
             )
          })}
        </div>
      </Container>
    </Section>
  )
}

function DeviceFrame({ seed = 0, isHero = false }: { seed?: number, isHero?: boolean }) {
  // Use CSS vars for inverse tokens
  const bg = "var(--color-inverse-bg)"
  const surface = "var(--color-inverse-surface)"
  const border = "var(--color-inverse-border)"
  const fgMuted = "var(--color-inverse-fg-muted)"

  return (
    <div 
      className="w-full border rounded-3xl overflow-hidden shadow-glass relative select-none"
      style={{ 
        backgroundColor: bg,
        borderColor: border
      }}
    >
      {/* Status Bar */}
      <div className="h-6 flex items-center justify-between px-5 py-2 opacity-40">
        <div className="w-6 h-1 rounded-full" style={{ backgroundColor: fgMuted }} />
        <div className="flex gap-1">
             <div className="w-1 h-1 rounded-full" style={{ backgroundColor: fgMuted }} />
             <div className="w-1 h-1 rounded-full" style={{ backgroundColor: fgMuted }} />
        </div>
      </div>
      
      {/* App Header */}
      <div className="px-5 py-3 flex items-center gap-3 border-b border-[color:var(--color-inverse-border)]/50">
         <div className="w-8 h-8 rounded-full border flex items-center justify-center" style={{ backgroundColor: surface, borderColor: border }}>
            <div className="w-3 h-3 rounded-sm opacity-50" style={{ backgroundColor: fgMuted }} />
         </div>
         <div className="space-y-1.5">
            <div className="h-2 w-20 rounded-full opacity-60" style={{ backgroundColor: fgMuted }} />
            <div className="h-1.5 w-12 rounded-full opacity-30" style={{ backgroundColor: fgMuted }} />
         </div>
      </div>

      {/* Dashboard Grid */}
      <div className="p-4 space-y-3">
         {/* Hero Card */}
         <div className="h-24 rounded-2xl border p-4 relative overflow-hidden flex flex-col justify-between" 
              style={{ backgroundColor: surface, borderColor: border }}>
             <div className="h-1.5 w-8 rounded-full bg-accent/60" />
             <div className="space-y-2">
                 <div className="h-4 w-16 rounded-md opacity-20" style={{ backgroundColor: fgMuted }} />
                 <div className="h-2 w-24 rounded-full opacity-10" style={{ backgroundColor: fgMuted }} />
             </div>
             {/* Decor */}
             <div className="absolute right-0 bottom-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl transform translate-x-1/2 translate-y-1/2" />
         </div>

         {/* List Items */}
         <div className="space-y-2">
            {[1, 2].map(i => (
                <div key={i} className="h-10 rounded-xl border flex items-center gap-3 px-3"
                     style={{ backgroundColor: surface, borderColor: border }}>
                    <div className="w-6 h-6 rounded-md opacity-10" style={{ backgroundColor: fgMuted }} />
                    <div className="h-1.5 w-16 rounded-full opacity-30" style={{ backgroundColor: fgMuted }} />
                    <div className="ml-auto h-1.5 w-8 rounded-full opacity-20" style={{ backgroundColor: fgMuted }} />
                </div>
            ))}
         </div>
      </div>
    </div>
  )
}
