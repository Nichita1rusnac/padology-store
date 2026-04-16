import { useTranslation } from 'react-i18next';
import { TOP_SERVICES } from '@/entities/service/model/services';
import { CardGrid } from '@/shared/ui/CardGrid';
import { Link } from 'react-router-dom';
import { useBookingPath } from '@/shared/lib/hooks/useBookingPath';

export const ServicesSection = () => {
  const { t } = useTranslation(['top_services', 'common']);
  const bookingPath = useBookingPath();
  return (
    <section id="services" className="py-16 px-4">
      <div className="mx-auto max-w-9xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-display text-display-lg font-light gradient-text mb-6">
            {t('title')}
          </h1>
          <p className="text-muted-foreground font-body text-xl-fluid leading-relaxed">
            {t('description')}
          </p>
        </div>

        <CardGrid lgCols={3}>
          {TOP_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-card rounded-3xl overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[3/2] bg-secondary">
                <div className="relative w-full h-full overflow-hidden rounded-ss-md">
                  <img src={service.image} alt={t(`${service.token}.title`)} className="object-contain w-full h-full" />
                </div>
              </div>
              <div className="p-6">
                <h1 className="text-lg-fluid font-light text-primary uppercase tracking-wider mb-2">{t(`${service.token}.title`)}</h1>
                <h2 className="text-lg-fluid font-light text-foreground mb-2">{t(`${service.token}.hook`)}</h2>
                <p className="text-muted-foreground font-body font-light text-base-fluid mt-2">
                  {t(`${service.token}.description`)}
                </p>
                <ul className="text-muted-foreground font-body font-light text-base-fluid my-2 list-disc list-inside">
                  {service.results.map((index) => (
                    <li key={index}>{t(`${service.token}.results.${index}`)}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardGrid>
      </div>
    </section>
  );
};
