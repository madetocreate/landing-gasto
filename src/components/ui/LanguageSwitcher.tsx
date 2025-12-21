"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Check } from "lucide-react"
import { useLocale } from "@/hooks/useLocale"
import { Locale, locales } from "@/lib/i18n"
import { classNames } from "@/lib/classNames"

const FLAGS: Record<Locale, string> = {
  de: "🇩🇪",
  en: "🇺🇸",
  es: "🇪🇸",
  fr: "🇫🇷",
  it: "🇮🇹",
}

const LABELS: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  es: "Español",
  fr: "Français",
  it: "Italiano",
}

export function LanguageSwitcher() {
  const router = useRouter()
  const locale = useLocale()
  const [isOpen, setIsOpen] = useState(false)
  const [pendingLocale, setPendingLocale] = useState<Locale | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const changeLocale = (newLocale: Locale) => {
    setPendingLocale(newLocale)
    setIsOpen(false)
  }

  // Write cookie + refresh in an effect (immutability rule allows side effects here)
  useEffect(() => {
    if (!pendingLocale) return
    document.cookie = `locale=${pendingLocale}; path=/; max-age=31536000`
    router.refresh()
  }, [pendingLocale, router])

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-background-muted/60 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Sprache ändern"
      >
        <span className="text-xl leading-none">{FLAGS[locale]}</span>
        <span className="text-sm font-medium hidden sm:inline-block uppercase">{locale}</span>
        <ChevronDown className={classNames("w-4 h-4 transition-transform", isOpen ? "rotate-180" : "")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-surface border border-border rounded-xl shadow-glass overflow-hidden z-50"
            role="listbox"
          >
            <div className="p-1">
              {locales.map((l) => (
                <button
                  key={l}
                  onClick={() => changeLocale(l)}
                  className={classNames(
                    "w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors",
                    locale === l
                      ? "bg-accent/10 text-accent font-medium"
                      : "text-foreground hover:bg-muted"
                  )}
                  role="option"
                  aria-selected={locale === l}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-lg">{FLAGS[l]}</span>
                    <span>{LABELS[l]}</span>
                  </span>
                  {locale === l && <Check className="w-4 h-4" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
