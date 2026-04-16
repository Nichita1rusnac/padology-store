import * as React from 'react';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { SpecialistCard } from '@/entities/specialist/ui/SpecialistCard';
import { SPECIALISTS_LIST } from '@/entities/specialist/model/specialists';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

export const SpecialistCarousel = () => {
  const { t } = useTranslation(['specialists']);
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full max-w-7xl mx-auto px-0 sm:px-12 md:px-16 py-4">
      <Carousel
        setApi={setApi}
        opts={{
          align: 'center',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="py-4 -ml-2 md:-ml-4">
          {[...SPECIALISTS_LIST]
            .filter((specialist) => {
              const tags = t(`${specialist.token}.tags`, { returnObjects: true });
              return Array.isArray(tags) && tags.includes('master');
            })
            .map((specialist, i) => {
              const uniqueKey = `${specialist.id}-${i}`;
              const isActive = current === i;

              return (
                <CarouselItem
                  key={uniqueKey}
                  className="pl-2 md:pl-4 basis-[75%] sm:basis-[60%] md:basis-[45%] lg:basis-[33.333%]"
                >
                  <div
                    className={cn(
                      'transition-all duration-500 ease-out h-full py-4',
                      isActive
                        ? 'scale-100 opacity-100 z-20 relative'
                        : 'scale-[0.9] opacity-60 z-10 blur-[2px] sm:blur-[1px]',
                    )}
                  >
                    <SpecialistCard specialist={specialist} />
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <div className="hidden sm:block">
          <CarouselPrevious className="w-14 h-14 border-2 bg-background/90 hover:bg-background -left-4 md:-left-12 transition-all xl:-left-16" />
          <CarouselNext className="w-14 h-14 border-2 bg-background/90 hover:bg-background -right-4 md:-right-12 transition-all xl:-right-16" />
        </div>
      </Carousel>
    </div>
  );
};
