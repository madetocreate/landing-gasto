'use client';

import { useState } from 'react';
import { classNames } from '@/lib/classNames';
import Link from 'next/link';

interface OnboardingWizardProps {
  onComplete: (recommendation: { package: 'basic' | 'pro' | 'premium'; reason: string }) => void;
}

type BusinessType = 'bar' | 'cafe' | 'restaurant' | null;
type Answer = 'yes' | 'no' | null;

export function OnboardingWizard({ onComplete }: OnboardingWizardProps) {
  const [step, setStep] = useState(0);
  const [businessType, setBusinessType] = useState<BusinessType>(null);
  const [needsKds, setNeedsKds] = useState<Answer>(null);

  const handleBusinessType = (type: BusinessType) => {
    setBusinessType(type);
    setStep(1);
  };

  const handleKds = (answer: Answer) => {
    setNeedsKds(answer);
    setStep(2);
  };

  const handleLanguages = () => {
    calculateRecommendation();
  };

  const calculateRecommendation = () => {
    let recommendedPackage: 'basic' | 'pro' | 'premium' = 'basic';
    let reason = '';

    if (needsKds === 'yes') {
      recommendedPackage = 'pro';
      reason = 'Du brauchst Küche & Bar (KDS) – das ist im Pro-Paket enthalten.';
    }

    if (needsKds === 'yes' && (businessType === 'restaurant' || businessType === 'bar')) {
      recommendedPackage = 'premium';
      reason = 'Mit KDS und deinem Betriebstyp passt Premium am besten. Du bekommst auch POS-Lite und erweiterte Features.';
    }

    if (needsKds === 'no' && businessType === 'cafe') {
      recommendedPackage = 'basic';
      reason = 'Für ein Café reicht Basic völlig aus. Du kannst später jederzeit upgraden.';
    }

    setTimeout(() => {
      onComplete({ package: recommendedPackage, reason });
    }, 500);
  };

  if (step === 0) {
    return (
      <div className="p-4 h-full overflow-y-auto">
        <h3 className="text-lg font-semibold text-foreground mb-4">Was für ein Betrieb?</h3>
        <div className="space-y-2">
          {(['bar', 'cafe', 'restaurant'] as const).map((type) => (
            <button
              key={type}
              onClick={() => handleBusinessType(type)}
              className={classNames(
                'w-full px-4 py-3 text-left rounded-lg',
                'bg-surface border border-border/50',
                'hover:bg-background-muted hover:border-accent/50',
                'transition-colors duration-[var(--motion-fast)]',
                'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1'
              )}
            >
              {type === 'bar' ? 'Bar' : type === 'cafe' ? 'Café' : 'Restaurant'}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="p-4 h-full overflow-y-auto">
        <div className="mb-4">
          <button
            onClick={() => setStep(0)}
            className="text-sm text-foreground-muted hover:text-foreground"
          >
            ← Zurück
          </button>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Küche & Bar getrennt nötig?</h3>
        <div className="space-y-2">
          {(['yes', 'no'] as const).map((answer) => (
            <button
              key={answer}
              onClick={() => handleKds(answer)}
              className={classNames(
                'w-full px-4 py-3 rounded-lg',
                'bg-surface border border-border/50',
                'hover:bg-background-muted hover:border-accent/50',
                'transition-colors duration-[var(--motion-fast)]',
                'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1'
              )}
            >
              {answer === 'yes' ? 'Ja' : 'Nein'}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="p-4 h-full overflow-y-auto">
        <div className="mb-4">
          <button
            onClick={() => setStep(1)}
            className="text-sm text-foreground-muted hover:text-foreground"
          >
            ← Zurück
          </button>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Sprachen wichtig?</h3>
        <p className="text-sm text-foreground-muted mb-4">
          Mehrsprachigkeit (DE/EN/ES) ist in allen Paketen enthalten.
        </p>
        <div className="space-y-2">
          {(['yes', 'no'] as const).map((answer) => (
            <button
              key={answer}
              onClick={() => handleLanguages()}
              className={classNames(
                'w-full px-4 py-3 rounded-lg',
                'bg-surface border border-border/50',
                'hover:bg-background-muted hover:border-accent/50',
                'transition-colors duration-[var(--motion-fast)]',
                'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1'
              )}
            >
              {answer === 'yes' ? 'Ja' : 'Nein'}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Recommendation
  const recommendation = needsKds === 'yes' && (businessType === 'restaurant' || businessType === 'bar')
    ? { package: 'premium' as const, reason: 'Mit KDS und deinem Betriebstyp passt Premium am besten.' }
    : needsKds === 'yes'
    ? { package: 'pro' as const, reason: 'Du brauchst Küche & Bar (KDS) – das ist im Pro-Paket enthalten.' }
    : { package: 'basic' as const, reason: 'Für den Start reicht Basic völlig aus. Du kannst später jederzeit upgraden.' };

  return (
    <div className="p-4 h-full overflow-y-auto">
      <h3 className="text-lg font-semibold text-foreground mb-4">Empfehlung</h3>
      <div className="mb-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
        <p className="text-sm font-medium text-foreground mb-2">
          {recommendation.package === 'basic' ? 'Basic' : recommendation.package === 'pro' ? 'Pro' : 'Premium'}
        </p>
        <p className="text-sm text-foreground-muted">{recommendation.reason}</p>
      </div>
      <div className="space-y-2">
        <Link
          href="/preise"
          className="block w-full px-4 py-3 text-center rounded-lg bg-accent text-accent-foreground hover:bg-accent-hover transition-colors"
        >
          Preise ansehen
        </Link>
        <Link
          href="/demo#form"
          className="block w-full px-4 py-3 text-center rounded-lg bg-surface border border-border/50 hover:bg-background-muted transition-colors"
        >
          Demo buchen
        </Link>
        <Link
          href="/kontakt"
          className="block w-full px-4 py-3 text-center rounded-lg bg-surface border border-border/50 hover:bg-background-muted transition-colors"
        >
          Kontakt
        </Link>
      </div>
    </div>
  );
}

