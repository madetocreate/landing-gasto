import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Concierge } from '@/components/concierge/Concierge';
import { getLocale } from '@/lib/getLocale';

interface AppShellProps {
  children: ReactNode;
}

export async function AppShell({ children }: AppShellProps) {
  const locale = await getLocale();
  
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
      <Concierge locale={locale} />
    </div>
  );
}
