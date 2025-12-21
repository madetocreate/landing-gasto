import { Section, Container } from '@/components/ui/Section';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Link2, Share2, ShieldCheck, Zap, ArrowRight, ArrowLeft, Layers } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Fundament: Verbinden & Weitergeben',
  description: 'Kanäle verbinden, Ergebnisse zurückspielen: weniger Brüche, mehr Fluss im Alltag.',
  path: '/fundament/verbinden-weitergeben',
});

const fundamentPages = [
  { key: 'gedaechtnis-kontext', title: 'Gedächtnis & Kontext', href: '/fundament/gedaechtnis-kontext' },
  { key: 'verstehen-einordnen', title: 'Verstehen & Einordnen', href: '/fundament/verstehen-einordnen' },
  { key: 'dokumente-verstehen', title: 'Dokumente verstehen', href: '/fundament/dokumente-verstehen' },
  { key: 'verbinden-weitergeben', title: 'Verbinden & Weitergeben', href: '/fundament/verbinden-weitergeben' },
  { key: 'kontrolle-sicherheit', title: 'Kontrolle & Sicherheit', href: '/fundament/kontrolle-sicherheit' },
];

const prevPage = fundamentPages[2];
const nextPage = fundamentPages[4];

const faqItems = [
  {
    q: 'Welche Systeme können verbunden werden?',
    a: 'E-Mail, Kalender, Cloud-Speicher, CRM-Systeme und viele branchenspezifische Tools. Wir nutzen moderne APIs für stabile Verbindungen.',
  },
  {
    q: 'Kann ich steuern, was zurückgeschrieben wird?',
    a: 'Absolut. Du definierst genau, welche Daten fließen dürfen und welche Aktionen (z. B. eine Antwort senden) immer eine manuelle Freigabe brauchen.',
  },
  {
    q: 'Muss ich meine bestehenden Tools aufgeben?',
    a: 'Nein. Das System dockt sich an deine vorhandene Infrastruktur an. Ziel ist es, deine Arbeit zu erleichtern, nicht alles neu zu erfinden.',
  },
];

export default function VerbindenWeitergeben() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <Section variant="normal" className="pt-32 pb-12">
        <Container size="lg">
          <Breadcrumbs
            items={[
              { label: 'Start', href: '/' },
              { label: 'Fundament', href: '/fundament' },
              { label: 'Verbinden & Weitergeben' },
            ]}
            className="mb-12"
          />
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-widest mb-8">
              <Layers className="w-4 h-4" />
              Das Fundament
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
              Verbinden & <br />
              <span className="text-emerald-600">Weitergeben.</span>
            </h1>
            <p className="text-2xl text-foreground-muted leading-relaxed max-w-2xl">
              Damit Informationen nicht in Inseln hängen bleiben. Wir bauen die Brücken zwischen deinen Tools und sorgen für echten Datenfluss.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="py-24">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <SpotlightCard className="p-10 rounded-[3rem] bg-white border-2 border-stone-100">
              <div className="w-14 h-14 rounded-2xl bg-stone-50 text-stone-600 flex items-center justify-center mb-8">
                <Link2 className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Schluss mit Insel-Lösungen</h2>
              <p className="text-lg text-foreground-muted leading-relaxed">
                Echte Arbeit passiert über viele Kanäle: E-Mail, Chat, Telefon, Dokumente. Wir führen diese Ströme zusammen, damit der Zusammenhang nie verloren geht und du immer das Gesamtbild siehst.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-10 rounded-[3rem] bg-stone-900 text-white shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-emerald-400 flex items-center justify-center mb-8">
                <Share2 className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Ergebnisse, wo du sie brauchst</h2>
              <p className="text-lg text-white/60 leading-relaxed">
                Du musst nicht in ein neues Dashboard wechseln. Die Ergebnisse der KI – Zusammenfassungen, Entwürfe, Analysen – landen direkt in deinen gewohnten Programmen. Nahtlos und effizient.
              </p>
            </SpotlightCard>
          </div>

          <div className="max-w-4xl mx-auto space-y-24">
            <div>
              <h3 className="text-3xl font-bold mb-12 tracking-tight flex items-center gap-4">
                <Zap className="w-8 h-8 text-emerald-500" />
                Der digitale Workflow
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Schnittstellen-Power', text: 'Stabile Anbindung an Mail, Kalender, CRM und Cloud-Speicher.' },
                  { title: 'Automatischer Sync', text: 'Daten werden in Echtzeit zwischen den Systemen abgeglichen.' },
                  { title: 'Kontrollierter Output', text: 'Du entscheidest, welche Infos in welche Drittsysteme fließen.' },
                  { title: 'Kein Copy/Paste mehr', text: 'KI übernimmt den Übertrag von Daten – fehlerfrei und schnell.' },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white border border-stone-100">
                    <div className="font-bold text-lg mb-2">{item.title}</div>
                    <p className="text-foreground-muted">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-12 rounded-[3rem] bg-stone-100 border-2 border-stone-200 relative overflow-hidden">
              <ShieldCheck className="absolute -right-8 -bottom-8 w-64 h-64 text-stone-200/50" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 tracking-tight">Sicher verbunden</h3>
                <p className="text-xl text-stone-600 leading-relaxed mb-8 max-w-2xl">
                  Verbindungen sind nur so gut wie ihre Sicherheit. Wir setzen auf modernste Verschlüsselung und klare Berechtigungs-Ketten. Keine &quot;Bastellösungen&quot;, sondern professionelle Integrationen.
                </p>
                <Link href="/wissen/sicherheit" className="inline-flex items-center gap-2 text-stone-900 font-bold hover:underline">
                  Mehr zur Sicherheit <ArrowRight className="w-5 h-5" />
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
