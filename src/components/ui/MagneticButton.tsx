'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/classNames'

interface MagneticButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  magnetic?: boolean
  glow?: boolean
}

export function MagneticButton({
  children,
  href,
  onClick,
  className,
  variant = 'primary',
  size = 'md',
  magnetic = true,
  glow = true
}: MagneticButtonProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleDivMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!magnetic || !divRef.current) return

    const { clientX, clientY } = e
    const { left, top, width, height } = divRef.current.getBoundingClientRect()
    const x = (clientX - left - width / 2) * 0.15
    const y = (clientY - top - height / 2) * 0.15

    setPosition({ x, y })
  }

  const handleButtonMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || !buttonRef.current) return

    const { clientX, clientY } = e
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect()
    const x = (clientX - left - width / 2) * 0.15
    const y = (clientY - top - height / 2) * 0.15

    setPosition({ x, y })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const baseStyles = cn(
    'relative inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-300',
    'focus:outline-none focus:ring-2 focus:ring-action/50 focus:ring-offset-2 focus:ring-offset-background',
    'active:scale-[0.98]',
    {
      // Sizes
      'px-4 py-2 text-sm': size === 'sm',
      'px-6 py-3 text-base': size === 'md',
      'px-8 py-4 text-lg': size === 'lg',
      // Variants
      'bg-action hover:bg-action-hover text-white': variant === 'primary',
      'bg-surface hover:bg-muted text-foreground border border-border': variant === 'secondary',
      'bg-transparent hover:bg-muted text-foreground': variant === 'ghost',
    },
    className
  )

  const glowStyles = glow && variant === 'primary' 
    ? 'shadow-lg shadow-action/25 hover:shadow-xl hover:shadow-action/35' 
    : ''

  const content = (
    <>
      {/* Glow Effect */}
      {glow && variant === 'primary' && (
        <motion.div
          className="absolute inset-0 rounded-xl bg-action/20 blur-xl -z-10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {children}
    </>
  )

  if (href) {
    return (
      <Link 
        href={href} 
        onClick={onClick}
        className="inline-block"
      >
        <motion.div
          ref={divRef}
          onMouseMove={handleDivMouse}
          onMouseLeave={reset}
          animate={{ x: position.x, y: position.y }}
          transition={{ type: 'spring', stiffness: 350, damping: 15, mass: 0.5 }}
          className={cn(baseStyles, glowStyles)}
        >
          {content}
        </motion.div>
      </Link>
    )
  }

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleButtonMouse}
      onMouseLeave={reset}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15, mass: 0.5 }}
      className={cn(baseStyles, glowStyles, 'cursor-pointer')}
    >
      {content}
    </motion.button>
  )
}

