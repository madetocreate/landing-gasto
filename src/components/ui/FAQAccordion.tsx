"use client"

import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { Plus, Minus, HelpCircle } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { classNames } from "@/lib/classNames"

interface FAQItem {
  q: string
  a: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={classNames("space-y-4", className)}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx
        return (
          <div key={idx} className="group">
            <SpotlightCard
              className={classNames(
                "overflow-hidden border-2 transition-all duration-500",
                isOpen ? "border-action/20 bg-white shadow-xl" : "border-stone-100 bg-white/50 hover:border-stone-200"
              )}
              spotlightColor="rgba(var(--action-rgb), 0.05)"
            >
              <button
                onClick={() => toggleItem(idx)}
                className="w-full p-4 sm:p-6 md:p-8 flex items-center justify-between gap-4 sm:gap-6 text-left focus:outline-none focus:ring-2 focus:ring-action focus:ring-offset-2 rounded-lg touch-manipulation min-h-[44px]"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className={classNames(
                    "w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-colors duration-500",
                    isOpen ? "bg-action text-white" : "bg-stone-50 text-stone-400 group-hover:bg-stone-100"
                  )}>
                    <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className={classNames(
                    "font-bold text-base sm:text-lg md:text-xl tracking-tight transition-colors duration-500 break-words",
                    isOpen ? "text-foreground" : "text-stone-600 group-hover:text-foreground"
                  )}>
                    {item.q}
                  </h3>
                </div>
                <div className={classNames(
                  "w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center transition-all duration-500 shrink-0",
                  isOpen ? "border-action bg-action text-white rotate-180" : "border-stone-100 text-stone-300 group-hover:border-stone-200"
                )}>
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 ml-0 sm:ml-10 md:ml-14">
                      <div className="h-px w-8 sm:w-12 bg-action/20 mb-4 sm:mb-6" />
                      <p className="text-base sm:text-lg text-foreground-muted leading-relaxed font-medium break-words">
                        {item.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </SpotlightCard>
          </div>
        )
      })}
    </div>
  )
}

