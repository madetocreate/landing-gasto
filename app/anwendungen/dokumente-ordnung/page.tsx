import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { createMetadata } from '@/lib/metadata';
import Image from 'next/image';
import Link from 'next/link';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { Search, Zap, ArrowRight, Sparkles, Database, Layers } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Dokumente & Ordnung – PDFs verstehen, Daten extrahieren.',
  description: 'Upload rein, Struktur raus: Die KI liest Dokumente, fasst zusammen und ordnet sie zu.',
  path: '/anwendungen/dokumente-ordnung',
});

export default function DokumenteOrdnung() {
  const documentTypes = [
    'Rechnungen & Belege',
    'Angebote & Aufträge',
    'Lieferscheine',
    'Handschriftliche Notizen',
    'PDFs aus E‑Mails',
    'Verträge & Protokolle',
  ];

  const faqItems = [
    {
      q: 'Muss ich meine Dokumente vorher sortieren?',
      a: 'Nein. Du kannst unsortierte Dateien, Scans oder Handyfotos einfach hochladen. Die KI erkennt den Typ und den Inhalt automatisch.',
    },
    {
      q: 'Welche Daten werden extrahiert?',
      a: 'Standardmäßig Beträge, Daten, Namen und Referenznummern. Wir können das System aber auf deine spezifischen Anforderungen trainieren.',
    },
    {
      q: 'Ist die Texterkennung zuverlässig?',
      a: 'Dank moderner OCR-Technologie ist die Erkennungsrate extrem hoch, auch bei schlechten Scans oder schrägen Fotos von Dokumenten.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <Section variant="hero" className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2" />
        
        <Container size="lg">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 text-stone-600 text-xs font-bold uppercase tracking-[0.2em] mb-8">
                <Database className="w-4 h-4 text-blue-500" />
                Data Extraction Hub
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] text-stone-900">
                Wissen <br />
                <span className="text-blue-600 underline decoration-blue-100 decoration-8 underline-offset-8">strukturieren.</span>
              </h1>
              <p className="text-xl md:text-2xl text-stone-500 leading-relaxed max-w-xl font-medium mb-10">
                PDFs, Scans, Fotos – rein damit. Die KI liest mit, erkennt Inhalte und macht daraus Ordnung, die du wirklich wiederfindest.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" className="h-16 px-10 rounded-2xl text-xl font-bold bg-blue-600 hover:bg-blue-700 shadow-blue-200/50" asChild href="/check">
                  <span>Jetzt Check starten</span>
                </Button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-100/50 rounded-[3rem] blur-2xl group-hover:bg-blue-200/50 transition-colors duration-700" />
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="/media/previews/dokumente-ordnung.jpg"
                  alt="Dokumente & Ordnung"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="py-24 bg-stone-50">
        <Container size="lg">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Was du einfach hochladen kannst</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {documentTypes.map((type) => (
                <div key={type} className="px-6 py-3 rounded-2xl bg-white border-2 border-stone-100 font-bold text-stone-600 shadow-sm hover:border-blue-200 transition-colors">
                  {type}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Automatischer Scan', 
                desc: 'KI erkennt Typ, Sprache und Inhalt in Millisekunden.', 
                icon: Search,
                color: 'bg-blue-50 text-blue-600'
              },
              { 
                title: 'Daten-Extraktion', 
                desc: 'Beträge, Daten und Namen werden sauber ausgelesen.', 
                icon: Zap,
                color: 'bg-amber-50 text-amber-600'
              },
              { 
                title: 'Smarte Zuordnung', 
                desc: 'Das Dokument landet direkt im richtigen Kunden-Ordner.', 
                icon: Layers,
                color: 'bg-emerald-50 text-emerald-600'
              },
            ].map((item, i) => (
              <SpotlightCard key={i} className="p-10 rounded-[2.5rem] bg-white border-2 border-stone-100 hover:border-blue-200 transition-all duration-500">
                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-8 shadow-sm`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                <p className="text-stone-500 leading-relaxed">{item.desc}</p>
              </SpotlightCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="py-32">
        <Container size="lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-16 text-center">
              Häufige Fragen
            </h2>
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="pb-32">
        <Container size="lg">
          <div className="p-12 md:p-20 rounded-[4rem] bg-stone-900 text-white relative overflow-hidden text-center group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 opacity-10 blur-[120px] group-hover:opacity-20 transition-opacity duration-700" />
            <div className="relative z-10">
              <Sparkles className="w-16 h-16 text-blue-400 mx-auto mb-10" />
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">
                Papierkram <br className="hidden md:block" /> adé.
              </h2>
              <p className="text-xl md:text-2xl text-stone-400 max-w-2xl mx-auto mb-12 font-medium">
                Lass uns schauen, wie wir deine Dokumentenablage revolutionieren. In 3 Minuten wissen wir mehr.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button variant="primary" size="lg" className="h-16 px-12 rounded-2xl text-xl font-bold bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-900/20 hover:scale-105 transition-transform" asChild href="/check">
                  <span>Check starten</span>
                </Button>
                <Link href="/anwendungen" className="inline-flex items-center gap-2 text-white/60 hover:text-white font-bold transition-colors">
                  Alle Anwendungen sehen <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
