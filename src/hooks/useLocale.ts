'use client';

import { useState, useEffect } from 'react';
import { Locale, defaultLocale, locales } from '@/lib/i18n';

function getLocaleFromCookie(): Locale {
  if (typeof window === 'undefined') return defaultLocale;
  const cookieLocale = document.cookie
    .split('; ')
    .find((row) => row.startsWith('locale='))
    ?.split('=')[1] as Locale | undefined;
  
  return (cookieLocale && locales.includes(cookieLocale)) ? cookieLocale : defaultLocale;
}

export function useLocale(): Locale {
  const [locale, setLocale] = useState<Locale>(getLocaleFromCookie);

  // Listen for cookie changes after router.refresh()
  // After refresh, the component will re-render with new cookie value
  // This effect just ensures we sync if cookie changes externally
  useEffect(() => {
    const checkCookie = () => {
      const newLocale = getLocaleFromCookie();
      if (newLocale !== locale) {
        setLocale(newLocale);
      }
    };

    // Check on mount and after a short delay (for router.refresh() to complete)
    const timeout = setTimeout(checkCookie, 100);
    
    return () => clearTimeout(timeout);
  }, []); // Only run once on mount

  return locale;
}

