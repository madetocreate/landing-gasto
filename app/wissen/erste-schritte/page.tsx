import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Erste Schritte mit KI – Einstieg ohne Überforderung',
  description: 'KI muss nicht kompliziert sein. Und Du musst kein Technikprofi sein, um davon zu profitieren.',
  path: '/wissen/erste-schritte',
});

export default function ErsteSchritte() {
  return (
    <>
      <Section variant="hero" className="pt-32 pb-20">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Erste Schritte mit KI
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
              KI muss nicht kompliziert sein.
              Und Du musst kein Technikprofi sein, um davon zu profitieren.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal">
        <Container size="lg">
          {/* Was viele am Anfang denken */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Was viele am Anfang denken
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              „Dafür bin ich nicht technisch genug."
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              „Das ist bestimmt kompliziert."
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed mb-6">
              „Ich weiß gar nicht, wo ich anfangen soll."
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Diese Gedanken sind normal.
              Und genau deshalb ist diese Seite da.
            </p>
          </div>

          {/* So gehst Du es sinnvoll an - 4 Steps */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
              So gehst Du es sinnvoll an
            </h2>
            <div className="space-y-8">
              <SpotlightCard className="p-6 md:p-8" spotlightColor="rgba(var(--action-rgb), 0.05)">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-action text-action-foreground flex items-center justify-center shrink-0 font-bold text-lg">1</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Schau auf Deinen Alltag</h3>
                    <p className="text-foreground-muted leading-relaxed">
                      Nicht auf Tools.
                      Sondern auf Dinge, die Dich täglich Zeit kosten:
                      E-Mails, Rückfragen, Dokumente, Abstimmung.
                    </p>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-6 md:p-8" spotlightColor="rgba(var(--action-rgb), 0.05)">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-action text-action-foreground flex items-center justify-center shrink-0 font-bold text-lg">2</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Fang klein an</h3>
                    <p className="text-foreground-muted leading-relaxed">
                      Nicht alles auf einmal.
                      Eine Anwendung, ein Ablauf – und beobachten, was sich ändert.
                    </p>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-6 md:p-8" spotlightColor="rgba(var(--action-rgb), 0.05)">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-action text-action-foreground flex items-center justify-center shrink-0 font-bold text-lg">3</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Behalte die Kontrolle</h3>
                    <p className="text-foreground-muted leading-relaxed">
                      KI hilft am besten,
                      wenn Du entscheidest, was automatisch passiert
                      und wo Du eingebunden bleiben willst.
                    </p>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-6 md:p-8" spotlightColor="rgba(var(--action-rgb), 0.05)">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-action text-action-foreground flex items-center justify-center shrink-0 font-bold text-lg">4</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">Lerne im Tun</h3>
                    <p className="text-foreground-muted leading-relaxed">
                      Du musst keine Theorie lernen.
                      Die meisten Erkenntnisse kommen im Alltag.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>

          {/* Du musst das nicht allein entscheiden */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Du musst das nicht allein entscheiden
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-8">
              Wenn Du unsicher bist,
              lass uns kurz gemeinsam draufschauen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" asChild href="/check">
                10-Minuten-Check
              </Button>
              <Button variant="secondary" size="lg" asChild href="/kontakt">
                Kontakt
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
