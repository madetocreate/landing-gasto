"use client"

import { Section, Container } from "@/components/ui/Section"
import { Marquee } from "@/components/ui/Marquee"
import { useLocale } from "@/hooks/useLocale"
import { t } from "@/lib/i18n"
import { useReducedMotion } from "framer-motion"
import { SpotlightCard } from "@/components/ui/SpotlightCard"

export function SocialProof() {
  const locale = useLocale()
  const shouldReduceMotion = useReducedMotion()

  const testimonialsRow1 = t(locale, "pages.home.socialProof.testimonials") as Array<{
    name: string
    text: string
    tag?: string
  }>

  // Example for Row 2 - In a real app, this might come from a separate key or just shuffled/reused for visual density
  // Using a slice/re-map for now to simulate "Example Cards" if no distinct content is provided
  // UPDATED: No fake verified badges. Just reusing content for density or showing less.
  // Ideally, we just show one grid or a single row if we don't have enough.
  // User requested: "KEIN 'Verified' Dupes". So I will just use Row 1.
  
  const TestimonialCard = ({ name, text, role }: { name: string; text: string; role?: string }) => {
    // Generate initials
    const initials = name.slice(0, 2).toUpperCase()
    
    return (
      <SpotlightCard className="flex-shrink-0 w-80 mx-4 p-6 h-full flex flex-col gap-4 bg-surface/80 hover:scale-[1.02] transition-transform duration-300">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm ring-1 ring-accent/20">
            {initials}
          </div>
          <div>
            <div className="flex text-yellow-500 text-xs mb-1 gap-0.5">★★★★★</div>
            <p className="text-xs text-foreground-muted font-medium uppercase tracking-wider">{name}</p>
            {role && <p className="text-[10px] text-foreground-muted/70">{role}</p>}
          </div>
        </div>
        <p className="text-sm text-foreground leading-relaxed italic opacity-90">
          &ldquo;{text}&rdquo;
        </p>
      </SpotlightCard>
    )
  }

  const disclaimer = t(locale, "pages.home.socialProof.disclaimer")

  return (
    <Section variant="normal" className="bg-surface dark:bg-background overflow-hidden py-24">
      <Container size="full" className="px-0">
        <div className="text-center mb-16 px-4">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">{t(locale, "pages.home.socialProof.h2")}</h2>
          <p className="text-foreground-muted prose mx-auto mb-2 text-lg">
            {t(locale, "pages.home.socialProof.p")}
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
                 />
               ))}
            </div>
          </Container>
        ) : (
          <div className="space-y-4">
            {/* Row 1: Left direction */}
            <div className="flex justify-center">
              <Marquee direction="left" speed={50} className="py-2">
                {testimonialsRow1.map((testimonial, i) => (
                  <TestimonialCard
                    key={`row-1-${i}`}
                    name={testimonial.name}
                    text={testimonial.text}
                    role={testimonial.tag}
                  />
                ))}
              </Marquee>
            </div>
            {/* Row 2: Right direction (reversed order for visual variety) */}
            <div className="flex justify-center">
              <Marquee direction="right" speed={50} className="py-2">
                {[...testimonialsRow1].reverse().map((testimonial, i) => (
                  <TestimonialCard
                    key={`row-2-${i}`}
                    name={testimonial.name}
                    text={testimonial.text}
                    role={testimonial.tag}
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
