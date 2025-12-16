"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { Menu } from "lucide-react"
import { NavigationDrawer } from "@/components/nav/NavigationDrawer"
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher"
import { Button } from "@/components/ui/Button"
import { useLocale } from "@/hooks/useLocale"
import { t } from "@/lib/i18n"
import { classNames } from "@/lib/classNames"

export function Header() {
  const locale = useLocale()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20)
  })

  return (
    <>
      <header
        className={classNames(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b",
          isScrolled 
            ? "bg-glass/90 backdrop-blur-md border-glass-border shadow-sm py-3" 
            : "bg-transparent border-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-foreground hover:text-accent transition-colors flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span>{t(locale, "brand.name")}</span>
          </Link>

          {/* Right Side: Lang + Demo + Menu */}
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="hidden md:block">
               <LanguageSwitcher />
            </div>
            
            <div className="hidden sm:block">
              <Button variant="primary" size="sm" asChild href="/demo" className="rounded-full px-6">
                {t(locale, "nav.cta")}
              </Button>
            </div>
            
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 -mr-2 rounded-full hover:bg-muted transition-colors text-foreground"
              aria-label="Menü öffnen"
            >
              <Menu className="w-7 h-7 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </header>

      <NavigationDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
    </>
  )
}
