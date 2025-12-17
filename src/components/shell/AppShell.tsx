import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Concierge } from '@/components/concierge/Concierge';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <Concierge />
    </div>
  );
}
