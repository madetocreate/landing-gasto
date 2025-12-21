# Monitoring & Controlling Plan

**Erstellt:** 2024-12-XX  
**Status:** Vorbereitet für Go-Live

---

## 🎯 Ziele

- Besucher/Tag messen
- Top Pages identifizieren
- Referrer-Quellen tracken (SEO/Social/Direct)
- Conversion-Events messen (CTA-Clicks)
- Performance-Metriken überwachen (CWV)

---

## 📊 KPIs & Definitionen

### Traffic-Metriken

| KPI | Definition | Ziel |
|-----|------------|------|
| **Daily Visitors** | Eindeutige Besucher pro Tag | Baseline nach Launch |
| **Pageviews** | Gesamte Seitenaufrufe | Baseline nach Launch |
| **Bounce Rate** | Ein-Seiten-Besuche / Gesamt | < 60% |
| **Avg. Session Duration** | Durchschnittliche Verweildauer | > 2 Min |

### Source Breakdown

| Quelle | Definition | Tracking |
|--------|------------|----------|
| **Organic** | Google/Bing/etc. organische Suche | Referrer + UTM |
| **Social** | Social Media (LinkedIn, Twitter, etc.) | UTM `utm_source=social` |
| **Direct** | Direkter Besuch (kein Referrer) | Referrer fehlt |
| **Referral** | Andere Websites | Referrer vorhanden |

### Conversion-Events

| Event | Definition | Ziel |
|-------|------------|------|
| **cta_check_click** | Klick auf "3-Minuten-Check" CTA | Conversion Rate: Clicks / Pageviews |
| **cta_contact_click** | Klick auf "Kontakt" CTA | Conversion Rate: Clicks / Pageviews |
| **pricing_cta_click** | Klick auf Pricing CTA | Conversion Rate: Clicks / Pageviews |
| **nav_applications_click** | Navigation zu Anwendungen | Engagement Signal |
| **nav_fundament_click** | Navigation zu Fundament | Engagement Signal |

### Performance-Metriken (CWV)

| Metrik | Definition | Ziel |
|--------|------------|------|
| **LCP** | Largest Contentful Paint | < 2.5s |
| **FID/INP** | Interaction to Next Paint | < 200ms |
| **CLS** | Cumulative Layout Shift | < 0.1 |

---

## 🛠️ Tools & Integration

### 1. Vercel Web Analytics (Native)

**Status:** ✅ Vorbereitet  
**Was wird gemessen:**
- Traffic (Visitors, Pageviews)
- Top Pages
- Referrers
- Core Web Vitals (LCP, CLS, INP)

**Setup:**
- Automatisch aktiviert in Vercel
- Keine zusätzliche Konfiguration nötig
- Dashboard: Vercel Dashboard → Analytics

**ENV-Variablen:** Keine nötig (Vercel-native)

---

### 2. Event-Tracking (Custom)

**Status:** ✅ Implementiert  
**Datei:** `src/lib/analytics.ts`

**Event-Namen (stabil, nicht ändern):**
- `cta_check_click` - 3-Minuten-Check CTA
- `cta_contact_click` - Kontakt CTA
- `pricing_cta_click` - Pricing CTA
- `nav_applications_click` - Navigation zu Anwendungen
- `nav_fundament_click` - Navigation zu Fundament

**Provider-Switch:**
- `NEXT_PUBLIC_ANALYTICS_PROVIDER` = `vercel|plausible|posthog|none`
- Default: `none` (NO-OP, keine Crashes)

---

### 3. Plausible (Optional, DSGVO-freundlich)

**Status:** 🔄 Vorbereitet (Adapter vorhanden)  
**ENV-Variablen:**
- `NEXT_PUBLIC_ANALYTICS_PROVIDER=plausible`
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=aklow.com`

**Was wird gemessen:**
- Traffic (Visitors, Pageviews)
- Referrers
- Top Pages
- Events (Custom Events)

**Setup:**
1. Plausible Account erstellen
2. Domain hinzufügen
3. ENV-Variablen in Vercel setzen
4. Redeploy

---

### 4. PostHog (Optional, für Funnels)

**Status:** 🔄 Vorbereitet (Adapter vorhanden)  
**ENV-Variablen:**
- `NEXT_PUBLIC_ANALYTICS_PROVIDER=posthog`
- `NEXT_PUBLIC_POSTHOG_KEY=phc_...`
- `NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com` (optional)

**Was wird gemessen:**
- Traffic (Visitors, Pageviews)
- Events (Custom Events)
- Funnels (später)
- Session Recordings (optional)

**Setup:**
1. PostHog Account erstellen
2. Project Key generieren
3. ENV-Variablen in Vercel setzen
4. Redeploy

---

## 📍 Wo werden ENV-Variablen gesetzt?

### Vercel (Production/Preview)

1. **Vercel Dashboard** → Project → Settings → Environment Variables
2. Variablen hinzufügen:
   - `NEXT_PUBLIC_ANALYTICS_PROVIDER` = `vercel|plausible|posthog|none`
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` = `aklow.com` (wenn Plausible)
   - `NEXT_PUBLIC_POSTHOG_KEY` = `phc_...` (wenn PostHog)
3. **Redeploy** nach dem Setzen

### Local Development

`.env.local` (nicht committen):
```bash
NEXT_PUBLIC_ANALYTICS_PROVIDER=plausible
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=aklow.com
```

---

## 📈 Dashboard-Definition

### Wöchentliches Review

**Traffic:**
- Daily Visitors (Trend)
- Top 10 Pages
- Source Breakdown (Organic/Social/Direct/Referral)

**Conversions:**
- CTA Click Rate (cta_check_click / pageviews)
- CTA Contact Rate (cta_contact_click / pageviews)
- Navigation Engagement (nav_applications_click, nav_fundament_click)

**Performance:**
- Core Web Vitals (LCP, CLS, INP)
- Page Load Times

---

## 🔍 Event-Tracking Implementation

### Event-Namen (stabil, nicht ändern)

```typescript
// Definierte Events
'cta_check_click'        // 3-Minuten-Check CTA
'cta_contact_click'      // Kontakt CTA
'pricing_cta_click'      // Pricing CTA
'nav_applications_click'  // Navigation zu Anwendungen
'nav_fundament_click'     // Navigation zu Fundament
```

### Verwendung im Code

```typescript
import { track } from '@/lib/analytics';

// Beispiel: CTA Click
<Button onClick={() => track('cta_check_click', { page: '/preise' })}>
  Zum 3-Minuten-Check
</Button>
```

### Properties (optional)

- `page` - Aktuelle Seite (z.B. `/preise`)
- `source` - Quelle (z.B. `hero`, `footer`, `cta_section`)
- `variant` - Button-Variante (z.B. `primary`, `secondary`)

---

## 🚀 Go-Live Checklist

### Pre-Launch
- [x] Analytics Utility implementiert (`src/lib/analytics.ts`)
- [x] Event-Tracking an CTAs gehooked
- [x] Provider-Adapter vorbereitet (Plausible, PostHog)
- [x] NO-OP Fallback (kein Crash ohne Provider)

### Post-Launch (erste 48h)
- [ ] Vercel Analytics aktiviert (automatisch)
- [ ] ENV-Variablen in Vercel gesetzt (wenn Plausible/PostHog)
- [ ] Events testen (Browser DevTools → Network)
- [ ] Dashboard prüfen (Vercel Analytics)
- [ ] Conversion-Events validieren

### Ongoing
- [ ] Wöchentlich: Dashboard Review
- [ ] Monatlich: Conversion-Rate Analyse
- [ ] Quartal: Provider-Evaluation (Vercel vs. Plausible vs. PostHog)

---

## 📝 Notizen

### Aktueller Stand
- ✅ Event-Tracking Utility implementiert
- ✅ Provider-Adapter vorbereitet (Plausible, PostHog)
- ✅ NO-OP Fallback (kein Crash ohne Provider)
- ✅ Events an wichtigsten CTAs gehooked

### Nächste Schritte
1. Nach Launch: Vercel Analytics prüfen
2. Optional: Plausible aktivieren (DSGVO-freundlich)
3. Optional: PostHog aktivieren (wenn Funnels gewünscht)

---

**Letzte Aktualisierung:** 2024-12-XX  
**Verantwortlich:** Development Team

