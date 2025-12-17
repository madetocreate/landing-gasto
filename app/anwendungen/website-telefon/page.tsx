import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { createMetadata } from '@/lib/metadata';
import Image from 'next/image';
import Link from 'next/link';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { Check } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Website & Telefon Assistent – Keine Anfrage mehr verpassen',
  description: 'Beantwortet Fragen, nimmt Anliegen auf und leitet sauber weiter – auf Website und am Telefon. Mit Kontext und Kontrolle, ohne neue Oberfläche.',
  path: '/anwendungen/website-telefon',
});

export default function WebsiteTelefon() {
  const faqItems = [
    {
      q: 'Klingt das nach „Bot" oder nach normaler Kommunikation?',
      a: 'Es klingt nach deinem Betrieb – nicht nach Maschine. Du bestimmst Tonfall, Formulierungen und Stil. Die KI passt sich an, damit es natürlich wirkt.',
    },
    {
      q: 'Was passiert, wenn etwas unklar ist?',
      a: 'Wenn das System unsicher ist oder das Anliegen komplex wird, wird automatisch an dich übergeben – mit einer kurzen Zusammenfassung, damit du sofort einsteigen kannst.',
    },
    {
      q: 'Kann ich bestimmte Zeiten/Regeln festlegen?',
      a: 'Ja. Du bestimmst, wann der Assistent aktiv ist, welche Fragen er selbst beantworten darf und wann er dich dazuholt. Alles nachvollziehbar und steuerbar.',
    },
    {
      q: 'Muss ich dafür meine Website komplett umbauen?',
      a: 'Nein. Der Assistent lässt sich in bestehende Kontaktformulare oder Chat-Widgets integrieren. Keine große Umstellung, keine neue Oberfläche.',
    },
  ];

  return (
    <>
      {/* Hero - Zentriert */}
      <Section variant="hero" className="pt-32 pb-20">
        <Container size="lg" className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Website & Telefon Assistent
          </h1>
          <p className="text-lg md:text-xl text-foreground-muted leading-relaxed max-w-3xl mx-auto mb-12">
            Du verpasst keine Anfrage mehr – auch wenn du gerade auf dem Hof, in einem Termin oder mitten in der Arbeit bist.
            Der Assistent beantwortet Standardfragen, nimmt Anliegen sauber auf und gibt dir eine kurze Zusammenfassung, wenn du übernehmen sollst.
            Und wenn ein Kunde schon mal Kontakt hatte: Kontext ist da – ohne dass man alles nochmal erzählen muss.
          </p>
          
          {/* 2 kleine Panels unter dem Hero */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <SpotlightCard className="p-6" spotlightColor="rgba(var(--action-rgb), 0.1)">
              <h3 className="text-xl font-bold mb-3">Auf der Website</h3>
              <p className="text-foreground-muted">
                Fragen klären, Anliegen aufnehmen, Infos sammeln – ohne Hin und Her.
              </p>
            </SpotlightCard>
            <SpotlightCard className="p-6" spotlightColor="rgba(var(--action-rgb), 0.1)">
              <h3 className="text-xl font-bold mb-3">Am Telefon</h3>
              <p className="text-foreground-muted">
                Anrufe annehmen, sortieren, weiterleiten – ohne Warteschleife.
              </p>
            </SpotlightCard>
          </div>

          {/* Hero Visual */}
          <div className="relative aspect-[16/9] max-w-4xl mx-auto rounded-2xl overflow-hidden bg-muted/30 border border-border/50">
              <Image
                src="/media/previews/website-telefon.jpg"
                alt="Website & Telefon Assistent"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1F2937]/20 to-[#111827]/40" />
          </div>
        </Container>
      </Section>

      {/* Was sich im Alltag sofort ändert */}
      <Section variant="normal">
        <Container size="lg">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Was sich im Alltag sofort ändert
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Weniger verpasste Anfragen</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Weniger Rückfragen, weil Infos schon da sind</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Schnellere Reaktionen – auch außerhalb deiner Arbeitszeiten</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Klarere Übergaben, wenn du übernehmen musst</span>
              </li>
            </ul>
          </div>

          {/* So läuft ein Gespräch ab - Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              So läuft ein Gespräch ab
            </h2>
            <div className="space-y-8 max-w-3xl">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-action text-action-foreground flex items-center justify-center shrink-0 font-bold text-lg">1</div>
                  <div className="w-0.5 h-full bg-border mt-2" />
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold mb-2">Begrüßung & Anliegen</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    Der Kunde sagt, worum es geht. Das System erkennt Thema und Dringlichkeit.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-action text-action-foreground flex items-center justify-center shrink-0 font-bold text-lg">2</div>
                  <div className="w-0.5 h-full bg-border mt-2" />
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold mb-2">Klären & Sammeln</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    Es werden die Infos abgefragt, die du später wirklich brauchst (z. B. Name, Kontakt, Wunschtermin, kurze Beschreibung).
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-action text-action-foreground flex items-center justify-center shrink-0 font-bold text-lg">3</div>
                  <div className="w-0.5 h-full bg-border mt-2" />
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold mb-2">Lösen oder übergeben</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    Standardfragen werden beantwortet. Wenn es komplex wird, wird an dich übergeben.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-action text-action-foreground flex items-center justify-center shrink-0 font-bold text-lg">4</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Zusammenfassung</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    Du bekommst eine kurze, saubere Zusammenfassung statt „Kannst du mal zurückrufen?".
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Beispiele */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              Beispiele, die du sofort kennst
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <SpotlightCard className="p-6" spotlightColor="rgba(var(--action-rgb), 0.05)">
                <h3 className="text-xl font-bold mb-3">Termin & Rückruf</h3>
                <p className="text-foreground-muted">
                  Der Kunde will einen Termin. Die wichtigsten Infos werden aufgenommen – du entscheidest über die Bestätigung.
                </p>
              </SpotlightCard>
              <SpotlightCard className="p-6" spotlightColor="rgba(var(--action-rgb), 0.05)">
                <h3 className="text-xl font-bold mb-3">Preisanfrage</h3>
                <p className="text-foreground-muted">
                  Der Kunde fragt an. Es kommt nicht nur „Bitte Angebot", sondern die nötigen Details sind direkt dabei.
                </p>
              </SpotlightCard>
              <SpotlightCard className="p-6" spotlightColor="rgba(var(--action-rgb), 0.05)">
                <h3 className="text-xl font-bold mb-3">Servicefrage</h3>
                <p className="text-foreground-muted">
                  Standardfragen werden schnell beantwortet. Komplexe Fälle landen mit Kontext bei dir.
                </p>
              </SpotlightCard>
            </div>
          </div>

          {/* Du bestimmst Ton, Grenzen und Freigaben */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Du bestimmst Ton, Grenzen und Freigaben
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-6">
              Der Assistent soll klingen wie dein Betrieb – nicht wie eine Maschine.
              Du legst fest, was er selbst beantworten darf, wann er dich dazuholt und welche Dinge immer geprüft werden müssen.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Dein Tonfall (locker, kurz, klar)</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Handover-Regeln (wann übernimmt ein Mensch)</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Freigaben (was darf automatisch raus)</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-background-muted rounded-2xl p-8 md:p-12 mb-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Willst du testen, wie deine Anfragen heute ankommen?
            </h2>
            <p className="text-lg text-foreground-muted mb-8 max-w-2xl mx-auto">
              Wir schauen kurz auf Website & Telefon und bauen einen ersten Ablauf, der wirklich passt.
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
