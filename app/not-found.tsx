import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Section';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Container size="md" className="text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-foreground-muted mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Seite nicht gefunden
            </h2>
            <p className="text-xl text-foreground-muted leading-relaxed mb-12">
              Die Seite, die Sie suchen, existiert nicht oder wurde verschoben.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button asChild href="/" variant="primary" size="lg" className="w-full sm:w-auto">
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                <span>Zur Startseite</span>
              </div>
            </Button>
            <Button asChild href="/anwendungen" variant="secondary" size="lg" className="w-full sm:w-auto">
              <div className="flex items-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                <span>Zu den Anwendungen</span>
              </div>
            </Button>
          </div>

          <div className="pt-12 border-t border-border">
            <p className="text-sm text-foreground-muted mb-6">
              Möglicherweise suchen Sie nach:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/anwendungen" className="text-action hover:text-action-hover transition-colors">
                Anwendungen
              </Link>
              <Link href="/fundament" className="text-action hover:text-action-hover transition-colors">
                Fundament
              </Link>
              <Link href="/preise" className="text-action hover:text-action-hover transition-colors">
                Preise
              </Link>
              <Link href="/kontakt" className="text-action hover:text-action-hover transition-colors">
                Kontakt
              </Link>
              <Link href="/wissen" className="text-action hover:text-action-hover transition-colors">
                Wissenshub
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

