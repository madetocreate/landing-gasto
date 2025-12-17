import { AppShell } from '@/components/shell/AppShell';
import { Section, Container } from '@/components/ui/Section';
import { createMetadata } from '@/lib/metadata';
import Image from 'next/image';

export const metadata = createMetadata({
  title: 'Verbinden & Weitergeben – Wie AKLOW Systeme verbindet',
  description: 'AKLOW verbindet deine bestehenden Systeme: E-Mail, Kalender, CRM, Dokumente. Alles arbeitet zusammen, ohne dass du neue Tools brauchst.',
  path: '/fundament/verbinden-weitergeben',
});

export default async function VerbindenWeitergeben() {
  return (
    <AppShell>
      {/* Hero - Split */}
      <Section variant="hero" className="pt-32 pb-20">
        <Container size="lg">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Verbinden & Weitergeben
              </h1>
              <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
                AKLOW verbindet deine bestehenden Systeme: E-Mail, Kalender, CRM, Dokumente. Alles arbeitet zusammen, ohne dass du neue Tools brauchst.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted/30">
              <Image
                src="/media/connections-preview.jpg"
                alt="Verbinden & Weitergeben"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Content */}
      <Section variant="normal">
        <Container size="lg">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Alles arbeitet zusammen</h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              AKLOW ersetzt deine bestehenden Systeme nicht – es verbindet sie. E-Mails, Kalender, CRM, Dokumente – alles arbeitet zusammen, ohne dass du neue Tools lernen musst.
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              Informationen werden automatisch zwischen Systemen weitergegeben. Eine E-Mail wird im CRM erfasst, ein Termin wird im Kalender angelegt, ein Dokument wird dem richtigen Vorgang zugeordnet.
            </p>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Wie es funktioniert</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2">Systeme verbinden</h3>
                <p className="text-foreground-muted">E-Mail, Kalender, CRM, Dokumente – AKLOW verbindet sich mit deinen bestehenden Systemen.</p>
              </div>
              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2">Automatische Weiterleitung</h3>
                <p className="text-foreground-muted">Informationen werden automatisch zwischen Systemen weitergegeben – mit Kontext und Zuordnung.</p>
              </div>
              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2">Intelligente Zuordnung</h3>
                <p className="text-foreground-muted">E-Mails werden im CRM erfasst, Termine im Kalender angelegt, Dokumente dem richtigen Vorgang zugeordnet.</p>
              </div>
              <div className="border-l-4 border-accent pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2">Vollständige Kontrolle</h3>
                <p className="text-foreground-muted">Jede Weiterleitung und Zuordnung erfordert deine Freigabe – du behältst die Kontrolle.</p>
              </div>
            </div>
          </div>

          {/* So läuft's */}
          <div className="bg-background-muted rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">So läuft's</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                <h3 className="font-semibold mb-2 text-center">Systeme werden verbunden</h3>
                <p className="text-sm text-foreground-muted text-center">E-Mail, Kalender, CRM, Dokumente – AKLOW verbindet sich mit deinen Systemen.</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                <h3 className="font-semibold mb-2 text-center">Informationen werden weitergegeben</h3>
                <p className="text-sm text-foreground-muted text-center">Automatisch, mit Kontext und Zuordnung – zwischen allen verbundenen Systemen.</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                <h3 className="font-semibold mb-2 text-center">Du prüfst & bestätigst</h3>
                <p className="text-sm text-foreground-muted text-center">Jede Weiterleitung erfordert deine Freigabe – du behältst die Kontrolle.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </AppShell>
  );
}

