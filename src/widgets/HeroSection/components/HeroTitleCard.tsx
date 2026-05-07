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
    <div className="bg-card rounded-3xl p-[clamp(1.25rem,3vw,1.75rem)] flex flex-col gap-[clamp(1.5rem,4vw,2rem)] border border-border/50 mb-4">
      <div className="">
        <h1 className="font-display font-semibold text-foreground leading-[1.1] text-display-lg tracking-tight">
          {splittedTitle[0]}
          <br />
          <span className="text-primary">
            {splittedTitle.slice(1).join(' ')}
          </span>
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground font-body text-base-fluid leading-relaxed">
          {subtitle}
        </p>
      </div>
      <Link
        to={bookingPath}
        className="w-fit max-w-full mt-2 px-[clamp(1rem,3vw,1.25rem)] py-2.5 bg-primary text-primary-foreground rounded-xl text-base-fluid font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
      >
        {t('buttons.book')}
      </Link>
    </div>
  );
};
