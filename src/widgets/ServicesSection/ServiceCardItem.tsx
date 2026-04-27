import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ServiceItem } from '@/entities/service/model/services';
import { useBookingPath } from '@/shared/lib/hooks/useBookingPath';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import cn from 'clsx';

interface ServiceCardItemProps {
  service: ServiceItem;
}

export const ServiceCardItem = ({ service }: ServiceCardItemProps) => {
  const { t } = useTranslation(['top_services', 'common']);
  const bookingPath = useBookingPath();
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [api]);

  const renderImage = (src: string, index?: number) => (
    <img
      src={src}
      alt={`${t(`${service.token}.title`)} - ${index !== undefined ? index + 1 : 'Podiatry service'}`}
      className={cn(
        "object-cover w-full h-full group-hover:scale-105",
        "transition-transform duration-700"
      )}
      loading="lazy"
    />
  );

  return (
    <div className={cn(
      "bg-card rounded-3xl overflow-hidden group cursor-pointer",
      "transition-all duration-500 flex flex-col h-full border border-border/40"
    )}>
      <div className={cn(
        "aspect-[3/2] bg-gradient-to-b from-secondary/50 to-secondary",
        "relative overflow-hidden"
      )}>
        <div className="relative w-full h-full overflow-hidden">
          {service.images ? (
            <Carousel setApi={setApi} opts={{ loop: true }} className="w-full h-full">
              <CarouselContent className="h-full -ml-0">
                {service.images.map((img, idx) => (
                  <CarouselItem key={idx} className="h-full pl-0">
                    {renderImage(img, idx)}
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          ) : (
            service.image && renderImage(service.image)
          )}
        </div>
      </div>
      <div className="px-6 py-8 flex-grow flex flex-col">
        <div className="mt-4">
          <h3 className={cn(
            "font-display text-2xl-fluid font-semibold text-foreground group-hover:text-primary",
            "sm:text-primary transition-colors duration-300 tracking-wide leading-snug"
          )}>
            {t(`${service.token}.title`)}
          </h3>
          <h4 className="text-base-fluid font-medium text-foreground mt-2">
            {t(`${service.token}.hook`)}
          </h4>
        </div>

        <p className="text-muted-foreground font-body text-sm-fluid leading-relaxed mt-2 line-clamp-3">
          {t(`${service.token}.description`)}
        </p>

        <ul className={cn(
          "text-muted-foreground font-body text-sm-fluid space-y-2 mt-3 mb-8"
        )}>
          {service.results.map((index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary/60 flex-shrink-0">—</span>
              <span>{t(`${service.token}.results.${index}`)}</span>
            </li>
          ))}
        </ul>

        <Link
          to={bookingPath}
          className={cn(
            'mt-auto w-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground py-4 rounded-2xl font-semibold transition-all duration-300 text-center uppercase tracking-widest text-xs',
            'sm:bg-primary sm:text-primary-foreground sm:border-transparent sm:hover:bg-primary/90'
          )}
        >
          {t('common:buttons.book')}
        </Link>
      </div>
    </div>
  );
};
