import { Link } from '@tanstack/react-router';
import { useLocalizedRoute } from '@/shared/lib/hooks/useLocalizedRoute';
import { useTranslation } from 'react-i18next';
import { SPECIALISTS_LIST } from '@/entities/specialist/model/specialists';
import { ResponsiveImage } from '@/shared/ui/ResponsiveImage';

interface SpecialistsStatProps {
  moreLabel: string;
  title: string;
}

export const SpecialistsStat = ({ moreLabel, title }: SpecialistsStatProps) => {
  const { t } = useTranslation('specialists');
  const { localizedPath } = useLocalizedRoute();

  return (
    <div className="bg-card rounded-3xl p-[clamp(1.25rem,3vw,1.75rem)] flex flex-col justify-between gap-[clamp(1.25rem,3vw,1.5rem)] border border-border/50 w-full min-w-0">
      <div className="flex flex-col">
        <div className="flex items-center gap-1 leading-none">
          <p className="font-display text-foreground text-[clamp(2.25rem,8vw,3rem)] font-semibold">10</p>
          <span className="text-primary text-3xl-fluid font-semibold ml-0.5">+</span>
        </div>
        <p className="text-muted-foreground font-body text-sm-fluid mt-1">
          {title}
        </p>
      </div>

      <div className="flex items-center w-full">
        <div className="flex items-center isolate w-full">
          {[0, 1, 2].map((index) => {
            const specialist = SPECIALISTS_LIST[index];
            if (!specialist) return null;

            return (
              <ResponsiveImage
                key={specialist.id}
                profile="team-avatar"
                src={specialist.image}
                alt={`${t(`${specialist.token}.first_name`)} ${t(`${specialist.token}.last_name`)}`}
                className="
                  rounded-full object-cover shadow
                  -ml-8 first:ml-0 sm:-ml-5
                  aspect-square
                  w-[min(6.5rem,calc((100%+3.75rem)/4))]
                  sm:w-[min(7rem,calc((100%+3.75rem)/4))]
                "
              />
            );
          })}

          <div
            className="
              rounded-full bg-secondary flex items-center justify-center shadow z-10
              -ml-8 sm:-ml-5
              aspect-square
              w-[min(6.5rem,calc((100%+3.75rem)/4))]
              sm:w-[min(7rem,calc((100%+3.75rem)/4))]
            "
          >
            <Link
              className="w-full h-full flex items-center justify-center text-primary
                min-[1141px]:text-[clamp(0.8125rem,2vw,0.875rem)]
                max-[1140px]:text-[clamp(0.75rem,3vw,0.875rem)]"
              to={localizedPath({ page: 'specialists' })}
            >
              {moreLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
