# KI Concierge Widget

Ein Premium-Glas/Floating UI Chat-Widget für die Landingpage.

## Architektur

### Phase 1: Frontend-Only (Aktuell)
- **StaticWizardProvider**: Frontend-only Implementierung mit statischen KB-JSONs
- Keine echten LLM-Calls
- Wizard-Flows mit Buttons/Steps
- Client-side KB-Suche

### Phase 2: API-Integration (Vorbereitet)
- **ChatProvider Interface**: Bereit für API-Integration
- Später: `ApiLLMProvider` implementieren
- Einfacher Wechsel durch Provider-Austausch

## Komponenten

### Concierge.tsx
Hauptkomponente mit:
- Scroll/Time-basierten Hints (60% scroll oder 45s)
- Session-Management (localStorage)
- Auto-Mode-Detection basierend auf pathname

### ConciergeLauncher.tsx
Dezenter Button unten rechts mit optionalem Hint-Tooltip.

### ConciergePanel.tsx
Floating Glass Panel mit:
- Desktop: 420px × 600px (bottom-right)
- Mobile: Bottom Sheet (90% height)
- Focus Trap, ESC, Overlay Click

### ConciergeChat.tsx
Chat-Interface mit:
- 3 Modi: Concierge, Support, Onboarding
- Message-Rendering mit Actions/Links
- Wizard-Integration

### ModeSwitcher.tsx
Segmented Control für Modus-Wechsel.

### WizardFlow.tsx
Support-Wizard mit:
- 4 Kategorien: QR/Gast, Admin/Import, KDS, POS
- Schritt-für-Schritt Diagnose
- Lösungsvorschläge aus KB

### OnboardingWizard.tsx
Onboarding-Flow mit:
- 3 Fragen: Betriebstyp, KDS nötig, Sprachen
- Paket-Empfehlung (Basic/Pro/Premium)
- CTAs: Preise, Demo, Kontakt

### KbSearch.tsx
Client-side Suche in KB-JSONs.

## KB-Dateien

Alle KB-Dateien liegen in `/src/content/kb/`:
- `kb_overview.json` - Allgemeine Fragen
- `kb_qr_guest.json` - QR/Gast-Probleme
- `kb_admin_import.json` - Admin/Import-Probleme
- `kb_kds.json` - Küche/Bar-Probleme
- `kb_pos.json` - POS-Probleme
- `kb_pricing.json` - Preis-Fragen

### KB-Dateien erweitern

Jede KB-Datei ist ein JSON-Array mit Einträgen:

```json
{
  "id": "kb-xyz-1",
  "title": "Titel des Artikels",
  "content": "Vollständiger Text des Artikels...",
  "category": "kategorie",
  "keywords": ["keyword1", "keyword2"],
  "links": [
    { "label": "Link Text", "href": "/path" }
  ]
}
```

## Phase 2: API-Integration

### ChatProvider Interface

```typescript
interface ChatProvider {
  sendMessage(mode, message, context): Promise<ChatResponse>;
  searchKnowledgeBase(query, category): Promise<ChatMessage[]>;
  getInitialMessage(mode, context): ChatMessage;
}
```

### ApiLLMProvider implementieren

1. Erstelle `src/components/concierge/providers/ApiLLMProvider.ts`
2. Implementiere `ChatProvider` Interface
3. API-Calls zu `/api/chat`
4. In `ConciergeChat.tsx` Provider wechseln:

```typescript
// Statt:
const provider = new StaticWizardProvider();

// Später:
const provider = new ApiLLMProvider();
```

### Context erweitern

Der `ChatContext` kann erweitert werden:
- `userActions`: Array von User-Aktionen (z.B. `['cta_clicked', 'demo_viewed']`)
- `scrollDepth`: Aktuelle Scroll-Position
- `sessionId`: Für Tracking

## Styling

Alle Styles sind token-basiert:
- Glass-Tokens in `tokens.css`
- `--color-glass-surface`, `--shadow-glass`, `--blur-glass`
- Dark Mode unterstützt

## A11y

- Focus Trap im Panel
- ESC schließt Panel
- ARIA: `role="dialog"`, `aria-modal="true"`
- Keyboard Navigation
- `prefers-reduced-motion` respektiert

## Performance

- Keine heavy libraries
- Client-side Suche (lightweight)
- Lazy Loading möglich für KB-Dateien
- Session Storage für Hints (kein Server-Call)

