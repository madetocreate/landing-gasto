import { Section, Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { createMetadata } from '@/lib/metadata';
import Image from 'next/image';
import Link from 'next/link';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { Star, MessageCircle, Zap, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { getLocale } from '@/lib/getLocale';
import { InternalLinks } from '@/components/seo/InternalLinks';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createMetadata({
    title: 'Bewertungen – Mehr echte Bewertungen ohne Aufwand',
    description: 'Bewertungen automatisch anstoßen, Feedback im Blick behalten und Antworten vorbereiten. Mehr echte Bewertungen – ohne hinterherzulaufen.',
    path: '/anwendungen/bewertungen',
    locale,
  });
}

export default async function Bewertungen() {
  const faqItems = [
    {
      q: 'Auf welchen Plattformen funktioniert das?',
      a: 'Das System funktioniert mit den gängigen Bewertungsplattformen wie Google, Trustpilot und spezialisierten Branchenportalen.',
    },
    {
      q: 'Werden Antworten automatisch veröffentlicht?',
      a: 'Nein. Das System schlägt dir Antworten vor. Du prüfst sie kurz und gibst sie mit einem Klick frei.',
    },
    {
      q: 'Wie erkenne ich kritisches Feedback?',
      a: 'Die KI analysiert jede Bewertung in Echtzeit und markiert kritische Stimmen sofort, damit du priorisiert reagieren kannst.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <Section variant="hero" className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
        
        <Container size="lg">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 text-stone-600 text-xs font-bold uppercase tracking-[0.2em] mb-8">
                <Star className="w-4 h-4 text-action fill-current" />
                Social Proof Engine
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] text-stone-900">
                Vertrauen <br />
                <span className="text-action underline decoration-emerald-200 decoration-8 underline-offset-8">skalieren.</span>
              </h1>
              <p className="text-xl md:text-2xl text-stone-500 leading-relaxed max-w-xl font-medium mb-10">
                Mehr echte Bewertungen, ohne hinterherzulaufen. Wir automatisieren die Anfrage zur richtigen Zeit und helfen dir, perfekt zu reagieren.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" className="h-16 px-10 rounded-2xl text-xl font-bold" asChild href="/check">
                  <span>Jetzt Check starten</span>
                </Button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-emerald-100/50 rounded-[3rem] blur-2xl group-hover:bg-emerald-200/50 transition-colors duration-700" />
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="/media/previews/bewertungen.jpg"
                  alt="Bewertungen"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
                    <div className="flex gap-1 text-action mb-2">
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                    <p className="font-bold text-stone-900">&ldquo;Unglaublich, wie viel Zeit wir sparen!&rdquo;</p>
                  </div>
                </div>
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
                title: 'Erkennung in Echtzeit', 
                desc: 'Neue Bewertungen werden sofort erkannt und analysiert.', 
                icon: Zap,
                color: 'bg-amber-50 text-amber-600'
              },
              { 
                title: 'Kritik-Alarm', 
                desc: 'Negatives Feedback wird sofort priorisiert und hervorgehoben.', 
                icon: ShieldCheck,
                color: 'bg-red-50 text-red-600'
              },
              { 
                title: 'Smarte Vorschläge', 
                desc: 'Perfekt formulierte Antwort-Entwürfe in deinem Tonfall.', 
                icon: MessageCircle,
                color: 'bg-emerald-50 text-emerald-600'
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
                Bereit für <br className="hidden md:block" /> echtes Feedback?
              </h2>
              <p className="text-xl md:text-2xl text-stone-400 max-w-2xl mx-auto mb-12 font-medium">
                Lass uns in 3 Minuten schauen, wie wir deine Bewertungen auf Autopilot stellen – mit voller Kontrolle.
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
      
      <InternalLinks
        links={[
          {
            href: '/anwendungen/kunden-vorgaenge',
            label: 'Kunden & Vorgänge',
            description: 'Überblick über alle Kundeninteraktionen',
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
