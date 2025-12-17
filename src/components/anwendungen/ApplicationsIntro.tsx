import { Section, Container } from "@/components/ui/Section"

export function ApplicationsIntro() {
  return (
    <Section variant="normal" className="relative">
      <Container size="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Was wir mit Anwendungen meinen
          </h2>
          <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
            Anwendungen sind die Bereiche, in denen du AKLOW konkret nutzt.
            <br />
            E-Mails, Anfragen, Dokumente, Gespräche oder Feedback.
            <br />
            Im Hintergrund arbeitet immer KI: Sie erkennt Zusammenhänge, filtert Wichtiges heraus und bereitet Entscheidungen vor.
            <br />
            Vorne erlebst du einfach mehr Ruhe im Alltag.
          </p>
        </div>
      </Container>
    </Section>
  )
}

