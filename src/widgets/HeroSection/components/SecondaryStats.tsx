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
    <div className="flex flex-row md:flex-col gap-4 font-light text-foreground h-full min-w-0">
      {/* Locations */}
      <div className="bg-card rounded-3xl p-6 sm:p-7 flex-1 border border-border/50 min-w-0">
        <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 items-baseline leading-none min-w-0">
          <p className="font-display text-4xl sm:text-5xl font-semibold">
            {locations.value}
          </p>
          <span className="text-primary text-xl sm:text-2xl font-semibold">
            {locations.label}
          </span>
        </div>
        <p className="text-muted-foreground font-body text-sm mt-1 break-words">
          {locations.description}
        </p>
      </div>

      {/* Rating */}
      <div className="bg-card rounded-3xl p-6 sm:p-7 flex-1 border border-border/50 min-w-0">
        <div className="flex items-baseline gap-1.5 leading-none min-w-0">
          <p className="font-display text-4xl sm:text-5xl font-semibold">
            {rating.value}
          </p>
          <span className="text-primary shrink-0">
            <Star className="w-6 h-6 fill-primary" />
          </span>
        </div>
        <p className="text-muted-foreground font-body text-sm mt-1 break-words">
          {rating.description}
        </p>
      </div>
    </div>
  );
};
