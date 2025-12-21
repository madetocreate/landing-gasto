"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/GlassCard"
import { Section, Container } from "@/components/ui/Section"
import { useLocale } from "@/hooks/useLocale"
import { t } from "@/lib/i18n"
import { Database, Share2, Layers, Zap } from "lucide-react"
import type { ComponentType } from "react"

export function FeatureEcosystem() {
  const locale = useLocale()

  return (
    <Section
      variant="normal"
      className="overflow-hidden bg-[color:var(--color-inverse-bg)] text-[color:var(--color-inverse-fg)]"
    >
      <Container size="lg">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t(locale, "pages.features.ecosystem.h2") as string}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[color:var(--color-inverse-fg-muted)]">
            {t(locale, "pages.features.ecosystem.p") as string}
          </p>
        </div>

        <div className="relative h-[600px] flex items-center justify-center">
          {/* Orbit Circles */}
          <div className="absolute w-[400px] h-[400px] border border-[color:var(--color-inverse-border)] rounded-full animate-spin-slow opacity-40" />
          <div className="absolute w-[600px] h-[600px] border border-[color:var(--color-inverse-border)] rounded-full animate-spin-reverse-slow opacity-20" />
          
          {/* Center Hub */}
          <div className="relative z-10 w-32 h-32 bg-surface rounded-full shadow-glass flex items-center justify-center border border-border">
            <div className="text-center">
              <span className="text-3xl font-bold text-accent">G</span>
              <p className="text-[10px] uppercase tracking-widest font-semibold mt-1">
                {t(locale, "pages.features.ecosystem.core") as string}
              </p>
            </div>
          </div>

          {/* Orbiting Items */}
          <FloatingNode icon={Database} label={t(locale, "pages.features.ecosystem.nodes.0") as string} angle={0} radius={200} delay={0} />
          <FloatingNode icon={Share2} label={t(locale, "pages.features.ecosystem.nodes.1") as string} angle={90} radius={200} delay={1} />
          <FloatingNode icon={Layers} label={t(locale, "pages.features.ecosystem.nodes.2") as string} angle={180} radius={200} delay={2} />
          <FloatingNode icon={Zap} label={t(locale, "pages.features.ecosystem.nodes.3") as string} angle={270} radius={200} delay={3} />
        </div>
      </Container>
    </Section>
  )
}

type IconComponent = ComponentType<{ className?: string }>

function FloatingNode({
  icon: Icon,
  label,
  angle,
  radius,
  delay,
}: {
  icon: IconComponent
  label: string
  angle: number
  radius: number
  delay: number
}) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear", delay: -delay * 10 }}
      style={{ width: radius * 2, height: radius * 2, marginLeft: -radius, marginTop: -radius }}
    >
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ transformOrigin: "center center", rotate: angle }}
        animate={{ rotate: -360 }} // Counter-rotate to keep upright
        transition={{ duration: 40, repeat: Infinity, ease: "linear", delay: -delay * 10 }}
      >
        <GlassCard className="p-4 flex flex-col items-center gap-2 w-24 h-24 justify-center bg-surface/80 backdrop-blur-md hover:scale-110 transition-transform">
          <Icon className="w-6 h-6 text-foreground-muted" />
          <span className="text-xs font-medium text-foreground">{label}</span>
        </GlassCard>
      </motion.div>
    </motion.div>
  )
}

