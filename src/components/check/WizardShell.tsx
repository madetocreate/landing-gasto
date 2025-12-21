"use client"

import { ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useReducedMotion } from "framer-motion"

interface WizardShellProps {
  children: ReactNode
  currentStep: number
  totalSteps: number
  onBack?: () => void
  canGoBack: boolean
}

export function WizardShell({
  children,
  currentStep,
  totalSteps,
  onBack,
  canGoBack
}: WizardShellProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="relative w-full max-w-2xl mx-auto px-4 sm:px-0">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 blur-[100px] opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-action rounded-full" />
      </div>

      <div className="relative overflow-hidden rounded-[2.5rem] bg-surface/70 backdrop-blur-2xl border border-border/60 shadow-glass">
        {/* Progress Header */}
        <div className="px-8 pt-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {canGoBack && (
              <button
                onClick={onBack}
                className="text-xs font-bold uppercase tracking-widest text-foreground-muted hover:text-foreground transition-colors py-2"
              >
                Zurück
              </button>
            )}
          </div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-foreground-muted">
            Schritt {currentStep} von {totalSteps}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 sm:p-12 min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 10 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="w-full"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Bar (Subtile) */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-border/50">
          <motion.div
            className="h-full bg-action shadow-[0_0_8px_rgba(16,185,129,0.5)]"
            initial={{ width: "0%" }}
            animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          />
        </div>
      </div>
    </div>
  )
}


