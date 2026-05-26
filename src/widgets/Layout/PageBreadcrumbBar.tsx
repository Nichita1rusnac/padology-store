import type { ReactNode } from 'react';

interface PageBreadcrumbBarProps {
  children: ReactNode;
}

/** Vertically centers breadcrumbs in the space below the fixed header. */
export function PageBreadcrumbBar({ children }: PageBreadcrumbBarProps) {
  return (
    <div className="mx-auto max-w-9xl flex min-h-[clamp(3rem,8vh,5rem)] items-center">
      {children}
    </div>
  );
}
