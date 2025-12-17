'use client';

import { useState, useMemo } from 'react';
import { StaticWizardProvider } from './providers/StaticWizardProvider';
import { classNames } from '@/lib/classNames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface WizardFlowProps {
  initialCategory?: string;
  onComplete: (result: { solved: boolean; category: string }) => void;
}

const supportCategoriesGastro = {
  qr_guest: {
    title: 'QR / Gast',
    steps: [
      {
        id: 'step-1',
        question: 'Wird der QR-Code nicht gescannt?',
        options: ['Ja', 'Nein'],
      },
      {
        id: 'step-2',
        question: 'Sieht der Gast keine Speisekarte?',
        options: ['Ja', 'Nein'],
      },
    ],
  },
  admin_import: {
    title: 'Admin / Import',
    steps: [
      {
        id: 'step-1',
        question: 'Funktioniert der Menü-Import nicht?',
        options: ['Ja', 'Nein'],
      },
    ],
  },
  kds: {
    title: 'Küche / Bar (KDS)',
    steps: [
      {
        id: 'step-1',
        question: 'Zeigt das KDS keine Bestellungen?',
        options: ['Ja', 'Nein'],
      },
    ],
  },
};

const supportCategoriesAklow = {
  aklow_general: {
    title: 'Allgemein',
    steps: [
      {
        id: 'step-1',
        question: 'Suchst du Informationen zu Preisen?',
        options: ['Ja', 'Nein'],
      },
      {
        id: 'step-2',
        question: 'Möchtest du Partner werden?',
        options: ['Ja', 'Nein'],
      },
    ],
  },
  project: {
    title: 'Laufendes Projekt',
    steps: [
      {
        id: 'step-1',
        question: 'Hast du Fragen zum Status?',
        options: ['Ja', 'Nein'],
      },
    ],
  },
};

export function WizardFlow({ initialCategory, onComplete }: WizardFlowProps) {
  const pathname = usePathname();
  const [category, setCategory] = useState<string>(initialCategory || '');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const isGastro = useMemo(() => {
    return pathname.includes('/features') || pathname.includes('/solutions/gastro') || pathname.includes('/demo');
  }, [pathname]);

  const supportCategories = isGastro ? supportCategoriesGastro : supportCategoriesAklow;
  const categoryData = category ? supportCategories[category as keyof typeof supportCategories] : null;

  const handleCategorySelect = (cat: string) => {
    setCategory(cat);
    setCurrentStep(0);
    setAnswers({});
  };

  const handleStepAnswer = (stepId: string, answer: string) => {
    const newAnswers = { ...answers, [stepId]: answer };
    setAnswers(newAnswers);

    if (answer === 'Ja') {
      setTimeout(() => {
        onComplete({ solved: false, category });
      }, 500);
    } else {
      if (categoryData && currentStep < categoryData.steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setTimeout(() => {
          onComplete({ solved: true, category });
        }, 500);
      }
    }
  };

  if (!category) {
    return (
      <div className="p-4 h-full overflow-y-auto">
        <h3 className="text-lg font-semibold text-foreground mb-4">Wobei brauchst du Hilfe?</h3>
        <div className="space-y-2">
          {Object.entries(supportCategories).map(([key, data]) => (
            <button
              key={key}
              onClick={() => handleCategorySelect(key)}
              className={classNames(
                'w-full px-4 py-3 text-left rounded-lg',
                'bg-surface border border-border/50',
                'hover:bg-background-muted hover:border-action/50',
                'transition-colors duration-[var(--motion-fast)]',
                'focus:outline-none focus:ring-2 focus:ring-action focus:ring-offset-1'
              )}
            >
              {data.title}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (!categoryData) return null;

  const currentStepData = categoryData.steps[currentStep];

  return (
    <div className="p-4 h-full overflow-y-auto">
      <div className="mb-4">
        <button
          onClick={() => {
            setCategory('');
            setCurrentStep(0);
            setAnswers({});
          }}
          className="text-sm text-foreground-muted hover:text-foreground"
        >
          ← Zurück
        </button>
        <h3 className="text-lg font-semibold text-foreground mt-2">{categoryData.title}</h3>
        <p className="text-xs text-foreground-muted mt-1">
          Schritt {currentStep + 1} von {categoryData.steps.length}
        </p>
      </div>

      <div className="mb-6">
        <p className="text-foreground mb-4">{currentStepData.question}</p>
        <div className="space-y-2">
          {currentStepData.options.map((option) => (
            <button
              key={option}
              onClick={() => handleStepAnswer(currentStepData.id, option)}
              className={classNames(
                'w-full px-4 py-3 rounded-lg',
                'bg-surface border border-border/50',
                'hover:bg-background-muted hover:border-action/50',
                'transition-colors duration-[var(--motion-fast)]',
                'focus:outline-none focus:ring-2 focus:ring-action focus:ring-offset-1'
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {answers[currentStepData.id] === 'Ja' && (
        <div className="mt-6 p-4 bg-background-muted rounded-lg border border-border/50">
          <p className="text-sm text-foreground mb-4">
            Hier sind mögliche Lösungen:
          </p>
          <div className="space-y-2">
            <Link
              href="/kontakt"
              className="block px-4 py-2 bg-surface rounded-lg border border-border/50 hover:border-action/50 transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
