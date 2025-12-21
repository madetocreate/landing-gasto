"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { useScroll, useMotionValueEvent } from "framer-motion"
import { Menu } from "lucide-react"
import { NavigationDrawer } from "@/components/nav/NavigationDrawer"
import { LanguageFlagSwitcher } from "@/components/ui/LanguageFlagSwitcher"
import { Locale, t } from "@/lib/i18n"
import { classNames } from "@/lib/classNames"
import { useReducedMotion } from "framer-motion"

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollYRef = useRef(0)
  const headerRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollY } = useScroll()

  // Scroll direction detection
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (shouldReduceMotion) {
      setIsVisible(true)
      return
    }

    // Check if focus is in header
    if (headerRef.current?.contains(document.activeElement)) {
      setIsVisible(true)
      lastScrollYRef.current = latest
      return
    }

    const threshold = 120
    if (latest < threshold) {
      setIsVisible(true)
    } else if (latest > lastScrollYRef.current) {
      // Scrolling down
      setIsVisible(false)
    } else {
      // Scrolling up
      setIsVisible(true)
    }
    
    lastScrollYRef.current = latest
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
            "bg-[#111827] shadow-[0_20px_50px_rgba(0,0,0,0.5)] py-2.5 sm:py-2 rounded-full",
            "border border-white/10"
          )}
        >
          <div className="flex items-center justify-between px-4">
            {/* Left Side: Logo (nur Text) */}
            <Link
              href="/"
              className="text-lg sm:text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity touch-manipulation min-h-[44px] flex items-center"
            >
              {t(locale, "brand.name") as string}
            </Link>

            {/* Right Side: Language Switcher + Menu Button with Glow effect */}
            <div className="relative flex items-center gap-2">
              <LanguageFlagSwitcher locale={locale} />
              <div className="absolute -right-4 w-12 h-12 bg-white/10 blur-xl rounded-full pointer-events-none" />
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="relative p-2.5 -mr-2.5 rounded-full hover:bg-white/10 transition-colors text-white touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
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
        locale={locale}
      />
    </>
  )
}
