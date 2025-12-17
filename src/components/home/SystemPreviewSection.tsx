"use client"

import { Section, Container } from "@/components/ui/Section"
import { SpotlightCard } from "@/components/ui/SpotlightCard"

export function SystemPreviewSection() {

  // Video URL from env or fallback to placeholder
  const videoUrl = process.env.NEXT_PUBLIC_PRODUCT_VIDEO_URL || "/media/product-preview.mp4"
  const hasVideo = false // Set to true when video is available

  return (
    <Section variant="normal" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid-pattern opacity-[0.03] pointer-events-none" />
      
      <Container size="xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            So sieht KI-Modernisierung in der Praxis aus.
          </h2>
          <p className="text-xl text-foreground-muted leading-relaxed">
            Inbox-Automation, Dokumente, Wissen – integriert in eure Tools, mit Kontrolle.
          </p>
        </div>

        {/* Large Preview Box */}
        <SpotlightCard 
          className="w-full aspect-video md:aspect-[21/9] overflow-hidden"
          spotlightColor="rgba(var(--accent-rgb), 0.15)"
          withBorderBeam
        >
          {hasVideo ? (
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="/media/product-preview-poster.jpg"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-accent/5 via-background to-muted/30 flex items-center justify-center relative">
              {/* Placeholder: Mock Dashboard UI */}
              <div className="w-full h-full p-8 md:p-12 flex flex-col gap-4">
                {/* Mock Header */}
                <div className="h-12 bg-surface/50 rounded-lg border border-border/50 flex items-center justify-between px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/20" />
                    <div className="h-4 w-32 bg-muted/50 rounded" />
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-muted/50" />
                    <div className="w-8 h-8 rounded-full bg-muted/50" />
                  </div>
                </div>

                {/* Mock Content Grid */}
                <div className="flex-1 grid grid-cols-3 gap-4">
                  <div className="bg-surface/50 rounded-lg border border-border/50 p-4 space-y-3">
                    <div className="h-4 w-20 bg-muted/50 rounded" />
                    <div className="space-y-2">
                      <div className="h-3 w-full bg-muted/30 rounded" />
                      <div className="h-3 w-3/4 bg-muted/30 rounded" />
                    </div>
                  </div>
                  <div className="bg-surface/50 rounded-lg border border-border/50 p-4 space-y-3">
                    <div className="h-4 w-20 bg-muted/50 rounded" />
                    <div className="space-y-2">
                      <div className="h-3 w-full bg-muted/30 rounded" />
                      <div className="h-3 w-2/3 bg-muted/30 rounded" />
                    </div>
                  </div>
                  <div className="bg-surface/50 rounded-lg border border-border/50 p-4 space-y-3">
                    <div className="h-4 w-20 bg-muted/50 rounded" />
                    <div className="space-y-2">
                      <div className="h-3 w-full bg-muted/30 rounded" />
                      <div className="h-3 w-4/5 bg-muted/30 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
            </div>
          )}
        </SpotlightCard>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {["Inbox", "Dokumente", "Wissen"].map((label) => (
            <div
              key={label}
              className="px-6 py-2 rounded-full bg-surface/50 border border-border/50 text-sm font-medium text-foreground-muted hover:text-foreground hover:border-accent/30 transition-colors"
            >
              {label}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

