import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SPECIALISTS_LIST } from '@/entities/specialist/model/specialists';


interface EmployesData {
  quantity: string;
  description: string;
  images: string[];
}

export const HeroSection = () => {
  const { t, i18n } = useTranslation(['common', 'main']);
  const currentLang = i18n.resolvedLanguage || i18n.language || 'ru';
  // const employesData = t<string, { returnsObjects: true }, EmployesData>('hero.employes', { returnObjects: true }) || [];

  return (
    <section className="pt-28 pb-16 px-4 flex">
      <div className="flex-1">
        <div className="mx-auto max-w-9xl">
          {/* Hero card */}
          <div className="bg-card rounded-3xl md:p-12 lg:p-16 mb-6 flex">
            <div className="flex-1">
              <h1 className="font-display text-display-lg font-light text-foreground leading-tight">
                {t('main:hero.title')}
              </h1>
              <p className="mt-4 max-w-xl text-muted-foreground font-body text-base-fluid leading-relaxed">
                {t('main:hero.subtitle')}
              </p>
            </div >
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Specialists */}

            <div className="bg-card rounded-3xl flex flex-col p-6 items-start gap-4 w-full">
              {/* Text Section */}
              <div className="flex flex-col leading-tight">
                <div className="flex items-center gap-1">
                  <p className="font-display text-display-lg font-light text-foreground">
                    10
                  </p>
                  <span className="text-primary text-display-lg">+</span>
                </div>
                <p className="text-muted-foreground font-body text-sm-fluid mt-1">Специалистов</p>
              </div>

              {/* Avatars Section - Added flex-wrap and padding-left to account for overlap */}
              <div className="flex items-center">
                <div className="flex items-center isolate">
                  {[0, 1, 2].map((index) => (
                    <img
                      key={index}
                      className="w-10 h-10 min-w-[2.5rem] sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-card shadow -ml-3 first:ml-0 aspect-square shrink-0"
                      src={SPECIALISTS_LIST[index]?.image}
                    />
                  ))}

                  {/* The "More" Link */}
                  <div className="w-10 h-10 min-w-[2.5rem] sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-secondary flex items-center justify-center shadow -ml-3 aspect-square shrink-0 z-10">
                    <Link
                      className='w-full h-full flex items-center justify-center text-primary text-sm-fluid'
                      to={`/${currentLang}/specialists`}
                    >
                      {t('common:buttons.more')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Rating + Locations */}
            <div className="grid grid-rows-2 gap-4">
              <div className="bg-card rounded-3xl p-6">
                <div className="flex gap-2 items-baseline">
                  <p className="font-display text-display-lg font-light text-foreground">
                    {t('main:hero.locations.quantity')}
                  </p>
                  <p className="text-foreground font-display text-2xl-fluid">
                    {t('main:hero.locations.items')}
                  </p>
                </div>
                <p className="text-muted-foreground font-body text-small mt-1">
                  {t('main:hero.locations.description')}
                </p>
              </div>
              <div className="bg-card rounded-3xl p-6">
                <div className="flex items-center gap-1">
                  <p className="font-display text-display-lg font-light text-foreground">
                    {t('main:hero.rating.value')}
                  </p>
                  <span className="text-primary text-xl-fluid">★</span>
                </div>
                <p className="text-muted-foreground font-body text-small mt-1">
                  {t('main:hero.rating.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden min-[1141px]:block w-1/2 ml-8 rounded-2xl bg-secondary min-h-[300px] flex-1 overflow-hidden">
        <img
          src="/hero_image.webp"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};
