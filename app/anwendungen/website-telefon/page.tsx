import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { createMetadata } from '@/lib/metadata';
import Image from 'next/image';
import Link from 'next/link';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { Phone, Globe, Zap, ArrowRight, Sparkles, Headphones } from 'lucide-react';

export const metadata = createMetadata({
  title: 'Website & Telefon – Rund um die Uhr für Kunden da.',
  description: 'Anliegen verstehen, Infos sammeln, Termine koordinieren – KI als dein erster Ansprechpartner.',
  path: '/anwendungen/website-telefon',
});

export default function WebsiteTelefon() {
  const faqItems = [
    {
      q: 'Klingt das nach einem Roboter?',
      a: 'Nein. Wir nutzen modernste Sprachtechnologie, die natürlich klingt und empathisch auf Kundenwünsche eingeht.',
    },
    {
      q: 'Was passiert bei komplexen Fragen?',
      a: 'Die KI erkennt ihre Grenzen und übergibt das Gespräch sauber an einen menschlichen Kollegen – inklusive Zusammenfassung des bisherigen Gesprächs.',
    },
    {
      q: 'Kann ich die Erreichbarkeit steuern?',
      a: 'Ja. Du bestimmst, wann die KI übernimmt (z.B. nach Feierabend oder bei Überlastung) und welche Themen sie direkt klären darf.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <Section variant="hero" className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-stone-100 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2" />
        
        <Container size="lg">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 text-stone-600 text-xs font-bold uppercase tracking-[0.2em] mb-8">
                <Headphones className="w-4 h-4 text-stone-900" />
                Always-On Concierge
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] text-stone-900">
                Immer <br />
                <span className="text-action underline decoration-emerald-200 decoration-8 underline-offset-8">erreichbar.</span>
              </h1>
              <p className="text-xl md:text-2xl text-stone-500 leading-relaxed max-w-xl font-medium mb-10">
                Anliegen verstehen, Infos sammeln, Termine koordinieren. Deine KI-Assistenten sind rund um die Uhr für deine Kunden da – per Website-Chat oder Telefon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" className="h-16 px-10 rounded-2xl text-xl font-bold shadow-emerald-200/50" asChild href="/check">
                  <span>Jetzt Check starten</span>
                </Button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-stone-100/50 rounded-[3rem] blur-2xl group-hover:bg-stone-200/50 transition-colors duration-700" />
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="/media/previews/website-telefon.jpg"
                  alt="Website & Telefon"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />
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
                title: 'Website-Chatbot', 
                desc: 'Beantwortet Fragen, qualifiziert Leads und bucht Termine direkt auf deiner Seite.', 
                icon: Globe,
                color: 'bg-blue-50 text-blue-600'
              },
              { 
                title: 'Telefon-Assistent', 
                desc: 'Nimmt Anrufe entgegen, notiert Anliegen und leitet dringende Infos sofort weiter.', 
                icon: Phone,
                color: 'bg-emerald-50 text-emerald-600'
              },
              { 
                title: 'Smarte Übergabe', 
                desc: 'Nahtloser Wechsel zum Menschen, wenn es persönlich werden muss.', 
                icon: Zap,
                color: 'bg-amber-50 text-amber-600'
              },
            ].map((item, i) => (
              <SpotlightCard key={i} className="p-10 rounded-[2.5rem] bg-white border-2 border-stone-100 hover:border-action/20 transition-all duration-500">
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
            <div className="absolute top-0 right-0 w-96 h-96 bg-action opacity-10 blur-[120px] group-hover:opacity-20 transition-opacity duration-700" />
            <div className="relative z-10">
              <Sparkles className="w-16 h-16 text-action mx-auto mb-10" />
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">
                Kein Anruf <br className="hidden md:block" /> mehr verloren.
              </h2>
              <p className="text-xl md:text-2xl text-stone-400 max-w-2xl mx-auto mb-12 font-medium">
                Sei für deine Kunden da, auch wenn du gerade im Termin oder im Feierabend bist. In 3 Minuten zeigen wir dir wie.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button variant="primary" size="lg" className="h-16 px-12 rounded-2xl text-xl font-bold shadow-xl shadow-action/20 hover:scale-105 transition-transform" asChild href="/check">
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
