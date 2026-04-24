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
    <div className="flex flex-row md:flex-col gap-4 font-light text-foreground h-full">
      {/* Locations */}
      <div className="bg-card rounded-3xl p-7 flex-1 border border-border/50">
        <div className="flex gap-1.5 items-center leading-none">
          <p className="font-display text-5xl font-semibold">
            {locations.value}
          </p>
          <span className="text-primary text-2xl font-semibold">
            {locations.label}
          </span>
        </div>
        <p className="text-muted-foreground font-body text-sm mt-1">
          {locations.description}
        </p>
      </div>

      {/* Rating */}
      <div className="bg-card rounded-3xl p-7 flex-1 border border-border/50">
        <div className="flex items-center gap-1.5 leading-none">
          <p className="font-display text-5xl font-semibold">
            {rating.value}
          </p>
          <span className="text-primary"><Star className='w-6 h-6 fill-primary' /></span>
        </div>
        <p className="text-muted-foreground font-body text-sm mt-1">
          {rating.description}
        </p>
      </div>
    </div>
  );
};
