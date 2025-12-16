# Gastro Landingpage - Vollständige Dokumentation

## 📋 Inhaltsverzeichnis

1. [Projekt-Übersicht](#projekt-übersicht)
2. [Technologie-Stack](#technologie-stack)
3. [Projektstruktur](#projektstruktur)
4. [Features im Detail](#features-im-detail)
5. [Komponenten-Architektur](#komponenten-architektur)
6. [Design-System & Tokens](#design-system--tokens)
7. [Internationalisierung (i18n)](#internationalisierung-i18n)
8. [KI Concierge Widget](#ki-concierge-widget)
9. [SEO & Performance](#seo--performance)
10. [Entwickler-Guide](#entwickler-guide)
11. [Deployment](#deployment)

---

## 🎯 Projekt-Übersicht

Die **Gastro Landingpage** ist eine moderne, hochwertige Marketing-Website für ein intelligentes Restaurant-Bestellsystem. Die Seite präsentiert eine ChatGPT-ähnliche Speisekarte, die Gästen ermöglicht, per QR-Code zu scannen, Fragen zu stellen und per Klick zu bestellen.

### Hauptziele

- **Conversion-Optimierung**: ROI-Rechner, interaktive Demos, klare CTAs
- **Premium UX**: Apple/Cursor-like Design, luxuriöse Animationen, dezente Interaktionen
- **Performance**: Mobile-first, optimierte Ladezeiten, keine Layout-Shifts
- **Accessibility**: WCAG-konform, Keyboard-Navigation, Screen-Reader-Support
- **Internationalisierung**: DE/EN/ES Support

---

## 🛠 Technologie-Stack

### Core

- **Next.js 16.0.10** (App Router)
- **React 19.2.1**
- **TypeScript 5**
- **Tailwind CSS 4** (mit PostCSS)

### Design & Styling

- **Design Tokens** (CSS Variables)
- **Token-basierte Utilities** (keine hardcoded Werte)
- **Custom CSS Keyframes** (Marquee, Animations)

### Tools & Libraries

- **ESLint** (Code Quality)
- **React Compiler** (Performance)
- **Turbopack** (Fast Refresh)

---

## 📁 Projektstruktur

```
landingpage-gastro/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root Layout
│   ├── page.tsx                 # Home Page
│   ├── features/                # Feature Pages
│   │   ├── page.tsx            # Features Hub
│   │   ├── bestellen/          # Bestellen Feature
│   │   ├── kueche-bar/         # Küche & Bar Feature
│   │   └── pos-lite/           # POS-Lite Feature
│   ├── preise/                  # Pricing Page
│   ├── demo/                    # Demo Page
│   ├── kontakt/                 # Contact Page
│   ├── wissen/                  # Knowledge Base
│   │   ├── page.tsx
│   │   ├── erste-schritte/
│   │   └── faq/
│   ├── blog/                    # Blog
│   ├── ueber-uns/               # About Us
│   ├── partner/                 # Partners
│   ├── jobs/                    # Jobs
│   ├── impressum/               # Legal
│   └── datenschutz/            # Privacy
│
├── src/
│   ├── components/
│   │   ├── shell/               # Layout Components
│   │   │   ├── AppShell.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── RightDrawerNav.tsx
│   │   ├── ui/                  # Reusable UI Components
│   │   │   ├── Button.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── Marquee.tsx
│   │   ├── roi/                 # ROI Calculator
│   │   │   ├── RoiCalculator.tsx
│   │   │   └── useRoiModel.ts
│   │   ├── demo/                # Demo Components
│   │   │   ├── MiniChatDemo.tsx
│   │   │   ├── DemoTabs.tsx
│   │   │   └── AdminDemo.tsx
│   │   ├── social/              # Social Proof
│   │   │   └── SocialProof.tsx
│   │   ├── partners/            # Partners Section
│   │   │   └── PartnersSection.tsx
│   │   └── concierge/           # KI Concierge Widget
│   │       ├── Concierge.tsx
│   │       ├── ConciergeLauncher.tsx
│   │       ├── ConciergePanel.tsx
│   │       ├── ConciergeChat.tsx
│   │       ├── ModeSwitcher.tsx
│   │       ├── WizardFlow.tsx
│   │       ├── OnboardingWizard.tsx
│   │       ├── KbSearch.tsx
│   │       └── providers/
│   │           ├── ChatProvider.ts
│   │           └── StaticWizardProvider.ts
│   │
│   ├── content/
│   │   └── kb/                  # Knowledge Base JSONs
│   │       ├── kb_overview.json
│   │       ├── kb_qr_guest.json
│   │       ├── kb_admin_import.json
│   │       ├── kb_kds.json
│   │       ├── kb_pos.json
│   │       └── kb_pricing.json
│   │
│   ├── hooks/
│   │   ├── useLocale.ts
│   │   └── useRoiModel.ts
│   │
│   ├── lib/
│   │   ├── i18n.ts              # i18n System
│   │   ├── getLocale.ts
│   │   ├── classNames.ts
│   │   └── metadata.ts
│   │
│   ├── messages/                # i18n Translations
│   │   ├── de.json
│   │   ├── en.json
│   │   └── es.json
│   │
│   └── styles/
│       ├── tokens.css           # Design Tokens
│       └── globals.css          # Global Styles
│
├── public/                      # Static Assets
├── next.config.ts              # Next.js Config
└── package.json
```

---

## ✨ Features im Detail

### 1. Home Page

#### Hero Section
- **Headline & Subheadline**: Klare Value Proposition
- **CTAs**: "Demo buchen" (Primary), "Kurz ansehen" (Secondary)
- **Mini Chat Demo**: Interaktiver Fake-Chat im Hero (rechts auf Desktop)
- **Bullet Points**: Key Features (Mehrsprachig, KDS, POS-Lite)

#### Problem/Solution Sections
- **Problem**: Beschreibt Alltagsprobleme im Restaurant
- **Solution**: Präsentiert die Lösung als intelligente Speisekarte

#### "So funktioniert's" Section
- 3-Step-Prozess: QR scannen → Fragen/Klicken → Bestellung kommt an
- Card-basiertes Layout

#### ROI Calculator
- **Inputs**: Tische (Slider), Gäste pro Tag, Durchschnittsbon
- **Outputs**: 
  - Zusätzliche Nachbestellungen/Tag
  - Geschätzter Mehrumsatz/Monat
  - Zeitersparnis pro Tag
- **Animated Numbers**: Smooth Transitions bei Wertänderungen
- **Disclaimer**: Konservative Schätzungen

#### Modules Section
- 3 Karten: Für Gäste, Für Küche & Bar, Für Betreiber
- Kurze Beschreibungen der Hauptfunktionen

#### Partner & Integrationen
- Grid mit 8 Platzhalter-Logos
- Generische Icons + Textlabels (keine echten Markenlogos)
- Disclaimer: "Logos sind Platzhalter"

#### Social Proof (Marquee)
- **2 Reihen**: Gegensinnige horizontale Bewegung
- **16 Testimonials**: Neutrale Betriebsnamen (Pilotphase)
- **Motion**: 35s/40s pro Loop, pausiert bei Hover
- **Disclaimer**: "Pilotphase – Ergebnisse können variieren"

#### Final CTA Section
- Headline + Subline
- Primary CTA: "Demo buchen"
- Secondary CTA: "Kontakt"

### 2. Features Pages

#### Features Hub (`/features`)
- Übersicht aller Module
- Links zu Feature-Unterseiten
- Kurze Beschreibungen

#### Feature-Unterseiten
Jede Seite (`/features/bestellen`, `/features/kueche-bar`, `/features/pos-lite`) hat:
- **H1**: Feature-Name
- **Intro**: Kurze Einführung
- **4-6 H2-Sektionen**: Detaillierte Beschreibungen
  - Paragraph-Text
  - 3 Bullet Points pro Sektion
- **CTA Section**: Am Ende jeder Seite

### 3. Demo Page (`/demo`)

#### Tab-System
- **Guest View Demo**: Größere Version des Mini-Chats
- **Admin View Demo**: Statische Preview des Admin Dashboards

#### CTAs
- "Demo buchen" (Primary)
- "Preise ansehen" (Secondary)

### 4. Pricing Page (`/preise`)

- 3 Pakete: Basic, Pro, Premium
- Feature-Listen pro Paket
- CTAs pro Paket
- Hinweis: "Inhalte können je nach Region variieren"

### 5. Knowledge Base (`/wissen`)

- **Hub**: Übersicht aller KB-Bereiche
- **Erste Schritte**: Setup-Anleitung
- **FAQ**: Häufige Fragen

---

## 🧩 Komponenten-Architektur

### Shell Components

#### AppShell
- Wrapper für alle Seiten
- Integriert Header, Footer, Concierge

#### Header
- **Desktop**: Logo, Navigation Links, CTA Button, Language Switcher
- **Mobile**: Logo, Menu Button (öffnet Drawer)
- Sticky mit Backdrop Blur

#### RightDrawerNav
- **Cursor.com-artig**: Slide-in von rechts
- **Gruppen**: Produkt, Features, Wissen, Unternehmen, Legal
- **Footer Actions**: Demo buchen, Demo ansehen
- **A11y**: Focus Trap, ESC, Overlay Click

#### Footer
- **4 Spalten**: Produkt, Features, Unternehmen, Wissen
- **Legal Block**: Impressum, Datenschutz, Cookies, Status
- Responsive Grid

### UI Components

#### Button
- **Variants**: Primary, Secondary, Ghost
- **Sizes**: sm, md, lg
- **Props**: asChild (für Links), href
- Token-basiert

#### Section
- **Variants**: tight, normal, hero
- **Props**: id (für Anchor Links)
- Konsistente vertikale Spacing

#### Container
- **Sizes**: sm, md, lg, xl
- Max-width + Padding
- Responsive

#### Marquee
- **CSS Keyframes**: Smooth, endless loop
- **Directions**: left, right
- **Speed**: Konfigurierbar (25-45s)
- **Features**: Pause on hover, prefers-reduced-motion

### Feature Components

#### RoiCalculator
- **Inputs**: Sliders für Tische, Gäste, Durchschnittsbon
- **Logic**: `useRoiModel` Hook
- **Outputs**: Animated Numbers
- **Styling**: Token-basiert, Card-Layout

#### MiniChatDemo
- **State Machine**: Welcome → Recommendation → Upsell → Confirmation
- **UI**: Cards, Chips, Buttons
- **Frontend-only**: Kein Backend

#### SocialProof
- **Marquee Integration**: 2 Reihen
- **Testimonials**: Array aus i18n
- **Cards**: Name + Text, keine Tags

#### PartnersSection
- **Grid**: 2-4-6 Spalten (responsive)
- **Placeholder Logos**: Emojis + Textlabels
- **Hover Effects**: Subtile Borders

---

## 🎨 Design-System & Tokens

### Token-Struktur

Alle Design-Werte sind als CSS Variables definiert in `src/styles/tokens.css`:

#### Colors
```css
--color-bg              /* Hintergrund */
--color-bg-muted        /* Leicht abgedunkelter Hintergrund */
--color-surface         /* Karten, Panels */
--color-fg              /* Haupttext */
--color-fg-muted        /* Sekundärtext */
--color-border          /* Borders */
--color-accent          /* Primärfarbe */
--color-accent-hover    /* Hover State */
--color-overlay         /* Overlays */
```

#### Glass/Floating UI
```css
--color-glass-surface       /* Semi-transparent Surface */
--color-glass-border         /* Hairline Border */
--shadow-glass               /* Soft Shadow */
--blur-glass                 /* Backdrop Blur */
```

#### Spacing
```css
--space-1 bis --space-32    /* 8px Base (4px bis 128px) */
```

#### Typography
```css
--text-xs bis --text-5xl    /* Text Sizes */
--leading-tight/normal/relaxed/loose
```

#### Motion
```css
--motion-fast    /* 120ms ease-out */
--motion-normal  /* 180ms ease-out */
--motion-slow    /* 220ms ease-out */
```

#### Shadows
```css
--shadow-1   /* Sehr subtil */
--shadow-2   /* Leicht */
--shadow-3   /* Mittel */
```

### Design-Prinzipien

1. **Luxury Look**:
   - Viel Whitespace
   - Hairline Borders
   - Ruhige Farben
   - Minimale Shadows

2. **Token-Only**:
   - Keine hardcoded Farben/Spacing/Radius
   - Alle Werte über CSS Variables
   - Tailwind Utilities nutzen Tokens

3. **Motion**:
   - Konsistent: 180-220ms ease-out
   - Subtile Animationen
   - prefers-reduced-motion respektiert

4. **Responsive**:
   - Mobile-first
   - Breakpoints: sm, md, lg
   - Touch-optimiert

---

## 🌍 Internationalisierung (i18n)

### System

- **Locales**: DE (default), EN, ES
- **Files**: `src/messages/{locale}.json`
- **Function**: `t(locale, key, params?)`
- **Hooks**: `useLocale()` (Client), `getLocale()` (Server)

### Struktur

```json
{
  "brand": { "name", "tagline" },
  "nav": { "top", "cta", "drawer" },
  "footer": { "columns", "links", "legal" },
  "common": { "cta_*" },
  "pages": {
    "home": { "meta", "hero", "problem", "solution", ... },
    "features": { ... },
    "feature_ordering": { ... },
    ...
  }
}
```

### Verwendung

**Server Component:**
```typescript
const locale = await getLocale();
const text = t(locale, 'pages.home.hero.h1');
```

**Client Component:**
```typescript
const locale = useLocale();
const text = t(locale, 'pages.home.hero.h1');
```

### Neue Texte hinzufügen

1. Keys in `src/messages/de.json` hinzufügen
2. Übersetzungen in `en.json` und `es.json` ergänzen
3. In Komponenten verwenden: `t(locale, 'key.path')`

---

## 🤖 KI Concierge Widget

### Übersicht

Ein Premium-Glas/Floating UI Chat-Widget, das als "KI Concierge" fungiert. **Phase 1** ist vollständig Frontend-only mit statischen Wizards und KB-Suche.

### Architektur

#### Provider-System

**ChatProvider Interface** (`providers/ChatProvider.ts`):
```typescript
interface ChatProvider {
  sendMessage(mode, message, context): Promise<ChatResponse>;
  searchKnowledgeBase(query, category): Promise<ChatMessage[]>;
  getInitialMessage(mode, context): ChatMessage;
}
```

**StaticWizardProvider** (Phase 1):
- Frontend-only
- Statische Antworten aus KB-JSONs
- Wizard-Flows mit Buttons

**ApiLLMProvider** (Phase 2 - vorbereitet):
- Interface bereit für API-Integration
- Später: `/api/chat` Endpoint

### 3 Modi

#### 1. Concierge
- **Ziel**: Orientierung & Conversion
- **Quick Actions**: "Was ist das?", "Wie schnell bin ich live?", "Was kostet das?"
- **Antworten**: Kurz, dann Buttons/Links zu relevanten Seiten

#### 2. Support (Wizard)
- **Ziel**: Strukturierte Hilfe ohne Halluzination
- **Kategorien**: QR/Gast, Admin/Import, Küche/Bar (KDS), POS
- **Flow**: Diagnoseschritte → "Gelöst?" → Ja/Nein → Lösungsvorschläge
- **Hinweis**: "KI-Soforthilfe 24/7 · Menschlicher Support nach Verfügbarkeit"

#### 3. Onboarding Wizard
- **Ziel**: "Passt das zu mir?" + Next Steps
- **Fragen**: 
  - Betriebstyp (Bar/Café/Restaurant)
  - Küche & Bar getrennt nötig?
  - Sprachen wichtig?
- **Output**: Paket-Empfehlung (Basic/Pro/Premium) + CTAs

### UI-Komponenten

#### ConciergeLauncher
- **Position**: Fixed bottom-right
- **Button**: 48px, runder Accent-Button
- **Hint**: Optional Tooltip nach 60% Scroll oder 45s
- **Session**: Nur einmal pro Session (localStorage)

#### ConciergePanel
- **Desktop**: 420px × 600px, bottom-right
- **Mobile**: Bottom Sheet (90% height)
- **Glass Style**: Semi-transparent, Backdrop Blur, Hairline Border
- **A11y**: Focus Trap, ESC, Overlay Click, ARIA

#### ConciergeChat
- **Message Rendering**: User/Assistant Bubbles
- **Actions**: Buttons, Links, Wizard Steps
- **Input**: Text Input + Send Button
- **Wizard Integration**: Automatisches Wechseln zu Wizard-Komponenten

#### WizardFlow
- **Support-Wizard**: Schritt-für-Schritt Diagnose
- **4 Kategorien**: QR/Gast, Admin/Import, KDS, POS
- **Lösungsvorschläge**: Aus KB, Links zu FAQ/Kontakt

#### OnboardingWizard
- **3 Fragen**: Betriebstyp, KDS, Sprachen
- **Empfehlung**: Berechnet Paket basierend auf Antworten
- **CTAs**: Preise, Demo, Kontakt

### Knowledge Base

#### Struktur

Alle KB-Dateien in `src/content/kb/*.json`:

```json
{
  "id": "kb-xyz-1",
  "title": "Titel",
  "content": "Vollständiger Text...",
  "category": "kategorie",
  "keywords": ["keyword1", "keyword2"],
  "links": [
    { "label": "Link Text", "href": "/path" }
  ]
}
```

#### Dateien

- `kb_overview.json`: Allgemeine Fragen
- `kb_qr_guest.json`: QR/Gast-Probleme
- `kb_admin_import.json`: Admin/Import-Probleme
- `kb_kds.json`: Küche/Bar-Probleme
- `kb_pos.json`: POS-Probleme
- `kb_pricing.json`: Preis-Fragen

#### Erweitern

1. Neue Einträge in entsprechende JSON-Datei hinzufügen
2. Keywords für Suche ergänzen
3. Links zu relevanten Seiten hinzufügen

### Phase 2: API-Integration

**Vorbereitung:**

1. **ApiLLMProvider erstellen**:
```typescript
// src/components/concierge/providers/ApiLLMProvider.ts
export class ApiLLMProvider implements ChatProvider {
  async sendMessage(mode, message, context) {
    const response = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ mode, message, context }),
    });
    return response.json();
  }
  // ...
}
```

2. **Provider wechseln**:
```typescript
// In ConciergeChat.tsx
const provider = new ApiLLMProvider(); // Statt StaticWizardProvider
```

3. **Context erweitern**:
- `userActions`: Array von User-Aktionen
- `scrollDepth`: Aktuelle Scroll-Position
- `sessionId`: Für Tracking

### Features

- **Nicht aufdringlich**: Kein Auto-Open, nur dezenter Button
- **Hints**: Nach 60% Scroll oder 45s (nur einmal pro Session)
- **Auto-Mode-Detection**: Basierend auf pathname
- **Session-Management**: localStorage für Hints
- **Performance**: Client-side, keine heavy libs

---

## 🔍 SEO & Performance

### SEO

#### Metadata
- **Per Page**: Title, Description, OG Tags, Twitter Cards
- **Function**: `createMetadata()` in `src/lib/metadata.ts`
- **Canonical URLs**: Automatisch generiert

#### Sitemap & Robots
- `public/sitemap.xml`: Statische Sitemap
- `public/robots.txt`: Robots-Direktiven

#### Structured Data
- (Optional) JSON-LD für Rich Snippets

### Performance

#### Optimierungen

1. **Next.js App Router**: Server Components, automatisches Code-Splitting
2. **Images**: (Optional) Next.js Image Component
3. **Fonts**: System Fonts (keine externen Fonts)
4. **Animations**: CSS Keyframes (GPU-optimiert)
5. **Lazy Loading**: Client Components nur bei Bedarf

#### Metriken

- **Lighthouse**: Ziel >90 für alle Kategorien
- **CLS**: Keine Layout-Shifts
- **FCP**: <1.8s
- **LCP**: <2.5s

---

## 👨‍💻 Entwickler-Guide

### Setup

```bash
# Dependencies installieren
npm install

# Dev Server starten
npm run dev

# Build
npm run build

# Production Server
npm start
```

### Port konfigurieren

```bash
# Port 3050
PORT=3050 npm run dev
```

### Neue Komponenten

1. **Token-basiert**: Nur CSS Variables verwenden
2. **i18n**: Alle Texte über `t(locale, 'key')`
3. **TypeScript**: Vollständig typisiert
4. **A11y**: ARIA, Keyboard Navigation, Focus Management

### Code-Style

- **ESLint**: Automatische Linting
- **TypeScript**: Strict Mode
- **Naming**: PascalCase für Components, camelCase für Functions
- **Imports**: Absolute Paths (`@/components/...`)

### Testing

**Manual QA Checklist:**
- [ ] Mobile Responsive
- [ ] Keyboard Navigation
- [ ] Screen Reader (optional)
- [ ] Reduced Motion
- [ ] Dark Mode (optional)
- [ ] Browser Compatibility

---

## 🚀 Deployment

### Build

```bash
npm run build
```

### Environment Variables

(Optional, falls später Backend-Integration)

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

### Deployment-Optionen

1. **Vercel** (empfohlen für Next.js)
2. **Netlify**
3. **Docker**: Custom Container
4. **Static Export**: `next export` (falls nötig)

### Production Checklist

- [ ] Environment Variables gesetzt
- [ ] Build erfolgreich
- [ ] SEO Metadata korrekt
- [ ] Analytics (optional)
- [ ] Error Tracking (optional)

---

## 📝 Changelog

### Version 1.0.0

**Features:**
- ✅ Komplette Landingpage-Struktur
- ✅ Header + Right Drawer Navigation
- ✅ Footer (4×4 + Legal)
- ✅ Home Page mit allen Sektionen
- ✅ Feature Pages (3 Unterseiten)
- ✅ Pricing Page
- ✅ Demo Page (2 Modi)
- ✅ Knowledge Base Pages
- ✅ ROI Calculator
- ✅ Mini Chat Demo
- ✅ Social Proof (Marquee)
- ✅ Partner Section
- ✅ KI Concierge Widget (Phase 1)
- ✅ i18n (DE/EN/ES)
- ✅ Design Tokens System
- ✅ SEO Basics

**Technisch:**
- ✅ Next.js 16 App Router
- ✅ TypeScript
- ✅ Tailwind CSS 4
- ✅ Token-basiertes Design
- ✅ A11y-konform
- ✅ Mobile-first
- ✅ Performance-optimiert

---

## 🔗 Links & Ressourcen

### Dokumentation

- **Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

### Projekt-Dateien

- **README.md**: Quick Start
- **DOCUMENTATION.md**: Diese Datei
- **src/components/concierge/README.md**: Concierge Widget Details

---

## 📧 Support

Bei Fragen zur Implementierung oder Erweiterung:
1. Dokumentation lesen
2. Code-Kommentare prüfen
3. TypeScript-Typen als Referenz nutzen

---

**Erstellt**: 2024  
**Version**: 1.0.0  
**Status**: Production Ready

