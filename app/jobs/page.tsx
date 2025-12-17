import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { Check, HandThumbUp, User } from 'lucide-react';
import { classNames } from '@/lib/classNames';

const timeline = [
  {
    id: 1,
    content: 'Bewerbung eingereicht für',
    target: 'Frontend Developer',
    href: '#',
    date: '20. Sep',
    datetime: '2024-09-20',
    icon: User,
    iconBackground: 'bg-[#1F2937]',
  },
  {
    id: 2,
    content: 'Weiterleitung an',
    target: 'Anna Schmidt',
    href: '#',
    date: '22. Sep',
    datetime: '2024-09-22',
    icon: HandThumbUp,
    iconBackground: 'bg-action',
  },
  {
    id: 3,
    content: 'Telefoninterview mit',
    target: 'Thomas Weber',
    href: '#',
    date: '28. Sep',
    datetime: '2024-09-28',
    icon: Check,
    iconBackground: 'bg-action',
  },
  {
    id: 4,
    content: 'Weiterleitung zum Interview durch',
    target: 'Anna Schmidt',
    href: '#',
    date: '30. Sep',
    datetime: '2024-09-30',
    icon: HandThumbUp,
    iconBackground: 'bg-action',
  },
  {
    id: 5,
    content: 'Interview abgeschlossen mit',
    target: 'Lisa Müller',
    href: '#',
    date: '4. Okt',
    datetime: '2024-10-04',
    icon: Check,
    iconBackground: 'bg-action',
  },
];

export default function Jobs() {
  return (
    <>
      <Section variant="normal">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="mb-6 text-4xl md:text-5xl font-bold tracking-tight">Jobs</h1>
            <p className="text-lg text-foreground-muted mb-12 prose max-w-3xl mx-auto">
              Werde Teil unseres Teams und hilf uns, den Mittelstand in das KI-Zeitalter zu bringen.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="mb-4 text-2xl font-bold">Offene Stellen</h2>
            <p className="text-foreground-muted prose max-w-3xl leading-relaxed">
              Aktuell haben wir keine offenen Stellen ausgeschrieben. 
              Wir wachsen jedoch ständig – bei Interesse an Rollen in Integration Engineering, 
              Full-Stack Entwicklung oder Customer Success kontaktiere uns gerne initiativ.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="mb-4 text-2xl font-bold">Bewerbungsprozess</h2>
            <p className="text-foreground-muted prose max-w-3xl mb-8 leading-relaxed">
              So läuft der Bewerbungsprozess bei uns ab:
            </p>
            <div className="flow-root max-w-3xl">
              <ul role="list" className="-mb-8">
                {timeline.map((event, eventIdx) => {
                  const Icon = event.icon;
                  return (
                    <li key={event.id}>
                      <div className="relative pb-8">
                        {eventIdx !== timeline.length - 1 ? (
                          <span aria-hidden="true" className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-border" />
                        ) : null}
                        <div className="relative flex space-x-3">
                          <div>
                            <span
                              className={classNames(
                                event.iconBackground,
                                'flex size-8 items-center justify-center rounded-full ring-8 ring-background',
                              )}
                            >
                              <Icon aria-hidden="true" className="size-5 text-white" strokeWidth={2} />
                            </span>
                          </div>
                          <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                            <div>
                              <p className="text-sm text-foreground-muted">
                                {event.content}{' '}
                                <a href={event.href} className="font-medium text-foreground hover:text-action transition-colors">
                                  {event.target}
                                </a>
                              </p>
                            </div>
                            <div className="text-right text-sm whitespace-nowrap text-foreground-muted">
                              <time dateTime={event.datetime}>{event.date}</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="mb-4 text-2xl font-bold">Bewerbung</h2>
            <p className="text-foreground-muted prose max-w-3xl leading-relaxed">
              Sende uns Deine Bewerbung per E-Mail an jobs@aklow.com. Wir melden uns schnell zurück.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="mb-4 text-2xl font-bold">Was uns wichtig ist</h2>
            <p className="text-foreground-muted prose max-w-3xl leading-relaxed">
              Neugier, Eigenverantwortung und der Wille, echte Probleme zu lösen. 
              Wir arbeiten remote-first, aber eng verbunden.
            </p>
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
