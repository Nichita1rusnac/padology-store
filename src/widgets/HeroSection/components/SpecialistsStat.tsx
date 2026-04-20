import { Link } from 'react-router-dom';
import { SPECIALISTS_LIST } from '@/entities/specialist/model/specialists';

interface SpecialistsStatProps {
  currentLang: string;
  moreLabel: string;
  title: string;
}


export const SpecialistsStat = ({ currentLang, moreLabel, title }: SpecialistsStatProps) => {
  return (
    <div className="bg-card rounded-3xl flex flex-col min-[1141px]:p-[clamp(1.5rem,4vw,1.5rem)] max-[1140px]:p-[clamp(1rem,6vw,1.5rem)] items-start justify-between max-[900px]:gap-4 w-full">
      {/* Text Section */}
      <div className="flex flex-col leading-tight">
        <div className="flex items-center gap-1">
          <p className="font-display text-foreground text-display-lg font-medium">10</p>
          <span className="text-primary text-display-md">+</span>
        </div>
        <p className="text-muted-foreground font-body font-light mt-1 text-base-fluid">
          {title}
        </p>
      </div>

      {/* Avatars Section — now w-full so it spans the card */}
      <div className="flex items-center w-full">
        <div className="flex items-center isolate w-full">
          {[0, 1, 2].map((index) => (
            <img
              key={index}
              className="
            rounded-full object-cover shadow
            -ml-8 first:ml-0 sm:-ml-5
            aspect-square
            w-[min(7rem,calc((100%+3.75rem)/4))]
            sm:w-[min(7rem,calc((100%+3.75rem)/4))]
          "
              src={SPECIALISTS_LIST[index]?.image}
              alt={`Specialist ${SPECIALISTS_LIST[index]?.token} avatar`}
              loading="lazy"
            />
          ))}

          {/* The "More" Link */}
          <div
            className="
          rounded-full bg-secondary flex items-center justify-center shadow z-10
          -ml-8 sm:-ml-5
          aspect-square
          w-[min(7rem,calc((100%+3.75rem)/4))]
          sm:w-[min(7rem,calc((100%+3.75rem)/4))]
        "
          >
            <Link
              className="w-full h-full flex items-center justify-center text-primary
            min-[1141px]:text-[clamp(0.8125rem,2vw,0.875rem)]
            max-[1140px]:text-[clamp(0.75rem,3vw,0.875rem)]"
              to={`/${currentLang}/specialists`}
            >
              {moreLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
