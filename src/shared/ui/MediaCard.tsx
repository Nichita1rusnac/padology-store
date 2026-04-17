import { ReactNode } from 'react';

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
  console.log(image)
  return (
    <article
      onClick={onClick}
      className={`overflow-hidden group transition-shadow flex flex-col h-full ${onClick ? 'cursor-pointer hover:shadow-lg' : ''} ${className}`}
    >
      {/* <div className="aspect-[4/3] relative bg-secondary overflow-hidden shrink-0">
        <img
          src={image}
          alt={alt || title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
      </div> */}
      <div className="aspect-[3/3] relative bg-secondary overflow-hidden shrink-0 p-3">
        <img
          src={image}
          alt={alt || title}
          className="absolute inset-0 w-full h-full mix-blend-darken object-contain group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
      </div>
      <div className="flex-1 flex flex-col p-2">
        {children && <div className="pb-2">{children}</div>}
        <p className="font-body text-card-foreground font-light text-base-fluid">
          {title}
        </p>
        {/* <p className="text-muted-foreground font-body text-base leading-relaxed flex-1">
          {description}
        </p> */}
      </div>
    </article>
  );
};
