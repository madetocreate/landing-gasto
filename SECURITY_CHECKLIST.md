# Security Checklist

Diese Checkliste hilft dabei, Security vor und nach dem Launch sicherzustellen.

---

## ✅ Pre-Launch Checklist

### Security Headers
- [x] Security Headers in `next.config.ts` konfiguriert
- [x] HSTS aktiviert
- [x] X-Content-Type-Options: nosniff
- [x] X-Frame-Options: DENY
- [x] Referrer-Policy gesetzt
- [x] Permissions-Policy gesetzt
- [ ] CSP in Production auf "enforce" umstellen (aktuell: report-only)
- [ ] CSP Report-URI konfiguriert (optional, für Monitoring)

### Form Security
- [x] Rate Limiting implementiert (Middleware)
- [x] Honeypot-Felder in Formularen
- [x] Server-seitige Validation (Zod)
- [x] Input Sanitization
- [ ] Turnstile/ReCaptcha optional ergänzen (wenn nötig)
- [ ] Rate Limit in Production testen

### XSS Protection
- [x] Kein `dangerouslySetInnerHTML` gefunden
- [ ] Externe Links mit `rel="noopener noreferrer"` (prüfen)
- [ ] User-controlled Input niemals direkt in HTML
- [ ] Content Security Policy aktiv

### Dependency Security
- [x] `npm audit` Script hinzugefügt
- [ ] `npm audit` ausgeführt und kritische Issues behoben
- [ ] Dependabot/Renovate aktiviert (optional)
- [ ] Regelmäßige Dependency Updates geplant

### Secrets Management
- [x] Keine Secrets im Repository
- [x] `.env.local` in `.gitignore`
- [ ] Alle Secrets in Vercel gesetzt
- [ ] Secrets Rotation geplant
- [ ] Backup von Encryption Keys sicher aufbewahrt

### API Security
- [x] Rate Limiting auf API Routes
- [x] Validation auf allen Inputs
- [x] Error Messages ohne sensible Daten
- [ ] API Authentication (wenn nötig)
- [ ] CORS korrekt konfiguriert

### Logging & Monitoring
- [x] Minimal Logging (keine PII)
- [ ] Security Events loggen (Honeypot, Rate Limit)
- [ ] Monitoring für Anomalien (optional)
- [ ] Error Tracking (z.B. Sentry) konfiguriert

### SSL/TLS
- [ ] SSL-Zertifikat aktiv (Vercel macht das automatisch)
- [ ] HSTS Preload (optional, nach Launch)
- [ ] TLS 1.2+ erzwungen

### Content Security
- [ ] Externe Ressourcen (CDN, Fonts) in CSP whitelist
- [ ] Inline Scripts minimiert
- [ ] `unsafe-inline` aus CSP entfernt (wenn möglich)

---

## ✅ Post-Launch Checklist

### Monitoring (erste 48h)
- [ ] Security Headers prüfen (z.B. securityheaders.com)
- [ ] Rate Limiting funktioniert (keine false positives)
- [ ] Form Submissions funktionieren
- [ ] Keine CSP Violations in Console
- [ ] Logs auf Anomalien prüfen

### Ongoing
- [ ] Wöchentlich: `npm audit` ausführen
- [ ] Monatlich: Dependency Updates
- [ ] Quartal: Secrets Rotation prüfen
- [ ] Bei Incidents: Playbook befolgen

### Incident Response
- [ ] Incident Response Plan dokumentiert
- [ ] Kontakte für Security Issues bekannt
- [ ] Rollback-Plan vorhanden

---

## 🔍 Security Testing

### Manuelle Tests
- [ ] Rate Limiting testen (zu viele Requests → 429)
- [ ] Honeypot testen (ausgefüllt → silent discard)
- [ ] XSS Payloads testen (sollten escaped werden)
- [ ] SQL Injection testen (falls DB vorhanden)
- [ ] CSRF Protection (wenn Sessions)

### Tools
- [ ] `npm audit` regelmäßig
- [ ] OWASP ZAP (optional)
- [ ] Security Headers Checker
- [ ] SSL Labs Test (A+ Rating anstreben)

---

## 📋 Quick Reference

### Rate Limit Einstellungen
- **Aktuell:** 10 Requests / 15 Minuten pro IP+UA
- **Anpassen:** `middleware.ts` → `RATE_LIMIT_CONFIG`
- **Production:** Optional Redis für distributed Rate Limiting

### CSP aktivieren
1. **ENV-Variable setzen:** `CSP_MODE=enforce` in Vercel (Environment Variables)
2. **Testen:** Preview/Staging Deployment prüfen
3. **Production:** Nach erfolgreichem Test in Production deployen

**Aktueller Stand:**
- CSP ist in `next.config.ts` implementiert
- Default: `report-only` (keine Blockierung)
- Schaltbar über `CSP_MODE` ENV-Variable: `report-only` | `enforce` | `off`

### Secrets rotieren
1. Neues Secret generieren
2. In Vercel/Hetzner setzen
3. Redeploy/Service Restart
4. Altes Secret löschen

---

## 🚨 Security Incident

Bei einem Security Incident:

1. **Sofort:** Betroffene Secrets rotieren
2. **Prüfen:** Logs auf ungewöhnliche Aktivität
3. **Dokumentieren:** Was passiert ist, wann, wie
4. **Kommunizieren:** Betroffene User informieren (wenn nötig)
5. **Lernen:** Post-Mortem, wie es verhindert werden kann

---

**Letzte Aktualisierung:** 2024-12-XX
**Nächste Review:** Nach Launch + 1 Woche

