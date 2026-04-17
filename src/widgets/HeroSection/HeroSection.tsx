import { useTranslation } from 'react-i18next';
import { HeroTitleCard } from './components/HeroTitleCard';
import { SpecialistsStat } from './components/SpecialistsStat';
import { SecondaryStats } from './components/SecondaryStats';

export const HeroSection = () => {
  const { t, i18n } = useTranslation(['common', 'main']);
  const currentLang = i18n.resolvedLanguage || i18n.language || 'ru';

  return (
    <section className="pt-28 pb-16 px-4 sm:px-[clamp(1rem,5vw,2rem)] flex">
      <div className="min-[1141px]:w-1/2 max-[1140px]:w-full">
        <div className="mx-auto max-w-7xl">
          <HeroTitleCard
            title={t('main:hero.title')}
            subtitle={t('main:hero.subtitle')}
          />

          <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-4">
            <SpecialistsStat
              currentLang={currentLang}
              moreLabel={t('common:buttons.more')}
              title={t('main:hero.employes.description')}
            />

            <SecondaryStats
              locations={{
                value: t('main:hero.locations.quantity'),
                label: t('main:hero.locations.items'),
                description: t('main:hero.locations.description')
              }}
              rating={{
                value: t('main:hero.rating.value'),
                description: t('main:hero.rating.description')
              }}
            />
          </div>
        </div>
      </div>
      <div className="hidden min-[1141px]:block w-[clamp(300px,40vw,600px)] ml-[clamp(1rem,4vw,2rem)] rounded-2xl bg-secondary min-h-[300px] overflow-hidden shrink-0 flex-1">
        <img
          src="/hero_image.webp"
          alt="Professional podology and foot care treatment at Podiatric Studios Chișinău"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </section>
  );
};
