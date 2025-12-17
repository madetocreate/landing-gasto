import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://aklow.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/services',
    '/preise',
    '/cases',
    '/solutions/gastro',
    '/kontakt',
    '/demo', // bzw. check, falls umbenannt
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}

