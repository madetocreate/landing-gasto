"use client"

import Link from 'next/link';
import { useLocale } from '@/hooks/useLocale';
import { t } from '@/lib/i18n';
import { Twitter, Linkedin, Instagram } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';

function FooterLink({ href, label, isPlaceholder }: { href: string; label: string; isPlaceholder?: boolean }) {
  const [magnetOffset, setMagnetOffset] = useState({ x: 0, y: 0 });
  const linkRef = useRef<HTMLAnchorElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const prefersReducedMotion = shouldReduceMotion || false;

  useEffect(() => {
    if (prefersReducedMotion || isPlaceholder || href === '#') return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!linkRef.current) return;
      
      const rect = linkRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      // Magnet-Effekt nur bei nahem Cursor (max 60px) und nur auf Desktop
      if (distance < 60 && window.matchMedia('(pointer: fine)').matches) {
        const strength = (1 - distance / 60) * 0.3; // Max 3px offset
        setMagnetOffset({
          x: deltaX * strength,
          y: deltaY * strength,
        });
      } else {
        setMagnetOffset({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setMagnetOffset({ x: 0, y: 0 });
    };

    const link = linkRef.current;
    if (link) {
      link.addEventListener('mousemove', handleMouseMove);
      link.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (link) {
        link.removeEventListener('mousemove', handleMouseMove);
        link.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [prefersReducedMotion, isPlaceholder, href]);

  if (isPlaceholder || href === '#') {
    return (
      <span className="text-sm text-foreground-muted/50">
        {label}
      </span>
    );
  }

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      ref={linkRef}
      href={href}
      className="text-sm text-foreground-muted hover:text-action hover:font-bold transition-all duration-300 ease-out inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2 focus-visible:rounded"
      style={{
        transform: prefersReducedMotion ? 'none' : `translate(${magnetOffset.x}px, ${magnetOffset.y}px) scale(${isHovered ? 1.085 : (magnetOffset.x !== 0 || magnetOffset.y !== 0 ? 1.03 : 1)})`,
        transition: prefersReducedMotion ? 'none' : 'transform 200ms ease-out, color 300ms ease-out, font-weight 200ms ease-out',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
    </Link>
  );
}

export function Footer() {
  const locale = useLocale();
  const shouldReduceMotion = useReducedMotion();

  // NEU: Spalte 1: Anwendungen (5 Punkte)
  const applicationsColumn = {
    title: t(locale, 'footer.columns.applications'),
    links: [
      { href: '/anwendungen/intelligenter-posteingang', label: t(locale, 'footer.links.app_inbox') },
      { href: '/anwendungen/website-telefon', label: t(locale, 'footer.links.app_website') },
      { href: '/anwendungen/dokumente-ordnung', label: t(locale, 'footer.links.app_documents') },
      { href: '/anwendungen/bewertungen', label: t(locale, 'footer.links.app_reviews') },
      { href: '/anwendungen/kunden-vorgaenge', label: t(locale, 'footer.links.app_customers') },
    ],
  };

  // NEU: Spalte 2: Menü (5 Punkte)
  const menuColumn = {
    title: t(locale, 'footer.columns.menu'),
    links: [
      { href: '/', label: t(locale, 'footer.links.home') },
      { href: '/anwendungen', label: t(locale, 'footer.links.applications') },
      { href: '/fundament', label: t(locale, 'footer.links.fundament') },
      { href: '/preise', label: t(locale, 'footer.links.pricing') },
      { href: '/kontakt', label: t(locale, 'footer.links.contact') },
    ],
  };

  // NEU: Spalte 3: Unternehmen (5 Punkte)
  const companyColumn = {
    title: t(locale, 'footer.columns.company'),
    links: [
      { href: '/ueber-uns', label: t(locale, 'footer.links.about') },
      { href: '/roadmap', label: t(locale, 'footer.links.roadmap') },
      { href: '/status', label: t(locale, 'footer.links.status') },
      { href: '/kontakt', label: t(locale, 'footer.links.contact') },
      { href: '/haltung', label: t(locale, 'footer.links.values') },
    ],
  };

  // NEU: Spalte 4: Wissenshub (5 Punkte)
  const knowledgeColumn = {
    title: t(locale, 'footer.columns.knowledge'),
    links: [
      { href: '/wissen/erste-schritte', label: t(locale, 'footer.links.getting_started') },
      { href: '/wissen/system', label: t(locale, 'footer.links.system') },
      { href: '/wissen/ki-im-alltag', label: t(locale, 'footer.links.ki_alltag') },
      { href: '/wissen/sicherheit', label: t(locale, 'footer.links.security') },
      { href: '/wissen/faq', label: t(locale, 'footer.links.faq') },
    ],
  };

  // NEU: Reihenfolge geändert
  const footerColumns = [applicationsColumn, menuColumn, companyColumn, knowledgeColumn];

  const legalLinks = [
    { href: '/impressum', label: t(locale, 'footer.legalLinks.imprint') },
    { href: '/datenschutz', label: t(locale, 'footer.legalLinks.privacy') },
    { href: '/cookies', label: t(locale, 'footer.legalLinks.cookies') },
  ];

  const socialLinks = [
    { href: '#', icon: Twitter, label: 'X (Twitter)' },
    { href: '#', icon: Linkedin, label: 'LinkedIn' },
    { href: '#', icon: Instagram, label: 'Instagram' },
  ];

  return (
    <footer className="bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 4 Spalten × 5 Punkte = 20 Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, idx) => (
                  <li key={idx}>
                    <FooterLink
                      href={link.href}
                      label={link.label}
                      isPlaceholder={link.href === '#' && !link.label}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row: Legal Links + Social Media + Copyright */}
        <div className="pt-8">
          <div className="flex flex-col gap-6">
            {/* Legal Links (zentriert) */}
            <div className="flex flex-wrap justify-center gap-6">
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

            {/* Social Media Icons (zentriert) */}
            <div className="flex items-center justify-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent text-white hover:bg-action hover:text-white transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2"
                    style={{
                      transform: shouldReduceMotion ? 'none' : 'scale(1)',
                      transition: shouldReduceMotion ? 'none' : 'transform 200ms ease-out, background-color 300ms ease-out',
                    }}
                    onMouseEnter={(e) => {
                      if (!shouldReduceMotion) {
                        e.currentTarget.style.transform = 'scale(1.078)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!shouldReduceMotion) {
                        e.currentTarget.style.transform = 'scale(1)';
                      }
                    }}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Copyright */}
          <p className="text-xs text-foreground-muted text-center mt-6">
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
