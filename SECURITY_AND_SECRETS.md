# Security & Secrets Management

Diese Dokumentation beschreibt die Security-Konfiguration und das Secrets-Management für die AKLOW Landingpage.

## ⚠️ WICHTIG: Keine Secrets im Repository

- **NIEMALS** Secrets oder API-Keys in Git committen
- **NIEMALS** `.env.local` oder `.env.production` committen
- Alle Secrets werden über Environment Variables gesetzt

---

## 📋 Environment Variables

### Public Config (NEXT_PUBLIC_*)

Diese Variablen sind im Client-Code sichtbar und können öffentlich sein:

| Variable | Beschreibung | Beispiel (ohne Wert) | Wo gesetzt |
|----------|-------------|---------------------|------------|
| `NEXT_PUBLIC_BASE_URL` | Base URL der Website | `https://aklow.com` | Vercel, Local |
| `NEXT_PUBLIC_ANALYTICS_ID` | Analytics ID (optional) | `G-XXXXXXXXXX` | Vercel |

**⚠️ Regel:** Nie sensible Daten in `NEXT_PUBLIC_*` Variablen!

---

### Server Secrets (NICHT öffentlich)

Diese Variablen sind nur auf dem Server verfügbar:

| Variable | Beschreibung | Verwendung | Wo gesetzt |
|----------|-------------|------------|------------|
| `OPENAI_API_KEY` | OpenAI API Key | KI-Funktionen (später) | Vercel, Hetzner |
| `SENDGRID_API_KEY` | SendGrid API Key | E-Mail Versand | Vercel, Hetzner |
| `DATABASE_URL` | Datenbank Connection String | Datenbank (später) | Vercel, Hetzner |
| `TELEGRAM_BOT_TOKEN` | Telegram Bot Token | Notifications (später) | Hetzner |
| `ENCRYPTION_KEY` | Encryption Key für sensible Daten | Datenverschlüsselung | Hetzner |

**⚠️ Regel:** Diese Variablen NIE in `NEXT_PUBLIC_*` umbenennen!

---

## 🔧 Wo werden Secrets gesetzt?

### Local Development

1. Erstelle `.env.local` im Projekt-Root:
```bash
# .env.local (NICHT committen!)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
OPENAI_API_KEY=sk-...
SENDGRID_API_KEY=SG....
```

2. `.env.local` ist bereits in `.gitignore` (prüfen!)

### Vercel (Production/Preview)

1. Gehe zu: **Project Settings → Environment Variables**
2. Füge Variablen hinzu:
   - **Name:** z.B. `OPENAI_API_KEY`
   - **Value:** Der tatsächliche Key
   - **Environment:** Production, Preview, Development (je nach Bedarf)
3. Nach dem Setzen: **Redeploy** des Projekts

### Hetzner Backend (später)

Wenn ein separates Backend auf Hetzner läuft:

1. **Option A: systemd service**
   - `/etc/systemd/system/aklow-backend.service`
   - Environment Variables in `[Service]` Sektion:
   ```ini
   [Service]
   Environment="OPENAI_API_KEY=sk-..."
   Environment="DATABASE_URL=postgresql://..."
   ```

2. **Option B: Docker**
   - `.env` Datei (nicht committen!)
   - Oder Docker Secrets

---

## 🔄 Secrets Rotation Playbook

Wenn ein Secret kompromittiert wurde oder rotiert werden muss:

### Schritt 1: Neues Secret generieren
- Im entsprechenden Service (OpenAI, SendGrid, etc.) neues Secret erstellen

### Schritt 2: Altes Secret deaktivieren (optional)
- Im Service das alte Secret deaktivieren (nur wenn sicher, dass neues funktioniert)

### Schritt 3: Neues Secret setzen
- **Vercel:** Environment Variable aktualisieren → Redeploy
- **Hetzner:** Service neu starten mit neuem Secret

### Schritt 4: Testen
- Funktionen testen, die das Secret nutzen
- Logs prüfen auf Fehler

### Schritt 5: Altes Secret löschen
- Aus Vercel/Hetzner entfernen
- Aus lokalen `.env.local` entfernen

---

## 🚫 Never Do Liste

- ❌ **NIEMALS** Secrets in Git committen
- ❌ **NIEMALS** Secrets in Code hardcoden
- ❌ **NIEMALS** Secrets in `NEXT_PUBLIC_*` Variablen
- ❌ **NIEMALS** Secrets in Client-seitigem Code
- ❌ **NIEMALS** Secrets in Logs ausgeben
- ❌ **NIEMALS** Secrets in Error Messages
- ❌ **NIEMALS** `.env` Dateien committen (auch nicht `.env.example` mit echten Werten)

---

## 🔍 Secrets Audit

Regelmäßig prüfen:

1. **Git History:** `git log --all --full-history -- .env*`
2. **Codebase:** `grep -r "sk-" .` (nach API Keys suchen)
3. **Environment:** Alle Services auf veraltete Secrets prüfen

---

## 📝 Beispiel: Neue Integration hinzufügen

Wenn eine neue API-Integration hinzugefügt wird:

1. **Secret definieren:**
   - Name: `NEW_SERVICE_API_KEY`
   - Typ: Server Secret (nicht `NEXT_PUBLIC_*`)

2. **In Code verwenden:**
   ```typescript
   const apiKey = process.env.NEW_SERVICE_API_KEY;
   if (!apiKey) {
     throw new Error('NEW_SERVICE_API_KEY not configured');
   }
   ```

3. **Dokumentieren:**
   - In dieser Datei unter "Server Secrets" eintragen
   - Verwendung beschreiben

4. **Setzen:**
   - Local: `.env.local`
   - Vercel: Environment Variables
   - Hetzner: Service Config

---

## 🔐 Encryption Keys

Für sensible Daten (z.B. verschlüsselte User-Daten):

- **ENCRYPTION_KEY:** 32-byte hex string
- Generierung: `openssl rand -hex 32`
- **WICHTIG:** Backup sicher aufbewahren (Verlust = Datenverlust!)

---

## 📞 Support

Bei Fragen zu Secrets oder Security:
- **Security Issues:** Sofort melden
- **Rotation:** Nach Playbook vorgehen
- **Neue Integrations:** Vorher dokumentieren

---

**Letzte Aktualisierung:** 2024-12-XX
**Verantwortlich:** Development Team

