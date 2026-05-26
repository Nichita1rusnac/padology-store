import { useTranslation } from 'react-i18next';
import { HeroTitleCard } from './components/HeroTitleCard';
import { SpecialistsStat } from './components/SpecialistsStat';
import { SecondaryStats } from './components/SecondaryStats';

export const HeroSection = () => {
  const { t } = useTranslation(['common', 'main']);

  return (
    <section className="pt-[clamp(6.5rem,12vw,8rem)] pb-[clamp(3rem,7vw,4rem)] flex gap-[clamp(1rem,4vw,2rem)] max-w-9xl mx-auto">
      <div className="min-[1141px]:w-1/2 max-[1140px]:w-full">
        <div className="mx-auto max-w-7xl">
          <HeroTitleCard
            title={t('main:hero.title')}
            subtitle={t('main:hero.subtitle')}
          />

          <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-[clamp(0.75rem,2vw,1rem)]">
            <SpecialistsStat
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
      <div className="hidden min-[1141px]:block w-[clamp(20rem,40vw,38rem)] rounded-2xl bg-secondary min-h-[22rem] overflow-hidden shrink-0 flex-1">
        <img
          src="/hero_image.webp"
          alt="Professional podology and foot care treatment at Podiatric Studios Chișinău"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>
    </section>
  );
};
