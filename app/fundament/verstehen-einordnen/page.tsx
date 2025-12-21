import { Section, Container } from '@/components/ui/Section';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Eye, Target, Filter, CheckCircle2, ArrowRight, ArrowLeft, Layers } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Fundament: Verstehen & Einordnen',
  description: 'Wie das System Eingänge versteht, priorisiert und in klare nächste Schritte übersetzt.',
  path: '/fundament/verstehen-einordnen',
});

const fundamentPages = [
  { key: 'gedaechtnis-kontext', title: 'Gedächtnis & Kontext', href: '/fundament/gedaechtnis-kontext' },
  { key: 'verstehen-einordnen', title: 'Verstehen & Einordnen', href: '/fundament/verstehen-einordnen' },
  { key: 'dokumente-verstehen', title: 'Dokumente verstehen', href: '/fundament/dokumente-verstehen' },
  { key: 'verbinden-weitergeben', title: 'Verbinden & Weitergeben', href: '/fundament/verbinden-weitergeben' },
  { key: 'kontrolle-sicherheit', title: 'Kontrolle & Sicherheit', href: '/fundament/kontrolle-sicherheit' },
];

const prevPage = fundamentPages[0];
const nextPage = fundamentPages[2];

const faqItems = [
  {
    q: 'Kann ich die Kategorien anpassen?',
    a: 'Ja. Das System lernt deine spezifischen Kategorien und Priorisierungs-Regeln kennen, damit die Einordnung perfekt zu deinem Geschäftsmodell passt.',
  },
  {
    q: 'Muss das System automatisch antworten?',
    a: 'Nein. Standardmäßig schlägt das System nur vor. Du entscheidest, wann du bereit für eine Teil-Automatisierung bist.',
  },
  {
    q: 'Was passiert bei unklaren Anfragen?',
    a: 'Die KI markiert diese als "unklar" oder "Prüfung nötig" und stellt ggf. gezielte Rückfragen, statt blind zu raten.',
  },
];

export default function VerstehenEinordnen() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <Section variant="normal" className="pt-32 pb-12">
        <Container size="lg">
          <Breadcrumbs
            items={[
              { label: 'Start', href: '/' },
              { label: 'Fundament', href: '/fundament' },
              { label: 'Verstehen & Einordnen' },
            ]}
            className="mb-12"
          />
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-widest mb-8">
              <Layers className="w-4 h-4" />
              Das Fundament
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
              Verstehen & <br />
              <span className="text-emerald-600">Einordnen.</span>
            </h1>
            <p className="text-2xl text-foreground-muted leading-relaxed max-w-2xl">
              Bevor KI hilft, muss sie verstehen. Wir machen aus digitalem Rauschen klare Aufgaben und priorisierte Vorgänge.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="py-24">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <SpotlightCard className="p-10 rounded-[3rem] bg-white border-2 border-stone-100">
              <div className="w-14 h-14 rounded-2xl bg-stone-50 text-stone-600 flex items-center justify-center mb-8">
                <Filter className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Vom Chaos zur Struktur</h2>
              <p className="text-lg text-foreground-muted leading-relaxed">
                Anfragen kommen über viele Kanäle: &quot;Dringend&quot;, &quot;Kurz anrufen&quot;, &quot;Guck mal drüber&quot;. Verstehen &amp; Einordnen erkennt den Kern der Nachricht, bewertet die Dringlichkeit und ordnet alles logisch ein.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-10 rounded-[3rem] bg-stone-900 text-white shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-emerald-400 flex items-center justify-center mb-8">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Präzise Vorbereitung</h2>
              <p className="text-lg text-white/60 leading-relaxed">
                Statt nur Text zu lesen, bereitet das System den nächsten Schritt vor. Es erkennt fehlende Informationen und bereitet Rückfragen oder Antwortentwürfe vor – noch bevor du die Nachricht zum ersten Mal liest.
              </p>
            </SpotlightCard>
          </div>

          <div className="max-w-4xl mx-auto space-y-24">
            <div>
              <h3 className="text-3xl font-bold mb-12 tracking-tight flex items-center gap-4">
                <Eye className="w-8 h-8 text-emerald-500" />
                Die Intelligenz-Ebenen
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Themen-Erkennung', text: 'Worum geht es wirklich? Reklamation, Anfrage oder Termin?' },
                  { title: 'Dringlichkeit', text: 'Was muss sofort erledigt werden und was kann bis morgen warten?' },
                  { title: 'Vorgangs-Bezug', text: 'Gehört diese Info zu einem bereits laufenden Projekt?' },
                  { title: 'Handlungs-Vorschlag', text: 'Soll ich antworten, weiterleiten oder ein Ticket erstellen?' },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white border border-stone-100">
                    <div className="font-bold text-lg mb-2">{item.title}</div>
                    <p className="text-foreground-muted">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-12 rounded-[3rem] bg-stone-100 border-2 border-stone-200 relative overflow-hidden">
              <CheckCircle2 className="absolute -right-8 -bottom-8 w-64 h-64 text-stone-200/50" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 tracking-tight">Leitplanken statt Raten</h3>
                <p className="text-xl text-stone-600 leading-relaxed mb-8 max-w-2xl">
                  Du definierst die Spielregeln. Welche Themen brauchen immer eine manuelle Freigabe? Welche Wörter triggern sofort einen Alarm? Unser System arbeitet in deinen Leitplanken – sicher und zuverlässig.
                </p>
                <Link href="/fundament/kontrolle-sicherheit" className="inline-flex items-center gap-2 text-stone-900 font-bold hover:underline">
                  Zu Kontrolle & Sicherheit <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-12 tracking-tight">Häufige Fragen</h3>
              <FAQAccordion items={faqItems} />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-12 border-t border-stone-200">
              <Link href={prevPage.href} className="group flex items-center gap-4 text-stone-400 hover:text-stone-900 transition-colors">
                <div className="w-12 h-12 rounded-full border-2 border-stone-100 flex items-center justify-center group-hover:border-stone-900 transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest font-bold opacity-50">Zurück</div>
                  <div className="font-bold">{prevPage.title}</div>
                </div>
              </Link>

              <Link href={nextPage.href} className="group flex items-center gap-4 text-stone-900 text-right">
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
