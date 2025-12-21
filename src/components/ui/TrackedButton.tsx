'use client';

import { Button } from './Button';
import { track } from '@/lib/analytics';
import { usePathname } from 'next/navigation';
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface TrackedButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  href?: string;
  trackEvent?: string;
  trackProperties?: Record<string, string | number>;
  className?: string;
}

/**
 * Button with automatic event tracking
 * 
 * Usage:
 *   <TrackedButton 
 *     trackEvent="cta_check_click" 
 *     href="/check"
 *     variant="primary"
 *   >
 *     Zum 3-Minuten-Check
 *   </TrackedButton>
 */
export function TrackedButton({
  trackEvent,
  trackProperties,
  onClick,
  href,
  ...props
}: TrackedButtonProps) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (trackEvent) {
      track(trackEvent, {
        page: pathname,
        source: (trackProperties?.source as string) || 'button',
        variant: props.variant,
        ...trackProperties,
      });
    }
    
    if (onClick) {
      onClick(e as React.MouseEvent<HTMLButtonElement>);
    }
  };

  return (
    <Button
      {...props}
      href={href}
      onClick={handleClick}
    />
  );
}

