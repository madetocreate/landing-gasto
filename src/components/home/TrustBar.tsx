'use client'

import { Shield, Server, Lock, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const trustItems = [
  {
    icon: Shield,
    label: 'DSGVO-konform',
    labelEn: 'GDPR compliant'
  },
  {
    icon: Server,
    label: 'Deutsche Server',
    labelEn: 'German servers'
  },
  {
    icon: Lock,
    label: 'Ende-zu-Ende verschlüsselt',
    labelEn: 'End-to-end encrypted'
  },
  {
    icon: Zap,
    label: 'Sofort einsatzbereit',
    labelEn: 'Ready instantly'
  }
]

interface TrustBarProps {
  locale?: string
}

export function TrustBar({ locale = 'de' }: TrustBarProps) {
  const isGerman = locale === 'de'
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="w-full py-6 border-y border-border/50 bg-surface/50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              className="flex items-center gap-2 group"
            >
              <div className="p-1.5 rounded-lg bg-action/10 text-action group-hover:bg-action group-hover:text-white transition-all duration-300">
                <item.icon className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-foreground-muted group-hover:text-foreground transition-colors">
                {isGerman ? item.label : item.labelEn}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

