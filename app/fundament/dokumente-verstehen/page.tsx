import { Section, Container } from '@/components/ui/Section';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { FileText, Search, Zap, Shield, ArrowRight, ArrowLeft, Layers } from 'lucide-react';
import { getLocale } from '@/lib/getLocale';
import { StructuredData } from '@/components/seo/StructuredData';
import { InternalLinks } from '@/components/seo/InternalLinks';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createMetadata({
    title: 'Fundament: Dokumente verstehen',
    description: 'PDFs, Scans und Fotos: Inhalte finden, zusammenfassen und dem richtigen Vorgang zuordnen. Wie KI Dokumente versteht und strukturiert.',
    path: '/fundament/dokumente-verstehen',
    locale,
  });
}

const fundamentPages = [
  { key: 'gedaechtnis-kontext', title: 'Gedächtnis & Kontext', href: '/fundament/gedaechtnis-kontext' },
  { key: 'verstehen-einordnen', title: 'Verstehen & Einordnen', href: '/fundament/verstehen-einordnen' },
  { key: 'dokumente-verstehen', title: 'Dokumente verstehen', href: '/fundament/dokumente-verstehen' },
  { key: 'verbinden-weitergeben', title: 'Verbinden & Weitergeben', href: '/fundament/verbinden-weitergeben' },
  { key: 'kontrolle-sicherheit', title: 'Kontrolle & Sicherheit', href: '/fundament/kontrolle-sicherheit' },
];

const prevPage = fundamentPages[1];
const nextPage = fundamentPages[3];

const faqItems = [
  {
    q: 'Welche Dokumente werden unterstützt?',
    a: 'PDFs, Scans, Fotos (JPG/PNG) und gängige Office-Dateien. Dank moderner OCR werden auch handschriftliche Notizen auf Fotos oft erstaunlich gut erkannt.',
  },
  {
    q: 'Muss ich alles manuell sortieren?',
    a: 'Nein. Das System erkennt den Kontext und ordnet Dokumente automatisch dem passenden Vorgang oder Kunden zu. Du musst nur noch kurz drüberschauen.',
  },
  {
    q: 'Wo werden die Daten verarbeitet?',
    a: 'Standardmäßig erfolgt die Verarbeitung auf Servern in der EU (auf Wunsch Deutschland), um maximale Datensicherheit und DSGVO-Konformität zu garantieren.',
  },
];

export default async function DokumenteVerstehen() {
  const locale = await getLocale();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://aklow.com';
  
  const breadcrumbItems = [
    { name: 'Start', url: `${baseUrl}/` },
    { name: 'Fundament', url: `${baseUrl}/fundament` },
    { name: 'Dokumente verstehen', url: `${baseUrl}/fundament/dokumente-verstehen` },
  ];

  return (
    <>
      <StructuredData 
        locale={locale}
        type="page"
        breadcrumbs={breadcrumbItems}
      />
      <div className="bg-stone-50 min-h-screen">
        <Section variant="normal" className="pt-32 pb-12">
          <Container size="lg">
            <Breadcrumbs
              items={[
                { label: 'Start', href: '/' },
                { label: 'Fundament', href: '/fundament' },
                { label: 'Dokumente verstehen' },
              ]}
              className="mb-12"
            />
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-widest mb-8">
              <Layers className="w-4 h-4" />
              Das Fundament
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
              Dokumente <br />
              <span className="text-emerald-600">verstehen.</span>
            </h1>
            <p className="text-2xl text-foreground-muted leading-relaxed max-w-2xl">
              PDFs rein, Klarheit raus. Dokumente werden lesbar, durchsuchbar und landen automatisch im passenden Zusammenhang.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="py-24">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <SpotlightCard className="p-10 rounded-[3rem] bg-white border-2 border-stone-100">
              <div className="w-14 h-14 rounded-2xl bg-stone-50 text-stone-600 flex items-center justify-center mb-8">
                <FileText className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Vom Papier zum Wissen</h2>
              <p className="text-lg text-foreground-muted leading-relaxed">
                Viele Abläufe hängen an Dateien: Angebote, Rechnungen, Protokolle. Das Problem ist selten das Dokument an sich – sondern, dass es nicht auffindbar oder ohne Kontext nutzlos ist. Wir machen Inhalte nutzbar.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-10 rounded-[3rem] bg-stone-900 text-white shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-emerald-400 flex items-center justify-center mb-8">
                <Zap className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Echtzeit-Analyse</h2>
              <p className="text-lg text-white/60 leading-relaxed">
                Sobald ein Dokument hochgeladen wird, extrahiert die KI alle relevanten Daten: Beträge, Termine, Ansprechpartner. Sie schreibt eine Zusammenfassung und schlägt sofort den nächsten logischen Schritt vor.
              </p>
            </SpotlightCard>
          </div>

          <div className="max-w-4xl mx-auto space-y-24">
            <div>
              <h3 className="text-3xl font-bold mb-12 tracking-tight flex items-center gap-4">
                <Search className="w-8 h-8 text-emerald-500" />
                Was beim Upload passiert
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Erkennen', text: 'Typ, Sprache und grober Inhalt werden sofort klassifiziert.' },
                  { title: 'Extrahieren', text: 'Wichtige Daten wie Beträge oder Namen werden sauber ausgelesen.' },
                  { title: 'Zusammenfassen', text: 'Ein kurzer Text (3-5 Zeilen) bringt den Inhalt auf den Punkt.' },
                  { title: 'Zuordnen', text: 'Das Dokument landet automatisch im richtigen Vorgang oder beim Kunden.' },
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white border border-stone-100">
                    <div className="font-bold text-lg mb-2">{item.title}</div>
                    <p className="text-foreground-muted">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-12 rounded-[3rem] bg-emerald-50 border-2 border-emerald-100 relative overflow-hidden">
              <Shield className="absolute -right-8 -bottom-8 w-64 h-64 text-emerald-200/50" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 tracking-tight">Sicherheit als Standard</h3>
                <p className="text-xl text-emerald-900/70 leading-relaxed mb-8 max-w-2xl">
                  Dokumente sind oft der sensibelste Teil eines Unternehmens. Darum nutzen wir präzise Rollen und Berechtigungen. Du bestimmst, wer was sehen darf. Alles bleibt in der EU, alles bleibt sicher.
                </p>
                <Link href="/wissen/sicherheit" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:underline">
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
      
      <InternalLinks
        links={[
          {
            href: '/fundament/gedaechtnis-kontext',
            label: 'Gedächtnis & Kontext',
            description: 'Wie KI Zusammenhänge erkennt und behält',
          },
          {
            href: '/fundament/kontrolle-sicherheit',
            label: 'Kontrolle & Sicherheit',
            description: 'Warum Kontrolle bei KI Pflicht ist',
          },
          {
            href: '/anwendungen/dokumente-ordnung',
            label: 'Dokumente & Ordnung',
            description: 'Praktische Anwendung für Ihren Alltag',
          },
          {
            href: '/wissen/sicherheit',
            label: 'Sicherheit',
            description: 'Mehr über Datenschutz und Sicherheit',
          },
        ]}
        title="Weiterführende Informationen"
      />
      </div>
    </>
  );
}
