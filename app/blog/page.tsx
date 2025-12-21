import { Section, Container } from '@/components/ui/Section';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: 'KI-Modernisierung im Alltag: Erste Schritte',
    href: '/blog/ki-modernisierung-erste-schritte',
    description:
      'Wie Du mit kleinen, pragmatischen Schritten KI in Deinen Arbeitsalltag integrierst – ohne große Umstellung und ohne neue Tools.',
    imageUrl: '/media/blog/1.jpg',
    date: '15. März 2024',
    datetime: '2024-03-15',
    author: {
      name: 'AKLOW Team',
      imageUrl: '/media/team/placeholder.jpg',
    },
  },
  {
    id: 2,
    title: 'Dokumente automatisch sortieren und finden',
    href: '/blog/dokumente-automatisch-sortieren',
    description:
      'Nie wieder Zettelchaos: Wie die KI Deine Dokumente versteht, einordnet und jederzeit wieder auffindbar macht.',
    imageUrl: '/media/blog/2.jpg',
    date: '8. März 2024',
    datetime: '2024-03-08',
    author: {
      name: 'AKLOW Team',
      imageUrl: '/media/team/placeholder.jpg',
    },
  },
  {
    id: 3,
    title: 'Intelligenter Posteingang: Mehr Ruhe im Alltag',
    href: '/blog/intelligenter-posteingang',
    description:
      'Wie Du Deine E-Mails, Nachrichten und Anfragen automatisch vorsortieren lässt und nur das Wichtige siehst.',
    imageUrl: '/media/blog/3.jpg',
    date: '1. März 2024',
    datetime: '2024-03-01',
    author: {
      name: 'AKLOW Team',
      imageUrl: '/media/team/placeholder.jpg',
    },
  },
  {
    id: 4,
    title: 'Kunden & Vorgänge: Alles im Überblick',
    href: '/blog/kunden-vorgaenge',
    description:
      'Wie die KI Gespräche, Nachrichten und Dokumente automatisch verbindet und Dir den vollständigen Kontext zeigt.',
    imageUrl: '/media/blog/4.jpg',
    date: '22. Februar 2024',
    datetime: '2024-02-22',
    author: {
      name: 'AKLOW Team',
      imageUrl: '/media/team/placeholder.jpg',
    },
  },
  {
    id: 5,
    title: 'Website & Telefon: Keine Anfrage mehr verpassen',
    href: '/blog/website-telefon',
    description:
      'Wie die KI auf Deiner Website und am Telefon unterstützt, Anliegen erkennt und gezielt weiterleitet.',
    imageUrl: '/media/blog/5.jpg',
    date: '15. Februar 2024',
    datetime: '2024-02-15',
    author: {
      name: 'AKLOW Team',
      imageUrl: '/media/team/placeholder.jpg',
    },
  },
  {
    id: 6,
    title: 'Bewertungen einholen und Feedback nutzen',
    href: '/blog/bewertungen-feedback',
    description:
      'Wie Du automatisch nach Feedback fragst, positives und kritisches Feedback früh erkennst und darauf reagierst.',
    imageUrl: '/media/blog/6.jpg',
    date: '8. Februar 2024',
    datetime: '2024-02-08',
    author: {
      name: 'AKLOW Team',
      imageUrl: '/media/team/placeholder.jpg',
    },
  },
];

export default function Blog() {
  return (
    <Section variant="normal" className="py-24 sm:py-32">
      <Container size="xl">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
            Aus dem Blog
          </h2>
          <p className="mt-2 text-lg text-foreground-muted leading-relaxed">
            Praktische Tipps und Insights für Deinen Alltag.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-[#111827] px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
            >
              <div className="absolute inset-0 -z-10">
                <div className="relative w-full h-full bg-gradient-to-br from-[#1F2937] to-[#111827]">
                  <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
                </div>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-white/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm text-foreground-muted">
                <time dateTime={post.datetime} className="mr-8">
                  {post.date}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 size-0.5 flex-none fill-white/30">
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    <div className="size-6 flex-none rounded-full bg-white/10 ring-1 ring-white/20" />
                    <span>{post.author.name}</span>
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white leading-snug">
                <Link href={post.href} className="hover:text-action transition-colors">
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-foreground-muted/80 leading-relaxed line-clamp-2">
                {post.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
