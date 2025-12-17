'use client';

import { classNames } from '@/lib/classNames';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquareText, X } from 'lucide-react';

interface ConciergeLauncherProps {
  onOpen: () => void;
  showHint?: boolean;
  onHintDismiss?: () => void;
}

export function ConciergeLauncher({ onOpen, showHint = false, onHintDismiss }: ConciergeLauncherProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Hint Tooltip */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className={classNames(
              'pointer-events-auto',
              'mb-1 px-4 py-2.5 rounded-xl',
              'bg-glass-surface backdrop-blur-[var(--blur-glass)]',
              'border border-glass-border',
              'shadow-glass',
              'text-sm font-medium text-foreground',
              'flex items-center gap-2'
            )}
          >
            <span>Fragen?</span>
            <button 
              onClick={() => { onHintDismiss?.(); }}
              className="p-0.5 hover:bg-background-muted/60 rounded-full transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
            {/* Arrow */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-glass-surface border-b border-r border-glass-border rotate-45 transform" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpen}
        className={classNames(
          'pointer-events-auto',
          'w-14 h-14 rounded-full',
          'bg-glass-surface backdrop-blur-[var(--blur-glass)]',
          'border border-glass-border',
          'shadow-glass',
          'text-accent',
          'flex items-center justify-center',
          'transition-colors duration-200',
          'hover:bg-accent hover:text-accent-foreground',
          'group'
        )}
        aria-label="Hilfe öffnen"
      >
        <MessageSquareText className="w-7 h-7 transition-transform duration-200 group-hover:scale-110" strokeWidth={1.5} />
      </motion.button>
    </div>
  );
}
