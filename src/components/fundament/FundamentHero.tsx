import { Section, Container } from "@/components/ui/Section"

export function FundamentHero() {
  return (
    <Section variant="hero" className="pt-32 pb-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-action/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1F2937]/5 blur-[120px] rounded-full" />
      </div>

      <Container size="lg" className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F2937]/5 dark:bg-white/5 border border-border/50 text-foreground-muted text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-action animate-pulse" />
          <span>Das System verstehen</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Das Fundament
        </h1>
        <p className="text-xl md:text-3xl text-foreground-muted leading-relaxed mb-10 font-medium">
          Warum AKLOW funktioniert – und warum es kein Tool ist.
        </p>
        <div className="w-20 h-1 bg-action mx-auto rounded-full" />
      </Container>
    </Section>
  )
}

