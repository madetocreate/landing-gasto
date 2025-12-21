'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface StickyMobileCTAProps {
  locale?: string
  href?: string
  label?: string
}

export function StickyMobileCTA({ 
  locale = 'de',
  href,
  label
}: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (500px)
      const shouldShow = window.scrollY > 500
      setIsVisible(shouldShow)

      // Hide near footer
      const footer = document.querySelector('footer')
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top
        setIsAtBottom(footerTop < window.innerHeight + 100)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const ctaHref = href || `/${locale}/check`
  const ctaLabel = label || (locale === 'de' ? 'Demo starten' : 'Start demo')

  return (
    <AnimatePresence>
      {isVisible && !isAtBottom && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/80 backdrop-blur-xl border-t border-border/50 md:hidden safe-area-inset-bottom"
        >
          <Link
            href={ctaHref}
            className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-action hover:bg-action-hover text-white font-bold rounded-xl shadow-lg shadow-action/25 transition-all active:scale-[0.98]"
          >
            <span>{ctaLabel}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

