"use client"

import { classNames } from "@/lib/classNames"
import { Check } from "lucide-react"

interface OptionCardProps {
  label: string
  description?: string
  selected: boolean
  onClick: () => void
}

export function OptionCard({ label, description, selected, onClick }: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "group relative w-full p-5 sm:p-6 text-left rounded-2xl transition-all duration-300 touch-manipulation min-h-[44px]",
        "border-2",
        selected
          ? "bg-surface border-action shadow-[0_8px_30px_rgba(16,185,129,0.12)]"
          : "bg-background border-transparent hover:border-action/20 hover:bg-surface"
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <h4 className={classNames(
            "font-bold text-lg leading-tight transition-colors duration-300",
            selected ? "text-foreground" : "text-foreground-muted group-hover:text-foreground"
          )}>
            {label}
          </h4>
          {description && (
            <p className={classNames(
              "mt-1 text-sm leading-relaxed transition-colors duration-300",
              selected ? "text-foreground-muted" : "text-foreground-muted group-hover:text-foreground"
            )}>
              {description}
            </p>
          )}
        </div>
        
        <div className={classNames(
          "w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-300",
          selected 
            ? "border-action bg-action text-white scale-110" 
            : "border-border group-hover:border-action/30"
        )}>
          {selected && <Check className="w-3.5 h-3.5 stroke-[4]" />}
        </div>
      </div>

      {/* Hover Background Shimmer */}
      {!selected && (
        <div className="absolute inset-0 rounded-2xl bg-action/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      )}
    </button>
  )
}


