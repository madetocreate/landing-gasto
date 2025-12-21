"use client";

import { useEffect, useRef } from 'react';
import { classNames } from '@/lib/classNames';

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children?: React.ReactNode;
}

export function Overlay({ isOpen, onClose, className, children }: OverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (overlayRef.current && e.target === overlayRef.current) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClick);

    // Prevent body scroll when overlay is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClick);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className={classNames(
        'fixed inset-0 z-40 backdrop-blur-[var(--drawer-backdrop-blur)] transition-opacity duration-[var(--drawer-transition)]',
        className
      )}
      style={{ backgroundColor: 'var(--color-overlay)' }}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}


