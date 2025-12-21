import { CTASection } from '@/components/ui/CTASection';
import { Section, Container } from '@/components/ui/Section';
import { TeamGrid } from '@/components/ueber-uns/TeamGrid';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: t('de', 'pages.ueber_uns.meta.title') as string,
  description: t('de', 'pages.ueber_uns.meta.description') as string,
  path: '/ueber-uns'
});

export default async function UeberUns() {
  const locale = await getLocale();
  const whatDrives = t(locale, 'pages.ueber_uns.whatDrives') as {title: string, p1: string, p2: string, p3: string};
  const approach = t(locale, 'pages.ueber_uns.approach') as {title: string, p1: string, p2: string, p3: string};
  const important = t(locale, 'pages.ueber_uns.important') as {title: string, simplicity: {label: string, text: string}, control: {label: string, text: string}, measurability: {label: string, text: string}};
  const team = t(locale, 'pages.ueber_uns.team') as {title: string, desc: string};

  return (
    <>
      <Section variant="normal">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="mb-6 text-4xl md:text-5xl font-bold tracking-tight">{t(locale, 'pages.ueber_uns.h1') as string}</h1>
            <p className="text-lg text-foreground-muted mb-12 prose max-w-3xl mx-auto leading-relaxed">
              {t(locale, 'pages.ueber_uns.intro') as string}
            </p>
          </div>

          <div className="mb-24 max-w-3xl mx-auto">
            <h2 className="mb-4 text-2xl md:text-3xl font-bold">{whatDrives.title}</h2>
            <p className="text-foreground-muted prose leading-relaxed mb-6">
              {whatDrives.p1}
            </p>
            <p className="text-foreground-muted prose leading-relaxed mb-6">
              {whatDrives.p2}
            </p>
            <p className="text-foreground-muted prose leading-relaxed">
              {whatDrives.p3}
            </p>
          </div>

          <div className="mb-24 max-w-3xl mx-auto">
            <h2 className="mb-4 text-2xl md:text-3xl font-bold">{approach.title}</h2>
            <p className="text-foreground-muted prose leading-relaxed mb-6">
              {approach.p1}
            </p>
            <p className="text-foreground-muted prose leading-relaxed mb-6">
              {approach.p2}
            </p>
            <p className="text-foreground-muted prose leading-relaxed">
              {approach.p3}
            </p>
          </div>

          <div className="mb-24 max-w-3xl mx-auto">
            <h2 className="mb-4 text-2xl md:text-3xl font-bold">{important.title}</h2>
            <p className="text-foreground-muted prose leading-relaxed mb-6">
              <strong className="text-foreground">{important.simplicity.label}</strong> {important.simplicity.text}
            </p>
            <p className="text-foreground-muted prose leading-relaxed mb-6">
              <strong className="text-foreground">{important.control.label}</strong> {important.control.text}
            </p>
            <p className="text-foreground-muted prose leading-relaxed">
              <strong className="text-foreground">{important.measurability.label}</strong> {important.measurability.text}
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal" className="bg-background-muted">
        <Container size="xl">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
              {team.title}
            </h2>
            <p className="mt-6 text-lg text-foreground-muted leading-relaxed">
              {team.desc}
            </p>
          </div>
          <TeamGrid />
        </Container>
      </Section>

      <CTASection locale={locale} />
    </>
  );
}
