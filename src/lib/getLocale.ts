import { headers, cookies } from 'next/headers';
import { Locale, defaultLocale, locales } from './i18n';

/**
 * Get locale from headers, cookies or default
 * Priority: 1. Request Header (x-locale from URL), 2. Cookie, 3. Accept-Language, 4. Default
 * For server components
 */
export async function getLocale(): Promise<Locale> {
  const headersList = await headers();
  
  // 1. Check Request Header first (set by middleware from URL locale)
  // This ensures URL locale (/en/...) always wins over cookie
  const localeHeader = headersList.get('x-locale');
  if (localeHeader && locales.includes(localeHeader as Locale)) {
    return localeHeader as Locale;
  }

  // 2. Check cookies (explicit user choice, but lower priority than URL)
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('locale')?.value;
  if (localeCookie && locales.includes(localeCookie as Locale)) {
    return localeCookie as Locale;
  }

  // 3. Fallback to Accept-Language
  const acceptLanguage = headersList.get('accept-language');
  if (acceptLanguage) {
    if (acceptLanguage.includes('de')) return 'de';
    if (acceptLanguage.includes('en')) return 'en';
    if (acceptLanguage.includes('es')) return 'es';
    if (acceptLanguage.includes('fr')) return 'fr';
    if (acceptLanguage.includes('it')) return 'it';
  }
  
  return defaultLocale;
}


