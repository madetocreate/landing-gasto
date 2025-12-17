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
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-[var(--motion-fast)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-action disabled:opacity-50 disabled:pointer-events-none';
  
  const variantStyles = {
    primary: 'bg-action text-action-foreground hover:bg-action-hover focus:ring-action relative overflow-hidden group/btn',
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

  const content = (
    <>
      {variant === 'primary' && (
        <span className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-shine pointer-events-none" />
      )}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (asChild && href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {content}
    </button>
  );
}
