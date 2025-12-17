import { Section, Container } from "@/components/ui/Section"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

export function FundamentTransition() {
  return (
    <Section variant="normal" className="py-24">
      <Container size="lg" className="max-w-4xl mx-auto text-center">
        <div className="prose prose-lg max-w-none space-y-6 text-foreground-muted leading-relaxed mb-10">
          <p>
            Das Fundament ist die Basis. Die Anwendungen sind das, was du täglich nutzt.
          </p>
          
          <p>
            Wenn du wissen willst, wie das System konkret in deinem Alltag hilft, schau dir die Anwendungen an.
          </p>
        </div>

        <Button asChild href="/anwendungen" variant="primary" size="lg">
          Zu den Anwendungen →
        </Button>
      </Container>
    </Section>
  )
}

