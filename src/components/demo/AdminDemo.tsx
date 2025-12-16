'use client';

import { useLocale } from '@/hooks/useLocale';
import { t } from '@/lib/i18n';
import { classNames } from '@/lib/classNames';

export function AdminDemo() {
  const locale = useLocale();

  const sections = [
    { key: 'onboarding', icon: '📋' },
    { key: 'settings', icon: '⚙️' },
    { key: 'pos', icon: '💳' },
    { key: 'kds', icon: '🍽️' },
  ];

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {t(locale, 'pages.demo.admin.title')}
        </h3>
        <p className="text-foreground-muted">
          {t(locale, 'pages.demo.admin.subtitle')}
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-surface rounded-lg p-4 shadow-[var(--shadow-2)]">
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.key}
                  className={classNames(
                    'w-full text-left px-4 py-2.5 text-sm font-medium rounded-md transition-all duration-[var(--motion-fast)]',
                    'text-foreground-muted hover:text-foreground hover:bg-background-muted'
                  )}
                >
                  <span className="mr-2">{section.icon}</span>
                  {t(locale, `pages.demo.admin.sections.${section.key}`)}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3 space-y-6">
          {/* Onboarding Card */}
          <div className="bg-surface rounded-lg p-6 shadow-[var(--shadow-2)]">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-foreground">
                {t(locale, 'pages.demo.admin.sections.onboarding')}
              </h4>
              <span className="text-xs text-foreground-muted bg-background-muted px-2 py-1 rounded">
                {t(locale, 'pages.demo.admin.importStatus')}
              </span>
            </div>
            <div className="space-y-3">
              <div className="h-2 bg-background-muted rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="text-sm text-foreground-muted">
                Menü wird importiert... 65%
              </p>
            </div>
          </div>

          {/* Settings Card */}
          <div className="bg-surface rounded-lg p-6 shadow-[var(--shadow-2)]">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              {t(locale, 'pages.demo.admin.sections.settings')}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-foreground">Sprachen</span>
                <span className="text-sm text-foreground-muted">DE, EN, ES</span>
              </div>
              <div className="flex items-center justify-between py-2 border-t border-border/50">
                <span className="text-sm text-foreground">Währung</span>
                <span className="text-sm text-foreground-muted">EUR</span>
              </div>
              <div className="flex items-center justify-between py-2 border-t border-border/50">
                <span className="text-sm text-foreground">Zeitzone</span>
                <span className="text-sm text-foreground-muted">Europe/Berlin</span>
              </div>
            </div>
          </div>

          {/* POS Card */}
          <div className="bg-surface rounded-lg p-6 shadow-[var(--shadow-2)]">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              {t(locale, 'pages.demo.admin.sections.pos')}
            </h4>
            <div className="grid grid-cols-3 gap-4">
              {['Floor', 'Orders', 'Reports'].map((item) => (
                <div
                  key={item}
                  className="p-4 bg-background-muted rounded-lg text-center"
                >
                  <div className="text-2xl font-semibold text-foreground mb-1">-</div>
                  <div className="text-xs text-foreground-muted">{item}</div>
                </div>
              ))}
            </div>
          </div>

          {/* KDS Card */}
          <div className="bg-surface rounded-lg p-6 shadow-[var(--shadow-2)]">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              {t(locale, 'pages.demo.admin.sections.kds')}
            </h4>
            <div className="space-y-2">
              {['Küche', 'Bar'].map((station) => (
                <div
                  key={station}
                  className="flex items-center justify-between p-3 bg-background-muted rounded-lg"
                >
                  <span className="text-sm font-medium text-foreground">{station}</span>
                  <span className="text-xs text-foreground-muted">Aktiv</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

