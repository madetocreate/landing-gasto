import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { classNames } from '@/lib/classNames';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ href, children, onClick, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={classNames(
        'block px-4 py-2.5 text-base font-medium transition-colors duration-[var(--motion-fast)] rounded-md',
        isActive
          ? 'text-accent bg-background-muted'
          : 'text-foreground hover:bg-background-muted hover:text-foreground',
        className
      )}
    >
      {children}
    </Link>
  );
}
