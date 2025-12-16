"use client"

import { useState, useMemo } from "react"
import { Section, Container } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { AnimatedNumber } from "@/components/ui/AnimatedNumber"
import { useLocale } from "@/hooks/useLocale"
import { t } from "@/lib/i18n"
import { calculateRoi, type RoiInputs } from "@/hooks/useRoiModel"
import { classNames } from "@/lib/classNames"
import { SpotlightCard } from "@/components/ui/SpotlightCard"

export function RoiCalculator() {
  const locale = useLocale()
  const [inputs, setInputs] = useState<RoiInputs>({
    tables: 10,
    guestsPerDay: 50,
    avgBill: 25,
    internationalGuests: 20,
  })

  const outputs = useMemo(() => calculateRoi(inputs), [inputs])

  const updateInput = (key: keyof RoiInputs, value: number) => {
    setInputs((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <Section variant="normal" surface="surface" className="relative overflow-hidden">
      {/* Subtle depth inside the "surface island" (token-only) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-muted/30 -z-10" />

      <Container size="lg">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">{t(locale, "pages.home.roi.h2")}</h2>
          <p className="text-foreground-muted prose mx-auto text-lg leading-relaxed">
            {t(locale, "pages.home.roi.p")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <SpotlightCard className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Inputs */}
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm font-medium text-foreground">
                      {t(locale, "pages.home.roi.inputs.tables")}
                    </label>
                    <span className="text-sm font-bold text-accent">{inputs.tables}</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    value={inputs.tables}
                    onChange={(e) => updateInput("tables", parseInt(e.target.value))}
                    className="w-full h-2 bg-muted rounded-xl appearance-none cursor-pointer accent-accent hover:opacity-80 transition-opacity"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm font-medium text-foreground">
                      {t(locale, "pages.home.roi.inputs.guestsPerDay")}
                    </label>
                    <span className="text-sm font-bold text-accent">{inputs.guestsPerDay}</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="200"
                    step="10"
                    value={inputs.guestsPerDay}
                    onChange={(e) => updateInput("guestsPerDay", parseInt(e.target.value))}
                    className="w-full h-2 bg-muted rounded-xl appearance-none cursor-pointer accent-accent hover:opacity-80 transition-opacity"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm font-medium text-foreground">
                      {t(locale, "pages.home.roi.inputs.avgBill")}
                    </label>
                    <span className="text-sm font-bold text-accent">€{inputs.avgBill}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="5"
                    value={inputs.avgBill}
                    onChange={(e) => updateInput("avgBill", parseInt(e.target.value))}
                    className="w-full h-2 bg-muted rounded-xl appearance-none cursor-pointer accent-accent hover:opacity-80 transition-opacity"
                  />
                </div>
              </div>

              {/* Outputs */}
              <div className="flex flex-col justify-center gap-6">
                 <div className="p-6 bg-accent/5 border border-accent/10 rounded-2xl text-center backdrop-blur-sm">
                   <div className="text-sm text-accent font-medium mb-1 uppercase tracking-wide opacity-80">
                     {t(locale, "pages.home.roi.outputs.monthlyRevenue")}
                   </div>
                   <div className="text-4xl md:text-5xl font-bold text-accent mb-2 tracking-tight">
                     €<AnimatedNumber value={outputs.monthlyRevenue} />
                   </div>
                   <div className="text-xs text-foreground-muted">
                     {t(locale, "pages.home.roi.disclaimer")}
                   </div>
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 bg-background-muted rounded-xl text-center">
                     <div className="text-2xl font-bold text-foreground mb-1">
                       <AnimatedNumber value={outputs.additionalOrdersPerDay} />
                     </div>
                     <div className="text-xs text-foreground-muted leading-tight">
                       {t(locale, "pages.home.roi.outputs.additionalOrders")}
                     </div>
                   </div>

                   <div className="p-4 bg-background-muted rounded-xl text-center">
                     <div className="text-2xl font-bold text-foreground mb-1">
                       <AnimatedNumber value={outputs.timeSavedPerDay} /> min
                     </div>
                     <div className="text-xs text-foreground-muted leading-tight">
                       {t(locale, "pages.home.roi.outputs.timeSaved")}
                     </div>
                   </div>
                 </div>

                 <Button variant="primary" size="lg" className="w-full mt-2 shadow-lg shadow-accent/20" asChild href="/demo">
                    {t(locale, "pages.home.roi.cta")}
                 </Button>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </Container>
    </Section>
  )
}
