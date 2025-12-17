import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://aklow.com';
const siteName = 'AKLOW';
const defaultDescription = 'KI-Modernisierung für KMU: Starterkits, Integration & Betrieb.';

export function createMetadata({
  title,
  description = defaultDescription,
  path = '/',
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  // Verhindere doppelte Brand-Namen, falls der Titel schon " | AKLOW" enthält
  const fullTitle = title.includes(`| ${siteName}`) ? title : `${title} | ${siteName}`;
  const url = `${baseUrl}${path}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      type: 'website',
      locale: 'de_DE',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

