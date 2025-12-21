"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useLocale } from "@/hooks/useLocale"
import { t } from "@/lib/i18n"
import { ScanLine, MessageSquare, ChefHat, CheckCircle2 } from "lucide-react"
import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { Section, Container } from "@/components/ui/Section"

export function FlowTimeline() {
  const locale = useLocale()
  const reduceMotion = useReducedMotion()

  const icons = [ScanLine, MessageSquare, ChefHat, CheckCircle2] as const
  const steps = (t(locale, "pages.home.timeline.steps") as Array<{ title: string; desc: string }>).map((step, i) => ({
    ...step,
    icon: icons[i] ?? icons[0],
  }))

  return (
    <Section variant="normal" surface="surface" className="py-16 sm:py-24">
      <Container size="xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 break-words px-4">{t(locale, "pages.home.timeline.h2") as string}</h2>
          <p className="text-lg sm:text-xl text-foreground-muted max-w-2xl mx-auto px-4 break-words">{t(locale, "pages.home.timeline.p") as string}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={reduceMotion ? { duration: 0 } : { delay: i * 0.1, duration: 0.5 }}
            >
              <SpotlightCard className="h-full p-6 flex flex-col items-start gap-4 hover:border-accent/30 transition-colors">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <step.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">{step.desc}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

