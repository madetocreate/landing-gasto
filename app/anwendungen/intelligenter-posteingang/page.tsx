import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { createMetadata } from '@/lib/metadata';
import Image from 'next/image';
import Link from 'next/link';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { Inbox, Mail, ArrowRight, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { getLocale } from '@/lib/getLocale';
import { InternalLinks } from '@/components/seo/InternalLinks';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createMetadata({
    title: 'Intelligenter Posteingang – E-Mails automatisch sortieren',
    description: 'KI sortiert, priorisiert und bereitet Antworten vor – bevor Sie Ihre Mails überhaupt lesen. Alle Nachrichten an einem Ort, nur das Wichtige kommt durch.',
    path: '/anwendungen/intelligenter-posteingang',
    locale,
  });
}

export default async function IntelligenterPosteingang() {
  const faqItems = [
    {
      q: 'Welche Kanäle werden unterstützt?',
      a: 'E-Mail (IMAP/Exchange), Website-Formulare, Chat-Anfragen und Messenger-Dienste.',
    },
    {
      q: 'Antwortet die KI automatisch?',
      a: 'Standardmäßig erstellt sie nur Entwürfe. Du entscheidest, welche Standard-Anfragen (z.B. Terminanfragen) nach deinen Regeln automatisch beantwortet werden dürfen.',
    },
    {
      q: 'Lernt das System mit?',
      a: 'Ja. Jedes Mal, wenn du einen Entwurf korrigierst, lernt die KI deinen Stil und deine spezifischen Geschäftsregeln besser kennen.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <Section variant="hero" className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-50/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
        
        <Container size="lg">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 text-stone-600 text-xs font-bold uppercase tracking-[0.2em] mb-8">
                <Inbox className="w-4 h-4 text-amber-500" />
                Inbox Management 2.0
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] text-stone-900">
                Postfach <br />
                <span className="text-amber-500 underline decoration-amber-100 decoration-8 underline-offset-8">befreien.</span>
              </h1>
              <p className="text-xl md:text-2xl text-stone-500 leading-relaxed max-w-xl font-medium mb-10">
                KI sortiert, priorisiert und bereitet Antworten vor – bevor du deine Mails überhaupt liest. Hol dir die Kontrolle über deinen Tag zurück.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" className="h-16 px-10 rounded-2xl text-xl font-bold bg-amber-500 hover:bg-amber-600 shadow-amber-200/50" asChild href="/check">
                  <span>Jetzt Check starten</span>
                </Button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-amber-100/50 rounded-[3rem] blur-2xl group-hover:bg-amber-200/50 transition-colors duration-700" />
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="/media/previews/intelligenter-posteingang.jpg"
                  alt="Posteingang"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="py-24 bg-stone-50">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Smarte Sortierung', 
                desc: 'KI erkennt Themen und Dringlichkeit sofort.', 
                icon: Filter,
                color: 'bg-amber-50 text-amber-600'
              },
              { 
                title: 'Antwort-Entwürfe', 
                desc: 'Perfekt vorbereitete Mails in deinem persönlichen Ton.', 
                icon: Mail,
                color: 'bg-blue-50 text-blue-600'
              },
              { 
                title: 'Vorgangs-Zuordnung', 
                desc: 'Jede Mail landet automatisch im richtigen Projekt.', 
                icon: CheckCircle2,
                color: 'bg-emerald-50 text-emerald-600'
              },
            ].map((item, i) => (
              <SpotlightCard key={i} className="p-10 rounded-[2.5rem] bg-white border-2 border-stone-100 hover:border-amber-200 transition-all duration-500">
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
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 opacity-10 blur-[120px] group-hover:opacity-20 transition-opacity duration-700" />
            <div className="relative z-10">
              <Sparkles className="w-16 h-16 text-amber-400 mx-auto mb-10" />
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">
                Zeit für <br className="hidden md:block" /> Inbox Zero.
              </h2>
              <p className="text-xl md:text-2xl text-stone-400 max-w-2xl mx-auto mb-12 font-medium">
                Schluss mit dem Mail-Chaos. Lass uns in 3 Minuten besprechen, wie wir deinen Posteingang beruhigen.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button variant="primary" size="lg" className="h-16 px-12 rounded-2xl text-xl font-bold bg-amber-600 hover:bg-amber-700 shadow-xl shadow-amber-900/20 hover:scale-105 transition-transform" asChild href="/check">
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
      
      <InternalLinks
        links={[
          {
            href: '/fundament/verstehen-einordnen',
            label: 'Verstehen & Einordnen',
            description: 'Wie KI Nachrichten kategorisiert',
          },
          {
            href: '/fundament/verbinden-weitergeben',
            label: 'Verbinden & Weitergeben',
            description: 'Wie verschiedene Kanäle verbunden werden',
          },
          {
            href: '/wissen/erste-schritte',
            label: 'Erste Schritte',
            description: 'So starten Sie mit KI',
          },
          {
            href: '/preise',
            label: 'Preise',
            description: 'Transparente Preise für KI-Modernisierung',
          },
        ]}
        title="Weiterführende Informationen"
      />
    </div>
  );
}
