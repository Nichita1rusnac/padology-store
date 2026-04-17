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
    <div className="flex flex-row md:flex-col gap-[clamp(0.75rem,2vw,1rem)] font-light text-foreground">
      {/* Locations */}
      <div className="bg-card rounded-3xl w-full min-[1141px]:p-[clamp(1.5rem,4vw,2rem)] max-[1140px]:p-[clamp(1rem,6vw,2.5rem)]">
        <div className="flex gap-2 items-baseline">
          <p className="font-display text-display-lg font-medium">
            {locations.value}
          </p>
          <span className="font-display text-display-sm">
            {locations.label}
          </span>
        </div>
        <p className="text-muted-foreground font-body mt-1 text-base-fluid">
          {locations.description}
        </p>
      </div>

      {/* Rating */}
      <div className="bg-card rounded-3xl w-full min-[1141px]:p-[clamp(1.5rem,4vw,2rem)] max-[1140px]:p-[clamp(1rem,6vw,2.5rem)]">
        <div className="flex items-center gap-1">
          <p className="font-display text-display-lg font-medium">
            {rating.value}
          </p>
          <span className="text-primary text-display-md"><Star className='fill-primary' /></span>
        </div>
        <p className="text-muted-foreground font-body mt-1 text-base-fluid">
          {rating.description}
        </p>
      </div>
    </div>
  );
};
