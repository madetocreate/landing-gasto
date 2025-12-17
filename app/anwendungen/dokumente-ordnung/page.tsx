import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { createMetadata } from '@/lib/metadata';
import Image from 'next/image';
import Link from 'next/link';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { Check } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Dokumente & Ordnung – PDFs verstehen, Daten extrahieren, Chaos reduzieren',
  description: 'Upload rein, Struktur raus: Die KI liest Dokumente, fasst zusammen und ordnet sie Vorgängen zu – ohne Zettelchaos und ohne komplizierte Dashboards.',
  path: '/anwendungen/dokumente-ordnung',
});

export default function DokumenteOrdnung() {
  const documentTypes = [
    'Rechnungen & Belege',
    'Angebote & Auftragsbestätigungen',
    'Lieferscheine & Protokolle',
    'Fotos von Notizen / Scans',
    'PDFs aus E‑Mails',
    'Sonstige Unterlagen',
  ];

  const faqItems = [
    {
      q: 'Muss ich meine Dokumente vorher „sauber" vorbereiten?',
      a: 'Nein. Die KI liest auch unsortierte Dateien, Fotos und Scans. Du kannst einfach hochladen – das System macht den Rest.',
    },
    {
      q: 'Kann ich Felder/Informationen definieren, die wichtig sind?',
      a: 'Ja. Du bestimmst, welche Daten extrahiert werden sollen (z. B. Betrag, Datum, Referenznummer). Das System lernt, was für dich wichtig ist.',
    },
    {
      q: 'Wo liegen die Dateien am Ende – und kann ich exportieren?',
      a: 'Die Dateien bleiben dort, wo sie sind. Die KI erstellt zusätzlich strukturierte Informationen, die du durchsuchen und exportieren kannst.',
    },
    {
      q: 'Was passiert, wenn die KI etwas nicht eindeutig erkennt?',
      a: 'Unklare Stellen werden markiert und dir zur Prüfung vorgelegt. Du bestimmst, was korrekt ist – das System lernt daraus.',
    },
  ];

  return (
    <>
      {/* Hero - Split Layout */}
      <Section variant="hero" className="pt-32 pb-20">
        <Container size="lg">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-action-soft text-action text-sm font-semibold mb-6">
                Nie wieder Zettelchaos.
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Dokumente & Ordnung
              </h1>
              <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
                PDFs, Fotos, Scans, Notizen – rein damit.
                Die KI liest mit, erkennt Inhalte und macht daraus Ordnung, die du wiederfindest.
                So wird aus Dateien endlich Information.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted/30 border border-border/50">
              <Image
                src="/media/previews/dokumente-ordnung.jpg"
                alt="Dokumente & Ordnung"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F2937]/20 to-[#111827]/40" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Was du einfach hochladen kannst - Chips Grid */}
      <Section variant="normal">
        <Container size="lg">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Was du einfach hochladen kannst
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {documentTypes.map((type) => (
                <div
                  key={type}
                  className="px-4 py-3 rounded-lg bg-surface border border-border/50 text-center text-sm font-medium text-foreground hover:border-action/50 transition-colors"
                >
                  {type}
                </div>
              ))}
            </div>
          </div>

          {/* Was du danach bekommst */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Was du danach bekommst
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>automatische Kurzfassung (worum geht's?)</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>wichtige Daten auslesen (z. B. Datum, Betrag, Absender, Referenzen)</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Zuordnung zum richtigen Kunden/Vorgang</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>saubere Ablage + Wiederfinden über Suche</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Hinweise, wenn etwas fehlt oder unklar ist</span>
              </li>
            </ul>
          </div>

          {/* Upload → Verstehen → Struktur - 3-Step Row */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              Upload → Verstehen → Struktur
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-action text-action-foreground flex items-center justify-center mx-auto mb-4 font-bold text-2xl">1</div>
                <h3 className="text-xl font-bold mb-3">Upload</h3>
                <p className="text-foreground-muted">
                  Du ziehst Dateien rein oder leitest sie weiter.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-action text-action-foreground flex items-center justify-center mx-auto mb-4 font-bold text-2xl">2</div>
                <h3 className="text-xl font-bold mb-3">Verstehen</h3>
                <p className="text-foreground-muted">
                  Inhalte werden gelesen, zusammengefasst und eingeordnet.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-action text-action-foreground flex items-center justify-center mx-auto mb-4 font-bold text-2xl">3</div>
                <h3 className="text-xl font-bold mb-3">Struktur</h3>
                <p className="text-foreground-muted">
                  Alles landet dort, wo es hingehört – im richtigen Kontext.
                </p>
              </div>
            </div>
          </div>

          {/* Beispiele aus dem Alltag */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              Beispiele aus dem Alltag
            </h2>
            <div className="space-y-6">
              <SpotlightCard className="p-6 md:p-8" spotlightColor="rgba(var(--action-rgb), 0.05)">
                <h3 className="text-xl font-bold mb-3">Rechnung rein, Überblick raus</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Du lädst eine Rechnung hoch. Die KI erkennt die wichtigsten Daten und ordnet sie dem passenden Vorgang zu.
                </p>
              </SpotlightCard>
              <SpotlightCard className="p-6 md:p-8" spotlightColor="rgba(var(--action-rgb), 0.05)">
                <h3 className="text-xl font-bold mb-3">Angebot wiederfinden, ohne Ordner-Suche</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Du suchst „Angebot vom März, Kunde X". Du findest es über Inhalt – nicht über Dateiname.
                </p>
              </SpotlightCard>
              <SpotlightCard className="p-6 md:p-8" spotlightColor="rgba(var(--action-rgb), 0.05)">
                <h3 className="text-xl font-bold mb-3">Foto vom Zettel</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Ein Foto wird nicht „Bild_3847", sondern nutzbar: Inhalt erkannt, Kontext gesetzt.
                </p>
              </SpotlightCard>
            </div>
          </div>

          {/* Kontrolle & Nachvollziehbarkeit */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Kontrolle & Nachvollziehbarkeit
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Dokumente sind oft sensibel. Darum bleibt alles nachvollziehbar.
              Du siehst, was erkannt wurde, was vorgeschlagen wird – und was freigegeben werden muss.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-background-muted rounded-2xl p-8 md:p-12 mb-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Willst du sehen, was deine Dokumente schon heute hergeben?
            </h2>
            <p className="text-lg text-foreground-muted mb-8 max-w-2xl mx-auto">
              Wir testen das mit echten Beispielen aus deinem Alltag und zeigen dir, wie viel Struktur möglich ist.
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
