"use client"

import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { X } from "lucide-react"
import { FocusTrap } from "@/components/ui/FocusTrap"
import { Locale, t } from "@/lib/i18n"
import { classNames } from "@/lib/classNames"
import { motion as motionPolicy } from "@/lib/motion"

interface NavigationDrawerProps {
  isOpen: boolean
  onClose: () => void
  locale: Locale
}

export function NavigationDrawer({ isOpen, onClose, locale }: NavigationDrawerProps) {
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()
  const router = useRouter()
  const shouldReduceMotion = useReducedMotion()

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

  // Close on route change (only if drawer is open)
  useEffect(() => {
    if (isOpen) {
      onClose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]) // Only close when pathname changes, not when onClose changes

  // Close on ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose])

  const links = [
    { href: "/", label: t(locale, "nav.top.home") as string },
    { href: "/anwendungen", label: t(locale, "nav.top.applications") as string },
    { href: "/fundament", label: t(locale, "nav.top.fundament") as string },
    { href: "/preise", label: t(locale, "nav.top.pricing") as string },
    { href: "/kontakt", label: t(locale, "nav.top.contact") as string },
  ]

  const handleLinkClick = (href: string) => {
    // Delay close slightly to show "flash" effect
    setTimeout(() => {
      onClose()
      router.push(href)
    }, 150)
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: motionPolicy.drawer.duration, ease: motionPolicy.drawer.ease }}
            className="fixed inset-0 z-[10001] bg-white/20 backdrop-blur-xl"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: motionPolicy.drawer.duration, ease: motionPolicy.drawer.ease }}
            style={{ willChange: 'transform' }}
            className="fixed top-0 left-0 bottom-0 z-[10002] w-full md:w-[36rem] bg-white/95 backdrop-blur-xl border-r border-border shadow-2xl overflow-y-auto flex flex-col text-[#111827]"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
          >
            <FocusTrap isActive={isOpen}>
              <div className="flex flex-col h-full p-8 md:p-16">
                <div className="flex justify-end mb-12">
                  <button
                    onClick={handleClose}
                    className="p-3 -mr-3 rounded-full hover:bg-black/5 transition-colors text-foreground-muted hover:text-foreground touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label="Menü schließen"
                  >
                    <X className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.5} />
                  </button>
                </div>

                <nav className="flex-1 flex flex-col gap-6">
                  {links.map((link) => {
                    const isActive = pathname === link.href
                    return (
                      <motion.button
                        key={link.href}
                        onClick={() => handleLinkClick(link.href)}
                        className={classNames(
                          "text-left text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter outline-none w-full relative",
                          "px-4 sm:px-6 py-3 sm:py-4 rounded-xl touch-manipulation min-h-[44px]",
                          "transition-all duration-300 ease-out",
                                  isActive
                                    ? "text-action"
                                    : "text-[#111827] hover:text-action"
                                )}
                        whileHover={shouldReduceMotion ? {} : { 
                          scale: 1.065,
                          transition: { type: "spring", stiffness: 400, damping: 25 }
                        }}
                        whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                      >
                        <span 
                          className={classNames(
                            "relative block transition-colors duration-300 ease-out"
                          )}
                        >
                          <span className="relative z-10">
                            {link.label}
                          </span>
                        </span>
                      </motion.button>
                    );
                  })}
                </nav>

                <div className="mt-auto pt-12 text-sm text-[#111827]/40">
                  © {currentYear} {t(locale, "brand.name") as string}
                </div>
              </div>
            </FocusTrap>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
