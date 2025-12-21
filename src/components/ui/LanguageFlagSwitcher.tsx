"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Locale, locales } from "@/lib/i18n"
import { classNames } from "@/lib/classNames"

const FLAGS: Record<Locale, string> = {
  de: "🇩🇪",
  en: "🇬🇧",
  es: "🇪🇸",
  fr: "🇫🇷",
  it: "🇮🇹",
}

interface LanguageFlagSwitcherProps {
  locale: Locale;
}

export function LanguageFlagSwitcher({ locale }: LanguageFlagSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const [pendingLocale, setPendingLocale] = useState<Locale | null>(null)

  useEffect(() => {
    if (!pendingLocale) return
    
    // Set cookie immediately
    document.cookie = `locale=${pendingLocale}; path=/; max-age=31536000; SameSite=Lax`
    
    // Force page reload to apply new locale
    window.location.reload()
  }, [pendingLocale])

  const changeLocale = (newLocale: Locale) => {
    if (newLocale === locale) {
      setIsOpen(false)
      return
    }
    setPendingLocale(newLocale)
    setIsOpen(false)
  }

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // Close on ESC key
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={classNames(
          "relative p-1.5 rounded-full hover:bg-white/10 transition-colors text-white",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827]",
          isOpen && "bg-white/10"
        )}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Sprache ändern"
      >
        <span 
          className="text-lg leading-none block w-6 h-6 flex items-center justify-center"
          suppressHydrationWarning
        >
          {FLAGS[locale]}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95, x: 10 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, x: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, x: 10 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 top-full mt-2 bg-[#111827] border border-white/10 rounded-xl shadow-xl overflow-hidden z-[100001] backdrop-blur-md"
            role="listbox"
          >
            <div className="p-2 flex gap-2">
              {locales.map((l) => (
                <button
                  key={l}
                  onClick={() => changeLocale(l)}
                  className={classNames(
                    "relative w-10 h-10 rounded-lg flex items-center justify-center text-lg transition-all",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827]",
                    locale === l
                      ? "bg-action/20 ring-1 ring-action/50"
                      : "hover:bg-white/10 text-white"
                  )}
                  role="option"
                  aria-selected={locale === l}
                >
                  <span className="leading-none">{FLAGS[l]}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

