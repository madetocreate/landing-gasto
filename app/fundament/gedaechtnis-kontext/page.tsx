import { AppShell } from '@/components/shell/AppShell';
import { Section, Container } from '@/components/ui/Section';
import { createMetadata } from '@/lib/metadata';
import Image from 'next/image';

export const metadata = createMetadata({
  title: 'Gedächtnis & Kontext – Wie AKLOW sich erinnert',
  description: 'AKLOW speichert Kontext und Historie – damit jede Interaktion auf dem Wissen über vorherige Gespräche, Dokumente und Entscheidungen aufbaut.',
  path: '/fundament/gedaechtnis-kontext',
});

export default async function GedaechtnisKontext() {
  return (
    <AppShell>
      {/* Hero - Zentriert */}
      <Section variant="hero" className="pt-32 pb-20">
        <Container size="lg" className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Gedächtnis & Kontext
          </h1>
          <p className="text-lg md:text-xl text-foreground-muted leading-relaxed max-w-2xl mx-auto">
            AKLOW speichert Kontext und Historie – damit jede Interaktion auf dem Wissen über vorherige Gespräche, Dokumente und Entscheidungen aufbaut.
          </p>
        </Container>
      </Section>

      {/* Content */}
      <Section variant="normal">
        <Container size="lg">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Warum Kontext wichtig ist</h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              Jede Interaktion steht nicht isoliert da – sie baut auf vorherigen Gesprächen, Dokumenten und Entscheidungen auf. AKLOW speichert diesen Kontext, damit jede Antwort präzise und relevant ist.
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              Wenn ein Kunde nach einem Projekt fragt, erinnert sich AKLOW an alle vorherigen E-Mails, Dokumente und Termine zu diesem Projekt. Die Antwort ist nicht generisch, sondern spezifisch und hilfreich.
            </p>
          </div>

          {/* Image + Text */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted/30">
              <Image
                src="/media/memory-preview.jpg"
                alt="Gedächtnis & Kontext"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Wie es funktioniert</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Automatische Speicherung</h3>
                  <p className="text-foreground-muted">Jede Interaktion wird automatisch erfasst und mit relevanten Kontexten verknüpft.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Intelligente Verknüpfung</h3>
                  <p className="text-foreground-muted">E-Mails, Dokumente, Termine und Entscheidungen werden automatisch miteinander verknüpft.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Kontext-Abruf</h3>
                  <p className="text-foreground-muted">Bei jeder neuen Interaktion wird der relevante Kontext automatisch abgerufen und genutzt.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Vollständige Kontrolle</h3>
                  <p className="text-foreground-muted">Du bestimmst, welche Informationen gespeichert werden und wer darauf zugreifen kann.</p>
                </div>
              </div>
            </div>
          </div>

          {/* So läuft's */}
          <div className="bg-background-muted rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">So läuft's</h2>
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center shrink-0 font-bold mt-1">1</div>
                <div>
                  <h3 className="font-semibold mb-1">Interaktion passiert</h3>
                  <p className="text-sm text-foreground-muted">E-Mail, Anruf oder Dokument – AKLOW erfasst Inhalt und Kontext automatisch.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center shrink-0 font-bold mt-1">2</div>
                <div>
                  <h3 className="font-semibold mb-1">Kontext wird gespeichert</h3>
                  <p className="text-sm text-foreground-muted">Relevante Informationen werden erkannt, verknüpft und für spätere Interaktionen gespeichert.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center shrink-0 font-bold mt-1">3</div>
                <div>
                  <h3 className="font-semibold mb-1">Nächste Interaktion nutzt Kontext</h3>
                  <p className="text-sm text-foreground-muted">Bei der nächsten Frage wird der gespeicherte Kontext automatisch abgerufen und genutzt.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </AppShell>
  );
}

