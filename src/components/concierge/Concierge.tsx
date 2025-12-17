'use client';

import { useMemo, useState, useEffect } from 'react';
import { ConciergeLauncher } from './ConciergeLauncher';
import { ConciergePanel } from './ConciergePanel';
import type { ConciergeMode } from './ModeSwitcher';
import { usePathname } from 'next/navigation';

export function Concierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintShown, setHintShown] = useState(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem('concierge_hint_shown') === 'true';
  });
  const pathname = usePathname();

  const initialMode: ConciergeMode = useMemo(() => {
    if (pathname.includes('/preise') || pathname.includes('/demo')) return 'onboarding';
    if (pathname.includes('/wissen') || pathname.includes('/features')) return 'support';
    return 'concierge';
  }, [pathname]);

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
        window.setTimeout(() => setShowHint(false), 5000);
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
      window.setTimeout(() => setShowHint(false), 5000);
    }, 45000); // 45 seconds

    return () => clearTimeout(timer);
  }, [hintShown, isOpen]);

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
        key={`${pathname}:${initialMode}:${isOpen ? 'open' : 'closed'}`}
        isOpen={isOpen}
        onClose={handleClose}
        initialMode={initialMode}
      />
    </>
  );
}

