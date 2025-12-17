import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { TeamGrid } from '@/components/ueber-uns/TeamGrid';

export default function UeberUns() {
  return (
    <>
      <Section variant="normal">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="mb-6 text-4xl md:text-5xl font-bold tracking-tight">Über uns</h1>
            <p className="text-lg text-foreground-muted mb-12 prose max-w-3xl mx-auto leading-relaxed">
              Wir machen KI-Modernisierung für den Mittelstand – ohne Komplexität und ohne dass du deinen Alltag umkrempeln musst.
            </p>
          </div>

          <div className="mb-24 max-w-3xl mx-auto">
            <h2 className="mb-4 text-2xl md:text-3xl font-bold">Was uns antreibt</h2>
            <p className="text-foreground-muted prose leading-relaxed mb-6">
              Viele kleine und mittlere Unternehmen haben das Gefühl, dass KI nicht für sie gemacht ist.
              Zu komplex, zu teuer, zu abstrakt.
            </p>
            <p className="text-foreground-muted prose leading-relaxed mb-6">
              Wir sehen das anders.
              KI kann genau dort helfen, wo im Alltag wirklich Arbeit anfällt: bei E-Mails, Anfragen, Dokumenten und Entscheidungen.
              Nicht als großes Projekt, sondern als praktische Unterstützung, die sofort funktioniert.
            </p>
            <p className="text-foreground-muted prose leading-relaxed">
              Unser Ziel: Du arbeitest weiter wie gewohnt, während die KI im Hintergrund das übernimmt, was dich heute Zeit kostet.
            </p>
          </div>

          <div className="mb-24 max-w-3xl mx-auto">
            <h2 className="mb-4 text-2xl md:text-3xl font-bold">Unser Ansatz</h2>
            <p className="text-foreground-muted prose leading-relaxed mb-6">
              Wir starten nicht mit großen Plänen, sondern mit konkreten Problemen.
              In 10 Minuten schauen wir, wo es hakt – und was realistisch ist.
            </p>
            <p className="text-foreground-muted prose leading-relaxed mb-6">
              Dann geht es schnell: Ein erstes Setup ist meist in wenigen Tagen live.
              Schritt für Schritt erweitern wir, wenn es für dich Sinn macht.
            </p>
            <p className="text-foreground-muted prose leading-relaxed">
              Keine langen Consulting-Projekte. Keine neuen Tools, die du erst lernen musst.
              Einfach Unterstützung dort, wo sie wirklich hilft.
            </p>
          </div>

          <div className="mb-24 max-w-3xl mx-auto">
            <h2 className="mb-4 text-2xl md:text-3xl font-bold">Was uns wichtig ist</h2>
            <p className="text-foreground-muted prose leading-relaxed mb-6">
              <strong className="text-foreground">Einfachheit:</strong> Lösungen, die sofort funktionieren – ohne dass du dich durch Handbücher kämpfen musst.
            </p>
            <p className="text-foreground-muted prose leading-relaxed mb-6">
              <strong className="text-foreground">Kontrolle:</strong> Du bestimmst, was automatisch passiert und was nicht. Nichts ohne deine Freigabe.
            </p>
            <p className="text-foreground-muted prose leading-relaxed">
              <strong className="text-foreground">Messbarkeit:</strong> Du siehst, was die KI für dich übernimmt – und wie viel Zeit du zurückgewinnst.
            </p>
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section variant="normal" className="bg-background-muted">
        <Container size="xl">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
              Unser Team
            </h2>
            <p className="mt-6 text-lg text-foreground-muted leading-relaxed">
              Wir sind ein kleines Team, das leidenschaftlich daran arbeitet,
              KI-Modernisierung für den Mittelstand zugänglich zu machen.
            </p>
          </div>
          <TeamGrid />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
