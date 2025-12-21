import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface InternalLinksProps {
  links: Array<{
    href: string;
    label: string;
    description?: string;
  }>;
  title?: string;
  className?: string;
}

export function InternalLinks({ links, title = "Weiterführende Informationen", className = "" }: InternalLinksProps) {
  if (!links || links.length === 0) return null;

  return (
    <section className={`py-12 border-t border-border/50 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="group p-4 rounded-xl bg-surface/50 hover:bg-surface border border-border/50 hover:border-action/30 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-action transition-colors mb-1">
                    {link.label}
                  </h3>
                  {link.description && (
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {link.description}
                    </p>
                  )}
                </div>
                <ArrowRight className="w-5 h-5 text-foreground-muted group-hover:text-action group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}




