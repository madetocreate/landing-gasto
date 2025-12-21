'use client';

import { ReactNode, useMemo } from 'react';
import { classNames } from '@/lib/classNames';

interface MarqueeProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  speed?: number; // seconds per loop
  className?: string;
}

export function Marquee({ children, direction = 'left', speed = 30, className }: MarqueeProps) {
  const animationId = useMemo(() => `marquee-${direction}-${speed}`, [direction, speed]);
  
  // For 'left' direction: moves from 0 to -50% (content moves left)
  // For 'right' direction: moves from -50% to 0 (content moves right)
  const startValue = direction === 'left' ? '0' : '-50%';
  const endValue = direction === 'left' ? '-50%' : '0';

  return (
    <>
      <style>{`
        @keyframes ${animationId} {
          0% {
            transform: translate3d(${startValue}, 0, 0);
          }
          100% {
            transform: translate3d(${endValue}, 0, 0);
          }
        }
        .${animationId} {
          display: flex;
          width: fit-content;
          animation: ${animationId} ${speed}s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }
        @media (prefers-reduced-motion: reduce) {
          .${animationId} {
            animation: none;
            /* For right direction, ensure we see the start of content if animation is off */
            transform: translateX(0);
          }
        }
        .${animationId}:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className={classNames('overflow-hidden', className)} style={{ willChange: 'transform' }}>
        <div className={animationId}>
          {/* Duplicate content for seamless loop */}
          <div className="flex" style={{ willChange: 'transform' }}>
            {children}
          </div>
          <div className="flex" style={{ willChange: 'transform' }}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
