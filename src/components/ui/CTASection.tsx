import { TrackedButton } from './TrackedButton';
import { Section, Container } from './Section';
import { Locale, t } from '@/lib/i18n';
import { Sparkles, ArrowRight } from 'lucide-react';

interface CTASectionProps {
  locale: Locale;
}

export function CTASection({ locale }: CTASectionProps) {
  return (
    <Section
      variant="normal"
      className="py-24 bg-stone-50 overflow-hidden"
    >
      <Container size="lg">
        <div className="relative rounded-3xl sm:rounded-[4rem] bg-stone-900 p-8 sm:p-12 md:p-24 text-center shadow-2xl overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-emerald-500/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-emerald-500/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 sm:mb-10">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Start Your Journey
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 sm:mb-8 text-white leading-[0.9] break-words px-2">
              Bereit für mehr <br className="hidden sm:block" />
              <span className="text-action underline decoration-emerald-500/30 decoration-4 sm:decoration-8 underline-offset-4 sm:underline-offset-8">Klarheit?</span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-stone-400 leading-relaxed mb-8 sm:mb-12 font-medium px-4 break-words">
              {t(locale, 'pages.home.finalCta.p') as string}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <TrackedButton 
                asChild 
                href="/check" 
                variant="primary" 
                size="lg" 
                className="h-14 sm:h-16 px-8 sm:px-10 rounded-2xl text-lg sm:text-xl font-bold shadow-emerald-500/20 w-full sm:w-auto"
                trackEvent="cta_check_click"
                trackProperties={{ source: 'cta_section' }}
              >
                <span>{t(locale, 'pages.home.finalCta.ctaPrimary') as string}</span>
              </TrackedButton>
              <TrackedButton 
                asChild 
                href="/kontakt" 
                variant="secondary" 
                size="lg" 
                className="h-14 sm:h-16 px-8 sm:px-10 rounded-2xl text-lg sm:text-xl font-bold bg-white/5 border-white/10 text-white hover:bg-white/10 group w-full sm:w-auto"
                trackEvent="cta_contact_click"
                trackProperties={{ source: 'cta_section' }}
              >
                <div className="flex items-center justify-center gap-2">
                  <span>{t(locale, 'pages.home.finalCta.ctaSecondary') as string}</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </TrackedButton>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
