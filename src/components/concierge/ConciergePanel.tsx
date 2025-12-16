'use client';

import { useState, useEffect } from 'react';
import { ConciergeMode, ModeSwitcher } from './ModeSwitcher';
import { ConciergeChat } from './ConciergeChat';
import { classNames } from '@/lib/classNames';
import { FocusTrap } from '@/components/ui/FocusTrap';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Minimize2 } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface ConciergePanelProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: ConciergeMode;
}

export function ConciergePanel({ isOpen, onClose, initialMode = 'concierge' }: ConciergePanelProps) {
  const [mode, setMode] = useState<ConciergeMode>(initialMode);
  const pathname = usePathname();
  
  // Update mode when initialMode changes (e.g. from auto-detection)
  useEffect(() => {
    setMode(initialMode);
  }, [initialMode, isOpen]);

  // Lock body scroll on mobile only, or handled by FocusTrap logic?
  // Usually dialogs lock scroll.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Overlay click logic is handled by the backdrop div

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop (Mobile only usually, or dimming everywhere) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-overlay/40 backdrop-blur-[2px] md:bg-transparent md:backdrop-blur-none"
            aria-hidden="true"
          />

          {/* Panel */}
          <FocusTrap isActive={isOpen}>
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="KI Concierge"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={classNames(
                'fixed z-[70] overflow-hidden flex flex-col',
                // Mobile: Full screen or bottom sheet style
                'inset-x-0 bottom-0 top-12 rounded-t-2xl',
                // Desktop: Floating bottom right
                'md:inset-auto md:bottom-24 md:right-6 md:top-auto',
                'md:w-[420px] md:h-[600px] md:rounded-2xl',
                // Glass Styles
                'bg-glass-surface backdrop-blur-xl',
                'border border-glass-border',
                'shadow-glass'
              )}
            >
              {/* Header */}
              <div className="flex-none p-4 border-b border-border/20 bg-glass-surface/70 backdrop-blur-sm flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    KI Concierge
                  </h2>
                  <p className="text-xs text-foreground-muted">
                    Soforthilfe 24/7 · Support nach Verfügbarkeit
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-background-muted/60 text-foreground-muted hover:text-foreground transition-colors"
                    aria-label="Schließen"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Mode Switcher */}
              <div className="flex-none px-4 pt-4 pb-2">
                <ModeSwitcher currentMode={mode} onModeChange={setMode} />
              </div>

              {/* Chat Content */}
              <div className="flex-1 overflow-hidden relative">
                <ConciergeChat mode={mode} pathname={pathname} />
              </div>

              {/* Footer / Input placeholder (if needed, otherwise handled in Chat) */}
            </motion.div>
          </FocusTrap>
        </>
      )}
    </AnimatePresence>
  );
}
