import { Section, Container } from "@/components/ui/Section"
import Image from "next/image"

export function ApplicationsHero() {
  return (
    <Section variant="hero" className="relative">
      <Container size="lg">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Anwendungen für den Alltag
          </h1>
          <p className="text-xl md:text-2xl text-foreground-muted leading-relaxed">
            AKLOW unterstützt dich genau dort, wo täglich Arbeit anfällt.
            <br />
            Ohne komplizierte Dashboards und ohne neue Tool-Landschaften.
            <br />
            Du arbeitest weiter wie gewohnt – AKLOW denkt, sortiert und hilft im Hintergrund mit.
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
          />
        </div>
      </Container>
    </Section>
  )
}

