import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { Button } from '@/components/ui/Button';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'FAQ – Häufige Fragen zu KI-Modernisierung',
  description: 'Antworten auf häufige Fragen zu KI-Modernisierung, Anwendungen, Sicherheit und Integration.',
  path: '/wissen/faq',
});

const faqItems = [
  {
    q: 'Was bedeutet „KI-Modernisierung" bei euch konkret?',
    a: 'KI-Modernisierung heißt: Du bekommst keine neue Software-Welt, sondern eine KI-Schicht, die sich an Deine echten Abläufe andockt. Sie hilft dort, wo heute Zeit verloren geht – z. B. bei Anfragen, Dokumenten, Follow-ups und wiederkehrenden Aufgaben. Du startest klein, siehst schnell Nutzen und baust dann Schritt für Schritt aus.',
  },
  {
    q: 'Muss ich dafür ein neues Tool lernen oder jeden Tag in ein Dashboard schauen?',
    a: 'Nein. Du arbeitest weiter in Deinen bestehenden Kanälen (z. B. E-Mail, Dateien, Website-Anfragen). Die KI unterstützt im Hintergrund und gibt Dir nur das zurück, was Du wirklich brauchst: Überblick, Prioritäten und Vorschläge. Wenn es eine Oberfläche gibt, dann schlank – nicht als neues System, das Du pflegen musst.',
  },
  {
    q: 'Für wen ist das geeignet – auch für Selbstständige oder kleine Betriebe?',
    a: 'Ja. Gerade wenn Du viel selbst machst, bringen Ordnung, Priorisierung und gute Vorbereitung sofort Ruhe rein. Für wachsende Betriebe ist es genauso sinnvoll, weil Abläufe stabiler werden und weniger an Einzelpersonen hängen. Entscheidend ist nicht die Größe, sondern ob bei Dir regelmäßig Anfragen, Dokumente und Vorgänge zusammenkommen.',
  },
  {
    q: 'Wie läuft der 10‑Minuten‑Check ab?',
    a: 'Kurz und ohne Verkaufsdruck: Du zeigst uns, wo Du im Alltag Zeit verlierst (z. B. Anfragen, Dokumente, Rückfragen). Wir klären, welche Kanäle und Tools bei Dir eine Rolle spielen – und sagen Dir ehrlich, was realistisch ist und was (noch) nicht. Danach weißt Du, ob ein Einstieg Sinn macht und womit man anfangen würde.',
  },
  {
    q: 'Wie schnell kann ich starten – und wann merke ich den ersten Effekt?',
    a: 'Oft merkt man den Effekt schnell, wenn man mit einem klaren Einstieg startet (z. B. Posteingang ordnen oder Dokumente strukturieren). Wie schnell „live" sinnvoll ist, hängt davon ab, welche Kanäle du hast und wie komplex die Anbindung ist. Unser Prinzip: erst ein kleiner, messbarer Nutzen – dann ausbauen.',
  },
  {
    q: 'Welche Kanäle können in den intelligenten Posteingang rein?',
    a: 'Typisch sind E‑Mails, Website-Anfragen, Kontaktformulare, Support-Nachrichten und Dokumente, die über verschiedene Wege reinkommen. Je nach Setup können auch weitere Quellen angebunden werden. Ziel ist immer gleich: Du siehst das Wichtige zuerst und musst nicht überall einzeln nachschauen.',
  },
  {
    q: 'Was macht der Intelligente Posteingang automatisch?',
    a: 'Er sortiert und priorisiert, erkennt Themen, erstellt kurze Zusammenfassungen und schlägt Antworten vor. Außerdem kann er Dinge zu Kunden/Vorgängen zuordnen und Wiedervorlagen setzen, damit nichts liegen bleibt. Du bestimmst, was automatisch passiert – und was erst nach Freigabe.',
  },
  {
    q: 'Kann die KI in meinem Ton antworten (kurz, locker, ohne Floskeln)?',
    a: 'Ja. Du kannst Tonalität und Regeln vorgeben – zum Beispiel „kurz und klar", „freundlich und locker" oder „formell". Außerdem kannst Du festlegen, welche Antworten nur vorgeschlagen werden und welche überhaupt nicht automatisch rausgehen dürfen. So bleibt es „Dein" Auftritt, nicht ein generischer KI-Text.',
  },
  {
    q: 'Wie funktioniert der Website & Telefon Assistent, ohne dass es nach „Roboter" klingt?',
    a: 'Er führt Gespräche so, dass am Ende echte Informationen stehen: Anliegen, Kontaktdaten, Kontext und nächste Schritte. Standardfragen kann er direkt klären, bei komplexen Themen übergibt er sauber an Dich – inklusive Zusammenfassung. Ziel ist nicht „alles automatisieren", sondern Anfragen sauber aufnehmen und Dir Zeit sparen.',
  },
  {
    q: 'Unterstützt ihr Mehrsprachigkeit (z. B. Deutsch, Englisch, Spanisch)?',
    a: 'Ja, Mehrsprachigkeit kann ein großer Hebel sein – besonders bei Anfragen, Website-Texten und wiederkehrenden Fragen. Welche Sprachen sinnvoll sind, hängt von Deinen Kunden ab. Wichtig ist: Du behältst Kontrolle über Inhalte und Tonalität, auch wenn mehrere Sprachen im Spiel sind.',
  },
  {
    q: 'Was kann die KI bei Dokumenten (PDFs, Scans, Fotos) wirklich?',
    a: 'Sie kann Inhalte lesen, zusammenfassen, wichtige Daten erkennen und Dokumente sinnvoll zuordnen (z. B. zu einem Vorgang oder Kunden). Sie hilft dir beim Wiederfinden über Inhalt statt Dateinamen. Wenn etwas unklar ist, wird es als „prüfen" markiert – statt still falsch zu entscheiden.',
  },
  {
    q: 'Was bedeutet „Dokumente & Ordnung" im Alltag – ganz praktisch?',
    a: 'Du wirfst Dokumente rein (PDFs, Scans, Fotos), und du bekommst Struktur zurück: Zusammenfassung, Kontext, Zuordnung und eine Suche, die auch über Inhalte funktioniert. Das spart dir Ordner-Klickerei und Nachfragen. Kurz: weniger Chaos, schneller wiederfinden, weniger „wo war das nochmal?".',
  },
  {
    q: 'Was sind „Kunden & Vorgänge" – ist das ein CRM?',
    a: 'Es ist keine klassische CRM-Monster-Software. Denk eher an eine saubere Vorgangs-Ansicht: alles, was zu einem Thema gehört, bleibt zusammen (Nachrichten, Dokumente, Entscheidungen, nächste Schritte). Wenn Du schon ein CRM nutzt, soll das nicht ersetzt werden – sondern ergänzt werden, damit du im Alltag schneller arbeitest.',
  },
  {
    q: 'Welche Integrationen sind möglich (E-Mail, Kalender, CRM/ERP, Dateien)?',
    a: 'Wir integrieren dort, wo Deine Arbeit heute passiert – häufig E‑Mail, Kalender, Dateiablagen und je nach Betrieb auch CRM/ERP oder Ticketsysteme. Wie genau, hängt von Deinen Tools ab (API, Webhooks, vorhandene Schnittstellen). Wichtig: Integration soll Arbeit sparen, nicht neue Komplexität schaffen.',
  },
  {
    q: 'Kann ich Regeln und Freigaben erzwingen (Human-in-the-Loop)?',
    a: 'Ja. Du kannst festlegen, dass bestimmte Schritte immer eine Freigabe brauchen – zum Beispiel bei kritischen Antworten, sensiblen Dokumenten oder bestimmten Themen. Die KI kann vorbereiten, aber nicht „einfach so" handeln. So bleibt die Verantwortung da, wo sie hingehört.',
  },
  {
    q: 'Was passiert, wenn die KI unsicher ist oder mal danebenliegt?',
    a: 'Dann soll sie nicht „selbstbewusst raten", sondern sauber markieren: unklar, prüfen, nachfragen. Wir bauen bewusst Leitplanken ein, damit Vorschläge nachvollziehbar bleiben und du jederzeit korrigieren kannst. Fehler sollen früh auffallen – nicht spät teuer werden.',
  },
  {
    q: 'Was ist euer „AI Shield" – und wovor schützt es?',
    a: 'AI Shield ist ein Sicherheits-Layer, der riskante Eingaben und Ausgaben erkennt und abfedert. Dazu gehören z. B. Versuche, die KI zu manipulieren (Prompt Injection), sensible Daten abzugreifen oder Regeln zu umgehen. Ziel ist pragmatische Sicherheit: verhindern, bevor etwas Schaden anrichtet – und alles nachvollziehbar halten.',
  },
  {
    q: 'Wie geht ihr mit Datenschutz und DSGVO um?',
    a: 'Datenschutz ist kein Extra, sondern Voraussetzung. Wir arbeiten mit klaren Berechtigungen, sauberer Trennung von Zugriffen und nachvollziehbaren Abläufen. Vor dem Start klären wir gemeinsam, welche Daten verarbeitet werden, was wirklich nötig ist und wie die Datenhaltung in Deinem Setup aussehen soll.',
  },
  {
    q: 'Gibt es Protokolle/Audit-Logs – also Nachvollziehbarkeit, wer was gemacht hat?',
    a: 'Ja, Nachvollziehbarkeit ist Teil des Konzepts: Was wurde vorgeschlagen, was wurde freigegeben, was wurde ausgeführt – und warum. Das ist wichtig für Kontrolle, Verantwortung und sauberes Arbeiten, gerade wenn mehrere Themen parallel laufen.',
  },
  {
    q: 'Kann ich klein starten, später erweitern – und auch wieder aussteigen?',
    a: 'Ja. Du kannst mit einer Anwendung oder einem klaren Einstieg anfangen und dann ausbauen, wenn du Nutzen siehst. Und wenn du etwas nicht mehr willst, soll es nicht zur Dauer-Abhängigkeit werden: Wir planen so, dass du handlungsfähig bleibst und deine Daten/Strukturen nicht „eingesperrt" sind.',
  },
];

export default function FAQ() {
  return (
    <>
      <Section variant="hero" className="pt-32 pb-20">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Häufige Fragen
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
              Antworten auf die wichtigsten Fragen zu KI-Modernisierung,
              Anwendungen, Sicherheit und Integration.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal">
        <Container size="lg">
          <div className="max-w-4xl mx-auto mb-16">
            <FAQAccordion items={faqItems} />
          </div>

          {/* CTA */}
          <div className="bg-background-muted rounded-2xl p-8 md:p-12 mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Deine Frage ist nicht dabei?
            </h2>
            <p className="text-lg text-foreground-muted mb-8 leading-relaxed">
              Dann lass uns kurz sprechen. Wir beantworten gerne alle Fragen – ohne Verkaufsdruck.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" asChild href="/kontakt">
                Kontakt
              </Button>
              <Button variant="secondary" size="lg" asChild href="/check">
                10-Minuten-Check
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
