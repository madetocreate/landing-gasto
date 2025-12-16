"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { Menu } from "lucide-react"
import { NavigationDrawer } from "@/components/nav/NavigationDrawer"
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher"
import { useLocale } from "@/hooks/useLocale"
import { t } from "@/lib/i18n"
import { classNames } from "@/lib/classNames"
import { motion as motionPolicy } from "@/lib/motion"

export function Header() {
  const locale = useLocale()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const { scrollY } = useScroll()
  const [lastScrollY, setLastScrollY] = useState(0)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastScrollY
    const isScrollingDown = diff > 0
    const isScrollingUp = diff < 0

    // Show header at the very top always
    if (latest < 100) {
      setIsVisible(true)
    } else if (isScrollingDown && latest > 300) {
      // Hide when scrolling down past 300px
      setIsVisible(false)
    } else if (isScrollingUp) {
      // Show when scrolling up
      setIsVisible(true)
    }

    setLastScrollY(latest)
  })

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: motionPolicy.drawer.duration, ease: motionPolicy.drawer.ease }}
            className="fixed top-0 left-0 right-0 z-30 pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none"
          >
            <div className="max-w-7xl mx-auto">
              <div className="bg-glass/80 backdrop-blur-[var(--blur-glass)] border border-glass-border shadow-glass rounded-2xl px-6 h-16 flex items-center justify-between pointer-events-auto">
                {/* Logo */}
                <Link
                  href="/"
                  className="text-xl font-bold tracking-tight text-foreground hover:text-accent transition-colors"
                >
                  {t(locale, "brand.name")}
                </Link>

                {/* Right Side: Lang + Menu */}
                <div className="flex items-center gap-4">
                  <LanguageSwitcher />
                  
                  <button
                    onClick={() => setIsDrawerOpen(true)}
                    className="p-2 -mr-2 rounded-full hover:bg-background-muted/60 transition-colors text-foreground"
                    aria-label="Menü öffnen"
                  >
                    <Menu className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      <NavigationDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
    </>
  )
}
