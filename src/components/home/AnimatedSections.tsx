"use client"

import { motion, Variants, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Section, Container } from "@/components/ui/Section"
import { GlassCard } from "@/components/ui/GlassCard"
import { Scan, MessageSquareText, CheckCircle2 } from "lucide-react"
import { motion as motionPolicy } from "@/lib/motion"

export interface ProblemSolutionBlock {
  title: string
  text: string
  align: "left" | "right"
}

export function AnimatedAlternatingSection({ blocks }: { blocks: ProblemSolutionBlock[] }) {
  const shouldReduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Scroll progress for the connecting line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <Section variant="normal" className="space-y-12 md:space-y-32 bg-surface dark:bg-background relative overflow-hidden">
      <Container size="lg">
        <div ref={containerRef} className="relative flex flex-col gap-24 md:gap-40">
          
          {/* Central Connecting Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block -translate-x-1/2">
             <motion.div 
               style={{ height: lineHeight }} 
               className="w-full bg-action origin-top"
             />
          </div>

          {blocks.map((block, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col ${block.align === "left" ? "md:items-start" : "md:items-end"}`}
            >
              {/* Connector Dot */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-action hidden md:block z-10 shadow-sm">
                <div className="absolute inset-1 rounded-full bg-action animate-pulse" />
              </div>

              {/* Connecting Horizontal Line */}
              <div 
                className={`absolute top-[54px] h-px bg-border hidden md:block w-1/2 ${
                  block.align === "left" ? "left-1/2" : "right-1/2"
                }`}
              >
                 <motion.div 
                   initial={{ scaleX: 0 }}
                   whileInView={{ scaleX: 1 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                   className={`h-full bg-action/30 origin-${block.align === "left" ? "left" : "right"}`}
                 />
              </div>

              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: block.align === "left" ? -40 : 40, y: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: motionPolicy.reveal.duration, ease: motionPolicy.reveal.ease }}
                className={`max-w-xl w-full relative z-20 ${block.align === "left" ? "md:mr-auto" : "md:ml-auto"}`}
              >
                <GlassCard className="p-8 md:p-10 relative overflow-hidden group border-l-4 border-l-transparent hover:border-l-action transition-all duration-300">
                  <h2 className="mb-4 text-2xl md:text-3xl font-bold tracking-tight">{block.title}</h2>
                  <p className="text-lg text-foreground-muted leading-relaxed whitespace-pre-line">
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
                <GlassCard className="h-full p-8 flex flex-col items-start gap-4 hover:border-action/20 transition-colors">
                  <div className="p-3 rounded-xl bg-action-soft text-action mb-2">
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
                  <div className="w-10 h-1 bg-action/30 rounded-full mb-6 group-hover:bg-action transition-colors duration-300" />
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
