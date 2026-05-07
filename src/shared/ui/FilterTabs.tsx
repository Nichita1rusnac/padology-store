import { TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FilterOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface FilterTabsProps {
  options: FilterOption[];
}

export const FilterTabs = ({ options }: FilterTabsProps) => {
  const sortedOptions = [...options].sort((a, b) => {
    if (a.disabled && !b.disabled) return 1;
    if (!a.disabled && b.disabled) return -1;
    return 0;
  });

  return (
    <div className="flex overflow-x-auto overscroll-x-contain mb-[clamp(1.5rem,4vw,2.5rem)] -mx-4 px-4 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <TabsList className="bg-transparent p-0 h-auto flex gap-2 sm:gap-3 min-w-max flex-nowrap">
        {sortedOptions.map((option) => (
          <TabsTrigger
            key={option.value}
            value={option.value}
            disabled={option.disabled}
            className="px-[clamp(1rem,3vw,1.5rem)] py-2 sm:py-2.5 rounded-full text-sm-fluid font-medium transition-all border border-primary/10 data-[state=inactive]:bg-secondary/30 data-[state=inactive]:text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary data-[state=active]:shadow-md flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed disabled:pointer-events-none"
          >
            {option.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  );
};
