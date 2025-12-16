# Quick Start Guide

## 🚀 Projekt starten

**Projekt-Pfad:** `/Users/simple-gpt/landingpage-gastro`

### 1. Dependencies installieren (falls noch nicht geschehen)

```bash
cd ~/landingpage-gastro
npm install
```

### 2. Dev Server starten

**Standard Port (3000):**
```bash
npm run dev
```

**Auf Port 3050:**
```bash
PORT=3050 npm run dev
```

### 3. Im Browser öffnen

- **Standard**: http://localhost:3000
- **Port 3050**: http://localhost:3050

---

## 📋 Weitere Befehle

### Build für Production
```bash
npm run build
```

### Production Server starten
```bash
npm start
```

### Linting
```bash
npm run lint
```

---

## ✅ Prüfen ob alles läuft

1. **Server startet ohne Fehler** ✓
2. **Home Page lädt** ✓
3. **Concierge Widget sichtbar** (unten rechts) ✓
4. **Navigation funktioniert** ✓

---

## 🐛 Probleme?

- **Port bereits belegt?** → Anderen Port verwenden: `PORT=3051 npm run dev`
- **Dependencies fehlen?** → `npm install` erneut ausführen
- **Build Fehler?** → `npm run build` prüfen

---

**Viel Erfolg! 🎉**

