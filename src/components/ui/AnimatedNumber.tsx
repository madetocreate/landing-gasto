'use client';

import { useEffect, useState, useRef } from 'react';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  className?: string;
  formatter?: (value: number) => string;
}

export function AnimatedNumber({ 
  value, 
  duration = 800, 
  className,
  formatter = (v) => v.toLocaleString('de-DE')
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const displayValueRef = useRef(0);

  useEffect(() => {
    if (value === 0) {
      setDisplayValue(0);
      displayValueRef.current = 0;
      return;
    }

    const startValue = displayValueRef.current;
    const endValue = value;
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (endValue - startValue) * easeOut;

      const rounded = Math.round(current);
      setDisplayValue(rounded);
      displayValueRef.current = rounded;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(endValue);
        displayValueRef.current = endValue;
      }
    };

    const rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [value, duration]);

  return <span className={className}>{formatter(displayValue)}</span>;
}

