import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/shell/AppShell";
import { createMetadata } from "@/lib/metadata";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { getLocale } from "@/lib/getLocale";
import { localeToHTMLLang } from "@/lib/metadata";
import { StructuredData } from "@/components/seo/StructuredData";
import { AnalyticsInit } from "@/components/analytics/AnalyticsInit";
import { StickyMobileCTA } from "@/components/home/StickyMobileCTA";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createMetadata({
    title: "AKLOW",
    description: "Dein KI-Assistent fürs Business",
    path: "/",
    locale,
  });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const htmlLang = localeToHTMLLang[locale];

  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <head>
        <StructuredData locale={locale} />
        {/* Satoshi Font - Premium Display Font */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link 
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-sans">
        <AnalyticsInit />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppShell>{children}</AppShell>
          <StickyMobileCTA locale={locale} />
        </ThemeProvider>
      </body>
    </html>
  );
}
