import { CTASection } from '@/components/ui/CTASection';
import { FeatureShowcase } from '@/components/sections/FeatureShowcase';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';
import { AnimatedModulesSection, AnimatedHowToSection } from '@/components/home/AnimatedSections';
import { FeatureEcosystem } from '@/components/features/FeatureEcosystem';
import { FeatureAnalytics } from '@/components/features/FeatureAnalytics';
import { FeatureRoles } from '@/components/features/FeatureRoles';
import { Section, Container } from '@/components/ui/Section';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { MessageSquare, ChefHat, CreditCard } from 'lucide-react';
import { FlowTimeline } from '@/components/home/FlowTimeline';
import { RoiCalculator } from '@/components/roi/RoiCalculator';

export default async function Features() {
  const locale = await getLocale();

  return (
    <>
      {/* 1. Features Hero */}
      <Section variant="hero" className="pt-32 pb-24">
        <Container size="lg" className="text-center">
          <h1 className="tracking-tight text-balance mb-8">
            {t(locale, 'pages.features.h1')}
          </h1>
          <p className="text-xl md:text-2xl text-foreground-muted prose-wide mx-auto leading-relaxed">
            {t(locale, 'pages.features.intro')}
          </p>
        </Container>
      </Section>

      {/* 2. Bento Grid (Modules) */}
      <AnimatedModulesSection 
        title={t(locale, 'pages.features.modules.h2')}
        items={t(locale, 'pages.features.modules.items') as Array<{ title: string; text: string }>}
      />

      {/* New Section: Ecosystem Orbit */}
      <FeatureEcosystem />

      {/* 3. Flow Timeline (Moved from Home) */}
      <FlowTimeline />

      {/* New Section: Roles Accordion */}
      <FeatureRoles />

      {/* 4. Feature Detail Blocks (Polished) */}
      <Section variant="normal" className="py-32">
        <Container size="lg" className="space-y-32">
          
          {/* Ordering */}
          <section className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h2 className="mb-6 tracking-tight text-3xl font-bold">{t(locale, "pages.features.detailBlocks.items.0.h2")}</h2>
              <p className="text-xl text-foreground-muted leading-relaxed prose">
                {t(locale, "pages.features.detailBlocks.items.0.p")}
              </p>
            </div>
            <SpotlightCard className="aspect-[4/3] bg-surface p-8 flex flex-col justify-center items-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
               {/* Chat UI Abstract */}
               <div className="w-full max-w-[280px] bg-background border border-border rounded-xl shadow-lg p-4 space-y-3 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex gap-3">
                     <div className="w-8 h-8 rounded-full bg-accent/20" />
                     <div className="flex-1 bg-accent/10 rounded-lg rounded-tl-none p-3 text-xs text-foreground-muted">
                        Hallo! Was darf es sein?
                     </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                     <div className="bg-foreground text-background rounded-lg rounded-tr-none p-3 text-xs">
                        Eine Cola bitte.
                     </div>
                  </div>
               </div>
            </SpotlightCard>
          </section>

          {/* Kitchen */}
          <section className="grid md:grid-cols-2 gap-16 items-center">
            <div className="md:order-2">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                <ChefHat className="w-6 h-6" />
              </div>
              <h2 className="mb-6 tracking-tight text-3xl font-bold">{t(locale, "pages.features.detailBlocks.items.1.h2")}</h2>
              <p className="text-xl text-foreground-muted leading-relaxed prose">
                {t(locale, "pages.features.detailBlocks.items.1.p")}
              </p>
            </div>
            <SpotlightCard className="md:order-1 aspect-[4/3] bg-surface p-8 flex flex-col justify-center items-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
               {/* KDS UI Abstract */}
               <div className="w-full max-w-[300px] grid grid-cols-2 gap-3">
                  <div className="bg-background border border-border rounded-xl p-3 shadow-sm transform group-hover:scale-105 transition-transform duration-500 delay-75">
                     <div className="h-2 w-12 bg-green-500/50 rounded-full mb-2" />
                     <div className="space-y-1.5">
                        <div className="h-2 w-20 bg-muted rounded-full" />
                        <div className="h-2 w-16 bg-muted rounded-full" />
                     </div>
                  </div>
                  <div className="bg-background border border-border rounded-xl p-3 shadow-sm transform group-hover:scale-105 transition-transform duration-500">
                     <div className="h-2 w-12 bg-yellow-500/50 rounded-full mb-2" />
                     <div className="space-y-1.5">
                        <div className="h-2 w-24 bg-muted rounded-full" />
                        <div className="h-2 w-10 bg-muted rounded-full" />
                     </div>
                  </div>
               </div>
            </SpotlightCard>
          </section>

          {/* POS */}
          <section className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                <CreditCard className="w-6 h-6" />
              </div>
              <h2 className="mb-6 tracking-tight text-3xl font-bold">{t(locale, "pages.features.detailBlocks.items.2.h2")}</h2>
              <p className="text-xl text-foreground-muted leading-relaxed prose">
                {t(locale, "pages.features.detailBlocks.items.2.p")}
              </p>
            </div>
            <SpotlightCard className="aspect-[4/3] bg-surface p-8 flex flex-col justify-center items-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
               {/* POS UI Abstract */}
               <div className="w-full max-w-[280px] bg-background border border-border rounded-xl shadow-lg overflow-hidden transform group-hover:-rotate-1 transition-transform duration-500">
                  <div className="h-32 grid grid-cols-3 gap-1 p-2 bg-muted/20">
                     {[1,2,3,4,5,6].map(i => (
                        <div key={i} className="bg-surface border border-border/50 rounded-lg" />
                     ))}
                  </div>
                  <div className="p-4 border-t border-border flex justify-between items-center bg-surface">
                     <div className="h-3 w-16 bg-muted rounded-full" />
                     <div className="h-8 w-24 bg-accent text-accent-foreground rounded-lg flex items-center justify-center text-xs font-bold">
                        Pay
                     </div>
                  </div>
               </div>
            </SpotlightCard>
          </section>

        </Container>
      </Section>

      {/* ROI Calculator (Gastro Specific) - Moved from Home */}
      <RoiCalculator />

      {/* New Section: Dark Analytics Panel */}
      <FeatureAnalytics />

      {/* 5. Parallax Showcase (Sticky Phone) - Now in second third */}
      <div className="relative py-24 border-t border-border/50">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-bold tracking-tight">{t(locale, "pages.features.deepDive.h2")}</h2>
           <p className="text-foreground-muted">{t(locale, "pages.features.deepDive.p")}</p>
        </div>
        <FeatureShowcase />
      </div>
      
      {/* 6. Final CTA */}
      <CTASection />
    </>
  );
}
