'use client';

import { useState } from 'react';
import { MiniChatDemo } from './MiniChatDemo';
import { AdminDemo } from './AdminDemo';
import { useLocale } from '@/hooks/useLocale';
import { t } from '@/lib/i18n';
import { classNames } from '@/lib/classNames';

type Tab = 'guest' | 'admin';

export function DemoTabs() {
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState<Tab>('guest');

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b border-border/50">
        <button
          onClick={() => setActiveTab('guest')}
          className={classNames(
            'px-6 py-3 text-base font-medium transition-all duration-[var(--motion-fast)] border-b-2',
            activeTab === 'guest'
              ? 'text-accent border-accent'
              : 'text-foreground-muted border-transparent hover:text-foreground'
          )}
        >
          {t(locale, 'pages.demo.tabs.guest') as string}
        </button>
        <button
          onClick={() => setActiveTab('admin')}
          className={classNames(
            'px-6 py-3 text-base font-medium transition-all duration-[var(--motion-fast)] border-b-2',
            activeTab === 'admin'
              ? 'text-accent border-accent'
              : 'text-foreground-muted border-transparent hover:text-foreground'
          )}
        >
          {t(locale, 'pages.demo.tabs.admin') as string}
        </button>
      </div>

      {/* Content */}
      <div className="min-h-[500px]">
        {activeTab === 'guest' && (
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t(locale, 'pages.demo.guest.title') as string}
              </h3>
              <p className="text-foreground-muted">
                {t(locale, 'pages.demo.guest.subtitle') as string}
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <MiniChatDemo />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'admin' && <AdminDemo />}
      </div>
    </div>
  );
}

