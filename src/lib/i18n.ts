import de from '@/messages/de.json';
import en from '@/messages/en.json';
import es from '@/messages/es.json';

export type Locale = 'de' | 'en' | 'es';

export const locales: Locale[] = ['de', 'en', 'es'];
export const defaultLocale: Locale = 'de';

export const messages = {
  de,
  en,
  es,
} as const;

export type Messages = typeof de;

/**
 * Get nested value from object by dot-notation path
 */
function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

/**
 * Simple i18n function for server components
 * Returns string, object, or array depending on the value
 */
export function t(locale: Locale, key: string, params?: Record<string, string | number>): any {
  const message = getNestedValue(messages[locale], key);
  if (message === undefined) {
    // Fallback to default locale
    const fallback = getNestedValue(messages[defaultLocale], key);
    if (fallback === undefined) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    // If it's a string, replace params
    if (typeof fallback === 'string') {
      return replaceParams(fallback, params);
    }
    return fallback;
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
    // Simple detection: check for en or es
    if (acceptLanguage.includes('en')) return 'en';
    if (acceptLanguage.includes('es')) return 'es';
  }
  return defaultLocale;
}

