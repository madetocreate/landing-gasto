'use client';

import { useState } from 'react';
import { useLocale } from '@/hooks/useLocale';
import { t } from '@/lib/i18n';
import { classNames } from '@/lib/classNames';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { PosLiteDemo } from './PosLiteDemo';
import { WaiterDemo } from './WaiterDemo';

type SectionKey = 'setup' | 'operations' | 'pos' | 'waiter' | 'settings' | 'kds';

export function AdminDemo() {
  const locale = useLocale();

  const sections: Array<{ key: SectionKey; icon: string }> = [
    { key: 'setup', icon: '📋' },
    { key: 'operations', icon: '🧾' },
    { key: 'pos', icon: '💳' },
    { key: 'waiter', icon: '🧑‍🍳' },
    { key: 'settings', icon: '⚙️' },
    { key: 'kds', icon: '🍽️' },
  ];

  const [active, setActive] = useState<SectionKey>('setup');

  const radiusCard = 'rounded-[var(--radius-2xl)]';
  const padCard = 'p-[var(--space-6)]';

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">{t(locale, 'pages.demo.admin.title') as string}</h3>
        <p className="text-foreground-muted">{t(locale, 'pages.demo.admin.subtitle') as string}</p>
      </div>

      <div className="grid gap-[var(--space-6)] md:grid-cols-4">
        <div className="md:col-span-1">
          <SpotlightCard className={classNames(radiusCard, 'p-[var(--space-4)]')}>
            <nav className="space-y-[var(--space-2)]">
              {sections.map((section) => {
                const isActive = section.key === active;
                return (
                  <button
                    key={section.key}
                    type="button"
                    onClick={() => setActive(section.key)}
                    className={classNames(
                      'w-full text-left rounded-[var(--radius-xl)] px-[var(--space-4)] py-[var(--space-3)] text-sm font-semibold transition-colors',
                      isActive
                        ? 'bg-accent/10 text-accent'
                        : 'text-foreground-muted hover:text-foreground hover:bg-background-muted/60',
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="mr-[var(--space-3)]">{section.icon}</span>
                    {t(locale, `pages.demo.admin.sections.${section.key}`) as string}
                  </button>
                );
              })}
            </nav>
          </SpotlightCard>
        </div>

        <div className="md:col-span-3">
          {active === 'setup' && (
            <SpotlightCard className={classNames(radiusCard, padCard)}>
              <div className="flex items-center justify-between gap-[var(--space-4)]">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">{t(locale, 'pages.demo.admin.setup.h4') as string}</h4>
                  <p className="mt-1 text-sm text-foreground-muted">{t(locale, 'pages.demo.admin.setup.p') as string}</p>
                </div>
                <span className="text-xs text-foreground-muted bg-background-muted px-[var(--space-3)] py-[var(--space-2)] rounded-[var(--radius-xl)]">
                  {t(locale, 'pages.demo.admin.importStatus') as string}
                </span>
              </div>

              <div className="mt-[var(--space-6)] space-y-[var(--space-3)]">
                <div className="h-2 bg-background-muted rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: '65%' }} />
                </div>
                <p className="text-sm text-foreground-muted">{t(locale, 'pages.demo.admin.setup.progress') as string}</p>
              </div>
            </SpotlightCard>
          )}

          {active === 'operations' && (
            <SpotlightCard className={classNames(radiusCard, padCard)}>
              <h4 className="text-lg font-semibold text-foreground">{t(locale, 'pages.demo.admin.operations.h4') as string}</h4>
              <p className="mt-1 text-sm text-foreground-muted">{t(locale, 'pages.demo.admin.operations.p') as string}</p>

              <div className="mt-[var(--space-6)] grid sm:grid-cols-3 gap-[var(--space-3)]">
                {(['open', 'inKitchen', 'paid'] as const).map((k) => (
                  <div
                    key={k}
                    className="rounded-[var(--radius-2xl)] border border-border/50 bg-background-muted/40 p-[var(--space-4)]"
                  >
                    <div className="text-xs font-semibold text-foreground-muted uppercase tracking-wider">
                      {t(locale, `pages.demo.admin.operations.cards.${k}.label`) as string}
                    </div>
                    <div className="mt-[var(--space-2)] text-2xl font-semibold text-foreground">—</div>
                    <div className="mt-[var(--space-2)] text-xs text-foreground-muted">
                      {t(locale, `pages.demo.admin.operations.cards.${k}.hint`) as string}
                    </div>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          )}

          {active === 'pos' && <PosLiteDemo />}
          {active === 'waiter' && <WaiterDemo />}

          {active === 'settings' && (
            <SpotlightCard className={classNames(radiusCard, padCard)}>
              <h4 className="text-lg font-semibold text-foreground mb-[var(--space-4)]">
                {t(locale, 'pages.demo.admin.settings.h4') as string}
              </h4>
              <div className="space-y-[var(--space-3)]">
                <div className="flex items-center justify-between py-[var(--space-3)]">
                  <span className="text-sm text-foreground">{t(locale, 'pages.demo.admin.settings.rows.languages') as string}</span>
                  <span className="text-sm text-foreground-muted">DE, EN, ES</span>
                </div>
                <div className="flex items-center justify-between py-[var(--space-3)] border-t border-border/50">
                  <span className="text-sm text-foreground">{t(locale, 'pages.demo.admin.settings.rows.currency') as string}</span>
                  <span className="text-sm text-foreground-muted">EUR</span>
                </div>
                <div className="flex items-center justify-between py-[var(--space-3)] border-t border-border/50">
                  <span className="text-sm text-foreground">{t(locale, 'pages.demo.admin.settings.rows.timezone') as string}</span>
                  <span className="text-sm text-foreground-muted">Europe/Berlin</span>
                </div>
              </div>
            </SpotlightCard>
          )}

          {active === 'kds' && (
            <SpotlightCard className={classNames(radiusCard, padCard)}>
              <h4 className="text-lg font-semibold text-foreground mb-[var(--space-4)]">{t(locale, 'pages.demo.admin.kds.h4') as string}</h4>
              <p className="text-sm text-foreground-muted">{t(locale, 'pages.demo.admin.kds.p') as string}</p>

              <div className="mt-[var(--space-6)] space-y-[var(--space-3)]">
                {(['kitchen', 'bar'] as const).map((station) => (
                  <div
                    key={station}
                    className="flex items-center justify-between rounded-[var(--radius-2xl)] border border-border/50 bg-background-muted/40 px-[var(--space-4)] py-[var(--space-3)]"
                  >
                    <span className="text-sm font-semibold text-foreground">
                      {t(locale, `pages.demo.admin.kds.stations.${station}`) as string}
                    </span>
                    <span className="text-xs text-foreground-muted">{t(locale, 'pages.demo.admin.kds.statusActive') as string}</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          )}
        </div>
      </div>
    </div>
  );
}
