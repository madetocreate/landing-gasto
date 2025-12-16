"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { classNames } from "@/lib/classNames"

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  variant?: "default" | "feature" | "module"
  className?: string
  noHover?: boolean
}

export function GlassCard({ 
  children, 
  variant = "default", 
  className, 
  noHover = false,
  ...props 
}: GlassCardProps) {
  
  const variants = {
    default: "bg-glass-surface backdrop-blur-[var(--blur-glass)] border border-glass-border shadow-glass",
    feature: "bg-surface/50 backdrop-blur-md border border-border/50 shadow-glass",
    module: "bg-surface/90 dark:bg-surface/50 border border-border/60 shadow-glass",
  }

  // Premium rule: keep hover micro-motion subtle; avoid animating blur/shadow/colors (expensive + "template-y")
  const hoverAnimation = noHover ? {} : {
    y: -3,
    scale: 1.005,
  }

  return (
    <motion.div
      className={classNames(
        "relative overflow-hidden rounded-2xl transition-transform duration-[var(--motion-fast)]",
        variants[variant],
        className
      )}
      initial={false}
      whileHover={noHover ? undefined : hoverAnimation}
      whileTap={noHover ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 350, damping: 28 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

