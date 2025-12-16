'use client';

import { classNames } from '@/lib/classNames';
import { motion } from 'framer-motion';

export type ConciergeMode = 'concierge' | 'support' | 'onboarding';

interface ModeSwitcherProps {
  currentMode: ConciergeMode;
  onModeChange: (mode: ConciergeMode) => void;
}

const modes: Array<{ id: ConciergeMode; label: string }> = [
  { id: 'concierge', label: 'Concierge' },
  { id: 'support', label: 'Support' },
  { id: 'onboarding', label: 'Onboarding' },
];

export function ModeSwitcher({ currentMode, onModeChange }: ModeSwitcherProps) {
  return (
    <div className="flex p-1 bg-background-muted/60 rounded-xl border border-border/20">
      {modes.map((m) => {
        const isActive = currentMode === m.id;
        return (
          <button
            key={m.id}
            onClick={() => onModeChange(m.id)}
            className={classNames(
              'relative flex-1 px-3 py-1.5 text-xs font-medium rounded-lg text-center',
              'transition-colors duration-200',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
              isActive
                ? 'text-foreground'
                : 'text-foreground-muted hover:text-foreground'
            )}
          >
            {isActive && (
              <motion.div
                layoutId="activeMode"
                className="absolute inset-0 bg-background shadow-sm rounded-lg border border-border/50"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{m.label}</span>
          </button>
        );
      })}
    </div>
  );
}
