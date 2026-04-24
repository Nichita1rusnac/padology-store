import { ReactNode } from 'react';

interface CardGridProps {
  children: ReactNode;
  gridCols?: string;
}

export const CardGrid = ({ children, gridCols }: CardGridProps) => {
  return (
    <div className={`grid ${gridCols}  gap-x-4 gap-y-10`}>
      {children}
    </div>
  );
};
