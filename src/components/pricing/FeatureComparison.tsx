"use client"

import { Check, Minus } from "lucide-react"
import { classNames } from "@/lib/classNames"

interface Feature {
  name: string
  tiers: boolean[]
}

interface Category {
  name: string
  features: Feature[]
}

interface FeatureComparisonProps {
  title: string
  columns: string[]
  categories: Category[]
  popularIndex?: number
}

export function FeatureComparison({
  title,
  columns,
  categories,
  popularIndex = 1,
}: FeatureComparisonProps) {
  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{title}</h2>
        <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
          Detaillierter Vergleich der Leistungen in allen Plänen
        </p>
      </div>

      <div className="border border-border/50 rounded-2xl sm:rounded-3xl overflow-x-auto overflow-y-hidden bg-surface/50 backdrop-blur-sm shadow-sm">
        {/* Header Row (Desktop) */}
        <div className="hidden md:grid grid-cols-4 gap-4 p-4 sm:p-6 border-b border-border/50 bg-background-muted/50 min-w-[600px]">
          <div className="font-semibold text-foreground text-sm uppercase tracking-wider">
            Feature
          </div>
          {columns.map((col, i) => (
            <div
              key={i}
              className={classNames(
                "text-center font-semibold text-sm uppercase tracking-wider",
                i === popularIndex ? "text-action" : "text-foreground-muted"
              )}
            >
              {col}
            </div>
          ))}
        </div>

        {/* Categories */}
        {categories.map((cat, catIdx) => (
          <div key={catIdx}>
            {/* Category Header */}
            <div className="px-6 py-4 bg-background-muted/30 font-semibold text-sm uppercase tracking-wider text-foreground-muted border-b border-border/50">
              {cat.name}
            </div>

            {/* Features */}
            {cat.features.map((feat, featIdx) => (
              <div
                key={featIdx}
                className={classNames(
                  "grid grid-cols-1 md:grid-cols-4 gap-4 p-4 md:px-6 md:py-5 border-b border-border/50 last:border-0",
                  "hover:bg-surface/50 transition-colors items-center min-w-[600px] md:min-w-0"
                )}
              >
                {/* Feature Name */}
                <div className="font-medium text-foreground text-sm md:text-base break-words">
                  {feat.name}
                </div>

                {/* Tier Indicators */}
                <div className="grid grid-cols-3 md:contents mt-2 md:mt-0 gap-2 md:gap-4">
                  {feat.tiers.map((hasIt, tierIdx) => (
                    <div
                      key={tierIdx}
                      className="flex justify-center items-center"
                    >
                      {/* Mobile Label */}
                      <span className="md:hidden text-xs text-foreground-muted mr-2 font-medium">
                        {columns[tierIdx]}:
                      </span>
                      {hasIt ? (
                        <div className="w-6 h-6 rounded-full bg-action-soft flex items-center justify-center">
                          <Check className="w-4 h-4 text-action" strokeWidth={2.5} />
                        </div>
                      ) : (
                        <Minus className="w-4 h-4 text-border" strokeWidth={2} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

