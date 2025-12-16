'use client';

import { useState, useEffect } from 'react';
import { Locale, defaultLocale, locales } from '@/lib/i18n';

export function useLocale(): Locale {
  const [locale, setLocale] = useState<Locale>(() => {
    // Initialize from cookie on client side
    if (typeof window === 'undefined') return defaultLocale;
    const cookieLocale = document.cookie
      .split('; ')
      .find((row) => row.startsWith('locale='))
      ?.split('=')[1] as Locale | undefined;
    
    return (cookieLocale && locales.includes(cookieLocale)) ? cookieLocale : defaultLocale;
  });

  // Note: Cookie reading moved to useState initializer to avoid setState in effect

  return locale;
}

