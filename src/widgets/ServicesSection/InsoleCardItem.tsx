import * as React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { Product } from '@/entities/specialist/model/products';

interface InsoleCardItemProps {
  service: Product;
}

export const InsoleCardItem = ({ service }: InsoleCardItemProps) => {
  const { t } = useTranslation(['products', 'common']);
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const images = service.images || (service.image ? [service.image] : []);

  const handleThumbnailClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    api?.scrollTo(index);
  };

  return (
    <article className="overflow-hidden group transition-shadow flex flex-col h-full cursor-pointer">
      <div className="aspect-square relative bg-[#F0E5E0] overflow-hidden shrink-0">
        <Carousel
          setApi={setApi}
          className="w-full h-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="h-full ml-0">
            {images.map((img, index) => (
              <CarouselItem key={index} className="pl-0 h-full relative bg-[#F0E5E0]">
                <img
                  src={img}
                  alt={`${t(`${service.token}.title`)} - Option ${index + 1}`}
                  className="absolute inset-0 w-full h-full mix-blend-darken object-contain group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <CarouselPrevious className="pointer-events-auto h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm border-none hover:bg-white text-foreground" />
            <CarouselNext className="pointer-events-auto h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm border-none hover:bg-white text-foreground" />
          </div>
        </Carousel>
      </div>

      <div className="flex-1 flex flex-col p-3 pt-4">
        {/* Thumbnails row */}
        {images.length > 1 && (
          <div className="flex gap-1.5 mb-3 overflow-x-auto no-scrollbar">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={(e) => handleThumbnailClick(e, index)}
                className={cn(
                  "w-8 h-8 rounded-md overflow-hidden border transition-all flex-shrink-0 bg-white/50",
                  current === index ? "border-primary opacity-100 ring-1 ring-primary/30" : "border-transparent opacity-50 hover:opacity-100"
                )}
              >
                <img src={img} alt="" className="w-full h-full object-contain mix-blend-darken" />
              </div>
            ))}
          </div>
        )}

        <div className="mb-2 text-left">
          <h3 className="font-sans text-[18px] font-semibold text-foreground tracking-[0.3px] leading-tight">
            {t(`${service.token}.price`).replace('-', '–')}
          </h3>
        </div>

        <p className="font-sans text-[#666666] font-normal text-[15px] leading-relaxed tracking-[0.1px] text-left">
          {t(`${service.token}.title`)}
        </p>
      </div>
    </article>
  );
};
