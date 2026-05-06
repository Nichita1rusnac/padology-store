import { Link } from 'react-router-dom';
import { SPECIALISTS_LIST } from '@/entities/specialist/model/specialists';

interface SpecialistsStatProps {
  currentLang: string;
  moreLabel: string;
  title: string;
}


export const SpecialistsStat = ({ currentLang, moreLabel, title }: SpecialistsStatProps) => {
  return (
    <div className="bg-card rounded-3xl p-7 flex flex-col justify-between gap-6 border border-border/50 w-full">
      {/* Text Section */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1 leading-none">
          <p className="font-display text-foreground text-5xl font-semibold">10</p>
          <span className="text-primary text-3xl font-semibold ml-0.5">+</span>
        </div>
        <p className="text-muted-foreground font-body text-sm mt-1">
          {title}
        </p>
      </div>

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
