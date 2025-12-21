"use client"

import { Section, Container } from "@/components/ui/Section"
import { Marquee } from "@/components/ui/Marquee"
import { Locale, t } from "@/lib/i18n"
import { useReducedMotion, motion } from "framer-motion"
import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { useMemo } from "react"
import Image from "next/image"

interface SocialProofProps {
  locale: Locale;
}

// Avatar images - using placeholder gradient avatars
const avatarColors = [
  'from-emerald-400 to-cyan-500',
  'from-violet-400 to-purple-500',
  'from-orange-400 to-rose-500',
  'from-blue-400 to-indigo-500',
  'from-pink-400 to-rose-500',
  'from-teal-400 to-emerald-500',
]

export function SocialProof({ locale }: SocialProofProps) {
  const shouldReduceMotion = useReducedMotion()

  const testimonialsRow1 = useMemo(() => 
    t(locale, "pages.home.socialProof.testimonials") as Array<{
    name: string
    text: string
    tag?: string
    }>, [locale]
  )
  
  const TestimonialCard = ({ name, text, role, index }: { name: string; text: string; role?: string; index: number }) => {
    // Generate initials
    const initials = name.slice(0, 2).toUpperCase()
    const avatarGradient = avatarColors[index % avatarColors.length]
    
    return (
      <SpotlightCard className="flex-shrink-0 w-80 mx-4 p-6 h-full flex flex-col gap-4 bg-surface/80 hover:scale-[1.02] transition-transform duration-300 group" style={{ willChange: 'transform' }}>
        <div className="flex items-center gap-4">
          {/* Avatar with gradient background */}
          <div className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${avatarGradient} flex items-center justify-center text-white font-bold text-sm shadow-lg ring-2 ring-white/20 group-hover:ring-white/40 transition-all`}>
            {initials}
            {/* Online indicator */}
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-surface" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <p className="font-bold text-foreground text-sm">{name}</p>
              {/* Verified badge */}
              <svg className="w-4 h-4 text-action" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xs text-foreground-muted">{role || ''}</p>
            <div className="flex text-yellow-500 text-xs mt-1 gap-0.5">★★★★★</div>
          </div>
        </div>
        <p className="text-sm text-foreground leading-relaxed">
          &ldquo;{text}&rdquo;
        </p>
      </SpotlightCard>
    )
  }

  const disclaimer = t(locale, "pages.home.socialProof.disclaimer") as string;

  return (
    <Section variant="normal" className="bg-surface dark:bg-background overflow-hidden py-24">
      <Container size="full" className="px-0">
        <div className="text-center mb-16 px-4">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">{t(locale, "pages.home.socialProof.h2") as string}</h2>
          <p className="text-foreground-muted prose mx-auto mb-2 text-lg">
            {t(locale, "pages.home.socialProof.p") as string}
          </p>
          {disclaimer && <p className="text-xs text-foreground-muted/70">{disclaimer}</p>}
        </div>

        {shouldReduceMotion ? (
          <Container size="lg">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {testimonialsRow1.map((testimonial, i) => (
                 <TestimonialCard
                   key={`grid-1-${i}`}
                   name={testimonial.name}
                   text={testimonial.text}
                   role={testimonial.tag}
                   index={i}
                 />
               ))}
            </div>
          </Container>
        ) : (
          <div className="space-y-4">
            {/* Row 1: Left direction */}
            <div className="flex justify-center">
              <Marquee direction="left" speed={25} className="py-2">
                {testimonialsRow1.map((testimonial, i) => (
                  <TestimonialCard
                    key={`row-1-${i}`}
                    name={testimonial.name}
                    text={testimonial.text}
                    role={testimonial.tag}
                    index={i}
                  />
                ))}
              </Marquee>
            </div>
            {/* Row 2: Right direction (reversed order for visual variety) */}
            <div className="flex justify-center">
              <Marquee direction="right" speed={25} className="py-2">
                {[...testimonialsRow1].reverse().map((testimonial, i) => (
                  <TestimonialCard
                    key={`row-2-${i}`}
                    name={testimonial.name}
                    text={testimonial.text}
                    role={testimonial.tag}
                    index={i + 3}
                  />
                ))}
              </Marquee>
            </div>
          </div>
        )}
      </Container>
    </Section>
  )
}
