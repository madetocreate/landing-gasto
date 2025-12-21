import { createMetadata } from '@/lib/metadata'
import { FundamentHero } from '@/components/fundament/FundamentHero'
import { FundamentWhy } from '@/components/fundament/FundamentWhy'
import { FundamentOverview } from '@/components/fundament/FundamentOverview'
import { FundamentSections } from '@/components/fundament/FundamentSections'
import { FundamentNot } from '@/components/fundament/FundamentNot'
import { FundamentTransition } from '@/components/fundament/FundamentTransition'
import { FundamentCTA } from '@/components/fundament/FundamentCTA'
import { getLocale } from '@/lib/getLocale'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createMetadata({
    title: 'Fundament – Die Basis unserer KI-Lösung',
    description: 'Warum AKLOW funktioniert – und warum es kein Tool ist. Ein durchdachtes System, das Zusammenhänge versteht und Entscheidungen vorbereitet.',
    path: '/fundament',
    locale,
  });
}

export default function FundamentPage() {
  return (
    <>
      <FundamentHero />
      <FundamentWhy />
      <FundamentOverview />
      <FundamentSections />
      <FundamentNot />
      <FundamentTransition />
      <FundamentCTA />
    </>
  )
}

