import { CTASection } from '@/components/ui/CTASection';
import { FeatureShowcase } from '@/components/sections/FeatureShowcase';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';
import { AnimatedModulesSection, AnimatedHowToSection } from '@/components/home/AnimatedSections';
import { FeatureEcosystem } from '@/components/features/FeatureEcosystem';
import { FeatureAnalytics } from '@/components/features/FeatureAnalytics';
import { FeatureRoles } from '@/components/features/FeatureRoles';
import { Section, Container } from '@/components/ui/Section';

export default async function Features() {
  const locale = await getLocale();

  return (
    <>
      {/* 1. Features Hero */}
      <Section variant="hero">
        <Container size="lg" className="text-center">
          <h1 className="tracking-tight text-balance">
            {t(locale, 'pages.features.h1')}
          </h1>
          <p className="text-xl text-foreground-muted prose-wide mx-auto leading-relaxed mt-6">
            {t(locale, 'pages.features.intro')}
          </p>
        </Container>
      </Section>

      {/* 2. Bento Grid (Modules) */}
      <AnimatedModulesSection 
        title={t(locale, 'pages.home.modules.h2')}
        items={t(locale, 'pages.home.modules.items') as Array<{ title: string; text: string }>}
      />

      {/* New Section: Ecosystem Orbit */}
      <FeatureEcosystem />

      {/* 3. Flow Timeline */}
      <AnimatedHowToSection 
        title={t(locale, 'pages.home.how.h2')}
        steps={t(locale, 'pages.home.how.steps') as Array<{ title: string; text: string }>}
      />

      {/* New Section: Roles Accordion */}
      <FeatureRoles />

      {/* 4. Feature Detail Blocks */}
      <Section variant="normal">
        <Container size="lg" className="space-y-20 md:space-y-32">
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6 tracking-tight">{t(locale, "pages.features.detailBlocks.items.0.h2")}</h2>
            <p className="text-xl text-foreground-muted leading-relaxed prose-wide">
              {t(locale, "pages.features.detailBlocks.items.0.p")}
            </p>
          </div>
          <div className="h-64 bg-background-muted rounded-2xl border border-border/50" />
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <h2 className="mb-6 tracking-tight">{t(locale, "pages.features.detailBlocks.items.1.h2")}</h2>
            <p className="text-xl text-foreground-muted leading-relaxed prose-wide">
              {t(locale, "pages.features.detailBlocks.items.1.p")}
            </p>
          </div>
          <div className="md:order-1 h-64 bg-background-muted rounded-2xl border border-border/50" />
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6 tracking-tight">{t(locale, "pages.features.detailBlocks.items.2.h2")}</h2>
            <p className="text-xl text-foreground-muted leading-relaxed prose-wide">
              {t(locale, "pages.features.detailBlocks.items.2.p")}
            </p>
          </div>
          <div className="h-64 bg-background-muted rounded-2xl border border-border/50" />
        </section>
        </Container>
      </Section>

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
