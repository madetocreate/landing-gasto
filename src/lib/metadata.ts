import { Metadata } from 'next';
import { Locale } from './i18n';

// Base SEO Configuration
export function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://aklow.com';
}

export function getSiteName(): string {
  return 'AKLOW';
}

export function defaultOGImage(): string {
  return `${getBaseUrl()}/og.png`;
}

const defaultDescription = 'KI-Modernisierung für KMU: Starterkits, Integration & Betrieb.';

// Locale to OpenGraph locale mapping
const localeToOGLocale: Record<Locale, string> = {
  de: 'de_DE',
  en: 'en_US',
  es: 'es_ES',
  fr: 'fr_FR',
  it: 'it_IT',
};

// Locale to HTML lang mapping
export const localeToHTMLLang: Record<Locale, string> = {
  de: 'de',
  en: 'en',
  es: 'es',
  fr: 'fr',
  it: 'it',
};

export function createMetadata({
  title,
  description = defaultDescription,
  path = '/',
  locale = 'de',
  ogImage,
  noindex = false,
  nofollow = false,
}: {
  title: string;
  description?: string;
  path?: string;
  locale?: Locale;
  ogImage?: string;
  noindex?: boolean;
  nofollow?: boolean;
}): Metadata {
  const baseUrl = getBaseUrl();
  const siteName = getSiteName();
  
  // Verhindere doppelte Brand-Namen, falls der Titel schon " | AKLOW" enthält
  const fullTitle = title.includes(`| ${siteName}`) ? title : `${title} | ${siteName}`;
  
  // URL with locale prefix for hreflang
  const pathWithoutLocale = path.startsWith('/') ? path : `/${path}`;
  const url = `${baseUrl}/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
  const canonicalUrl = `${baseUrl}${pathWithoutLocale}`;
  const ogImageUrl = ogImage || defaultOGImage();

  // Hreflang: URL-basiertes Routing - alle Sprachvarianten
  const allLocales: Locale[] = ['de', 'en', 'es', 'fr', 'it'];
  const languages: Record<string, string> = {};
  allLocales.forEach((loc) => {
    languages[loc] = `${baseUrl}/${loc}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
  });

  const alternates: Metadata['alternates'] = {
    canonical: canonicalUrl,
    languages,
  };

  return {
    metadataBase: new URL(baseUrl),
    title: fullTitle,
    description,
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      type: 'website',
      locale: localeToOGLocale[locale],
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImageUrl],
    },
    alternates,
  };
}

