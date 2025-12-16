'use client';

import { useState, useEffect } from 'react';
import { ConciergeLauncher } from './ConciergeLauncher';
import { ConciergePanel } from './ConciergePanel';
import type { ConciergeMode } from './ModeSwitcher';
import { usePathname } from 'next/navigation';

export function Concierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintShown, setHintShown] = useState(false);
  const [initialMode, setInitialMode] = useState<ConciergeMode>('concierge');
  const pathname = usePathname();

  // Check if hint was already shown this session
  useEffect(() => {
    const stored = sessionStorage.getItem('concierge_hint_shown');
    if (stored === 'true') {
      setHintShown(true);
    }
  }, []);

  // Scroll-based hint trigger
  useEffect(() => {
    if (hintShown || isOpen) return;

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / scrollHeight) * 100;

      if (scrollPercent >= 60 && !hintShown) {
        setShowHint(true);
        setHintShown(true);
        sessionStorage.setItem('concierge_hint_shown', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hintShown, isOpen]);

  // Time-based hint trigger
  useEffect(() => {
    if (hintShown || isOpen) return;

    const timer = setTimeout(() => {
      setShowHint(true);
      setHintShown(true);
      sessionStorage.setItem('concierge_hint_shown', 'true');
    }, 45000); // 45 seconds

    return () => clearTimeout(timer);
  }, [hintShown, isOpen]);

  // Auto-detect mode based on pathname
  useEffect(() => {
    if (pathname.includes('/preise') || pathname.includes('/demo')) {
      setInitialMode('onboarding');
    } else if (pathname.includes('/wissen') || pathname.includes('/features')) {
      setInitialMode('support');
    } else {
      setInitialMode('concierge');
    }
  }, [pathname]);

  const handleOpen = () => {
    setIsOpen(true);
    setShowHint(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleHintDismiss = () => {
    setShowHint(false);
  };

  return (
    <>
      <ConciergeLauncher
        onOpen={handleOpen}
        showHint={showHint}
        onHintDismiss={handleHintDismiss}
      />
      <ConciergePanel
        isOpen={isOpen}
        onClose={handleClose}
        initialMode={initialMode}
      />
    </>
  );
}

