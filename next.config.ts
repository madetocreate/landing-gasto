import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  
  // Set workspace root to silence warning about multiple lockfiles
  turbopack: {
    root: __dirname,
  },
  
  // Security Headers
  async headers() {
    const cspMode = process.env.CSP_MODE || 'report-only'; // 'report-only' | 'enforce' | 'off'
    
    // CSP Policy (Report-Only by default in dev, can be enforced in prod via ENV)
    // unsafe-inline für styles bleibt, da Tailwind es benötigt
    // unsafe-eval entfernt (nur wenn möglich - kann bei manchen Libraries brechen)
    const cspDirectives = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'", // unsafe-eval entfernt
      "style-src 'self' 'unsafe-inline'", // Tailwind requires unsafe-inline
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "object-src 'none'", // Ergänzt: blockiert <object>, <embed>, <applet>
      "base-uri 'self'",
      "form-action 'self'",
    ];
    
    const cspHeader = cspMode === 'off' 
      ? undefined
      : cspMode === 'enforce'
        ? `Content-Security-Policy: ${cspDirectives.join('; ')}`
        : `Content-Security-Policy-Report-Only: ${cspDirectives.join('; ')}`;
    
    const headers: Array<{ key: string; value: string }> = [
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubDomains; preload',
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },
      {
        key: 'X-Frame-Options',
        value: 'DENY',
      },
      // X-XSS-Protection entfernt (veraltet, wird von modernen Browsern ignoriert)
      {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin',
      },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
      },
    ];
    
    // Add CSP header if configured
    if (cspHeader) {
      const [key, value] = cspHeader.split(': ');
      headers.push({ key, value });
    }
    
    return [
      {
        source: '/:path*',
        headers,
      },
    ];
  },
};

export default nextConfig;

