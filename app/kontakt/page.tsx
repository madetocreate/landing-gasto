import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Button } from '@/components/ui/Button';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';
import { Mail, Phone, MapPin } from 'lucide-react';

export default async function Kontakt() {
  const locale = await getLocale();

  return (
    <>
      <Section variant="hero" className="pt-32">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="mb-6">{t(locale, 'pages.contact.h1')}</h1>
            <p className="text-xl text-foreground-muted leading-relaxed">
              {t(locale, 'pages.contact.intro')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <SpotlightCard className="p-8 flex flex-col items-center text-center h-full">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">E-Mail</h3>
              <p className="text-foreground-muted mb-6">Wir antworten in der Regel innerhalb von 24h.</p>
              <a href="mailto:kontakt@gastro.example" className="text-accent hover:underline mt-auto">kontakt@gastro.example</a>
            </SpotlightCard>

            <SpotlightCard className="p-8 flex flex-col items-center text-center h-full">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Telefon</h3>
              <p className="text-foreground-muted mb-6">Mo-Fr von 9:00 bis 17:00 Uhr.</p>
              <a href="tel:+49123456789" className="text-accent hover:underline mt-auto">+49 (0) 123 456 789</a>
            </SpotlightCard>

            <SpotlightCard className="p-8 flex flex-col items-center text-center h-full">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Büro</h3>
              <p className="text-foreground-muted mb-6">Besuchen Sie uns auf einen Kaffee.</p>
              <span className="text-foreground-muted mt-auto">Musterstraße 1, 10115 Berlin</span>
            </SpotlightCard>
          </div>

          <div className="max-w-2xl mx-auto text-center bg-surface border border-border rounded-2xl p-12">
            <h2 className="text-2xl font-bold mb-4">{t(locale, 'pages.contact.cta.title')}</h2>
            <div className="mt-8">
              <Button size="lg" asChild href="/demo">
                {t(locale, 'pages.contact.cta.button')}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
