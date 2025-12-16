'use client';

import { useState } from 'react';
import { StaticWizardProvider } from './providers/StaticWizardProvider';
import type { ChatMessage } from './providers/ChatProvider';
import { classNames } from '@/lib/classNames';
import Link from 'next/link';

interface KbSearchProps {
  category?: string;
}

export function KbSearch({ category }: KbSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ChatMessage[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const provider = new StaticWizardProvider();

  const handleSearch = async () => {
    if (!query.trim()) return;

    setIsSearching(true);
    try {
      const searchResults = await provider.searchKnowledgeBase(query, category);
      setResults(searchResults);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="p-4 h-full overflow-y-auto">
      <div className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
            placeholder="Suche in der Wissensbasis..."
            className={classNames(
              'flex-1 px-4 py-2 rounded-lg',
              'bg-background-muted border border-border/50',
              'text-foreground placeholder:text-foreground-muted',
              'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1'
            )}
          />
          <button
            onClick={handleSearch}
            disabled={!query.trim() || isSearching}
            className={classNames(
              'px-4 py-2 rounded-lg',
              'bg-accent text-accent-foreground',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'hover:bg-accent-hover',
              'transition-colors duration-[var(--motion-fast)]'
            )}
          >
            Suchen
          </button>
        </div>
      </div>

      {isSearching && (
        <div className="text-center py-8 text-foreground-muted">
          Suche...
        </div>
      )}

      {!isSearching && results.length > 0 && (
        <div className="space-y-4">
          {results.map((result) => (
            <div
              key={result.id}
              className="p-4 bg-surface rounded-lg border border-border/50"
            >
              <p className="text-sm text-foreground mb-2">{result.content}</p>
              {result.links && result.links.length > 0 && (
                <div className="mt-2 flex flex-col gap-1">
                  {result.links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      className="text-xs text-accent hover:underline"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {!isSearching && query && results.length === 0 && (
        <div className="text-center py-8 text-foreground-muted">
          Keine Ergebnisse gefunden.
        </div>
      )}
    </div>
  );
}

