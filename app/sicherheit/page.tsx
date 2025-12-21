import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Button } from '@/components/ui/Button';
import { createMetadata } from '@/lib/metadata';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { Shield, Lock, Eye, CheckCircle2 } from 'lucide-react';
import { getLocale } from '@/lib/getLocale';

export async function generateMetadata() {
  const locale = await getLocale();
  return createMetadata({
    title: 'Sicherheit & Vertrauen – KI mit Kontrolle',
    description: 'Verständlich erklärt: wie KI im Alltag hilft, ohne Risiken. Klare Regeln, Freigaben und Nachvollziehbarkeit – ohne komplizierte Dashboards.',
    path: '/sicherheit',
    locale,
  });
}

export default async function Sicherheit() {
  const locale = await getLocale();
  const principles = [
    {
      icon: Shield,
      text: 'Klare Regeln statt Magie',
    },
    {
      icon: CheckCircle2,
      text: 'Freigaben für kritische Schritte',
    },
    {
      icon: Eye,
      text: 'Nachvollziehbarkeit über den gesamten Ablauf',
    },
    {
      icon: Lock,
      text: 'Kontrolle über Datenzugriffe und Berechtigungen',
    },
  ];

  const faqItems = [
    {
      q: 'Kann ich festlegen, was automatisch passiert und was nicht?',
      a: 'Ja. Du bestimmst, welche Schritte automatisch laufen dürfen und welche deine Freigabe brauchen. Nichts passiert ohne deine Zustimmung.',
    },
    {
      q: 'Muss KI Antworten automatisch verschicken?',
      a: 'Nein. Antworten werden dir vorgeschlagen, du prüfst und entscheidest. Nichts geht ohne deine Freigabe raus.',
    },
    {
      q: 'Was passiert, wenn die KI unsicher ist?',
      a: 'Wenn das System unsicher ist oder etwas unklar erscheint, wird automatisch an dich übergeben – mit einer kurzen Zusammenfassung, damit du sofort einsteigen kannst.',
    },
    {
      q: 'Kann ich das schrittweise einführen?',
      a: 'Ja. Du startest mit einfachen Automatisierungen und erweiterst Schritt für Schritt, wenn du dich sicher fühlst. Alles bleibt unter deiner Kontrolle.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <Section variant="hero" className="pt-32 pb-20">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Sicherheit & Vertrauen
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
              KI kann im Alltag enorm entlasten – aber nur, wenn sie beherrschbar bleibt.
              Hier erklären wir, wie wir Sicherheit, Kontrolle und Transparenz praktisch umsetzen.
            </p>
          </div>
          
          {/* Abstraktes Visual im Hero */}
          <div className="max-w-2xl mx-auto">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1F2937]/20 via-[#111827]/30 to-[#1F2937]/20 border border-border/50">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 rounded-full border-4 border-action/30" />
                  <div className="absolute inset-4 rounded-full border-2 border-action/50" />
                  <div className="absolute inset-8 rounded-full bg-action/20 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-action" strokeWidth={2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Warum Sicherheit mehr ist als Technik */}
      <Section variant="normal">
        <Container size="lg">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Warum Sicherheit mehr ist als Technik
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Sicherheit bedeutet nicht nur Verschlüsselung oder Standards.
              Sicherheit bedeutet vor allem: Du weißt, was passiert – und Du behältst die Kontrolle.
              KI soll unterstützen, nicht eigenständig handeln, ohne dass Du es nachvollziehen kannst.
            </p>
          </div>

          {/* Kontrolle statt Blackbox */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Kontrolle statt Blackbox
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-6">
              Das System arbeitet nicht &bdquo;irgendwie im Hintergrund&quot;.
              Jeder Schritt ist erklärbar und prüfbar.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Automationen folgen klaren Regeln</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Entscheidungen sind nachvollziehbar</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Vorschläge bleiben Vorschläge</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Freigaben bleiben bei Dir</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Nichts passiert &bdquo;einfach so&quot;</span>
              </li>
            </ul>
          </div>

          {/* Highlight Callout: KI, aber mit Sicherheitsgurt */}
          <div className="max-w-4xl mx-auto mb-16">
            <SpotlightCard 
              className="p-8 md:p-12 bg-[#1F2937]/30 border border-border/50" 
              spotlightColor="rgba(var(--action-rgb), 0.15)"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                KI, aber mit Sicherheitsgurt.
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {principles.map((principle, idx) => {
                  const Icon = principle.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-action/20 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-action" strokeWidth={2} />
                      </div>
                      <p className="text-foreground-muted leading-relaxed pt-1">
                        {principle.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </SpotlightCard>
          </div>

          {/* Daten bleiben dort, wo sie hingehören */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Daten bleiben dort, wo sie hingehören
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Sensible Informationen gehören nicht unkontrolliert in den Browser oder in fremde Oberflächen.
              Darum ist das System so aufgebaut, dass Zugriffe klar geregelt sind und sensible Daten nicht unnötig verteilt werden.
              Du behältst jederzeit die Hoheit über Deine Daten.
            </p>
          </div>

          {/* Rollen, Rechte und klare Grenzen */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Rollen, Rechte und klare Grenzen
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Nicht jeder darf alles. Und nicht alles muss automatisch passieren.
              Darum gibt es saubere Rollen, klare Grenzen für Automatisierung und definierte Übergaben zwischen KI und Mensch.
              So bleibt KI ein Werkzeug – und kein Risiko.
            </p>
          </div>

          {/* So läuft's in der Praxis - 3 Steps */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
              So läuft&apos;s in der Praxis
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-action text-action-foreground flex items-center justify-center mx-auto mb-4 font-bold text-2xl">1</div>
                <h3 className="text-xl font-bold mb-3">Regeln</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Du legst fest, welche Automatisierungen erlaubt sind und welche Schritte deine Freigabe brauchen.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-action text-action-foreground flex items-center justify-center mx-auto mb-4 font-bold text-2xl">2</div>
                <h3 className="text-xl font-bold mb-3">Vorschläge</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Die KI arbeitet nach deinen Regeln und legt dir Vorschläge vor – mit Erklärung, warum sie gemacht wurden.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-action text-action-foreground flex items-center justify-center mx-auto mb-4 font-bold text-2xl">3</div>
                <h3 className="text-xl font-bold mb-3">Freigabe</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Du prüfst, passt an und gibst frei. Nichts passiert ohne deine Entscheidung.
                </p>
              </div>
            </div>
          </div>

          {/* Sicherheit im Alltag, nicht nur auf dem Papier */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Sicherheit im Alltag, nicht nur auf dem Papier
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-4">
              Viele Sicherheitskonzepte sehen auf Folien gut aus, helfen im Alltag aber wenig.
              Hier geht es um pragmatische Sicherheit:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Was passiert, wenn etwas unklar ist?</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Wer wird benachrichtigt?</span>
              </li>
              <li className="flex items-start gap-3 text-foreground-muted">
                <span className="text-action mr-2 mt-1">•</span>
                <span>Wo muss bewusst geprüft werden?</span>
              </li>
            </ul>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Diese Fragen sind fest im System verankert.
            </p>
          </div>

          {/* Vertrauen entsteht durch Transparenz */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Vertrauen entsteht durch Transparenz
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Du musst uns nichts &bdquo;glauben&quot;.
              Du kannst sehen, wie das System arbeitet: nachvollziehbare Abläufe, klare Regeln, prüfbare Entscheidungen.
              So entsteht Vertrauen Schritt für Schritt.
            </p>
          </div>

          {/* Verantwortung gehört dazu */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Verantwortung gehört dazu
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed">
              KI ist mächtig. Und genau deshalb gehen wir bewusst verantwortungsvoll damit um.
              Unser Ziel ist nicht maximale Automatisierung, sondern sinnvolle Entlastung – mit klaren Leitplanken.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-background-muted rounded-2xl p-8 md:p-12 mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Du willst wissen, wie das bei Dir aussehen kann?
            </h2>
            <p className="text-lg text-foreground-muted mb-8 leading-relaxed">
              Wir schauen uns kurz an, welche Abläufe bei Dir sinnvoll unterstützt werden können – und wo Kontrolle oder Freigaben wichtig sind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" asChild href="/kontakt">
                Kontakt
              </Button>
              <Button variant="secondary" size="lg" asChild href="/check">
                3-Minuten-Check
              </Button>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              Häufige Fragen
            </h2>
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </Section>

      <CTASection locale={locale} />
    </>
  );
}

