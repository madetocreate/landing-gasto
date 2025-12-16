import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { RoiCalculator } from '@/components/roi/RoiCalculator';
import { MiniChatDemo } from '@/components/demo/MiniChatDemo';
import { SocialProof } from '@/components/social/SocialProof';
import { PartnersSection } from '@/components/partners/PartnersSection';
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
import { FlowTimeline } from '@/components/home/FlowTimeline';
import { ProofSection } from '@/components/home/ProofSection';

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
      
      {/* Hero */}
      <Section variant="hero">
        <Container size="lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <h1 className="mb-6 tracking-tight text-balance bg-gradient-to-br from-foreground to-foreground-muted bg-clip-text text-transparent">
                {t(locale, 'pages.home.hero.h1')}
              </h1>
              <p className="text-xl text-foreground-muted mb-10 prose-wide leading-relaxed">
                {t(locale, 'pages.home.hero.sub')}
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Button variant="primary" size="lg" asChild href="/demo" className="shadow-lg shadow-accent/25">
                  {t(locale, 'pages.home.hero.ctaPrimary')}
                </Button>
                <Button variant="secondary" size="lg" asChild href="/demo">
                  {t(locale, 'pages.home.hero.ctaSecondary')}
                </Button>
              </div>
              <ul className="flex flex-wrap gap-8 text-sm text-foreground-muted font-medium">
                {(t(locale, 'pages.home.hero.bullets') as string[]).map((bullet, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Mini Chat Demo */}
            <div className="hidden md:block">
              <MiniChatDemo />
            </div>
          </div>
        </Container>
      </Section>

      {/* NEW: Flow Timeline instead of Parallax on Home */}
      <FlowTimeline />

      {/* Problem & Solution (4 Blocks Alternating) */}
      <AnimatedAlternatingSection blocks={problemSolutionBlocks} />

      {/* How */}
      <AnimatedHowToSection 
        title={t(locale, 'pages.home.how.h2')}
        steps={t(locale, 'pages.home.how.steps') as Array<{ title: string; text: string }>}
      />

      {/* ROI Calculator */}
      <RoiCalculator />

      {/* Modules */}
      <AnimatedModulesSection 
        title={t(locale, 'pages.home.modules.h2')}
        items={t(locale, 'pages.home.modules.items') as Array<{ title: string; text: string }>}
      />

      {/* Partners */}
      <PartnersSection />

      {/* Visual Proof */}
      <ProofSection />

      {/* Social Proof */}
      <SocialProof />

      <CTASection />
    </>
  );
}
