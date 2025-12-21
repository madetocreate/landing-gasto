import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Locale configuration
const locales = ['de', 'en', 'es', 'fr', 'it'] as const;
type Locale = typeof locales[number];
const defaultLocale: Locale = 'de';

// In-memory rate limit store (DEV ONLY - für Production Redis/KV verwenden)
// Format: Map<key, { count: number; resetAt: number }>
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

// Rate Limit Config
const RATE_LIMIT_CONFIG = {
  windowMs: 15 * 60 * 1000, // 15 Minuten
  maxRequests: 10, // Max 10 Requests pro Window
  cleanupIntervalMs: 60 * 1000, // Cleanup alle 60 Sekunden
};

// Cleanup alte Einträge (einfache Variante)
let lastCleanup = Date.now();
function cleanupOldEntries() {
  const now = Date.now();
  if (now - lastCleanup < RATE_LIMIT_CONFIG.cleanupIntervalMs) return;
  
  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetAt < now) {
      rateLimitStore.delete(key);
    }
  }
  lastCleanup = now;
}

// Rate Limit Key generieren (IP + User-Agent)
function getRateLimitKey(request: NextRequest): string {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
             request.headers.get('x-real-ip') || 
             'unknown';
  const ua = request.headers.get('user-agent') || 'unknown';
  return `${ip}:${ua.substring(0, 50)}`;
}

// Rate Limit Check
function checkRateLimit(key: string): { allowed: boolean; remaining: number; resetAt: number } {
  cleanupOldEntries();
  
  const now = Date.now();
  const entry = rateLimitStore.get(key);
  
  if (!entry || entry.resetAt < now) {
    // Neues Window
    const resetAt = now + RATE_LIMIT_CONFIG.windowMs;
    rateLimitStore.set(key, { count: 1, resetAt });
    return { allowed: true, remaining: RATE_LIMIT_CONFIG.maxRequests - 1, resetAt };
  }
  
  if (entry.count >= RATE_LIMIT_CONFIG.maxRequests) {
    return { allowed: false, remaining: 0, resetAt: entry.resetAt };
  }
  
  entry.count++;
  return { 
    allowed: true, 
    remaining: RATE_LIMIT_CONFIG.maxRequests - entry.count, 
    resetAt: entry.resetAt 
  };
}

// Get locale from pathname
function getLocaleFromPath(pathname: string): Locale | null {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return null;
  const firstSegment = segments[0];
  if (locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }
  return null;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip locale handling for API routes, static files, and Next.js internals
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/robots.txt') ||
    pathname.startsWith('/sitemap.xml') ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|gif|webp|woff|woff2|ttf|eot)$/)
  ) {
    // Rate limit API routes
    if (pathname.startsWith('/api/')) {
      const key = getRateLimitKey(request);
      const rateLimit = checkRateLimit(key);
      
      const response = rateLimit.allowed 
        ? NextResponse.next()
        : NextResponse.json(
            { error: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.' },
            { status: 429 }
          );
      
      // Rate Limit Headers (RFC 6585)
      response.headers.set('X-RateLimit-Limit', String(RATE_LIMIT_CONFIG.maxRequests));
      response.headers.set('X-RateLimit-Remaining', String(rateLimit.remaining));
      response.headers.set('X-RateLimit-Reset', String(Math.ceil(rateLimit.resetAt / 1000)));
      
      return response;
    }
    
    return NextResponse.next();
  }
  
  // Check if pathname already has a locale
  const pathLocale = getLocaleFromPath(pathname);
  
  if (pathLocale) {
    // Locale found in URL - rewrite to path without locale
    // Set locale as REQUEST header so Server Components can access it
    const pathWithoutLocale = '/' + pathname.split('/').slice(2).join('/');
    const url = request.nextUrl.clone();
    url.pathname = pathWithoutLocale || '/';
    
    const response = NextResponse.rewrite(url);
    
    // Set locale as REQUEST header (für Server Components via headers())
    response.headers.set('x-locale', pathLocale);
    
    // Synchronize cookie with URL locale (damit Cookie nicht gegen URL arbeitet)
    response.cookies.set('locale', pathLocale, {
      path: '/',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365, // 1 Jahr
    });
    
    return response;
  }
  
  // No locale in URL - redirect to default locale (308 permanent redirect für SEO)
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
  // Preserve query string
  const redirectResponse = NextResponse.redirect(url, 308);
  
  // Set default locale cookie
  redirectResponse.cookies.set('locale', defaultLocale, {
    path: '/',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365,
  });
  
  return redirectResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths including /api/* for rate limiting,
     * but exclude static files and Next.js internals:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, robots.txt, sitemap.xml
     * - Static assets (images, fonts, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
    '/(api|trpc)(.*)',
  ],
};

