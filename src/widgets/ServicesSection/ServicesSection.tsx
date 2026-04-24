import { useTranslation } from 'react-i18next';
import { TOP_SERVICES } from '@/entities/service/model/services';
import { CardGrid } from '@/shared/ui/CardGrid';
import { ServiceCardItem } from './ServiceCardItem';

export const ServicesSection = () => {
  const { t } = useTranslation(['top_services', 'common']);

  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-9xl">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="font-display text-display-lg font-medium tracking-tight text-foreground mb-6">
            {t('title')}
          </h2>
          <p className="text-muted-foreground font-body text-lg-fluid leading-relaxed">
            {t('description')}
          </p>
        </div>

        <CardGrid gridCols="md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
          {TOP_SERVICES.map((service) => (
            <ServiceCardItem key={service.id} service={service} />
          ))}
        </CardGrid>
      </div>
    </section>
  );
};
