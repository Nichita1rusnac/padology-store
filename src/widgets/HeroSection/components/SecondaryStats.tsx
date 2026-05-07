import { Star } from 'lucide-react';

interface StatData {
  value: string;
  label?: string;
  description: string;
}

interface SecondaryStatsProps {
  locations: StatData;
  rating: StatData;
}

export const SecondaryStats = ({ locations, rating }: SecondaryStatsProps) => {
  return (
    <div className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-1 gap-[clamp(0.75rem,2vw,1rem)] font-light text-foreground h-full">
      {/* Locations */}
      <div className="bg-card rounded-3xl p-[clamp(1.25rem,3vw,1.75rem)] flex-1 border border-border/50 min-w-0">
        <div className="flex gap-1.5 items-center leading-none">
          <p className="font-display text-[clamp(2.25rem,8vw,3rem)] font-semibold">
            {locations.value}
          </p>
          <span className="text-primary text-2xl-fluid font-semibold">
            {locations.label}
          </span>
        </div>
        <p className="text-muted-foreground font-body text-sm-fluid mt-1">
          {locations.description}
        </p>
      </div>

      {/* Rating */}
      <div className="bg-card rounded-3xl p-[clamp(1.25rem,3vw,1.75rem)] flex-1 border border-border/50 min-w-0">
        <div className="flex items-center gap-1.5 leading-none">
          <p className="font-display text-[clamp(2.25rem,8vw,3rem)] font-semibold">{rating.value}</p>
          <span className="text-primary">
            <Star className="size-[clamp(1.25rem,5vw,1.5rem)] fill-primary" />
          </span>
        </div>
        <p className="text-muted-foreground font-body text-sm-fluid mt-1">
          {rating.description}
        </p>
      </div>
    </div>
  );
};
