import { Section, Container } from "@/components/ui/Section"
import Image from "next/image"

export function ApplicationsHero() {
  return (
    <Section variant="hero" className="relative">
      <Container size="lg">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Was AKLOW kann
          </h1>
          <p className="text-xl md:text-2xl text-foreground-muted leading-relaxed">
            Posteingang, Dokumente, Kunden, Bewertungen.
            <br />
            Alles an einem Ort. Alles per Chat.
            <br />
            Sag der KI, was du brauchst – sie macht&apos;s.
          </p>
        </div>

        {/* Screenshot/Mock */}
        <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-lg overflow-hidden bg-muted/30 shadow-2xl">
          <Image
            src="/media/previews/inbox.jpg"
            alt="AKLOW Anwendungen"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
            }}
          />
          {/* Fallback Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-muted/30 to-background-muted flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-xl bg-accent/5 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-foreground-muted">AKLOW Anwendungen</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

