"use client"

import { Section, Container } from "@/components/ui/Section"
import { GlassCard } from "@/components/ui/GlassCard"
import { BarChart3, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import { useLocale } from "@/hooks/useLocale"
import { t } from "@/lib/i18n"

export function FeatureAnalytics() {
  const locale = useLocale()

  return (
    <Section
      variant="normal"
      className="overflow-hidden relative bg-[color:var(--color-inverse-bg)] text-[color:var(--color-inverse-fg)]"
    >
      {/* Premium background (token-only) */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 dark:to-black/0" />

      <Container size="lg" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color:var(--color-inverse-surface)] text-xs font-medium text-[color:var(--color-inverse-fg-muted)] mb-6 border border-[color:var(--color-inverse-border)]">
              <BarChart3 className="w-3 h-3" />
              <span>{t(locale, "pages.features.analytics.kicker") as string}</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight">{t(locale, "pages.features.analytics.h2") as string}</h2>
            <p className="text-lg leading-relaxed mb-8 text-[color:var(--color-inverse-fg-muted)]">
              {t(locale, "pages.features.analytics.p") as string}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <StatCard label={t(locale, "pages.features.analytics.stats.0.label") as string} value={t(locale, "pages.features.analytics.stats.0.value") as string} />
              <StatCard label={t(locale, "pages.features.analytics.stats.1.label") as string} value={t(locale, "pages.features.analytics.stats.1.value") as string} />
            </div>
          </div>

          <div className="relative">
            {/* Main Chart Card */}
            <GlassCard
              variant="module"
              className="p-6 md:p-8 bg-[color:var(--color-inverse-surface)] border-[color:var(--color-inverse-border)] backdrop-blur-xl"
            >
              <div className="flex justify-between items-end h-48 gap-2">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.1, type: "spring" }}
                    className="w-full bg-accent/20 rounded-t-sm relative group"
                  >
                    <div className="absolute bottom-0 left-0 right-0 bg-accent h-full opacity-60 group-hover:opacity-100 transition-opacity rounded-t-sm" />
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-xs font-mono text-[color:var(--color-inverse-fg-muted)]">
                {(t(locale, "pages.features.analytics.days") as string[]).map((d, idx) => (
                  <span key={idx}>{d}</span>
                ))}
              </div>
            </GlassCard>

            {/* Floating Stats */}
            <motion.div 
              className="absolute -right-8 -bottom-8 w-48"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <GlassCard className="p-4 bg-[color:var(--color-inverse-surface)] border-[color:var(--color-inverse-border)] flex items-center gap-3">
                <div className="p-2 bg-accent/15 rounded-lg text-accent">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[color:var(--color-inverse-fg-muted)]">
                    {t(locale, "pages.features.analytics.floating.label") as string}
                  </div>
                  <div className="text-sm font-bold">{t(locale, "pages.features.analytics.floating.value") as string}</div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

function StatCard({ label, value }: { label: string, value: string }) {
  return (
    <div className="p-4 rounded-xl bg-[color:var(--color-inverse-surface)] border border-[color:var(--color-inverse-border)] hover:bg-[color:var(--color-inverse-bg)] transition-colors">
      <div className="text-xs text-[color:var(--color-inverse-fg-muted)] mb-1">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  )
}

