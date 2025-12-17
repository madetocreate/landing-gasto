import { AppShell } from '@/components/shell/AppShell';
import { Section, Container } from '@/components/ui/Section';
import { createMetadata } from '@/lib/metadata';
import Image from 'next/image';

export const metadata = createMetadata({
  title: 'Dokumente verstehen – Wie AKLOW Dokumente analysiert',
  description: 'AKLOW versteht Dokumente: Rechnungen, Verträge, Formulare und Belege werden automatisch erkannt, analysiert und strukturiert.',
  path: '/fundament/dokumente-verstehen',
});

export default async function DokumenteVerstehen() {
  return (
    <AppShell>
      {/* Hero - Zentriert mit Background Pattern */}
      <Section variant="hero" className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] bg-grid-pattern" />
        <Container size="lg" className="text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Dokumente verstehen
          </h1>
          <p className="text-lg md:text-xl text-foreground-muted leading-relaxed max-w-2xl mx-auto">
            AKLOW versteht Dokumente: Rechnungen, Verträge, Formulare und Belege werden automatisch erkannt, analysiert und strukturiert.
          </p>
        </Container>
      </Section>

      {/* Content */}
      <Section variant="normal">
        <Container size="lg">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Mehr als OCR</h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              AKLOW erkennt nicht nur Text in Dokumenten, sondern versteht auch deren Struktur und Bedeutung. Eine Rechnung wird als Rechnung erkannt, Beträge werden extrahiert und wichtige Informationen werden strukturiert erfasst.
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              Verträge, Formulare, Belege – jeder Dokumententyp wird automatisch erkannt und analysiert. Die relevanten Informationen werden extrahiert und in dein System übernommen.
            </p>
          </div>

          {/* Image + Text */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted/30 order-2 md:order-1">
              <Image
                src="/media/documents-understanding.jpg"
                alt="Dokumente verstehen"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Wie es funktioniert</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Dokumententyp erkennen</h3>
                  <p className="text-foreground-muted">Rechnung, Vertrag, Formular – der Typ wird automatisch erkannt.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Struktur verstehen</h3>
                  <p className="text-foreground-muted">Tabellen, Listen, Abschnitte – die Struktur wird analysiert und verstanden.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Daten extrahieren</h3>
                  <p className="text-foreground-muted">Wichtige Informationen wie Beträge, Daten und Namen werden automatisch extrahiert.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Vollständige Kontrolle</h3>
                  <p className="text-foreground-muted">Jede Extraktion kann geprüft und angepasst werden – du behältst die Kontrolle.</p>
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
                  <h3 className="font-semibold mb-1">Dokument wird erfasst</h3>
                  <p className="text-sm text-foreground-muted">Per E-Mail, Upload oder Scan – AKLOW erkennt es sofort.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center shrink-0 font-bold mt-1">2</div>
                <div>
                  <h3 className="font-semibold mb-1">Typ & Struktur werden analysiert</h3>
                  <p className="text-sm text-foreground-muted">Dokumententyp, Struktur und Inhalt werden erkannt und verstanden.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center shrink-0 font-bold mt-1">3</div>
                <div>
                  <h3 className="font-semibold mb-1">Daten werden extrahiert</h3>
                  <p className="text-sm text-foreground-muted">Wichtige Informationen werden erkannt, extrahiert und strukturiert erfasst.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </AppShell>
  );
}

