"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
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
    { href: "/", label: t(locale, "nav.top.home") },
    { href: "/anwendungen", label: t(locale, "nav.top.applications") },
    { href: "/fundament", label: t(locale, "nav.top.fundament") },
    { href: "/preise", label: t(locale, "nav.top.pricing") },
    { href: "/kontakt", label: t(locale, "nav.top.contact") },
  ]

  const handleLinkClick = (href: string) => {
    setClickedLink(href)
    // Delay close slightly to show "flash" effect
    setTimeout(() => {
      onClose()
      router.push(href)
    }, 150)
  }

  const handleClose = () => {
    setClickedLink(null)
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
                    className="p-4 -mr-4 rounded-full hover:bg-black/5 transition-colors text-foreground-muted hover:text-foreground"
                    aria-label="Menü schließen"
                  >
                    <X className="w-8 h-8" strokeWidth={1.5} />
                  </button>
                </div>

                <nav className="flex-1 flex flex-col gap-6">
                  {links.map((link) => {
                    const isActive = pathname === link.href
                    const isClicked = clickedLink === link.href
                    return (
                      <motion.button
                        key={link.href}
                        onClick={() => handleLinkClick(link.href)}
                        className={classNames(
                          "text-left text-4xl md:text-5xl font-bold tracking-tighter outline-none w-fit relative",
                          "px-6 py-4 -mx-6 -my-4 rounded-xl",
                          "transition-all duration-300 ease-out",
                          isActive 
                            ? "text-action" 
                            : "text-[#111827] hover:text-action",
                          isClicked ? "text-action animate-pulse" : ""
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
