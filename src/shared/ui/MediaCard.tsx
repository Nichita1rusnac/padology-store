import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MediaCardProps {
  image: string;
  title: string;
  alt?: string;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const MediaCard = ({
  image,
  title,
  alt,
  children,
  onClick,
  className = '',
}: MediaCardProps) => {
  return (
    <article
      onClick={onClick}
      className={cn(
        "overflow-hidden group transition-all duration-300 flex flex-col h-full",
        onClick ? "cursor-pointer hover:shadow-xl" : "",
        className
      )}
    >
      <div className="aspect-square relative bg-[#F0E5E0] overflow-hidden shrink-0">
        <img
          src={image}
          alt={alt || title}
          className="absolute inset-0 w-full h-full mix-blend-darken object-contain group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
      </div>
      <div className="flex-1 flex flex-col p-3 pt-4">
        {children && <div className="mb-2">{children}</div>}
        <p className="font-sans text-[#666666] font-normal text-[15px] leading-relaxed tracking-[0.1px]">
          {title}
        </p>
      </div>
    </article>
  );
};
