import de from '@/messages/de.json';
import en from '@/messages/en.json';
import es from '@/messages/es.json';
import fr from '@/messages/fr.json';
import it from '@/messages/it.json';

export type Locale = 'de' | 'en' | 'es' | 'fr' | 'it';

export const locales: Locale[] = ['de', 'en', 'es', 'fr', 'it'];
export const defaultLocale: Locale = 'de';

export const messages = {
  de,
  en,
  es,
  fr,
  it,
} as const;

export type Messages = typeof de;

/**
 * Get nested value from object by dot-notation path
 */
function getNestedValue(obj: unknown, path: string): string | Record<string, unknown> | unknown[] | undefined {
  const result = path.split('.').reduce((current: Record<string, unknown> | undefined, key) => (current as Record<string, unknown>)?.[key] as Record<string, unknown> | undefined, obj as Record<string, unknown> | undefined);
  return result === null ? undefined : result;
}

/**
 * Simple i18n function for server components
 * Returns string, object, or array depending on the value
 */
export function t(locale: Locale, key: string, params?: Record<string, string | number>): string | Record<string, unknown> | unknown[] | undefined {
  const message = getNestedValue(messages[locale], key);
  if (message === undefined) {
    // Fallback to default locale if not already default
    if (locale !== defaultLocale) {
      const fallback = getNestedValue(messages[defaultLocale], key);
      if (fallback !== undefined && fallback !== null) {
        if (typeof fallback === 'string') {
          return replaceParams(fallback, params);
        }
        return fallback;
      }
    }
    
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Translation missing for key: ${key}`);
    }
    return undefined; // Return undefined instead of key or empty string to allow || fallback
  }
  // If it's a string, replace params
  if (typeof message === 'string') {
    return replaceParams(message, params);
  }
  return message;
}

/**
 * Replace placeholders like {year} or {company} with actual values
 */
function replaceParams(text: string, params?: Record<string, string | number>): string {
  if (!params) return text;
  return text.replace(/\{(\w+)\}/g, (match, key) => {
    return params[key]?.toString() || match;
  });
}

/**
 * Get locale from headers or default
 */
export function getLocaleFromHeaders(headers: Headers): Locale {
  const acceptLanguage = headers.get('accept-language');
  if (acceptLanguage) {
    // Simple detection: check for supported locales
    if (acceptLanguage.includes('en')) return 'en';
    if (acceptLanguage.includes('es')) return 'es';
    if (acceptLanguage.includes('fr')) return 'fr';
    if (acceptLanguage.includes('it')) return 'it';
  }
  return defaultLocale;
}

