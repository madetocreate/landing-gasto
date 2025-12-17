import { CTASection } from "@/components/ui/CTASection";
import { Section, Container } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Button } from "@/components/ui/Button";
import { getLocale } from "@/lib/getLocale";
import { t } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createMetadata({
    title: t(locale, "pages.cases.meta.title"),
    description: t(locale, "pages.cases.meta.description"),
    path: "/cases",
  });
}

export default async function Cases() {
  const locale = await getLocale();
  const items = t(locale, "pages.cases.items") as Array<{ title: string; text: string }>;

  return (
    <>
      <Section variant="hero" className="pt-32 pb-16">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="mb-6 tracking-tight">{t(locale, "pages.cases.h1")}</h1>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
              {t(locale, "pages.cases.intro")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {(items || []).map((c) => (
              <SpotlightCard key={c.title} className="p-8 h-full flex flex-col bg-surface/60">
                <div className="text-sm font-medium text-accent mb-2">{c.title}</div>
                <p className="text-sm md:text-base text-foreground-muted leading-relaxed prose flex-1">
                  {c.text}
                </p>
              </SpotlightCard>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="primary" size="lg" asChild href="/demo" className="rounded-full px-8">
              {t(locale, "pages.cases.cta")}
            </Button>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}


