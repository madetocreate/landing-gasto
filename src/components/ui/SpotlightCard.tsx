"use client"

import React, { useState, MouseEvent } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { classNames } from "@/lib/classNames"

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  spotlightColor?: string
  withBorderBeam?: boolean
  beamDuration?: number
  beamColor?: string
}

export function SpotlightCard({ 
  children, 
  className, 
  spotlightColor = "var(--spotlight-color)", 
  withBorderBeam = false,
  beamDuration = 8,
  beamColor = "var(--color-accent)",
  ...props 
}: SpotlightCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 40%)`

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classNames(
        "relative overflow-hidden rounded-2xl border border-glass-border bg-glass-surface backdrop-blur-[var(--blur-glass)] shadow-glass",
        className
      )}
      {...props}
    >
      {/* Spotlight Gradient */}
      <motion.div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background,
        }}
      />
      
      {/* Optional Border Beam */}
      {withBorderBeam && <BorderBeam duration={beamDuration} color={beamColor} />}

      {/* Content */}
      <div className="relative h-full">
        {children}
      </div>
    </div>
  )
}

function BorderBeam({ duration = 8, color = "var(--color-accent)" }: { duration?: number, color?: string }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[inherit]">
      <div 
        className="absolute -inset-[100%] opacity-40 animate-border-beam"
        style={{
            background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 340deg, ${color} 360deg)`,
            animation: `border-beam-spin ${duration}s linear infinite`
        }}
      />
    </div>
  )
}
