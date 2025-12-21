"use client"

import Link from 'next/link';
import { Locale, t } from '@/lib/i18n';
import { Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  locale: Locale;
}

function FooterLink({ href, label, isPlaceholder }: { href: string; label: string; isPlaceholder?: boolean }) {
  if (isPlaceholder || href === '#' || !href) {
    return (
      <span className="text-sm text-foreground-muted/60 font-medium">
        {label}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className="group text-sm text-foreground-muted hover:text-foreground transition-all duration-200 flex items-center gap-1 font-medium hover:scale-105 origin-left"
      style={{ willChange: 'transform' }}
    >
      <span>{label}</span>
      <span className="relative w-3 h-3 flex items-center justify-center">
        <ArrowUpRight className="w-3 h-3 absolute opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-y-0.5 translate-x-0.5" />
      </span>
    </Link>
  );
}

export function Footer({ locale }: FooterProps) {
  const currentYear = 2025; // Fixed year to avoid hydration mismatch

  const applicationsColumn = {
    title: t(locale, 'footer.columns.applications'),
    links: [
      { href: `/${locale}/anwendungen/intelligenter-posteingang`, label: t(locale, 'footer.links.app_inbox') },
      { href: `/${locale}/anwendungen/website-telefon`, label: t(locale, 'footer.links.app_website') },
      { href: `/${locale}/anwendungen/dokumente-ordnung`, label: t(locale, 'footer.links.app_documents') },
      { href: `/${locale}/anwendungen/bewertungen`, label: t(locale, 'footer.links.app_reviews') },
      { href: `/${locale}/anwendungen/kunden-vorgaenge`, label: t(locale, 'footer.links.app_customers') },
    ],
  };

  const menuColumn = {
    title: t(locale, 'footer.columns.menu'),
    links: [
      { href: `/${locale}/`, label: t(locale, 'footer.links.home') },
      { href: `/${locale}/anwendungen`, label: t(locale, 'footer.links.applications') },
      { href: `/${locale}/fundament`, label: t(locale, 'footer.links.fundament') },
      { href: `/${locale}/preise`, label: t(locale, 'footer.links.pricing') },
      { href: `/${locale}/kontakt`, label: t(locale, 'footer.links.contact') },
    ],
  };

  const companyColumn = {
    title: t(locale, 'footer.columns.company'),
    links: [
      { href: `/${locale}/ueber-uns`, label: t(locale, 'footer.links.about') },
      { href: `/${locale}/roadmap`, label: t(locale, 'footer.links.roadmap') },
      { href: `/${locale}/status`, label: t(locale, 'footer.links.status') },
      { href: `/${locale}/jobs`, label: t(locale, 'footer.links.jobs') || 'Jobs' },
      { href: `/${locale}/partner`, label: t(locale, 'footer.links.partner') || 'Partner' },
    ],
  };

  const knowledgeColumn = {
    title: t(locale, 'footer.columns.knowledge'),
    links: [
      { href: `/${locale}/wissen/erste-schritte`, label: t(locale, 'footer.links.getting_started') },
      { href: `/${locale}/wissen/system`, label: t(locale, 'footer.links.system') },
      { href: `/${locale}/wissen/ki-im-alltag`, label: t(locale, 'footer.links.ki_alltag') },
      { href: `/${locale}/wissen/sicherheit`, label: t(locale, 'footer.links.security') },
      { href: `/${locale}/wissen/faq`, label: t(locale, 'footer.links.faq') },
    ],
  };

  const footerColumns = [applicationsColumn, menuColumn, companyColumn, knowledgeColumn];

  const legalLinks = [
    { href: `/${locale}/impressum`, label: t(locale, 'footer.legalLinks.imprint') },
    { href: `/${locale}/datenschutz`, label: t(locale, 'footer.legalLinks.privacy') },
    { href: `/${locale}/cookies`, label: t(locale, 'footer.legalLinks.cookies') },
  ];

  const socialLinks = [
    { href: 'https://twitter.com/aklow_ai', icon: Twitter, label: 'X (Twitter)' },
    { href: 'https://linkedin.com/company/aklow', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://instagram.com/aklow_ai', icon: Instagram, label: 'Instagram' },
  ];

  const fineprint = t(locale, 'footer.fineprint', { 
    year: currentYear.toString(), 
    company: t(locale, 'brand.name') as string 
  }) as string;

  return (
    <footer className="bg-surface border-t border-border pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {footerColumns.map((column) => (
            <div key={column.title as string}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-8">
                {column.title as string}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link, idx) => (
                  <li key={idx}>
                    <FooterLink
                      href={link.href}
                      label={link.label as string}
                      isPlaceholder={!link.href || link.href === '#'}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-8">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium uppercase tracking-widest text-foreground-muted hover:text-foreground transition-colors"
              >
                {link.label as string}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-foreground-muted hover:text-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium text-foreground-muted">
            {fineprint}
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
            <span className="text-[10px] font-semibold uppercase tracking-widest text-foreground-muted">System Online</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
