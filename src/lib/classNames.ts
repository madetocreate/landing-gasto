/**
 * Utility function to conditionally join classNames
 */
export function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Alias for classNames - commonly used as cn
 */
export function cn(...classes: (string | undefined | null | false | Record<string, boolean>)[]): string {
  return classes
    .flatMap((cls) => {
      if (!cls) return [];
      if (typeof cls === 'string') return [cls];
      // Handle object syntax like { 'class-name': true/false }
      return Object.entries(cls)
        .filter(([, value]) => value)
        .map(([key]) => key);
    })
    .join(' ');
}

