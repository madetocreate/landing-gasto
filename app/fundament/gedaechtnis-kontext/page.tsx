import { Section, Container } from '@/components/ui/Section';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Brain, History, ShieldCheck, Zap, ArrowRight, Layers } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Fundament: Gedächtnis & Kontext',
  description: 'Wie das Gedächtnis (Memory) Kontext speichert, ohne Datenmüll: nachvollziehbar, kontrollierbar, sicher.',
  path: '/fundament/gedaechtnis-kontext',
});

const fundamentPages = [
  { key: 'gedaechtnis-kontext', title: 'Gedächtnis & Kontext', href: '/fundament/gedaechtnis-kontext' },
  { key: 'verstehen-einordnen', title: 'Verstehen & Einordnen', href: '/fundament/verstehen-einordnen' },
  { key: 'dokumente-verstehen', title: 'Dokumente verstehen', href: '/fundament/dokumente-verstehen' },
  { key: 'verbinden-weitergeben', title: 'Verbinden & Weitergeben', href: '/fundament/verbinden-weitergeben' },
  { key: 'kontrolle-sicherheit', title: 'Kontrolle & Sicherheit', href: '/fundament/kontrolle-sicherheit' },
];

const nextPage = fundamentPages[1];

const faqItems = [
  {
    q: 'Speichert ihr wirklich „alles"?',
    a: 'Nein – Memory bleibt bewusst schlank und speichert nur, was im Alltag hilft und einen Zweck hat. Datenmüll vermeiden wir proaktiv.',
  },
  {
    q: 'Kann ich Inhalte löschen oder korrigieren?',
    a: 'Ja. Volle Kontrolle heißt für uns auch: du kannst jederzeit korrigieren, aufräumen oder Inhalte vollständig entfernen.',
  },
  {
    q: 'Wie sicher sind diese Daten?',
    a: 'Die Speicherung erfolgt verschlüsselt und nach höchsten Sicherheitsstandards. Du bestimmst, wer Zugriff auf welchen Kontext hat.',
  },
];

export default function GedaechtnisKontext() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <Section variant="normal" className="pt-32 pb-12">
        <Container size="lg">
          <Breadcrumbs
            items={[
              { label: 'Start', href: '/' },
              { label: 'Fundament', href: '/fundament' },
              { label: 'Gedächtnis & Kontext' },
            ]}
            className="mb-12"
          />
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-widest mb-8">
              <Layers className="w-4 h-4" />
              Das Fundament
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
              Gedächtnis & <br />
              <span className="text-emerald-600">Kontext.</span>
            </h1>
            <p className="text-2xl text-foreground-muted leading-relaxed max-w-2xl">
              Damit nichts immer wieder bei null startet. Das System hält den roten Faden aus Nachrichten, Dokumenten und Entscheidungen – aufgeräumt und jederzeit abrufbar.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="py-24">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <SpotlightCard className="p-10 rounded-[3rem] bg-white border-2 border-stone-100">
              <div className="w-14 h-14 rounded-2xl bg-stone-50 text-stone-600 flex items-center justify-center mb-8">
                <Brain className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Intelligentes Memory</h2>
              <p className="text-lg text-foreground-muted leading-relaxed">
                Stell dir vor, jede Anfrage ist ein Vorgang. Memory sammelt nicht einfach Daten, sondern versteht den Zusammenhang: Wer fragt? Was war der letzte Stand? Welche Absprachen wurden getroffen?
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-10 rounded-[3rem] bg-stone-900 text-white shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-emerald-400 flex items-center justify-center mb-8">
                <History className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Nie wieder Suchen</h2>
              <p className="text-lg text-white/60 leading-relaxed">
                Statt 10 Minuten nach einer alten Mail zu suchen, liefert dir das System sofort den passenden Vorgang inklusive aller relevanten Dokumente und der Historie. So arbeitest du immer mit vollem Überblick.
              </p>
            </SpotlightCard>
          </div>

          <div className="max-w-4xl mx-auto space-y-24">
            <div>
              <h3 className="text-3xl font-bold mb-12 tracking-tight flex items-center gap-4">
                <Zap className="w-8 h-8 text-emerald-500" />
                Was Memory leistet
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Verlauf & Stand', text: 'Was ist passiert, was ist offen, was ist bereits erledigt?' },
                  { title: 'Wichtige Fakten', text: 'Ansprechpartner, Rahmenbedingungen und getroffene Absprachen.' },
                  { title: 'Dokument-Bezug', text: 'Dateien landen nicht im "Zoo", sondern direkt am Vorgang.' },
                  { title: 'Entscheidungen', text: 'Wer hat was wann bestätigt? Volle Nachvollziehbarkeit.' },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white border border-stone-100">
                    <div className="font-bold text-lg mb-2">{item.title}</div>
                    <p className="text-foreground-muted">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-12 rounded-[3rem] bg-stone-900 border-2 border-white/10 relative overflow-hidden text-white">
              <ShieldCheck className="absolute -right-8 -bottom-8 w-64 h-64 text-white/5" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 tracking-tight text-emerald-400">Deine Datenhoheit</h3>
                <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-2xl">
                  Kontext ist wertvoll. Deshalb bestimmst du die Regeln: Was soll gespeichert werden? Was soll nach Projektabschluss gelöscht werden? Wir bieten maximale Transparenz und volle Kontrolle über dein digitales Gedächtnis.
                </p>
                <Link href="/fundament/kontrolle-sicherheit" className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:underline">
                  Kontrolle & Sicherheit <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-12 tracking-tight">Häufige Fragen</h3>
              <FAQAccordion items={faqItems} />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-12 border-t border-stone-200">
              <div className="flex-1">
                {/* No Prev Page for the first one */}
              </div>

              <Link href="/fundament" className="text-stone-400 hover:text-stone-900 font-bold uppercase tracking-widest text-xs">
                Übersicht
              </Link>

              <Link href={nextPage.href} className="flex-1 group flex items-center gap-4 text-stone-900 text-right justify-end">
                <div>
                  <div className="text-xs uppercase tracking-widest font-bold opacity-50">Weiter</div>
                  <div className="font-bold">{nextPage.title}</div>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-stone-900 flex items-center justify-center bg-stone-900 text-white group-hover:bg-action group-hover:border-action transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
