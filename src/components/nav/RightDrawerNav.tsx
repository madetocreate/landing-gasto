'use client';

import { useEffect } from 'react';
import { NavLink } from './NavLink';
import { FocusTrap } from '@/components/ui/FocusTrap';
import { Button } from '@/components/ui/Button';
import { classNames } from '@/lib/classNames';
import { useLocale } from '@/hooks/useLocale';
import { t } from '@/lib/i18n';

interface RightDrawerNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RightDrawerNav({ isOpen, onClose }: RightDrawerNavProps) {
  const locale = useLocale();

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const navGroups = [
    {
      title: t(locale, 'nav.drawer.groups.product'),
      items: [
        { href: '/', label: t(locale, 'nav.drawer.links.home') },
        { href: '/features', label: t(locale, 'nav.drawer.links.features') },
        { href: '/preise', label: t(locale, 'nav.drawer.links.pricing') },
        { href: '/demo', label: t(locale, 'nav.drawer.links.demo_view') },
        { href: '/demo#form', label: t(locale, 'nav.drawer.links.demo') },
      ],
    },
    {
      title: t(locale, 'nav.drawer.groups.features'),
      items: [
        { href: '/features/bestellen', label: t(locale, 'nav.drawer.links.feat_ordering') },
        { href: '/features/kueche-bar', label: t(locale, 'nav.drawer.links.feat_kds') },
        { href: '/features/pos-lite', label: t(locale, 'nav.drawer.links.feat_poslite') },
      ],
    },
    {
      title: t(locale, 'nav.drawer.groups.knowledge'),
      items: [
        { href: '/wissen', label: t(locale, 'nav.drawer.links.kb_home') },
        { href: '/wissen/erste-schritte', label: t(locale, 'nav.drawer.links.kb_getting_started') },
        { href: '/wissen/faq', label: t(locale, 'nav.drawer.links.kb_faq') },
        { href: '/blog', label: t(locale, 'nav.drawer.links.blog') },
      ],
    },
    {
      title: t(locale, 'nav.drawer.groups.company'),
      items: [
        { href: '/ueber-uns', label: t(locale, 'nav.drawer.links.about') },
        { href: '/kontakt', label: t(locale, 'nav.drawer.links.contact') },
      ],
    },
    {
      title: t(locale, 'nav.drawer.groups.legal'),
      items: [
        { href: '/impressum', label: t(locale, 'nav.drawer.links.imprint') },
        { href: '/datenschutz', label: t(locale, 'nav.drawer.links.privacy') },
      ],
    },
  ];

  return (
    <FocusTrap isActive={isOpen}>
      <div
        className={classNames(
          'fixed inset-y-0 right-0 z-50 w-full md:w-[var(--drawer-width-desktop)]',
          'bg-surface',
          'transform transition-transform duration-[var(--drawer-transition)] ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
          'flex flex-col',
          'shadow-[var(--shadow-3)]'
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5">
          <h2 id="drawer-title" className="text-lg font-semibold text-foreground">
            {t(locale, 'nav.drawer.title')}
          </h2>
          <button
            onClick={onClose}
            className="p-2 -mr-2 rounded-md text-foreground-muted hover:text-foreground hover:bg-background-muted transition-all duration-[var(--motion-fast)] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            aria-label={t(locale, 'common.cta_close')}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Groups */}
        <nav className="flex-1 overflow-y-auto px-2" aria-label="Hauptnavigation">
          {navGroups.map((group, groupIndex) => (
            <div key={group.title} className={classNames(groupIndex > 0 && 'mt-8')}>
              <h3 className="px-4 py-2 text-xs font-semibold text-foreground-muted uppercase tracking-wider">
                {group.title}
              </h3>
              <ul className="space-y-0.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <NavLink href={item.href} onClick={onClose}>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer Actions */}
        <div className="px-6 py-5 space-y-3 border-t border-border/50">
          <Button variant="primary" size="lg" className="w-full" asChild href="/demo#form" onClick={onClose}>
            {t(locale, 'nav.drawer.links.demo')}
          </Button>
          <Button variant="ghost" size="md" className="w-full" asChild href="/demo" onClick={onClose}>
            {t(locale, 'nav.drawer.links.demo_view')}
          </Button>
        </div>
      </div>
    </FocusTrap>
  );
}
