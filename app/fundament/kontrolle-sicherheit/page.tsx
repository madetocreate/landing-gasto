import { AppShell } from '@/components/shell/AppShell';
import { Section, Container } from '@/components/ui/Section';
import { createMetadata } from '@/lib/metadata';
import Image from 'next/image';

export const metadata = createMetadata({
  title: 'Kontrolle & Sicherheit – Wie AKLOW Sicherheit gewährleistet',
  description: 'Vollständige Kontrolle über jede Aktion: Freigaben, Audit-Logs und Sicherheit. AKLOW arbeitet transparent und nachvollziehbar.',
  path: '/fundament/kontrolle-sicherheit',
});

export default async function KontrolleSicherheit() {
  return (
    <AppShell>
      {/* Hero - Zentriert */}
      <Section variant="hero" className="pt-32 pb-20 bg-background-muted">
        <Container size="lg" className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Kontrolle & Sicherheit
          </h1>
          <p className="text-lg md:text-xl text-foreground-muted leading-relaxed max-w-2xl mx-auto">
            Vollständige Kontrolle über jede Aktion: Freigaben, Audit-Logs und Sicherheit. AKLOW arbeitet transparent und nachvollziehbar.
          </p>
        </Container>
      </Section>

      {/* Content */}
      <Section variant="normal">
        <Container size="lg">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Sicherheit durch Kontrolle</h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              AKLOW arbeitet nicht autonom – jede wichtige Aktion erfordert deine Freigabe. Antworten werden vorgeschlagen, aber nicht automatisch gesendet. Dokumente werden analysiert, aber nicht automatisch weitergeleitet.
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              Alles ist nachvollziehbar: Jede Aktion wird protokolliert, jede Entscheidung ist dokumentiert. Du behältst die volle Kontrolle – und die volle Übersicht.
            </p>
          </div>

          {/* Image + Text */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted/30 order-2 md:order-1">
              <Image
                src="/media/security-preview.jpg"
                alt="Kontrolle & Sicherheit"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Wie es funktioniert</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Freigabe-Pflicht</h3>
                  <p className="text-foreground-muted">Jede wichtige Aktion erfordert deine explizite Freigabe – nichts passiert automatisch.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Vollständige Protokollierung</h3>
                  <p className="text-foreground-muted">Jede Aktion wird protokolliert – wer, was, wann und warum. Alles ist nachvollziehbar.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">DSGVO-Konformität</h3>
                  <p className="text-foreground-muted">EU-Hosting, verschlüsselte Übertragung, keine Datenweitergabe – vollständig DSGVO-konform.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Zugriffskontrolle</h3>
                  <p className="text-foreground-muted">Du bestimmst, wer auf welche Informationen zugreifen kann – granulare Berechtigungen.</p>
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
                  <h3 className="font-semibold mb-1">Aktion wird vorgeschlagen</h3>
                  <p className="text-sm text-foreground-muted">AKLOW schlägt eine Aktion vor – Antwort senden, Dokument weiterleiten, Termin anlegen.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center shrink-0 font-bold mt-1">2</div>
                <div>
                  <h3 className="font-semibold mb-1">Du prüfst & entscheidest</h3>
                  <p className="text-sm text-foreground-muted">Du siehst den Vorschlag, prüfst ihn und entscheidest – Freigabe oder Ablehnung.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center shrink-0 font-bold mt-1">3</div>
                <div>
                  <h3 className="font-semibold mb-1">Aktion wird protokolliert</h3>
                  <p className="text-sm text-foreground-muted">Jede Entscheidung wird protokolliert – vollständig nachvollziehbar und auditierbar.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </AppShell>
  );
}

