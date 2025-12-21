# Security Quick Reference

**Schnellübersicht für:** Entwickler, DevOps, Security Team

---

## 📁 Dokumentations-Übersicht

| Dokument | Inhalt | Zielgruppe |
|----------|--------|------------|
| `SECURITY_ARCHITECTURE.md` | Vollständige Architektur, Flows, Interaktionen | Entwickler, Architekten |
| `SECURITY_IMPLEMENTATION_DETAILS.md` | Code-Level Details, Edge Cases, Performance | Entwickler |
| `SECURITY_AND_SECRETS.md` | Secrets Management, Environment Variables | DevOps, Entwickler |
| `SECURITY_CHECKLIST.md` | Pre/Post Launch Checklist | Alle |
| `SECURITY_IMPLEMENTATION_REPORT.md` | Was wurde implementiert | Management, Team |
| `SECURITY_QUICK_REFERENCE.md` | Diese Datei - Schnellübersicht | Alle |

---

## 🗺️ Komponenten-Übersicht

### 1. Security Headers (`next.config.ts`)
- **Was:** HTTP Security Headers für alle Requests
- **Wann:** Bei jedem Request (automatisch)
- **Konfiguration:** `CSP_MODE` Environment Variable
- **Status:** ✅ Aktiv

### 2. Rate Limiting (`middleware.ts`)
- **Was:** Begrenzt Requests pro IP+User-Agent
- **Wann:** Vor API Route Handler
- **Konfiguration:** `RATE_LIMIT_CONFIG` in Code
- **Status:** ✅ Aktiv (In-Memory)

### 3. Honeypot (`app/check/page.tsx` + API Routes)
- **Was:** Verstecktes Feld zur Bot-Erkennung
- **Wann:** In Formularen + API Route Check
- **Konfiguration:** Field Name `company_website`
- **Status:** ✅ Aktiv

### 4. Validation (`src/lib/validation.ts` + API Routes)
- **Was:** Server-seitige Input-Validierung mit Zod
- **Wann:** Nach Honeypot Check, vor Business Logic
- **Konfiguration:** Zod Schemas
- **Status:** ✅ Aktiv

### 5. Logging (`app/api/*/route.ts`)
- **Was:** Security Events Logging (minimal, keine PII)
- **Wann:** Bei Security Events
- **Konfiguration:** `logSecurityEvent()` Function
- **Status:** ✅ Aktiv (Dev: Console, Prod: TODO)

---

## 🔄 Request Flow (Kurz)

```
Browser → Middleware (Rate Limit) → Headers → API Route
                                              ↓
                                    Honeypot Check
                                              ↓
                                    Validation
                                              ↓
                                    Business Logic
                                              ↓
                                    Response
```

---

## ⚙️ Konfiguration (Schnell)

### Environment Variables

```bash
# Development (.env.local)
CSP_MODE=report-only
NODE_ENV=development

# Production (Vercel)
CSP_MODE=enforce
NODE_ENV=production
```

### Rate Limiting

```typescript
// middleware.ts
const RATE_LIMIT_CONFIG = {
  windowMs: 15 * 60 * 1000,  // 15 Minuten
  maxRequests: 10,            // 10 Requests
};
```

### CSP

```typescript
// next.config.ts
const cspMode = process.env.CSP_MODE || 'report-only';
```

---

## 🚨 Troubleshooting (Schnell)

| Problem | Lösung |
|---------|--------|
| Rate Limit zu strikt | `maxRequests` erhöhen |
| CSP blockiert Ressourcen | CSP Mode auf `report-only` setzen |
| Honeypot blockiert User | CSS prüfen (`left: -9999px`) |
| Validation zu strikt | Zod Schema Limits anpassen |
| Headers fehlen | `next.config.ts` prüfen, Build neu |

---

## 📊 Monitoring (Schnell)

### Key Metrics
- Rate Limit: 429 Responses
- Honeypot: Trigger Events
- Validation: Error Rate
- Submissions: Success Rate

### Logs
- Development: Console (`[SECURITY]` prefix)
- Production: TODO (Sentry/Logtail)

---

## 🔐 Security Features (Übersicht)

| Feature | Status | Production Ready |
|---------|--------|------------------|
| Security Headers | ✅ | ✅ |
| CSP (Report-Only) | ✅ | ⚠️ (auf enforce umstellen) |
| Rate Limiting | ✅ | ⚠️ (Redis empfohlen) |
| Honeypot | ✅ | ✅ |
| Validation | ✅ | ✅ |
| Logging | ✅ | ⚠️ (Production Service TODO) |

---

## 📞 Support

**Fragen zu:**
- **Architektur:** Siehe `SECURITY_ARCHITECTURE.md`
- **Code Details:** Siehe `SECURITY_IMPLEMENTATION_DETAILS.md`
- **Secrets:** Siehe `SECURITY_AND_SECRETS.md`
- **Checklist:** Siehe `SECURITY_CHECKLIST.md`

---

**Letzte Aktualisierung:** 2024-12-XX




