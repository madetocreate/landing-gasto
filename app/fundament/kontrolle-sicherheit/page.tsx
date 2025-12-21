import { Section, Container } from '@/components/ui/Section';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Shield, Lock, Eye, Activity, ArrowRight, ArrowLeft, Layers } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Fundament: Kontrolle & Sicherheit',
  description: 'Regeln, Freigaben, Rollen, Audit: KI nutzen, ohne Kontrollverlust.',
  path: '/fundament/kontrolle-sicherheit',
});

const fundamentPages = [
  { key: 'gedaechtnis-kontext', title: 'Gedächtnis & Kontext', href: '/fundament/gedaechtnis-kontext' },
  { key: 'verstehen-einordnen', title: 'Verstehen & Einordnen', href: '/fundament/verstehen-einordnen' },
  { key: 'dokumente-verstehen', title: 'Dokumente verstehen', href: '/fundament/dokumente-verstehen' },
  { key: 'verbinden-weitergeben', title: 'Verbinden & Weitergeben', href: '/fundament/verbinden-weitergeben' },
  { key: 'kontrolle-sicherheit', title: 'Kontrolle & Sicherheit', href: '/fundament/kontrolle-sicherheit' },
];

const prevPage = fundamentPages[3];

const faqItems = [
  {
    q: 'Kann ich Automationen jederzeit stoppen?',
    a: 'Ja. Du hast volle Kontrolle über alle Prozesse. Automationen können jederzeit pausiert, angepasst oder komplett deaktiviert werden.',
  },
  {
    q: 'Wer sieht welche Daten?',
    a: 'Über ein präzises Rollen- und Rechtemanagement steuerst du genau, welcher Mitarbeiter oder welche Anwendung auf welche Informationen zugreifen darf.',
  },
  {
    q: 'Gibt es ein Audit-Log?',
    a: 'Ja. Jede wichtige Aktion und jeder Vorschlag wird protokolliert. So kannst du jederzeit nachvollziehen, was wann warum passiert ist.',
  },
];

export default function KontrolleSicherheit() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <Section variant="normal" className="pt-32 pb-12">
        <Container size="lg">
          <Breadcrumbs
            items={[
              { label: 'Start', href: '/' },
              { label: 'Fundament', href: '/fundament' },
              { label: 'Kontrolle & Sicherheit' },
            ]}
            className="mb-12"
          />
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-widest mb-8">
              <Layers className="w-4 h-4" />
              Das Fundament
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter mb-6 sm:mb-8 leading-none break-words">
              Kontrolle & <br className="hidden sm:block" />
              <span className="text-emerald-600">Sicherheit.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground-muted leading-relaxed max-w-2xl break-words px-2">
              KI hilft erst dann wirklich, wenn du ihr vertrauen kannst. Wir bauen die Leitplanken für deinen entspannten KI-Einsatz im Alltag.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="py-24">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 mb-16 sm:mb-24 px-4 sm:px-0">
            <SpotlightCard className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[3rem] bg-white border-2 border-stone-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-stone-50 text-stone-600 flex items-center justify-center mb-6 sm:mb-8">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 tracking-tight break-words px-2">Vorsprung durch Sicherheit</h2>
              <p className="text-base sm:text-lg text-foreground-muted leading-relaxed break-words px-2">
                Sicherheit ist bei uns kein &quot;Häkchen&quot;, sondern die Basis. Wir vermeiden Blackbox-Systeme und setzen auf volle Transparenz. Du weißt immer, was passiert – und warum.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[3rem] bg-stone-900 text-white shadow-2xl">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/10 text-emerald-400 flex items-center justify-center mb-6 sm:mb-8">
                <Lock className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 tracking-tight break-words px-2">Kein Kontrollverlust</h2>
              <p className="text-base sm:text-lg text-white/60 leading-relaxed break-words px-2">
                Wir nutzen das &quot;Human-in-the-Loop&quot; Prinzip. Die KI bereitet vor, aber bei kritischen Entscheidungen hast du das letzte Wort. So nutzt du die Power der KI ohne Risiko.
              </p>
            </SpotlightCard>
          </div>

          <div className="max-w-4xl mx-auto space-y-24">
            <div>
              <h3 className="text-3xl font-bold mb-12 tracking-tight flex items-center gap-4">
                <Activity className="w-8 h-8 text-emerald-500" />
                Die Sicherheits-Säulen
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Regelbasierte Freiheit', text: 'KI arbeitet in festen Leitplanken, die du definierst.' },
                  { title: 'Freigabe-Workflows', text: 'Kritische Aktionen brauchen deine explizite Bestätigung.' },
                  { title: 'Rollen-Konzept', text: 'Präzise Steuerung, wer welche Daten sehen und verarbeiten darf.' },
                  { title: 'Volles Audit', text: 'Lückenlose Dokumentation aller KI-Aktionen und Vorschläge.' },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white border border-stone-100">
                    <div className="font-bold text-lg mb-2">{item.title}</div>
                    <p className="text-foreground-muted">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 sm:p-12 rounded-2xl sm:rounded-[3rem] bg-emerald-50 border-2 border-emerald-100 relative overflow-hidden">
              <Eye className="absolute -right-8 -bottom-8 w-40 sm:w-64 h-40 sm:h-64 text-emerald-200/50" />
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 tracking-tight text-emerald-900 break-words">Transparenz schafft Vertrauen</h3>
                <p className="text-lg sm:text-xl text-emerald-900/70 leading-relaxed mb-6 sm:mb-8 max-w-2xl break-words">
                  Wir nutzen modernste Schutzschichten gegen Manipulation (z.B. Prompt Injection) und sichern deine Datenflüsse serverseitig ab. Dein System bleibt dein System.
                </p>
                <Link href="/wissen/sicherheit" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:underline touch-manipulation min-h-[44px]">
                  Unser Sicherheits-Konzept <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-12 tracking-tight">Häufige Fragen</h3>
              <FAQAccordion items={faqItems} />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-12 border-t border-stone-200">
              <Link href={prevPage.href} className="group flex items-center gap-4 text-stone-400 hover:text-stone-900 transition-colors text-left">
                <div className="w-12 h-12 rounded-full border-2 border-stone-100 flex items-center justify-center group-hover:border-stone-900 transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest font-bold opacity-50">Zurück</div>
                  <div className="font-bold">{prevPage.title}</div>
                </div>
              </Link>

              <Link href="/fundament" className="text-stone-400 hover:text-stone-900 font-bold uppercase tracking-widest text-xs">
                Übersicht
              </Link>

              <div className="flex-1">
                {/* No Next Page for the last one */}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
