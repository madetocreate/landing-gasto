import { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import { classNames } from '@/lib/classNames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
  href?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  asChild,
  href,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-[var(--motion-fast)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-50 disabled:pointer-events-none';
  
  const variantStyles = {
    primary: 'bg-accent text-accent-foreground hover:bg-accent-hover focus:ring-accent',
    secondary: 'bg-surface text-foreground hover:bg-background-muted border border-border',
    ghost: 'text-foreground hover:bg-background-muted',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-5 py-2.5 text-base rounded-md',
    lg: 'px-6 py-3 text-lg rounded-lg',
  };

  const classes = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (asChild && href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}
