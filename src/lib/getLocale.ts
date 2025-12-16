import { cookies } from 'next/headers';
import { Locale, defaultLocale, locales } from './i18n';

/**
 * Get locale from cookies or default
 * For server components
 */
export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('locale')?.value;
  
  if (localeCookie && locales.includes(localeCookie as Locale)) {
    return localeCookie as Locale;
  }
  
  return defaultLocale;
}

