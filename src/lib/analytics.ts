/**
 * Analytics Utility
 * 
 * Zentrale Tracking-Funktion mit Provider-Adapter.
 * NO-OP Fallback wenn kein Provider konfiguriert ist.
 */

type AnalyticsProvider = 'vercel' | 'plausible' | 'posthog' | 'none';

interface TrackEventProperties {
  page?: string;
  source?: string;
  variant?: string;
  [key: string]: string | number | undefined;
}

/**
 * Get configured analytics provider from ENV
 */
function getProvider(): AnalyticsProvider {
  const provider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER as AnalyticsProvider;
  if (provider && ['vercel', 'plausible', 'posthog', 'none'].includes(provider)) {
    return provider;
  }
  return 'none';
}

/**
 * Track event with Vercel Web Analytics
 */
function trackVercel(eventName: string, properties?: TrackEventProperties) {
  if (typeof window === 'undefined') return;
  
  // Vercel Web Analytics is automatically enabled in Vercel
  // For custom events, we can use the Vercel Analytics API if available
  // For now, we'll use a simple console log in dev (can be extended)
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Vercel:', eventName, properties);
  }
  
  // Note: Vercel Web Analytics tracks pageviews automatically
  // Custom events would need Vercel Analytics SDK (optional)
}

/**
 * Track event with Plausible
 */
function trackPlausible(eventName: string, properties?: TrackEventProperties) {
  if (typeof window === 'undefined') return;
  
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) {
    console.warn('[Analytics] Plausible domain not configured');
    return;
  }

  // Plausible custom events
  const plausible = (window as { plausible?: (event: string, options?: { props?: Record<string, unknown> }) => void }).plausible;
  if (plausible) {
    plausible(eventName, {
      props: properties,
    });
  } else {
    // Fallback: manual event sending
    fetch('https://plausible.io/api/event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: eventName,
        url: window.location.href,
        domain,
        props: properties,
      }),
    }).catch(() => {
      // Silent fail
    });
  }
}

/**
 * Track event with PostHog
 */
function trackPostHog(eventName: string, properties?: TrackEventProperties) {
  if (typeof window === 'undefined') return;
  
  const posthog = (window as { posthog?: { capture: (event: string, props?: Record<string, unknown>) => void } }).posthog;
  if (posthog) {
    posthog.capture(eventName, properties);
  } else {
    console.warn('[Analytics] PostHog not initialized');
  }
}

/**
 * Main track function
 * 
 * Usage:
 *   track('cta_check_click', { page: '/preise', source: 'hero' })
 */
export function track(eventName: string, properties?: TrackEventProperties): void {
  if (typeof window === 'undefined') return; // Server-side: no-op
  
  const provider = getProvider();
  
  switch (provider) {
    case 'vercel':
      trackVercel(eventName, properties);
      break;
    case 'plausible':
      trackPlausible(eventName, properties);
      break;
    case 'posthog':
      trackPostHog(eventName, properties);
      break;
    case 'none':
    default:
      // NO-OP: Silent fallback, no crash
      if (process.env.NODE_ENV === 'development') {
        console.log('[Analytics] NO-OP:', eventName, properties);
      }
      break;
  }
}

/**
 * Initialize analytics provider (client-side only)
 * Call this in a client component or useEffect
 */
export function initAnalytics(): void {
  if (typeof window === 'undefined') return;
  
  const provider = getProvider();
  
  switch (provider) {
    case 'plausible': {
      const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
      if (domain) {
        // Load Plausible script
        const script = document.createElement('script');
        script.defer = true;
        script.dataset.domain = domain;
        script.src = 'https://plausible.io/js/script.js';
        document.head.appendChild(script);
      }
      break;
    }
    case 'posthog': {
      const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
      const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';
      if (key) {
        // Load PostHog script
        const win = window as { posthog?: unknown[] };
        win.posthog = win.posthog || [];
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = `
          !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return e.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
          posthog.init('${key}',{api_host:'${host}'})
        `;
        document.head.appendChild(script);
      }
      break;
    }
    case 'vercel':
    case 'none':
    default:
      // Vercel Analytics is automatic, no init needed
      // NO-OP: nothing to do
      break;
  }
}

