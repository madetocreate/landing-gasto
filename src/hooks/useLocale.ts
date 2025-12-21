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

function getLocaleFromDocument(): Locale | null {
  if (typeof window === 'undefined') return null;
  const htmlLang = document.documentElement.lang;
  if (!htmlLang) return null;
  const primary = htmlLang.split('-')[0];
  if (locales.includes(primary as Locale)) {
    return primary as Locale;
  }
  return null;
}

function getLocaleFromURL(): Locale {
  if (typeof window === 'undefined') return defaultLocale;
  const pathname = window.location.pathname;
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return defaultLocale;
  const firstSegment = segments[0];
  if (locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }
  return defaultLocale;
}

function getInitialLocale(): Locale {
  // On server, always return defaultLocale
  if (typeof window === 'undefined') return defaultLocale;

  // Prefer server-rendered html lang to stay in sync with SSR
  const docLocale = getLocaleFromDocument();
  if (docLocale) return docLocale;

  // Next preference: locale in URL
  const urlLocale = getLocaleFromURL();
  if (urlLocale) return urlLocale;

  // Fallback to cookie
  return getLocaleFromCookie();
}

export function useLocale(): Locale {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  // Listen for URL and cookie changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkLocale = () => {
      // Check URL first (most reliable, matches server)
      const urlLocale = getLocaleFromURL();
      setLocale((currentLocale) => {
        if (urlLocale !== currentLocale) {
          return urlLocale;
        }
        
        // Fallback to cookie
        const cookieLocale = getLocaleFromCookie();
        if (cookieLocale !== currentLocale) {
          return cookieLocale;
        }
        
        return currentLocale;
      });
    };

    // Check on mount
    checkLocale();

    // Check periodically (less frequently to avoid infinite loops)
    const interval = setInterval(checkLocale, 2000);
    
    // Listen for popstate (back/forward navigation)
    window.addEventListener('popstate', checkLocale);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('popstate', checkLocale);
    };
  }, []) // Empty dependency array - only run on mount

  return locale;
}

