import { ReactNode } from 'react';

interface CardGridProps {
  children: ReactNode;
  className?: string;
  lgCols?: number;
}

export const CardGrid = ({ children, className = '', lgCols = 4 }: CardGridProps) => {
  const lgColsClass = `md:grid-cols-${lgCols}`;
  return (
    <div className={`grid ${lgColsClass} sm:grid-cols-2 gap-x-4 gap-y-10 ${className}`}>
      {children}
    </div>
  );
};
