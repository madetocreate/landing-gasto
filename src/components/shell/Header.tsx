"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { useScroll, useMotionValueEvent } from "framer-motion"
import { Menu } from "lucide-react"
import { NavigationDrawer } from "@/components/nav/NavigationDrawer"
import { LanguageFlagSwitcher } from "@/components/ui/LanguageFlagSwitcher"
import { useLocale } from "@/hooks/useLocale"
import { t } from "@/lib/i18n"
import { classNames } from "@/lib/classNames"
import { useReducedMotion } from "framer-motion"

export function Header() {
  const locale = useLocale()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const headerRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollY } = useScroll()

  // Scroll direction detection
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20)
    
    if (shouldReduceMotion) {
      setIsVisible(true)
      return
    }

    // Check if focus is in header
    if (headerRef.current?.contains(document.activeElement)) {
      setIsVisible(true)
      setLastScrollY(latest)
      return
    }

    const threshold = 120
    if (latest < threshold) {
      setIsVisible(true)
    } else if (latest > lastScrollY) {
      // Scrolling down
      setIsVisible(false)
    } else {
      // Scrolling up
      setIsVisible(true)
    }
    
    setLastScrollY(latest)
  })

  return (
    <>
      <div 
        ref={headerRef}
        className={classNames(
          "fixed top-8 left-0 right-0 z-[99999] pointer-events-none transition-transform duration-700 ease-out",
          shouldReduceMotion ? "" : isVisible ? "translate-y-0" : "translate-y-[-180%]"
        )}
        style={{ willChange: 'transform' }}
      >
        <header
          className={classNames(
            "relative z-[100000] transition-all duration-700 max-w-7xl mx-auto px-4 sm:px-6 pointer-events-auto",
            "bg-[#111827] shadow-[0_20px_50px_rgba(0,0,0,0.5)] py-2 rounded-full",
            "border border-white/10"
          )}
        >
          <div className="flex items-center justify-between px-4">
            {/* Left Side: Logo (nur Text) */}
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity"
            >
              {t(locale, "brand.name")}
            </Link>

            {/* Right Side: Language Switcher + Menu Button with Glow effect */}
            <div className="relative flex items-center gap-2">
              <LanguageFlagSwitcher />
              <div className="absolute -right-4 w-12 h-12 bg-white/10 blur-xl rounded-full pointer-events-none" />
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="relative p-1.5 -mr-1.5 rounded-full hover:bg-white/10 transition-colors text-white"
                aria-label="Menü öffnen"
              >
                <Menu className="w-6 h-6 stroke-[1.5]" />
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Spacer für fixed Header */}
      <div className="h-20" />

      <NavigationDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
    </>
  )
}
