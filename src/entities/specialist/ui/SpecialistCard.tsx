import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Specialist } from '../model/specialists';
import { useBookingPath } from '@/shared/lib/hooks/useBookingPath';

interface SpecialistCardProps {
  specialist: Specialist;
}

export const SpecialistCard = ({ specialist }: SpecialistCardProps) => {
  const { t } = useTranslation(['common', 'contacts', 'specialists']);
  const bookingPath = useBookingPath();

  return (
    <article className="bg-card rounded-3xl overflow-hidden shadow-sm flex flex-col h-full border border-border/50 hover:shadow-md transition-shadow">
      <div className="aspect-[3/4] bg-secondary w-full relative overflow-hidden group">
        <img
          src={specialist.image}
          alt={`${t(`${specialist.token}.first_name`)} ${t(`${specialist.token}.last_name`)} - Podologist at Podiatric Studios`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">

        <div className="flex gap-1">
          <h3 className="font-display text-lg-fluid text-foreground">
            {t(`${specialist.token}.first_name`)}
          </h3>
          <h3 className="font-display text-lg-fluid text-primary">
            {t(`${specialist.token}.last_name`)}
          </h3>
        </div>
        <p className="text-muted-foreground font-body text-sm-fluid mt-1 mb-6">
          {(() => {
            const specialty = t(`${specialist.token}.specialty`, { returnObjects: true }) as unknown as string | string[];
            return Array.isArray(specialty) ? specialty.join(', ') : specialty;
          })()}
        </p>

        <div className="py-4 border-t border-border/50">
          <p className="text-foreground font-body text-caption font-bold uppercase tracking-wider mb-1">
            {specialist.location.map((location) => t(`common:salon.${location}`)).join(' / ')}
          </p>
          {specialist.location.map((location) => {
            return (
              <p className="text-muted-foreground font-body text-caption leading-tight">
                {t(location === 'center' ? 'contacts:contacts.1.contact.0.value' : 'contacts:contacts.0.contact.0.value')}
              </p>
            )
          })}

        </div>

        <Link
          to={`${bookingPath}?location=${specialist.location[0]}`}
          className="mt-auto w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-full font-medium transition-colors shadow-sm active:scale-95 duration-200 block text-center"
        >
          {t('specialists:book_cta')}
        </Link>
      </div>
    </article>
  );
};
