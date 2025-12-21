"use client"

import { useState, useMemo } from "react"
import { Section, Container } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { AnimatedNumber } from "@/components/ui/AnimatedNumber"
import { Locale, t } from "@/lib/i18n"
import { SpotlightCard } from "@/components/ui/SpotlightCard"

interface TimeInputs {
  ticketsPerWeek: number
  minsPerTicket: number
  automationRate: number
  hourlyRate: number
}

interface TimeCalculatorProps {
  locale: Locale;
}

export function TimeCalculator({ locale }: TimeCalculatorProps) {
  const [inputs, setInputs] = useState<TimeInputs>({
    ticketsPerWeek: 150,
    minsPerTicket: 15,
    automationRate: 60,
    hourlyRate: 45, // Internal default for calculation
  })

  const outputs = useMemo(() => {
    const totalMinutes = inputs.ticketsPerWeek * inputs.minsPerTicket
    const savedMinutes = totalMinutes * (inputs.automationRate / 100)
    const savedHoursPerWeek = savedMinutes / 60
    const savedHoursPerMonth = savedHoursPerWeek * 4.33
    const savedCostPerMonth = savedHoursPerMonth * inputs.hourlyRate

    return {
      savedHoursPerMonth: Math.round(savedHoursPerMonth),
      savedCostPerMonth: Math.round(savedCostPerMonth),
    }
  }, [inputs])

  const updateInput = (key: keyof TimeInputs, value: number) => {
    setInputs((prev) => ({ ...prev, [key]: value }))
  }

  const tKey = "pages.home.roi";

  return (
    <Section variant="normal" surface="surface" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-muted/30 -z-10" />

      <Container size="lg">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">{t(locale, `${tKey}.h2`) as string}</h2>
          <p className="text-foreground-muted prose mx-auto text-lg leading-relaxed">
            {t(locale, `${tKey}.p`) as string}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <SpotlightCard className="p-8 md:p-12" withBorderBeam beamColor="var(--color-action)">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Inputs */}
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm font-medium text-foreground">
                      {t(locale, `${tKey}.inputs.tables`) as string}
                    </label>
                    <span className="text-sm font-bold text-action">{inputs.ticketsPerWeek}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={inputs.ticketsPerWeek}
                    onChange={(e) => updateInput("ticketsPerWeek", parseInt(e.target.value))}
                    className="w-full h-2 bg-muted rounded-xl appearance-none cursor-pointer accent-action hover:opacity-80 transition-opacity"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm font-medium text-foreground">
                      {t(locale, `${tKey}.inputs.guestsPerDay`) as string}
                    </label>
                    <span className="text-sm font-bold text-action">{inputs.minsPerTicket} min</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="60"
                    step="1"
                    value={inputs.minsPerTicket}
                    onChange={(e) => updateInput("minsPerTicket", parseInt(e.target.value))}
                    className="w-full h-2 bg-muted rounded-xl appearance-none cursor-pointer accent-action hover:opacity-80 transition-opacity"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm font-medium text-foreground">
                      {t(locale, `${tKey}.inputs.internationalGuests`) as string}
                    </label>
                    <span className="text-sm font-bold text-action">{inputs.automationRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="90"
                    step="10"
                    value={inputs.automationRate}
                    onChange={(e) => updateInput("automationRate", parseInt(e.target.value))}
                    className="w-full h-2 bg-muted rounded-xl appearance-none cursor-pointer accent-action hover:opacity-80 transition-opacity"
                  />
                </div>
              </div>

              {/* Outputs */}
              <div className="flex flex-col justify-center gap-6">
                 <div className="p-6 bg-action-soft border border-action/10 rounded-2xl text-center backdrop-blur-sm">
                   <div className="text-sm text-action font-medium mb-1 uppercase tracking-wide opacity-80">
                     {t(locale, `${tKey}.outputs.timeSaved`) as string}
                   </div>
                   <div className="text-4xl md:text-5xl font-bold text-action mb-2 tracking-tight">
                     <AnimatedNumber value={outputs.savedHoursPerMonth} /> h
                   </div>
                   <div className="text-xs text-foreground-muted">
                     {locale === 'de' ? `Das entspricht ca. ${Math.round(outputs.savedHoursPerMonth / 40 * 10) / 10} Arbeitswochen.` : `Equivalent to approx. ${Math.round(outputs.savedHoursPerMonth / 40 * 10) / 10} work weeks.`}
                   </div>
                 </div>

                 <div className="p-4 bg-background-muted rounded-xl text-center">
                   <div className="text-2xl font-bold text-foreground mb-1">
                     €<AnimatedNumber value={outputs.savedCostPerMonth} />
                   </div>
                   <div className="text-xs text-foreground-muted leading-tight">
                     {t(locale, `${tKey}.outputs.monthlyRevenue`) as string}
                   </div>
                 </div>

                 <Button 
                   variant="primary" 
                   size="lg" 
                   className="w-full mt-2 shadow-lg shadow-action/20" 
                   asChild 
                   href={`/${locale}/check`}
                 >
                    {t(locale, "nav.cta") as string}
                 </Button>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </Container>
    </Section>
  )
}

