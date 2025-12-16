import Link from 'next/link';
import { getLocale } from '@/lib/getLocale';
import { t } from '@/lib/i18n';

export async function Footer() {
  const locale = await getLocale();

  const footerColumns = [
    {
      title: t(locale, 'footer.columns.product'),
      links: [
        { href: '/', label: t(locale, 'footer.links.home') },
        { href: '/features', label: t(locale, 'footer.links.features') },
        { href: '/preise', label: t(locale, 'footer.links.pricing') },
        { href: '/demo', label: t(locale, 'nav.drawer.links.demo_view') },
        { href: '/demo#form', label: t(locale, 'footer.links.demo') },
      ],
    },
    {
      title: t(locale, 'footer.columns.features'),
      links: [
        { href: '/features/bestellen', label: t(locale, 'footer.links.feat_ordering') },
        { href: '/features/kueche-bar', label: t(locale, 'footer.links.feat_kds') },
        { href: '/features/pos-lite', label: t(locale, 'footer.links.feat_poslite') },
        { href: '/features', label: t(locale, 'footer.links.feat_service') },
      ],
    },
    {
      title: t(locale, 'footer.columns.company'),
      links: [
        { href: '/ueber-uns', label: t(locale, 'footer.links.about') },
        { href: '/kontakt', label: t(locale, 'footer.links.contact') },
        { href: '/partner', label: t(locale, 'footer.links.partners') },
        { href: '/jobs', label: t(locale, 'footer.links.jobs') },
      ],
    },
    {
      title: t(locale, 'footer.columns.knowledge'),
      links: [
        { href: '/wissen', label: t(locale, 'footer.links.kb_home') },
        { href: '/wissen/erste-schritte', label: t(locale, 'footer.links.kb_getting_started') },
        { href: '/wissen/faq', label: t(locale, 'footer.links.kb_faq') },
        { href: '/blog', label: t(locale, 'footer.links.blog') },
      ],
    },
  ];

  const legalLinks = [
    { href: '/impressum', label: t(locale, 'footer.legalLinks.imprint') },
    { href: '/datenschutz', label: t(locale, 'footer.legalLinks.privacy') },
    { href: '/cookies', label: t(locale, 'footer.legalLinks.cookies') },
    { href: '/status', label: t(locale, 'footer.legalLinks.status') },
  ];

  return (
    <footer className="bg-background-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 4x4 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-[var(--motion-fast)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal Block */}
        <div className="pt-8">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start mb-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-foreground-muted hover:text-foreground transition-colors duration-[var(--motion-fast)]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-foreground-muted text-center md:text-left">
            {t(locale, 'footer.fineprint', { 
              year: new Date().getFullYear().toString(), 
              company: t(locale, 'brand.name') 
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
