import { ReactNode } from 'react';

interface CardGridProps {
  children: ReactNode;
  gridCols?: string;
}

export const CardGrid = ({ children, gridCols }: CardGridProps) => {
  return (
    <div className={`grid min-w-0 ${gridCols} gap-x-[clamp(0.75rem,2vw,1rem)] gap-y-[clamp(1.5rem,4vw,2.5rem)]`}>
      {children}
    </div>
  );
};
