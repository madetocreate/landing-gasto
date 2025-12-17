import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { createMetadata } from '@/lib/metadata';
import Image from 'next/image';
import Link from 'next/link';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

export const metadata = createMetadata({
  title: 'Bewertungen – Mehr Kundenbewertungen, schneller reagieren, weniger Aufwand',
  description: 'Bewertungen automatisch anstoßen, Feedback im Blick behalten und Antworten vorbereiten – ohne Stress und ohne extra Oberflächen.',
  path: '/anwendungen/bewertungen',
});

export default function Bewertungen() {
  const faqItems = [
    {
      q: 'Auf welchen Plattformen funktioniert das?',
      a: 'Das System funktioniert mit den gängigen Bewertungsplattformen (Google, Trustpilot, etc.) und kann auch direkt auf deiner Website integriert werden.',
    },
    {
      q: 'Werden Antworten automatisch veröffentlicht?',
      a: 'Nein. Antworten werden dir vorgeschlagen, du prüfst und entscheidest. Nichts geht ohne deine Freigabe raus.',
    },
    {
      q: 'Kann ich Vorlagen und Tonfall festlegen?',
      a: 'Ja. Du bestimmst, wie locker oder formal es klingt. Das System passt sich an deinen Stil an.',
    },
    {
      q: 'Wie gehe ich mit negativen Bewertungen sinnvoll um?',
      a: 'Kritisches Feedback wird früh erkannt und hervorgehoben. Du bekommst Vorschläge für konstruktive Antworten, die das Thema klären, ohne defensiv zu wirken.',
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
                Bewertungen
              </h1>
              <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
                Mehr echte Bewertungen – ohne hinterherzulaufen.
                Das System fragt zur passenden Zeit nach Feedback, macht es Kunden leicht und hilft dir beim Reagieren.
                So wird aus „Ich müsste mal…" ein sauberer Ablauf.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted/30 border border-border/50">
              <Image
                src="/media/previews/bewertungen.jpg"
                alt="Bewertungen"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F2937]/20 to-[#111827]/40" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Warum Bewertungen im Alltag zählen */}
      <Section variant="normal">
        <Container size="lg">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Warum Bewertungen im Alltag zählen
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Für viele Kunden sind Bewertungen der erste Eindruck.
              Und für dich sind sie ein schneller Spiegel: Was läuft gut – und wo hakt es?
              Wenn du Bewertungen aktiv und ruhig steuerst, wirkt dein Business professioneller und verlässlicher.
            </p>
          </div>

          {/* So bekommst du mehr Bewertungen */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              So bekommst du mehr Bewertungen (ohne aufdringlich zu sein)
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Anfrage zur richtigen Zeit (z. B. nach abgeschlossenem Auftrag)</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>einfacher Link statt langer Erklärungen</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>sanfte Erinnerung, wenn es sinnvoll ist</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>klare Trennung: Lob sichtbar machen, Kritik früh erkennen</span>
              </li>
            </ul>
          </div>

          {/* So reagierst du schneller – ohne Stress - Nutzen-Kacheln */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              So reagierst du schneller – ohne Stress
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-surface border border-border/50 rounded-xl">
                <h3 className="text-lg font-bold mb-3">Neue Bewertungen erkannt</h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  Neue Bewertungen werden automatisch erkannt und gesammelt – du verpasst nichts.
                </p>
              </div>
              <div className="p-6 bg-surface border border-border/50 rounded-xl">
                <h3 className="text-lg font-bold mb-3">Kritisches Feedback hervorgehoben</h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  Kritisches Feedback wird hervorgehoben, damit du schnell reagieren kannst.
                </p>
              </div>
              <div className="p-6 bg-surface border border-border/50 rounded-xl">
                <h3 className="text-lg font-bold mb-3">Antwortvorschläge in deinem Ton</h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  Kurze Zusammenfassungen und Antwortvorschläge in deinem Ton – du entscheidest.
                </p>
              </div>
            </div>
          </div>

          {/* Beispiel aus dem Alltag */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              Beispiel aus dem Alltag
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <SpotlightCard className="p-6 md:p-8" spotlightColor="rgba(var(--action-rgb), 0.05)">
                <h3 className="text-xl font-bold mb-3">Nach dem Auftrag</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Nach Abschluss geht automatisch eine kurze, freundliche Bitte raus. Wer zufrieden ist, kann mit wenigen Klicks bewerten.
                </p>
              </SpotlightCard>
              <SpotlightCard className="p-6 md:p-8" spotlightColor="rgba(var(--action-rgb), 0.05)">
                <h3 className="text-xl font-bold mb-3">Wenn etwas kritisch wird</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Du bekommst die Info früh, kannst reagieren und das Thema sauber klären – bevor es liegen bleibt.
                </p>
              </SpotlightCard>
            </div>
          </div>

          {/* Kontrolle & Tonalität */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Kontrolle & Tonalität
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Du bestimmst, wie locker oder wie formal das klingt.
              Und du kannst einstellen, ob Antworten automatisch vorgeschlagen oder erst freigegeben werden.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-background-muted rounded-2xl p-8 md:p-12 mb-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Willst du mehr Bewertungen, ohne dafür Zeit zu verlieren?
            </h2>
            <p className="text-lg text-foreground-muted mb-8 max-w-2xl mx-auto">
              Wir bauen einen Ablauf, der zu deinem Business passt – nicht nach Schema F.
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
