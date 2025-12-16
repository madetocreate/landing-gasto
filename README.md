# Landingpage Gastro

Moderne Landingpage für Gastro mit Next.js, TypeScript und Tailwind CSS.

## 🚀 Start

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

Die Anwendung läuft dann auf [http://localhost:3000](http://localhost:3000).

## 📁 Projektstruktur

```
landingpage-gastro/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root Layout mit AppShell
│   ├── page.tsx           # Home Page
│   ├── impressum/         # Impressum Page
│   ├── datenschutz/       # Datenschutz Page
│   └── globals.css        # Global Styles + Tailwind Theme
├── src/
│   ├── components/
│   │   ├── shell/         # App Shell Komponenten
│   │   │   ├── AppShell.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── nav/           # Navigation Komponenten
│   │   │   ├── RightDrawerNav.tsx
│   │   │   └── NavLink.tsx
│   │   └── ui/            # UI Komponenten
│   │       ├── Button.tsx
│   │       ├── Overlay.tsx
│   │       └── FocusTrap.tsx
│   ├── styles/
│   │   └── tokens.css     # Design Tokens (CSS Variables)
│   └── lib/
│       └── classNames.ts  # Utility Funktionen
└── public/                # Statische Assets
```

## 🎨 Design Token System

### Token-Regeln

**WICHTIG:** Alle Farben, Abstände, Radien und Schatten müssen über Design Tokens definiert werden. Keine hardcodierten Werte in Komponenten!

### Token-Datei

Die Tokens sind in `src/styles/tokens.css` definiert:

- **Colors**: `--color-bg`, `--color-fg`, `--color-accent`, etc.
- **Spacing**: `--space-1` bis `--space-24`
- **Radius**: `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`
- **Shadows**: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`
- **Typography**: `--font-sans`, `--font-mono`, `--text-xs` bis `--text-4xl`

### Verwendung in Komponenten

**✅ RICHTIG:**
```tsx
<div className="bg-background text-foreground p-4 rounded-md">
  Content
</div>
```

**❌ FALSCH:**
```tsx
<div className="bg-white text-black p-4 rounded-md">
  Content
</div>
```

### Tailwind Theme Mapping

Die Tokens werden in `app/globals.css` über `@theme` an Tailwind gemappt:

- `bg-background` → `var(--color-bg)`
- `text-foreground` → `var(--color-fg)`
- `border-border` → `var(--color-border)`
- `bg-accent` → `var(--color-accent)`
- etc.

## 🧩 Komponenten

### App Shell

Die `AppShell` Komponente umschließt die gesamte Anwendung und stellt Header, Main und Footer bereit.

### Header

- Sticky Header mit Logo und Menü-Button
- Öffnet den Right Drawer bei Klick auf "Menü"

### Right Drawer Navigation

**Verhalten:**
- Slide-in von rechts (Desktop: ~28rem, Mobile: 100% width)
- Backdrop Overlay mit Blur
- Smooth Transition (200ms ease-out)
- Schließen über:
  - X Button im Drawer
  - Klick auf Overlay
  - ESC Taste

**Accessibility:**
- Focus Trap aktiviert, wenn Drawer offen
- ARIA attributes (`role="dialog"`, `aria-modal="true"`)
- Keyboard Navigation (Tab, Shift+Tab, ESC)

**Navigation Items:**
- Start
- Produkt
- Preise
- Demo
- Kontakt

**Footer Actions:**
- Primary CTA Button: "Jetzt starten"
- Secondary Link: "Mehr erfahren"

## 📄 Pages

- `/` - Home (Placeholder)
- `/impressum` - Impressum (Placeholder)
- `/datenschutz` - Datenschutz (Placeholder)

## 🛠️ Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **React 19**

## 📝 Nächste Schritte

1. Landingpage Content hinzufügen
2. Sections implementieren (Hero, Features, etc.)
3. Impressum und Datenschutz Texte vervollständigen
4. Weitere UI Komponenten nach Bedarf

## 🔧 Development

```bash
# Build
npm run build

# Production Server
npm start

# Linting
npm run lint
```
