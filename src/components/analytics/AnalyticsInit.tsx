'use client';

import { useEffect } from 'react';
import { initAnalytics } from '@/lib/analytics';

/**
 * Client component to initialize analytics
 * Add this to your root layout
 */
export function AnalyticsInit() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return null;
}

