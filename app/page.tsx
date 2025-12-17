import { CTASection } from '@/components/ui/CTASection';
import { Container } from '@/components/ui/Section';
import { TimeCalculator } from '@/components/roi/TimeCalculator';
import { SocialProof } from '@/components/social/SocialProof';
import { SystemsNarrativeSection } from '@/components/home/SystemsNarrativeSection';
import { createMetadata } from '@/lib/metadata';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { 
  AnimatedAlternatingSection,
  AnimatedHowToSection,
  AnimatedModulesSection 
} from '@/components/home/AnimatedSections';
import { FloatingThemeToggle } from '@/components/ui/FloatingThemeToggle';
import { ProofSection } from '@/components/home/ProofSection';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { PracticePreviewSwitcher } from '@/components/home/PracticePreviewSwitcher';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createMetadata({
    title: t(locale, 'pages.home.meta.title'),
    description: t(locale, 'pages.home.meta.description'),
    path: '/',
  });
}

export default async function Home() {
  const locale = await getLocale();

  const problemSolutionBlocks = [
    {
      title: t(locale, 'pages.home.problemSolution.problem.h2') as string,
      text: t(locale, 'pages.home.problemSolution.problem.p') as string,
      align: "left" as const
    },
    {
      title: t(locale, 'pages.home.problemSolution.solution.h2') as string,
      text: t(locale, 'pages.home.problemSolution.solution.p') as string,
      align: "right" as const
    },
    {
      title: t(locale, 'pages.home.problemSolution.guest.h2') as string,
      text: t(locale, 'pages.home.problemSolution.guest.p') as string,
      align: "left" as const
    },
    {
      title: t(locale, 'pages.home.problemSolution.team.h2') as string,
      text: t(locale, 'pages.home.problemSolution.team.p') as string,
      align: "right" as const
    }
  ];

  return (
    <>
      <FloatingThemeToggle />
      
      {/* Hero - Split Screen Layout (So'Use Style) */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-background">
        <Container size="xl" className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left: Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-action-soft text-action text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-action opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-action"></span>
                </span>
                {t(locale, 'pages.home.hero.badge')}
              </div>
              
              <h1 className="mb-8 font-bold tracking-tight text-5xl sm:text-6xl md:text-7xl leading-[1.1]">
                <span className="block text-foreground">{t(locale, 'pages.home.hero.h1').split('–')[0]}</span>
                <span className="block text-foreground-muted mt-2 text-4xl sm:text-5xl md:text-6xl">
                  {t(locale, 'pages.home.hero.h1').split('–')[1] || 'Directly at the table.'}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground-muted mb-10 leading-relaxed max-w-lg whitespace-pre-line">
                {t(locale, 'pages.home.hero.sub')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button variant="primary" size="xl" asChild href="/check" className="shadow-xl shadow-action/20 text-lg px-8 h-14">
                  {t(locale, 'pages.home.hero.ctaPrimary')}
                </Button>
                <Button variant="secondary" size="xl" asChild href="/anwendungen" className="text-lg px-8 h-14 bg-surface border-border hover:bg-muted">
                  {t(locale, 'pages.home.hero.ctaSecondary')}
                </Button>
              </div>

              {/* Trust/Social Proof Small */}
              <div className="pt-8 border-t border-border/50">
                 <p className="text-sm text-foreground-muted mb-4 font-medium">{t(locale, 'pages.home.hero.trustLine')}</p>
                 <div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder Logos */}
                    <div className="h-6 w-20 bg-foreground/20 rounded" />
                    <div className="h-6 w-20 bg-foreground/20 rounded" />
                    <div className="h-6 w-20 bg-foreground/20 rounded" />
                 </div>
              </div>
            </div>

            {/* Right: Huge Visual (The "Hero Shot") */}
            <div className="relative hidden lg:block perspective-1000">
               {/* Abstract Background Blobs */}
               <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -z-10" />
               
               {/* The "Floating Tablet" */}
               <div className="relative transform rotate-y-neg-10 rotate-x-5 hover-rotate-y-neg-5 hover-rotate-x-2 transition-transform duration-700 ease-out">
                  <SpotlightCard className="aspect-[4/3] w-full rounded-3xl shadow-2xl border-4 border-surface bg-surface overflow-hidden" withBorderBeam>
                    <div className="absolute inset-0 bg-background flex flex-col">
                       {/* Mock UI Header */}
                       <div className="h-16 border-b flex items-center justify-between px-6 bg-surface">
                          <div className="w-24 h-4 bg-muted rounded-full" />
                          <div className="flex gap-2">
                             <div className="w-8 h-8 rounded-full bg-accent/10" />
                          </div>
                       </div>
                       {/* Mock UI Body (Split) */}
                       <div className="flex-1 flex">
                          <div className="w-1/3 border-r bg-muted/30 p-4 space-y-3">
                             <div className="h-20 bg-surface rounded-xl shadow-sm" />
                             <div className="h-20 bg-surface rounded-xl shadow-sm border border-accent/20" />
                             <div className="h-20 bg-surface rounded-xl shadow-sm" />
                          </div>
                          <div className="flex-1 p-6 grid grid-cols-2 gap-4">
                             <div className="aspect-square bg-muted/50 rounded-2xl" />
                             <div className="aspect-square bg-muted/50 rounded-2xl" />
                             <div className="aspect-square bg-muted/50 rounded-2xl" />
                             <div className="aspect-square bg-muted/50 rounded-2xl" />
                          </div>
                       </div>
                    </div>
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                  </SpotlightCard>
                  
                  {/* Floating Elements (Parallax feel) */}
                  <div className="absolute -left-12 bottom-20 p-4 bg-surface rounded-2xl shadow-xl border border-border/50 animate-float-slow">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center">€</div>
                        <div>
                           <div className="text-sm font-bold text-foreground">{t(locale, 'pages.home.hero.kpiTitle')}</div>
                           <div className="text-xs text-foreground-muted">{t(locale, 'pages.home.hero.kpiSub')}</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </Container>
      </section>

      {/* System Preview Section */}
      <PracticePreviewSwitcher />

      {/* System Integrationen - Narrative */}
      <SystemsNarrativeSection />

      {/* Problem & Solution (4 Blocks Alternating) */}
      <AnimatedAlternatingSection blocks={problemSolutionBlocks} />

      {/* How */}
      <AnimatedHowToSection 
        title={t(locale, 'pages.home.how.h2')}
        steps={t(locale, 'pages.home.how.steps') as Array<{ title: string; text: string }>}
      />

      {/* ROI Calculator */}
      <TimeCalculator />

      {/* Modules */}
      <AnimatedModulesSection 
        title={t(locale, 'pages.home.modules.h2')}
        items={t(locale, 'pages.home.modules.items') as Array<{ title: string; text: string }>}
      />

      {/* Visual Proof */}
      <ProofSection />

      {/* Social Proof */}
      <SocialProof />

      <CTASection />
    </>
  );
}
