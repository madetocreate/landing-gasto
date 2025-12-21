# Security Architecture & Implementation Documentation

**Version:** 1.0  
**Datum:** 2024-12-XX  
**Status:** Production Ready (ohne Keys)

---

## 📋 Inhaltsverzeichnis

1. [Architektur-Übersicht](#architektur-übersicht)
2. [Security Headers System](#security-headers-system)
3. [Rate Limiting System](#rate-limiting-system)
4. [Form Security System](#form-security-system)
5. [Validation System](#validation-system)
6. [Logging & Monitoring](#logging--monitoring)
7. [Komponenten-Interaktionen](#komponenten-interaktionen)
8. [Request Flow Diagramm](#request-flow-diagramm)
9. [Konfiguration & Environment](#konfiguration--environment)
10. [Troubleshooting](#troubleshooting)

---

## 🏗️ Architektur-Übersicht

### Komponenten-Hierarchie

```
┌─────────────────────────────────────────────────────────┐
│                    Client (Browser)                      │
│  - Formulare (Check, Contact)                           │
│  - Honeypot Fields (versteckt)                          │
└────────────────────┬────────────────────────────────────┘
                     │ HTTP Request
                     ▼
┌─────────────────────────────────────────────────────────┐
│              Next.js Middleware Layer                    │
│  - Rate Limiting (IP + User-Agent)                      │
│  - Request Filtering                                    │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│              Next.js Headers Layer                       │
│  - Security Headers (next.config.ts)                    │
│  - CSP (Content Security Policy)                        │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│              API Route Handler                           │
│  - Honeypot Check                                        │
│  - Zod Validation                                        │
│  - Business Logic                                        │
│  - Security Logging                                      │
└─────────────────────────────────────────────────────────┘
```

### Datei-Struktur

```
landingpage/
├── next.config.ts              # Security Headers + CSP Config
├── middleware.ts                # Rate Limiting Middleware
├── app/
│   ├── api/
│   │   ├── check/
│   │   │   └── route.ts        # Check Form API (gesichert)
│   │   └── contact/
│   │       └── route.ts        # Contact Form API (gesichert)
│   └── check/
│       └── page.tsx            # Check Form (mit Honeypot)
├── src/
│   └── lib/
│       └── validation.ts       # Zod Schemas
└── SECURITY_*.md               # Dokumentation
```

---

## 🔒 Security Headers System

### Implementierung: `next.config.ts`

#### Konfiguration

```typescript
async headers() {
  // 1. Environment Detection
  const isDev = process.env.NODE_ENV === 'development';
  const cspMode = process.env.CSP_MODE || 'report-only';
  
  // 2. CSP Policy Building
  const cspDirectives = [...];
  
  // 3. Header Assembly
  const headers = [...];
  
  // 4. Return für alle Routes
  return [{ source: '/:path*', headers }];
}
```

#### Header-Details

| Header | Wert | Zweck | Warum wichtig |
|--------|------|-------|---------------|
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` | Erzwingt HTTPS | Verhindert Downgrade-Angriffe |
| `X-Content-Type-Options` | `nosniff` | Verhindert MIME-Sniffing | Blockiert XSS via Content-Type |
| `X-Frame-Options` | `DENY` | Verhindert Clickjacking | Keine iframe-Einbettung |
| `X-XSS-Protection` | `1; mode=block` | Legacy XSS Protection | Browser-interne XSS-Filter |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Kontrolliert Referrer | Datenschutz + Security |
| `Permissions-Policy` | `camera=(), microphone=(), ...` | Blockiert Features | Verhindert ungewollte Zugriffe |

#### CSP (Content Security Policy)

**Aktueller Status:** Report-Only (default)

**Directives:**
```typescript
[
  "default-src 'self'",                    // Standard: nur eigene Domain
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",  // ⚠️ TODO: unsafe-* entfernen
  "style-src 'self' 'unsafe-inline'",      // Tailwind benötigt unsafe-inline
  "img-src 'self' data: https:",           // Bilder: eigene + externe
  "font-src 'self' data:",                 // Fonts: eigene + data URIs
  "connect-src 'self'",                    // AJAX: nur eigene Domain
  "frame-ancestors 'none'",                // Keine iframe-Einbettung
  "base-uri 'self'",                       // <base> Tag: nur eigene Domain
  "form-action 'self'",                     // Formulare: nur eigene Domain
]
```

**Aktivierung:**
1. **Report-Only → Enforce:**
   ```bash
   # In Vercel Environment Variables:
   CSP_MODE=enforce
   ```

2. **CSP Reports (optional):**
   - Report-URI hinzufügen für Monitoring
   - Beispiel: `report-uri /api/csp-report`

**Warum Report-Only zuerst?**
- Entwickelt ohne CSP-Blockierung
- Identifiziert Probleme vor Production
- Keine Breaking Changes für User

---

## ⏱️ Rate Limiting System

### Implementierung: `middleware.ts`

#### Architektur

```
Request → Middleware → Rate Limit Check → Allow/Deny
                      ↓
                 In-Memory Store
                 (Map<key, {count, resetAt}>)
```

#### Key-Generierung

```typescript
function getRateLimitKey(request: NextRequest): string {
  const ip = request.ip || 
             request.headers.get('x-forwarded-for')?.split(',')[0] || 
             request.headers.get('x-real-ip') || 
             'unknown';
  const ua = request.headers.get('user-agent') || 'unknown';
  return `${ip}:${ua.substring(0, 50)}`;
}
```

**Warum IP + User-Agent?**
- IP allein: Shared IPs (Corporate, VPN) → false positives
- User-Agent: Zusätzliche Granularität
- Kombination: Bessere Unterscheidung

#### Rate Limit Config

```typescript
const RATE_LIMIT_CONFIG = {
  windowMs: 15 * 60 * 1000,      // 15 Minuten Window
  maxRequests: 10,                // Max 10 Requests
  cleanupIntervalMs: 60 * 1000,  // Cleanup alle 60 Sekunden
};
```

**Warum diese Werte?**
- **15 Minuten:** Balance zwischen Security und UX
- **10 Requests:** Genug für normale Nutzung, zu wenig für Spam
- **Cleanup:** Verhindert Memory Leaks

#### Rate Limit Logic

```typescript
function checkRateLimit(key: string): {
  allowed: boolean;
  remaining: number;
  resetAt: number;
} {
  // 1. Cleanup alte Einträge
  cleanupOldEntries();
  
  // 2. Hole oder erstelle Entry
  const entry = rateLimitStore.get(key);
  
  // 3. Prüfe ob Window abgelaufen
  if (!entry || entry.resetAt < now) {
    // Neues Window starten
    return { allowed: true, remaining: 9, resetAt: now + windowMs };
  }
  
  // 4. Prüfe ob Limit erreicht
  if (entry.count >= maxRequests) {
    return { allowed: false, remaining: 0, resetAt: entry.resetAt };
  }
  
  // 5. Increment und erlauben
  entry.count++;
  return { allowed: true, remaining: maxRequests - entry.count, resetAt: entry.resetAt };
}
```

#### Response Headers

```typescript
response.headers.set('X-RateLimit-Limit', '10');
response.headers.set('X-RateLimit-Remaining', '5');
response.headers.set('X-RateLimit-Reset', '1703123456');
```

**RFC 6585 Compliance:** Standardisierte Headers für Rate Limiting

#### Cleanup Logic

```typescript
function cleanupOldEntries() {
  const now = Date.now();
  if (now - lastCleanup < cleanupIntervalMs) return; // Throttle
  
  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetAt < now) {
      rateLimitStore.delete(key); // Window abgelaufen → löschen
    }
  }
  lastCleanup = now;
}
```

**Warum Cleanup?**
- Verhindert Memory Leaks
- Hält Store klein
- Throttled (nicht bei jedem Request)

#### Production Considerations

**Aktuell:** In-Memory Store (nur für dev/test)

**Production Optionen:**
1. **Redis:** Distributed Rate Limiting
   ```typescript
   // Beispiel (nicht implementiert):
   const redis = new Redis(process.env.REDIS_URL);
   const count = await redis.incr(key);
   if (count === 1) await redis.expire(key, windowSeconds);
   ```

2. **Vercel Edge Config:** Für Vercel Deployments

3. **Upstash Redis:** Serverless Redis

**Migration Path:**
- Aktuell: In-Memory (funktioniert für Single-Instance)
- Später: Redis bei Multi-Instance oder hohem Traffic

---

## 🛡️ Form Security System

### Honeypot Mechanismus

#### Implementierung

**Client-Side (`app/check/page.tsx`):**
```tsx
<input
  type="text"
  name="company_website"  // Honeypot Field
  tabIndex={-1}            // Nicht tabbar
  autoComplete="off"       // Kein Autocomplete
  aria-hidden="true"       // Screen Reader ignorieren
  style={{ 
    position: 'absolute', 
    left: '-9999px',       // Unsichtbar
    width: '1px', 
    height: '1px', 
    opacity: 0, 
    pointerEvents: 'none'  // Keine Interaktion
  }}
/>
```

**Server-Side (`app/api/check/route.ts`):**
```typescript
// Honeypot Check (silent discard)
if (data.company_website && data.company_website.length > 0) {
  logSecurityEvent({ type: 'honeypot_trigger', ... });
  return new NextResponse(null, { status: 204 }); // Silent discard
}
```

#### Warum funktioniert das?

1. **Normale User:**
   - Sehen das Feld nicht (CSS: `left: -9999px`)
   - Füllen es nicht aus
   - Request kommt ohne `company_website` an

2. **Bots:**
   - Scannen alle `<input>` Felder
   - Füllen auch versteckte Felder aus
   - Request kommt mit `company_website` an → **Blockiert**

3. **Screen Reader:**
   - `aria-hidden="true"` → Ignoriert
   - `tabIndex={-1}` → Nicht tabbar

#### Silent Discard

**Warum 204 (No Content) statt 400/403?**
- Bots sehen keinen Unterschied zu erfolgreicher Anfrage
- Bots versuchen nicht, das Honeypot zu umgehen
- Normale User werden nicht beeinträchtigt

**Alternative (nicht implementiert):**
- 200 OK mit Fake Success Message
- Bots denken, es hat funktioniert

---

## ✅ Validation System

### Zod Schemas (`src/lib/validation.ts`)

#### Check Form Schema

```typescript
export const checkFormSchema = z.object({
  name: z.string()
    .min(2, 'Name muss mindestens 2 Zeichen lang sein')
    .max(100),
  
  email: z.string()
    .email('Ungültige E-Mail-Adresse')
    .max(255),
  
  company: z.string()
    .min(1, 'Firma ist erforderlich')
    .max(200),
  
  website: z.string()
    .url('Ungültige URL')
    .max(500)
    .optional()
    .or(z.literal('')),  // Leerer String erlaubt
  
  challenge: z.string()
    .max(2000)
    .optional(),
  
  // Honeypot: Muss leer sein
  company_website: z.string()
    .max(0)  // Max 0 Zeichen = muss leer sein
    .optional(),
});
```

#### Validation Flow

```typescript
// 1. Parse Request Body
const data = await request.json();

// 2. Safe Parse (wirft keine Exception)
const validationResult = checkFormSchema.safeParse(data);

// 3. Check Result
if (!validationResult.success) {
  // 4. Return Validation Errors (ohne sensible Daten)
  return NextResponse.json({
    error: 'Validierungsfehler',
    details: validationResult.error.errors.map(e => ({
      field: e.path.join('.'),
      message: e.message,
    })),
  }, { status: 400 });
}

// 5. Validated Data verwenden
const validData = validationResult.data;
```

#### Warum Zod?

1. **Type Safety:** TypeScript Types automatisch generiert
2. **Runtime Validation:** Funktioniert auch bei untypisierten Inputs
3. **Error Messages:** Strukturierte Fehlermeldungen
4. **Composable:** Schemas können kombiniert werden

#### Error Handling

**Was wird zurückgegeben?**
```json
{
  "error": "Validierungsfehler",
  "details": [
    {
      "field": "email",
      "message": "Ungültige E-Mail-Adresse"
    }
  ]
}
```

**Was wird NICHT zurückgegeben?**
- ❌ Stack Traces
- ❌ Interne Fehlermeldungen
- ❌ Sensible Daten
- ❌ System-Informationen

---

## 📊 Logging & Monitoring

### Security Event Types

```typescript
interface SecurityLog {
  type: 'form_submission' | 'honeypot_trigger' | 'validation_error' | 'rate_limit';
  timestamp: string;
  path: string;
  ip?: string;
  userAgent?: string;
}
```

### Logging Logic

```typescript
function logSecurityEvent(event: SecurityLog) {
  // In production: send to logging service (z.B. Sentry, Logtail)
  // Hier nur console für dev
  if (process.env.NODE_ENV === 'development') {
    console.log('[SECURITY]', JSON.stringify(event));
  }
}
```

#### Was wird geloggt?

| Event Type | Wann | Was wird geloggt | Was NICHT |
|------------|------|------------------|-----------|
| `form_submission` | Erfolgreiche Form-Submission | Path, Timestamp | Keine PII (Name, Email, etc.) |
| `honeypot_trigger` | Bot erkannt | Path, IP, User-Agent | Keine Form-Daten |
| `validation_error` | Validation fehlgeschlagen | Path, Timestamp | Keine Input-Daten |
| `rate_limit` | Rate Limit überschritten | Path, IP, User-Agent | Keine Request-Daten |

#### Production Logging (TODO)

**Optionen:**
1. **Sentry:** Error Tracking + Security Events
2. **Logtail:** Structured Logging
3. **Vercel Logs:** Built-in für Vercel Deployments
4. **Custom Endpoint:** `/api/logs` für Security Events

**Beispiel (nicht implementiert):**
```typescript
if (process.env.NODE_ENV === 'production') {
  await fetch('https://logs.example.com/security', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event),
  });
}
```

---

## 🔄 Komponenten-Interaktionen

### Request Flow: Form Submission

```
┌─────────────────────────────────────────────────────────┐
│ 1. User füllt Formular aus (Client)                     │
│    - Normale Felder: name, email, company              │
│    - Honeypot: company_website (leer, versteckt)        │
└────────────────────┬────────────────────────────────────┘
                     │ POST /api/check
                     ▼
┌─────────────────────────────────────────────────────────┐
│ 2. Middleware (middleware.ts)                          │
│    - Rate Limit Check                                   │
│    - Key: IP + User-Agent                               │
│    - Store: In-Memory Map                               │
│    - Response: 429 wenn Limit erreicht                  │
└────────────────────┬────────────────────────────────────┘
                     │ (wenn allowed)
                     ▼
┌─────────────────────────────────────────────────────────┐
│ 3. Security Headers (next.config.ts)                   │
│    - Alle Security Headers werden gesetzt               │
│    - CSP Header (Report-Only oder Enforce)              │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│ 4. API Route Handler (app/api/check/route.ts)          │
│    a) Parse Request Body                                │
│    b) Honeypot Check → 204 wenn gefüllt                 │
│    c) Zod Validation → 400 wenn ungültig                │
│    d) Security Logging                                  │
│    e) Business Logic (Email/CRM Integration)           │
│    f) Return 200 OK                                     │
└─────────────────────────────────────────────────────────┘
```

### Interaktion: Rate Limiting ↔ Validation

**Szenario 1: Rate Limit erreicht**
```
Request → Middleware → Rate Limit Check → 429 (Stop)
                                    ↓
                            Keine Validation
                            Keine Business Logic
```

**Szenario 2: Rate Limit OK, Validation fehlgeschlagen**
```
Request → Middleware → Rate Limit OK → API Route
                                    ↓
                            Validation → 400 (Stop)
                                    ↓
                            Keine Business Logic
```

**Szenario 3: Alles OK**
```
Request → Middleware → Rate Limit OK → API Route
                                    ↓
                            Validation OK → Business Logic
                                    ↓
                            200 OK Response
```

### Interaktion: Honeypot ↔ Validation

**Normale User:**
```
Form → company_website leer → Validation prüft company_website.max(0) → OK
```

**Bot:**
```
Form → company_website gefüllt → Honeypot Check → 204 (Stop)
                                              ↓
                                    Validation wird nicht ausgeführt
```

**Warum Honeypot VOR Validation?**
- Performance: Weniger Processing für Bots
- Security: Bot sieht keine Validation Errors
- Logging: Honeypot Events werden separat geloggt

---

## 📈 Request Flow Diagramm

### Vollständiger Flow

```
┌──────────────┐
│   Browser    │
│  (Client)    │
└──────┬───────┘
       │
       │ 1. POST /api/check
       │    { name, email, company, company_website: "" }
       │
       ▼
┌─────────────────────────────────────┐
│   Next.js Middleware                │
│   (middleware.ts)                   │
│                                     │
│   - Matcher: /api/:path*            │
│   - Rate Limit Key: IP + UA         │
│   - Check: count < maxRequests?    │
└──────┬──────────────────────────────┘
       │
       │ 2a. Rate Limit OK?
       │     ┌─── YES ───┐
       │     │           │
       │     ▼           ▼ NO
       │  Continue    429 Too Many Requests
       │     │           │
       │     │           └───► Client
       │     │
       ▼     │
┌─────────────────────────────────────┐
│   Next.js Headers                    │
│   (next.config.ts)                   │
│                                     │
│   - Security Headers setzen          │
│   - CSP Header setzen                │
└──────┬──────────────────────────────┘
       │
       │ 3. Headers gesetzt
       │
       ▼
┌─────────────────────────────────────┐
│   API Route Handler                 │
│   (app/api/check/route.ts)          │
│                                     │
│   4. Parse JSON Body                │
│      const data = await request.json()
│                                     │
│   5. Honeypot Check                 │
│      if (data.company_website)      │
│        → 204 No Content (Stop)      │
│                                     │
│   6. Zod Validation                 │
│      checkFormSchema.safeParse(data)│
│      if (!success)                  │
│        → 400 Bad Request (Stop)     │
│                                     │
│   7. Security Logging               │
│      logSecurityEvent({             │
│        type: 'form_submission'      │
│      })                             │
│                                     │
│   8. Business Logic                 │
│      - Email/CRM Integration        │
│      - (TODO: wenn Keys vorhanden)  │
│                                     │
│   9. Return 200 OK                  │
│      { success: true }              │
└──────┬──────────────────────────────┘
       │
       │ 10. Response
       │
       ▼
┌──────────────┐
│   Browser    │
│  (Client)    │
└──────────────┘
```

### Error Flows

**Flow A: Rate Limit Exceeded**
```
Browser → Middleware → 429 (Rate Limit Headers) → Browser
```

**Flow B: Honeypot Triggered**
```
Browser → Middleware → API Route → Honeypot Check → 204 → Browser
                                                      ↓
                                              Security Log
```

**Flow C: Validation Failed**
```
Browser → Middleware → API Route → Validation → 400 (Error Details) → Browser
                                                      ↓
                                              Security Log
```

**Flow D: Server Error**
```
Browser → Middleware → API Route → Error → 500 (Generic Message) → Browser
                                                      ↓
                                              Kein Logging (Sensible Daten)
```

---

## ⚙️ Konfiguration & Environment

### Environment Variables

#### Development (.env.local)

```bash
# Public Config
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Security Config
CSP_MODE=report-only  # oder 'enforce' oder 'off'
NODE_ENV=development

# Secrets (NICHT committen!)
# OPENAI_API_KEY=sk-...
# SENDGRID_API_KEY=SG....
```

#### Production (Vercel)

**Environment Variables:**
- `NEXT_PUBLIC_BASE_URL`: `https://aklow.com`
- `CSP_MODE`: `enforce` (nach Testing)
- `NODE_ENV`: `production`

**Secrets:**
- `OPENAI_API_KEY`: (wenn benötigt)
- `SENDGRID_API_KEY`: (wenn benötigt)

### Konfiguration Points

#### 1. Rate Limiting (`middleware.ts`)

```typescript
const RATE_LIMIT_CONFIG = {
  windowMs: 15 * 60 * 1000,      // Anpassbar
  maxRequests: 10,                // Anpassbar
  cleanupIntervalMs: 60 * 1000,   // Anpassbar
};
```

**Anpassung:**
- Mehr Requests: `maxRequests: 20`
- Längeres Window: `windowMs: 30 * 60 * 1000`
- Häufigeres Cleanup: `cleanupIntervalMs: 30 * 1000`

#### 2. CSP (`next.config.ts`)

```typescript
const cspMode = process.env.CSP_MODE || 'report-only';
```

**Modes:**
- `report-only`: CSP wird nur gemeldet, nicht blockiert
- `enforce`: CSP wird durchgesetzt
- `off`: CSP wird nicht gesetzt

#### 3. Validation (`src/lib/validation.ts`)

**Anpassung der Limits:**
```typescript
name: z.string().min(2).max(100),  // Min/Max anpassbar
email: z.string().email().max(255), // Max anpassbar
```

---

## 🔧 Troubleshooting

### Problem: Rate Limit zu strikt

**Symptom:** Legitime User bekommen 429

**Lösung:**
1. `maxRequests` erhöhen (z.B. 10 → 20)
2. `windowMs` verlängern (z.B. 15min → 30min)
3. IP-basiertes Rate Limiting prüfen (Shared IPs?)

**Debug:**
```typescript
// In middleware.ts temporär hinzufügen:
console.log('Rate Limit:', { key, count: entry.count, remaining });
```

### Problem: CSP blockiert legitime Ressourcen

**Symptom:** Console zeigt CSP Violations

**Lösung:**
1. CSP Mode auf `report-only` setzen
2. Violations in Console prüfen
3. CSP Directives anpassen:
   ```typescript
   "img-src 'self' data: https: https://cdn.example.com",  // CDN hinzufügen
   "script-src 'self' 'unsafe-inline' https://analytics.example.com",  // Analytics
   ```

### Problem: Honeypot blockiert normale User

**Symptom:** Normale User bekommen 204 (keine Response)

**Ursache:** Honeypot Field wird sichtbar (CSS Fehler?)

**Lösung:**
1. CSS prüfen: `left: -9999px` korrekt?
2. `aria-hidden="true"` vorhanden?
3. `tabIndex={-1}` vorhanden?

**Debug:**
```typescript
// In route.ts temporär hinzufügen:
console.log('Honeypot value:', data.company_website);
```

### Problem: Validation zu strikt

**Symptom:** Gültige Daten werden abgelehnt

**Lösung:**
1. Zod Schema Limits prüfen
2. Error Messages lesen
3. Schema anpassen:
   ```typescript
   name: z.string().min(1).max(200),  // Max erhöhen
   ```

### Problem: Security Headers fehlen

**Symptom:** Headers werden nicht gesetzt

**Lösung:**
1. `next.config.ts` prüfen
2. Next.js Version prüfen (16+)
3. Build neu starten: `npm run build`
4. Headers testen: `curl -I https://aklow.com`

### Problem: Memory Leak (Rate Limiting)

**Symptom:** Server wird langsam nach langer Laufzeit

**Ursache:** Rate Limit Store wächst unbegrenzt

**Lösung:**
1. Cleanup Logic prüfen
2. `cleanupIntervalMs` verkürzen
3. Redis für Production verwenden

---

## 📚 Weiterführende Informationen

### Security Best Practices

1. **Defense in Depth:** Mehrere Security Layers
2. **Fail Secure:** Bei Fehlern sicher sein
3. **Least Privilege:** Minimal notwendige Rechte
4. **Security by Design:** Security von Anfang an

### Referenzen

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security Headers](https://nextjs.org/docs/app/api-reference/next-config-js/headers)
- [CSP Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [RFC 6585 (Rate Limiting)](https://tools.ietf.org/html/rfc6585)
- [Zod Documentation](https://zod.dev/)

---

## 🔄 Update History

| Version | Datum | Änderungen |
|---------|-------|------------|
| 1.0 | 2024-12-XX | Initiale Dokumentation |

---

**Letzte Aktualisierung:** 2024-12-XX  
**Verantwortlich:** Development Team  
**Status:** ✅ Production Ready




