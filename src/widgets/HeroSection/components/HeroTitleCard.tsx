import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useBookingPath } from '@/shared/lib/hooks/useBookingPath';


interface HeroTitleCardProps {
  title: string;
  subtitle: string;
}

export const HeroTitleCard = ({ title, subtitle }: HeroTitleCardProps) => {
  const { t } = useTranslation('common');
  const splittedTitle = title.split(' ');
  const bookingPath = useBookingPath();
  return (
    <div className="bg-card rounded-3xl min-[1141px]:p-[clamp(1.5rem,4vw,2rem)] max-[1140px]:p-[clamp(1rem,6vw,2.5rem)] mb-[clamp(1rem,3vw,1.5rem)] flex flex-col gap-8">
      <div className="">
        <h1 className="font-display font-light text-foreground leading-tight text-display-lg">
          {
            <>
              <span>{splittedTitle[0]}</span>
              <br />
              <span className="text-primary">{splittedTitle[1]}</span>
            </>
          }
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground font-body font-light text-base-fluid">
          {subtitle}
        </p>
      </div>
      <Link
        to={bookingPath}
        className="w-fit px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-button font-body font-medium hover:shadow-lg hover:shadow-primary/20 transition-all"
      >
        {t('buttons.book')}
      </Link>
    </div>
  );
};
