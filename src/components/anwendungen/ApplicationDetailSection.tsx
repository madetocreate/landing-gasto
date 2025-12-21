import { Section, Container } from "@/components/ui/Section"
import Image from "next/image"
import Link from "next/link"
import { classNames } from "@/lib/classNames"
import { ArrowRight, CheckCircle2 } from "lucide-react"

interface ApplicationDetail {
  key: string
  title: string
  headline?: string
  shortText: string
  features: string[]
  example: string
  result: string
  imagePath: string
  href: string
}

export const applications: ApplicationDetail[] = [
  {
    key: 'inbox',
    title: 'Posteingang',
    headline: 'Alles an einem Ort.',
    shortText: 'E-Mails, WhatsApp, Support – alle Nachrichten fließen in einen Posteingang. Die KI sortiert, fasst zusammen und bereitet Antworten vor.',
    features: [
      'Alle Kanäle in einem Posteingang',
      'Automatisch nach Wichtigkeit sortiert',
      'Zusammenfassungen auf einen Blick',
      'Antwort-Vorschläge per Klick',
      'Du entscheidest, was rausgeht'
    ],
    example: 'Du öffnest AKLOW und siehst sofort: Was ist wichtig? Was kann warten? Und für die wichtigen Sachen liegen Antwort-Entwürfe bereit.',
    result: 'Weniger Chaos. Mehr Überblick. Schneller antworten.',
    imagePath: '/media/previews/inbox.jpg',
    href: '/anwendungen/intelligenter-posteingang'
  },
  {
    key: 'dokumente-ordnung',
    title: 'Dokumente',
    headline: 'Nie wieder Zettelchaos.',
    shortText: 'Rechnungen, Verträge, Notizen – einfach scannen oder hochladen. Die KI liest, versteht und sortiert. Frag sie, was drin steht.',
    features: [
      'PDFs, Scans und Fotos verstehen',
      'Automatisch dem richtigen Kunden zuordnen',
      'Inhalte durchsuchbar machen',
      'Fragen stellen: "Was steht in der Rechnung?"'
    ],
    example: 'Du fotografierst eine Rechnung. AKLOW liest sie aus, ordnet sie dem Kunden zu und du kannst später fragen: "Wie viel schuldet mir Firma X?"',
    result: 'Nie wieder suchen. Alles findbar. Alles verstanden.',
    imagePath: '/media/previews/dokumente-ordnung.jpg',
    href: '/anwendungen/dokumente-ordnung'
  },
  {
    key: 'kunden-vorgaenge',
    title: 'Kunden',
    shortText: 'Die KI merkt sich alles. Jeder Kontakt, jedes Gespräch, jedes Dokument – immer griffbereit. Kein CRM-Stress.',
    features: [
      'Alles zu einem Kunden auf einen Blick',
      'Automatische Kontakt-Historie',
      'Verknüpfte Dokumente und Nachrichten',
      'Erinnerungen und nächste Schritte'
    ],
    example: 'Ein Kunde ruft an. Du fragst AKLOW: "Was weiß ich über Firma Müller?" – und hast sofort den kompletten Kontext.',
    result: 'Nie wieder vergessen. Immer vorbereitet. Kunden beeindruckt.',
    imagePath: '/media/previews/kunden-vorgaenge.jpg',
    href: '/anwendungen/kunden-vorgaenge'
  },
  {
    key: 'bewertungen',
    title: 'Bewertungen',
    shortText: 'Google-Bewertungen automatisch beantworten. Freundlich, schnell, in deinem Stil. Die KI schreibt, du gibst frei.',
    features: [
      'Neue Bewertungen sofort sehen',
      'Antwort-Vorschläge in deinem Ton',
      'Mit einem Klick veröffentlichen',
      'Trends und Stimmung erkennen'
    ],
    example: 'Neue 5-Sterne-Bewertung? AKLOW schreibt eine passende Antwort. Du schaust drüber, klickst "Senden" – fertig.',
    result: 'Mehr Antworten. Bessere Bewertungen. Weniger Aufwand.',
    imagePath: '/media/previews/bewertungen.jpg',
    href: '/anwendungen/bewertungen'
  },
  {
    key: 'website-telefon',
    title: 'Website & Telefon Bot',
    headline: 'Upgrade',
    shortText: '24/7 erreichbar. Die KI beantwortet Fragen auf deiner Website und nimmt Anrufe an. Du verpasst nichts mehr.',
    features: [
      'Website-Chat beantwortet Fragen sofort',
      'Telefon-Bot nimmt Anrufe an',
      'Termine werden automatisch gebucht',
      'Wichtiges wird an dich weitergeleitet'
    ],
    example: 'Ein Kunde ruft um 22 Uhr an. Der Bot nimmt ab, beantwortet die Frage oder nimmt eine Nachricht auf. Am nächsten Morgen hast du alles im Posteingang.',
    result: 'Nie wieder verpasste Anfragen. Rund um die Uhr erreichbar.',
    imagePath: '/media/previews/website-telefon.jpg',
    href: '/anwendungen/website-telefon'
  }
]

export function SingleApplicationSection({ app, index }: { app: ApplicationDetail, index: number }) {
  const isReversed = index % 2 === 1
  
  return (
    <Section id={app.key} variant="normal" className="py-8 sm:py-12 md:py-16">
      <Container size="xl">
        <div className="rounded-2xl sm:rounded-[3rem] overflow-hidden bg-white border-2 border-stone-100 shadow-2xl shadow-stone-200/50">
          <div className={classNames(
            "grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch",
            isReversed ? "md:grid-flow-dense" : ""
          )}>
            {/* Text Content */}
            <div className={classNames(
              "p-6 sm:p-8 md:p-12 lg:p-20 flex flex-col justify-center",
              isReversed ? "md:col-start-2" : ""
            )}>
              <div className="mb-8 sm:mb-12">
                {app.headline && (
                  <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-emerald-50 text-action text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
                    {app.headline}
                  </div>
                )}
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter mb-4 sm:mb-8 text-stone-900 leading-[1.1] break-words">
                  {app.title}
                </h3>
                <p className="text-lg sm:text-xl text-stone-500 font-medium leading-relaxed break-words">
                  {app.shortText}
                </p>
              </div>

              <div className="mb-8 sm:mb-12">
                <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-stone-400 mb-4 sm:mb-6">
                  Highlights
                </h4>
                <ul className="space-y-3 sm:space-y-4">
                  {app.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 sm:gap-4">
                      <div className="mt-1 p-0.5 rounded-full bg-emerald-100 text-action shrink-0">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="text-base sm:text-lg font-medium text-stone-700 break-words">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 sm:pt-10 border-t-2 border-stone-50 mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
                <div className="flex-1">
                  <p className="text-[10px] sm:text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Dein Benefit</p>
                  <p className="text-lg sm:text-xl font-bold text-stone-900 leading-snug break-words">
                    {app.result}
                  </p>
                </div>
                <Link
                  href={app.href}
                  className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-stone-900 text-white font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-stone-800 transition-all shadow-lg shadow-stone-200 w-full sm:w-auto justify-center touch-manipulation min-h-[44px]"
                >
                  <span>Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className={classNames(
              "relative aspect-video sm:aspect-square md:aspect-auto bg-stone-100 min-h-[250px] sm:min-h-[400px]",
              isReversed ? "md:col-start-1 md:row-start-1 md:border-r-2 border-stone-50" : "md:border-l-2 border-stone-50"
            )}>
              <Image
                src={app.imagePath}
                alt={app.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
              {/* Fallback Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-stone-200/50 via-stone-100/30 to-stone-50 flex items-center justify-center pointer-events-none">
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-xl bg-stone-200/50 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-stone-500 font-medium">{app.title}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export function ApplicationDetailSections() {
  return (
    <div className="space-y-24 py-24">
      {applications.map((app, idx) => (
        <SingleApplicationSection key={app.key} app={app} index={idx} />
      ))}
    </div>
  )
}
