import { MetadataRoute } from 'next';
import { getBaseUrl } from '@/lib/metadata';
import { locales, type Locale } from '@/lib/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const now = new Date();

  // Zentrale Route-Liste (nur einmal gepflegt)
  const routeDefinitions: Array<{
    path: string;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority: number;
  }> = [
    // Homepage
    { path: '/', changeFrequency: 'weekly', priority: 1.0 },
    
    // Core Pages
    { path: '/preise', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/kontakt', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/ueber-uns', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/roadmap', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/status', changeFrequency: 'daily', priority: 0.6 },
    { path: '/haltung', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/check', changeFrequency: 'monthly', priority: 0.8 },
    
    // Anwendungen Hub
    { path: '/anwendungen', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/anwendungen/intelligenter-posteingang', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/anwendungen/website-telefon', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/anwendungen/dokumente-ordnung', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/anwendungen/kunden-vorgaenge', changeFrequency: 'monthly', priority: 0.8 },
    
    // Fundament Hub
    { path: '/fundament', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/fundament/dokumente-verstehen', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/fundament/gedaechtnis-kontext', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/fundament/verstehen-einordnen', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/fundament/verbinden-weitergeben', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/fundament/kontrolle-sicherheit', changeFrequency: 'monthly', priority: 0.7 },
    
    // Wissenshub
    { path: '/wissen', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/wissen/erste-schritte', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/wissen/ki-im-alltag', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/wissen/sicherheit', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/wissen/system', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/wissen/faq', changeFrequency: 'weekly', priority: 0.8 },
    
    // Weitere Seiten
    { path: '/partner', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/jobs', changeFrequency: 'monthly', priority: 0.6 },
    
    // Legal (niedrige Priorität, aber indexierbar)
    { path: '/impressum', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/datenschutz', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/cookies', changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Generiere URLs pro Route pro Locale (Locale im Pfad ist Source of Truth)
  const routes: MetadataRoute.Sitemap = [];
  
  for (const routeDef of routeDefinitions) {
    for (const locale of locales) {
      const pathWithLocale = routeDef.path === '/' 
        ? `/${locale}` 
        : `/${locale}${routeDef.path}`;
      
      routes.push({
        url: `${baseUrl}${pathWithLocale}`,
        lastModified: now,
        changeFrequency: routeDef.changeFrequency,
        priority: routeDef.priority,
      });
    }
  }

  return routes;
}

