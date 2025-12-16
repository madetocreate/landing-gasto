import { ReactNode } from 'react';
import { classNames } from '@/lib/classNames';

interface SectionProps {
  children: ReactNode;
  variant?: 'tight' | 'normal' | 'hero';
  surface?: 'default' | 'surface';
  className?: string;
  id?: string;
}

const variantStyles = {
  tight: 'py-12 md:py-16',
  normal: 'py-16 md:py-24',
  hero: 'py-20 md:py-32',
};

const surfaceStyles: Record<NonNullable<SectionProps['surface']>, string> = {
  default: '',
  // "Insel": Light = surface weiß; Dark = surface etwas heller als bg; plus subtiler Border zur Absetzung
  surface: 'bg-surface dark:bg-background text-foreground',
};

export function Section({ children, variant = 'normal', surface = 'default', className, id }: SectionProps) {
  return (
    <section id={id} className={classNames(variantStyles[variant], surfaceStyles[surface], className)}>
      {children}
    </section>
  );
}

interface ContainerProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

const sizeStyles = {
  sm: 'max-w-3xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
};

export function Container({ children, size = 'xl', className }: ContainerProps) {
  return (
    <div className={classNames('mx-auto px-4 sm:px-6 lg:px-8', sizeStyles[size], className)}>
      {children}
    </div>
  );
}

