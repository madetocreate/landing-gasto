import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { createMetadata } from '@/lib/metadata';
import Image from 'next/image';
import Link from 'next/link';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { Check } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Kunden & Vorgänge – Überblick über Anfragen, Verlauf und nächste Schritte',
  description: 'Alles zum Kunden an einem Ort: Nachrichten, Dokumente, Entscheidungen und To-dos. Klarer Verlauf statt Suchen, ohne CRM-Overkill.',
  path: '/anwendungen/kunden-vorgaenge',
});

export default function KundenVorgaenge() {
  const faqItems = [
    {
      q: 'Ist das ein CRM?',
      a: 'Es ist kein klassisches CRM mit komplexen Feldern und Admin-Marathon. Es ist ein klarer Überblick über das, was wirklich zählt: Kunde, Verlauf, nächste Schritte. Ohne Overkill.',
    },
    {
      q: 'Kann ich eigene Status/Schritte definieren?',
      a: 'Ja. Du bestimmst, welche Status es gibt und wie ein Vorgang durchläuft. Das System passt sich an deine Abläufe an – nicht umgekehrt.',
    },
    {
      q: 'Gibt es Aufgaben/Wiedervorlagen?',
      a: 'Ja. Offene Punkte, Fristen und Wiedervorlagen werden automatisch erkannt und angezeigt. Du verpasst nichts.',
    },
    {
      q: 'Kann ich Daten exportieren, wenn ich will?',
      a: 'Ja. Alle Daten bleiben in deiner Kontrolle. Du kannst exportieren, wenn du willst – oder alles dort lassen, wo es ist.',
    },
  ];

  return (
    <>
      {/* Hero - Split Layout */}
      <Section variant="hero" className="pt-32 pb-20">
        <Container size="lg">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Kunden & Vorgänge
              </h1>
              <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
                Alles zum Kunden an einem Ort: Nachrichten, Dokumente, Entscheidungen und nächste Schritte.
                Du siehst sofort, was Sache ist – ohne Excel und ohne Admin-Marathon.
                Perfekt, wenn mehrere Dinge parallel laufen und du trotzdem den Überblick behalten willst.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted/30 border border-border/50">
              <Image
                src="/media/previews/kunden-vorgaenge.jpg"
                alt="Kunden & Vorgänge"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F2937]/20 to-[#111827]/40" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Was ein „Vorgang" bei dir wirklich ist */}
      <Section variant="normal">
        <Container size="lg">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Was ein „Vorgang" bei dir wirklich ist
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Ein Vorgang ist der rote Faden: von der ersten Anfrage bis zum Abschluss.
              Nicht nur eine Mail, nicht nur ein Dokument – sondern der komplette Zusammenhang.
            </p>
          </div>

          {/* Auf einen Blick, ohne Suchen - Kompakte Liste */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              Auf einen Blick, ohne Suchen
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-surface border border-border/50 rounded-lg">
                <Check className="w-5 h-5 text-action shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Letzter Stand</h3>
                  <p className="text-sm text-foreground-muted">was war zuletzt?</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-surface border border-border/50 rounded-lg">
                <Check className="w-5 h-5 text-action shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Nächster Schritt</h3>
                  <p className="text-sm text-foreground-muted">was ist offen?</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-surface border border-border/50 rounded-lg">
                <Check className="w-5 h-5 text-action shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Alle Nachrichten</h3>
                  <p className="text-sm text-foreground-muted">im Zusammenhang</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-surface border border-border/50 rounded-lg">
                <Check className="w-5 h-5 text-action shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Passende Dokumente</h3>
                  <p className="text-sm text-foreground-muted">direkt dabei</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-surface border border-border/50 rounded-lg">
                <Check className="w-5 h-5 text-action shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Zuständigkeit</h3>
                  <p className="text-sm text-foreground-muted">falls ihr zu zweit/zu fünft seid</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-surface border border-border/50 rounded-lg">
                <Check className="w-5 h-5 text-action shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Wiedervorlage & Fristen</h3>
                  <p className="text-sm text-foreground-muted">wenn nötig</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline statt Durcheinander */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Timeline statt Durcheinander
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-8">
              Statt durch Chats, Mails und Ordner zu springen, gibt es einen nachvollziehbaren Verlauf.
              So kannst du auch nach Wochen sofort wieder einsteigen.
            </p>
            <SpotlightCard className="p-8 md:p-12" spotlightColor="rgba(var(--action-rgb), 0.1)">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-action shrink-0 mt-2" />
                  <div>
                    <div className="text-sm text-foreground-muted mb-1">Tag 1</div>
                    <h3 className="font-semibold mb-1">Anfrage eingegangen</h3>
                    <p className="text-sm text-foreground-muted">Kunde fragt nach Angebot</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-action shrink-0 mt-2" />
                  <div>
                    <div className="text-sm text-foreground-muted mb-1">Tag 2</div>
                    <h3 className="font-semibold mb-1">Dokument hochgeladen</h3>
                    <p className="text-sm text-foreground-muted">Angebot erstellt und zugeordnet</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-action shrink-0 mt-2" />
                  <div>
                    <div className="text-sm text-foreground-muted mb-1">Tag 5</div>
                    <h3 className="font-semibold mb-1">Rückfrage beantwortet</h3>
                    <p className="text-sm text-foreground-muted">Kunde hat Fragen, Antwort gesendet</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-action shrink-0 mt-2" />
                  <div>
                    <div className="text-sm text-foreground-muted mb-1">Tag 8</div>
                    <h3 className="font-semibold mb-1">Termin vereinbart</h3>
                    <p className="text-sm text-foreground-muted">Nächster Schritt: Vor-Ort-Termin</p>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Beispiel: Von Anfrage bis Abschluss */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Beispiel: Von Anfrage bis Abschluss
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Ein Kunde fragt an. Es kommt ein Dokument dazu. Es gibt Rückfragen. Dann ein Termin. Dann ein Abschluss.
              Alles bleibt zusammen. Du verlierst keine Details – und musst nichts zusammensuchen.
            </p>
          </div>

          {/* Kontrolle & Nachvollziehbarkeit */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Kontrolle & Nachvollziehbarkeit
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Gerade wenn mehrere Dinge parallel laufen, brauchst du Klarheit.
              Darum ist nachvollziehbar, was passiert ist – und warum.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-background-muted rounded-2xl p-8 md:p-12 mb-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Willst du weniger Kontextverlust im Alltag?
            </h2>
            <p className="text-lg text-foreground-muted mb-8 max-w-2xl mx-auto">
              Wir schauen auf deine typischen Vorgänge und bauen eine Struktur, die sofort hilft.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="primary" size="lg" asChild href="/check">
                10-Minuten-Check
              </Button>
              <Button variant="secondary" size="lg" asChild href="/kontakt">
                Kontakt
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground-muted">
              <Link href="/anwendungen" className="hover:text-action transition-colors">
                Zurück zu Anwendungen
              </Link>
              <span>•</span>
              <Link href="/fundament" className="hover:text-action transition-colors">
                Zum Fundament
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              Häufige Fragen
            </h2>
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </Section>
    </>
  );
}
