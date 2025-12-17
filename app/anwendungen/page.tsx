import { createMetadata } from '@/lib/metadata'
import { ApplicationsHero } from '@/components/anwendungen/ApplicationsHero'
import { ApplicationsIntro } from '@/components/anwendungen/ApplicationsIntro'
import { ApplicationsSwitcher } from '@/components/anwendungen/ApplicationsSwitcher'
import { SingleApplicationSection, applications } from '@/components/anwendungen/ApplicationDetailSection'
import { FundamentTeaser } from '@/components/anwendungen/FundamentTeaser'
import { ApplicationsCTA } from '@/components/anwendungen/ApplicationsCTA'

export const metadata = createMetadata({
  title: 'Anwendungen',
  description: 'AKLOW unterstützt dich genau dort, wo täglich Arbeit anfällt. Ohne komplizierte Dashboards und ohne neue Tool-Landschaften.',
  path: '/anwendungen'
})

export default function ApplicationsPage() {
  // Wir splitten die Anwendungen:
  // 1. Block: Die ersten 3 (bis Index 2)
  // 2. CTA
  // 3. Block: Der Rest (ab Index 3 -> "Bewertungen" und "Kunden & Vorgänge")
  const firstBatch = applications.slice(0, 3)
  const lastBatch = applications.slice(3)

  return (
    <>
      <ApplicationsHero />
      <ApplicationsIntro />
      <ApplicationsSwitcher />
      
      {/* Erster Block: 3 Anwendungen */}
      <div className="space-y-8 md:space-y-12 py-12 md:py-24">
        {firstBatch.map((app, idx) => (
          <SingleApplicationSection key={app.key} app={app} index={idx} />
        ))}
      </div>

      {/* CTA dazwischen geschoben */}
      <ApplicationsCTA />

      {/* Letzter Block: Bewertungen und Kunden & Vorgänge (startet mit index 3 für korrekten Wechsel) */}
      <div className="space-y-8 md:space-y-12 pb-12 md:pb-24">
        {lastBatch.map((app, idx) => (
          <SingleApplicationSection key={app.key} app={app} index={idx + 3} />
        ))}
      </div>

      <FundamentTeaser />
    </>
  )
}

