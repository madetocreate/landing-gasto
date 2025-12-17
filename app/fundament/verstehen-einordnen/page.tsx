import { AppShell } from '@/components/shell/AppShell';
import { Section, Container } from '@/components/ui/Section';
import { createMetadata } from '@/lib/metadata';
import Image from 'next/image';

export const metadata = createMetadata({
  title: 'Verstehen & Einordnen – Wie AKLOW Inhalte versteht',
  description: 'AKLOW versteht nicht nur Wörter, sondern auch Bedeutung, Absicht und Kontext. Inhalte werden automatisch eingeordnet und kategorisiert.',
  path: '/fundament/verstehen-einordnen',
});

export default async function VerstehenEinordnen() {
  return (
    <AppShell>
      {/* Hero - Split */}
      <Section variant="hero" className="pt-32 pb-20 bg-background-muted">
        <Container size="lg">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Verstehen & Einordnen
              </h1>
              <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
                AKLOW versteht nicht nur Wörter, sondern auch Bedeutung, Absicht und Kontext. Inhalte werden automatisch eingeordnet und kategorisiert.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted/30">
              <Image
                src="/media/understanding-preview.jpg"
                alt="Verstehen & Einordnen"
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Mehr als Text-Erkennung</h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              AKLOW versteht nicht nur, was geschrieben steht, sondern auch, was gemeint ist. Die Absicht hinter einer Nachricht, der Kontext einer Frage und die Dringlichkeit einer Anfrage werden automatisch erkannt.
            </p>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              Inhalte werden nicht nur gelesen, sondern eingeordnet: Ist das eine Beschwerde oder eine Frage? Ist es dringend oder kann es warten? Welches Thema wird behandelt?
            </p>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Wie es funktioniert</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-background-muted rounded-xl">
                <h3 className="text-lg font-semibold mb-2">Bedeutung verstehen</h3>
                <p className="text-foreground-muted">Nicht nur Wörter, sondern auch Absicht, Stimmung und Kontext werden erkannt.</p>
              </div>
              <div className="p-6 bg-background-muted rounded-xl">
                <h3 className="text-lg font-semibold mb-2">Automatische Kategorisierung</h3>
                <p className="text-foreground-muted">Inhalte werden nach Thema, Dringlichkeit und Typ automatisch eingeordnet.</p>
              </div>
              <div className="p-6 bg-background-muted rounded-xl">
                <h3 className="text-lg font-semibold mb-2">Kontext erkennen</h3>
                <p className="text-foreground-muted">Zusammenhänge zwischen verschiedenen Nachrichten und Dokumenten werden erkannt.</p>
              </div>
              <div className="p-6 bg-background-muted rounded-xl">
                <h3 className="text-lg font-semibold mb-2">Vollständige Kontrolle</h3>
                <p className="text-foreground-muted">Jede Kategorisierung kann angepasst werden – du behältst die Kontrolle.</p>
              </div>
            </div>
          </div>

          {/* So läuft's */}
          <div className="bg-background-muted rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">So läuft's</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                <h3 className="font-semibold mb-2">Inhalt wird erfasst</h3>
                <p className="text-sm text-foreground-muted">E-Mail, Nachricht oder Dokument – AKLOW liest und analysiert den Inhalt.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                <h3 className="font-semibold mb-2">Bedeutung wird erkannt</h3>
                <p className="text-sm text-foreground-muted">Absicht, Stimmung und Kontext werden analysiert und verstanden.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                <h3 className="font-semibold mb-2">Inhalt wird eingeordnet</h3>
                <p className="text-sm text-foreground-muted">Thema, Dringlichkeit und Typ werden erkannt und kategorisiert.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </AppShell>
  );
}

