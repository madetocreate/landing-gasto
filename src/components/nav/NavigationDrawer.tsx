"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import { FocusTrap } from "@/components/ui/FocusTrap"
import { useLocale } from "@/hooks/useLocale"
import { t } from "@/lib/i18n"
import { classNames } from "@/lib/classNames"
import { motion as motionPolicy } from "@/lib/motion"

interface NavigationDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function NavigationDrawer({ isOpen, onClose }: NavigationDrawerProps) {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [clickedLink, setClickedLink] = useState<string | null>(null)

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Close on route change (cleanup)
  useEffect(() => {
    onClose()
    setClickedLink(null)
  }, [pathname, onClose])

  const links = [
    { href: "/", label: t(locale, "nav.top.home") },
    { href: "/features", label: t(locale, "nav.top.features") },
    { href: "/preise", label: t(locale, "nav.top.pricing") },
    { href: "/demo", label: t(locale, "nav.drawer.links.demo_view") || "Demo ansehen" },
    { href: "/kontakt", label: t(locale, "nav.drawer.links.contact") },
  ]

  const handleLinkClick = (href: string) => {
    setClickedLink(href)
    // Delay close slightly to show "flash" effect
    setTimeout(() => {
      onClose()
      router.push(href)
    }, 150)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: motionPolicy.drawer.duration, ease: motionPolicy.drawer.ease }}
            className="fixed inset-0 z-40 bg-overlay/70 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: motionPolicy.drawer.duration, ease: motionPolicy.drawer.ease }}
            className="fixed top-0 left-0 bottom-0 z-50 w-full md:w-[36rem] bg-background/95 backdrop-blur-xl border-r border-border shadow-glass overflow-y-auto flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
          >
            <FocusTrap isActive={isOpen}>
              <div className="flex flex-col h-full p-8 md:p-16">
                <div className="flex items-center justify-between mb-20">
                  <span className="text-2xl font-bold tracking-tight text-foreground">
                    {t(locale, "brand.name")}
                  </span>
                  <button
                    onClick={onClose}
                    className="p-4 -mr-4 rounded-full hover:bg-muted transition-colors text-foreground-muted hover:text-foreground"
                    aria-label="Menü schließen"
                  >
                    <X className="w-8 h-8" strokeWidth={1.5} />
                  </button>
                </div>

                <nav className="flex-1 flex flex-col gap-10">
                  {links.map((link) => (
                    <motion.button
                      key={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className={classNames(
                        "text-left text-5xl md:text-6xl font-bold tracking-tighter transition-colors outline-none focus-visible:text-accent w-fit",
                        pathname === link.href 
                          ? "text-accent" 
                          : "text-foreground",
                        clickedLink === link.href ? "text-accent animate-pulse" : ""
                      )}
                      whileHover={{ scale: 1.05, x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </nav>

                {/* Footer removed as per instructions: no extra contact CTA, no demo button */}
                <div className="mt-auto pt-12 text-sm text-foreground-muted opacity-50">
                  © {new Date().getFullYear()} {t(locale, "brand.name")}
                </div>
              </div>
            </FocusTrap>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
