# Performance Checklist

**Erstellt:** 2024-12-XX  
**Ziel:** Core Web Vitals optimieren, Lighthouse Scores verbessern

---

## 📊 Core Web Vitals (CWV) Ziele

### LCP (Largest Contentful Paint)
- **Ziel:** < 2.5s
- **Aktuell:** Zu messen nach Go-Live
- **Optimierungen:**
  - Hero Images: `next/image` mit `priority`
  - Fonts: Preload kritische Fonts
  - Keine großen Videos ohne Poster

### FID / INP (Interaction to Next Paint)
- **Ziel:** < 200ms
- **Aktuell:** Zu messen nach Go-Live
- **Optimierungen:**
  - JavaScript Bundle Size minimieren
  - Code Splitting (automatisch via Next.js)
  - Lazy Loading für nicht-kritische Komponenten

### CLS (Cumulative Layout Shift)
- **Ziel:** < 0.1
- **Aktuell:** Zu messen nach Go-Live
- **Optimierungen:**
  - Fixed Aspect Ratios für Bilder/Media
  - Fonts: `font-display: swap` oder Preload
  - Keine dynamischen Inhalte ohne Platzhalter

---

## 🖼️ Image Guidelines

### Formate
- **Primär:** WebP (bessere Kompression)
- **Fallback:** JPG/PNG
- **Zukunft:** AVIF (wenn Browser-Support besser)

### Größen-Limits
- **Hero Images:** Max 1920px Breite, ~200KB komprimiert
- **Content Images:** Max 1200px Breite, ~100KB komprimiert
- **Thumbnails:** Max 400px Breite, ~50KB komprimiert
- **Icons:** SVG bevorzugt, oder PNG mit max 2KB

### Next.js Image Component
```tsx
// ✅ RICHTIG
<Image
  src="/hero.jpg"
  alt="Beschreibung"
  width={1920}
  height={1080}
  priority // für Hero/Above-the-fold
  placeholder="blur" // wenn blurDataURL vorhanden
/>

// ✅ LAZY LOADING (default)
<Image
  src="/content.jpg"
  alt="Beschreibung"
  width={1200}
  height={800}
  loading="lazy" // default, explizit setzen für Klarheit
/>
```

### Aspect Ratios
- **Hero:** 16:9 oder 21:9
- **Content:** 16:9 oder 4:3
- **Cards:** 4:3 oder 1:1
- **Thumbnails:** 1:1

**Wichtig:** Immer `width` und `height` setzen, um CLS zu vermeiden!

---

## 🎥 Video Guidelines

### Formate
- **Primär:** MP4 (H.264)
- **Fallback:** WebM (wenn verfügbar)
- **Poster:** JPG/WebP, max 1920px, ~100KB

### Best Practices
```tsx
// ✅ RICHTIG
<video
  poster="/video-poster.jpg"
  preload="metadata" // nicht "auto"!
  playsInline
  muted
>
  <source src="/video.mp4" type="video/mp4" />
</video>
```

### Regeln
- **Poster Image:** IMMER vorhanden (für LCP)
- **Preload:** Nur `metadata`, nie `auto`
- **Autoplay:** Nur wenn muted + playsInline
- **Lazy Loading:** Für Videos unterhalb des Folds

---

## 🔤 Font Guidelines

### Font Loading
```css
/* ✅ RICHTIG - font-display: swap */
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom.woff2') format('woff2');
  font-display: swap; /* verhindert FOIT */
}
```

### Preload kritischer Fonts
```tsx
// In layout.tsx <head>
<link
  rel="preload"
  href="/fonts/custom.woff2"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>
```

### Font Subsetting
- Nur benötigte Zeichen laden (z.B. Latin + Umlaute)
- Tools: `fonttools subset` oder Online-Tools

---

## 📦 JavaScript Bundle Size

### Ziele
- **Initial Bundle:** < 200KB (gzipped)
- **Total Bundle:** < 500KB (gzipped)

### Optimierungen
- **Code Splitting:** Automatisch via Next.js App Router
- **Dynamic Imports:** Für große Komponenten
  ```tsx
  const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
    loading: () => <Skeleton />,
    ssr: false, // nur wenn nicht SSR-kritisch
  });
  ```
- **Tree Shaking:** Automatisch via Next.js
- **Externe Libraries:** Nur nötige importieren

---

## 🎨 CSS Performance

### Best Practices
- **Tailwind:** PurgeCSS automatisch aktiv
- **Critical CSS:** Next.js optimiert automatisch
- **Keine großen CSS-in-JS:** Tailwind bevorzugt

### Animation Performance
- **Transform/Opacity:** GPU-beschleunigt
- **Will-change:** Sparsam verwenden
- **Reduced Motion:** Respektieren (`prefers-reduced-motion`)

---

## 🔍 Lighthouse Audit (Lokal)

### Vor Go-Live
```bash
# Lighthouse lokal ausführen
npx lighthouse http://localhost:3000 --view

# Oder via Chrome DevTools
# F12 → Lighthouse Tab → Generate Report
```

### Ziel-Scores
- **Performance:** > 90
- **Accessibility:** > 95
- **Best Practices:** > 95
- **SEO:** > 95

### Häufige Issues
1. **Unused JavaScript:** Code Splitting prüfen
2. **Large Images:** Komprimierung prüfen
3. **Render-blocking Resources:** Fonts/JS optimieren
4. **Third-party Scripts:** Lazy Load Analytics

---

## 📱 Mobile Performance

### Viewport
```tsx
// In layout.tsx
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

### Touch Targets
- **Min Size:** 44x44px (iOS) / 48x48px (Android)
- **Spacing:** Mindestens 8px zwischen Buttons

### Mobile-Specific
- **Images:** Responsive Sizes (`srcset`)
- **Fonts:** Kleinere Font-Sizes auf Mobile
- **Animations:** Reduziert auf Mobile (Battery)

---

## 🚀 Preload / Prefetch

### Kritische Ressourcen
```tsx
// In layout.tsx <head>
<link rel="preload" href="/fonts/critical.woff2" as="font" crossOrigin="anonymous" />
<link rel="preload" href="/hero.jpg" as="image" />
```

### Prefetch für Navigation
```tsx
// Next.js macht das automatisch für <Link>
<Link href="/preise" prefetch={true}>Preise</Link>
```

---

## 📊 Monitoring (Post-Launch)

### Tools
- **Google PageSpeed Insights:** Regelmäßig prüfen
- **WebPageTest:** Detaillierte Analyse
- **Chrome DevTools:** Performance Tab
- **Vercel Analytics:** Core Web Vitals (wenn aktiviert)

### Metriken tracken
- LCP, FID/INP, CLS
- Time to First Byte (TTFB)
- First Contentful Paint (FCP)
- Total Blocking Time (TBT)

---

## ✅ Pre-Launch Checklist

- [ ] Alle Hero Images mit `next/image` + `priority`
- [ ] Alle Bilder mit `width` + `height` (CLS vermeiden)
- [ ] Videos mit Poster Images
- [ ] Fonts mit `font-display: swap`
- [ ] Kritische Fonts preloaden
- [ ] Lighthouse Score > 90 (Performance)
- [ ] Mobile Performance getestet
- [ ] Bundle Size geprüft (< 500KB gzipped)

---

## ✅ Post-Launch Checklist

- [ ] Core Web Vitals in Search Console prüfen
- [ ] PageSpeed Insights Score > 90
- [ ] Real User Monitoring (RUM) einrichten
- [ ] Performance Budget definieren
- [ ] Regelmäßige Audits (monatlich)

---

## 🔧 Quick Wins

1. **Bilder komprimieren:** TinyPNG, Squoosh
2. **Fonts subsetten:** Nur benötigte Zeichen
3. **Lazy Load:** Nicht-kritische Komponenten
4. **Code Splitting:** Dynamic Imports für große Komponenten
5. **CDN:** Statische Assets über CDN (Vercel macht das automatisch)

---

**Letzte Aktualisierung:** 2024-12-XX  
**Nächste Review:** Nach Go-Live + 1 Woche
