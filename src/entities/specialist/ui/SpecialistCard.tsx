import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Specialist } from '../model/specialists';
import { useBookingPath } from '@/shared/lib/hooks/useBookingPath';

interface SpecialistCardProps {
  specialist: Specialist;
  isActive?: boolean;
}

export const SpecialistCard = ({ specialist, isActive }: SpecialistCardProps) => {
  const { t } = useTranslation(['common', 'contacts', 'specialists']);
  const bookingPath = useBookingPath();

  return (
    <article className="bg-card rounded-3xl overflow-hidden shadow-sm flex flex-col h-full border border-border/50 hover:shadow-md transition-shadow">
      <div className="bg-secondary w-full relative overflow-hidden group">
        <img
          src={specialist.image}
          alt={`${t(`${specialist.token}.first_name`)} ${t(`${specialist.token}.last_name`)} - Podologist at Podiatric Studios`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4 md:p-6 flex flex-col flex-grow">

        <div className="flex flex-wrap whitespace-wrap gap-1 text-lg-fluid font-bold">
          <h3 className="font-display text-foreground">
            {t(`${specialist.token}.first_name`)}
          </h3>
          <h3 className="font-display text-primary">
            {t(`${specialist.token}.last_name`)}
          </h3>
        </div>
        <p className="text-muted-foreground font-body text-sm-fluid mt-1 mb-4">
          {(() => {
            const specialty = t(`${specialist.token}.specialty`, { returnObjects: true }) as unknown as string | string[];
            return Array.isArray(specialty) ? specialty.join(', ') : specialty;
          })()}
        </p>

        <div className="py-3 border-t border-border/50">
          <p className="text-primary font-body text-xs-fluid uppercase font-semibold tracking-[0.01] mb-1">
            {specialist.location.map((location) => t(`common:salon.${location}`)).join(' / ')}
          </p>
          {specialist.location.map((location) => {
            return (
              <p key={location} className="text-muted-foreground font-body text-xs-fluid leading-relaxed">
                {t(location === 'center' ? 'contacts:contacts.1.contact.0.value' : 'contacts:contacts.0.contact.0.value')}
              </p>
            )
          })}

        </div>

        <Link
          to={`${bookingPath}?location=${specialist.location[0]}`}
          className="mt-auto w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-base-fluid rounded-full font-semibold transition-colors shadow-sm active:scale-95 duration-200 block text-center"
        >
          {t('specialists:book_cta')}
        </Link>
      </div>
    </article>
  );
};
