'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui/Section'
import { Link2, MessageSquare, Sparkles } from 'lucide-react'

interface TimelineStep {
  title: string
  text: string
}

interface AnimatedTimelineProps {
  title: string
  steps: TimelineStep[]
  locale?: string
}

const stepIcons = [Link2, MessageSquare, Sparkles]

export function AnimatedTimeline({ title, steps, locale = 'de' }: AnimatedTimelineProps) {
  return (
    <Section variant="normal" className="py-24 sm:py-32 overflow-hidden">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            {title}
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-action via-action/50 to-action/10" />

          {/* Steps */}
          <div className="space-y-12 sm:space-y-16">
            {steps.map((step, index) => {
              const Icon = stepIcons[index] || Sparkles
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-20 sm:pl-24"
                >
                  {/* Number Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                      delay: index * 0.2 + 0.1 
                    }}
                    className="absolute left-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-action text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg shadow-action/30"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="bg-surface border border-border rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow cursor-default"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-foreground-muted text-base sm:text-lg leading-relaxed">
                      {step.text}
                    </p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* End Dot */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="absolute left-6 sm:left-8 -bottom-4 w-4 h-4 rounded-full bg-action/30 -translate-x-1/2"
          />
        </div>
      </Container>
    </Section>
  )
}

