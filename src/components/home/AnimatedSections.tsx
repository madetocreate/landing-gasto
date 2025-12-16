"use client"

import { motion, Variants, useReducedMotion } from "framer-motion"
import { Section, Container } from "@/components/ui/Section"
import { GlassCard } from "@/components/ui/GlassCard"
import { Scan, MessageSquareText, CheckCircle2 } from "lucide-react"
import { motion as motionPolicy } from "@/lib/motion"

interface TextSectionProps {
  title: string
  text: string
  extra: string
}

export function AnimatedProblemSection({ title, text, extra }: TextSectionProps) {
  return (
    <Section variant="normal">
      <Container size="md">
        <h2 className="mb-6">{title}</h2>
        <div className="text-lg text-foreground-muted prose">
          <p className="mb-1">{text}</p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-accent font-medium"
          >
            {extra}
          </motion.p>
        </div>
      </Container>
    </Section>
  )
}

export function AnimatedSolutionSection({ title, text, extra }: TextSectionProps) {
  return (
    <Section variant="normal">
      <Container size="md">
        <h2 className="mb-6">{title}</h2>
        <div className="text-lg text-foreground-muted prose">
          <p className="mb-1">{text}</p>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-accent font-medium"
          >
            {extra}
          </motion.p>
        </div>
      </Container>
    </Section>
  )
}

export interface ProblemSolutionBlock {
  title: string
  text: string
  align: "left" | "right"
}

export function AnimatedAlternatingSection({ blocks }: { blocks: ProblemSolutionBlock[] }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section variant="normal" className="space-y-12 md:space-y-32 bg-surface dark:bg-background">
      <Container size="lg">
        <div className="flex flex-col gap-16 md:gap-32">
          {blocks.map((block, i) => (
            <div 
              key={i} 
              className={`flex flex-col ${block.align === "left" ? "md:items-start" : "md:items-end"}`}
            >
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: block.align === "left" ? -40 : 40, y: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: motionPolicy.reveal.duration, ease: motionPolicy.reveal.ease }}
                className="max-w-2xl w-full"
              >
                <GlassCard className="p-8 md:p-12 relative overflow-hidden group">
                  <div className={`absolute top-0 bottom-0 w-1 bg-accent/50 transition-opacity duration-500 ${block.align === "left" ? "left-0" : "right-0"}`} />
                  <h2 className="mb-6 text-3xl font-bold tracking-tight">{block.title}</h2>
                  <p className="text-lg text-foreground-muted leading-relaxed">
                    {block.text}
                  </p>
                </GlassCard>
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

interface HowStep {
  title: string
  text: string
}

interface HowToSectionProps {
  title: string
  steps: HowStep[]
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 50 
    } 
  }
}

const icons = [Scan, MessageSquareText, CheckCircle2]

export function AnimatedHowToSection({ title, steps }: HowToSectionProps) {
  return (
    <Section variant="normal" id="how" className="bg-surface dark:bg-background">
      <Container size="lg">
        <h2 className="mb-16 text-center text-3xl font-bold tracking-tight">{title}</h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, i) => {
            const Icon = icons[i] || Scan
            return (
              <motion.div key={i} variants={itemVariant}>
                <GlassCard className="h-full p-8 flex flex-col items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent mb-2">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-foreground-muted leading-relaxed">{step.text}</p>
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}

interface ModuleItem {
  title: string
  text: string
}

interface ModulesSectionProps {
  title: string
  items: ModuleItem[]
}

export function AnimatedModulesSection({ title, items }: ModulesSectionProps) {
  return (
    <Section variant="normal" className="bg-surface dark:bg-background">
      <Container size="lg">
        <h2 className="mb-16 text-center text-3xl font-bold tracking-tight">{title}</h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {items.map((item, i) => (
            <motion.div key={i} variants={itemVariant}>
              <GlassCard variant="module" className="h-full p-8 flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-1 bg-accent/30 rounded-full mb-6 group-hover:bg-accent transition-colors duration-300" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-foreground-muted leading-relaxed text-lg">{item.text}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
