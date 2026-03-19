import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


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
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
                {t('main:hero.title')}
              </h1>
              <p className="mt-4 max-w-xl text-muted-foreground font-body text-sm md:text-base leading-relaxed">
                {t('main:hero.subtitle')}
              </p>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Specialists */}
            <div className="bg-card rounded-3xl flex flex-col justify-between p-6">
              <ul className="flex flex-row flex-wrap">
                <li className="w-20 h-20 rounded-full bg-secondary -mr-1.5 -mb-5 border-2 border-card"></li>
                <li className="w-20 h-20 rounded-full bg-secondary -mr-1.5 -mb-5 border-2 border-card"></li>
                <li className="w-20 h-20 rounded-full bg-secondary -mr-1.5 -mb-5 border-2 border-card"></li>
                <li className="w-20 h-20 rounded-full bg-secondary -mr-1.5 -mb-5 border-2 border-card"></li>
                <li className="w-20 h-20 rounded-full bg-secondary -mr-1.5 -mb-5 border-2 border-card"></li>
                <li className="w-20 h-20 rounded-full bg-secondary -mr-1.5 -mb-5 border-2 border-card">
                  <Link className='w-full h-full flex items-center justify-center text-primary' to={`/${currentLang}/specialists`}>{t('common:buttons.more')}</Link>
                </li>
              </ul>
              <div>
                <p className="font-display text-5xl font-light text-foreground hidden lg:block">
                  {t('main:hero.employes.quantity')}
                </p>
                <p className="text-muted-foreground font-body text-sm mt-1 hidden lg:block">
                  {t('main:hero.employes.description')}
                </p>
              </div>
            </div>

            {/* Rating + Locations */}
            <div className="grid grid-rows-2 gap-4">
              <div className="bg-card rounded-3xl p-6">
                <div className="flex gap-2 items-baseline">
                  <p className="font-display text-6xl font-light text-foreground">
                    {t('main:hero.locations.quantity')}
                  </p>
                  <p className="text-foreground font-display text-3xl">
                    {t('main:hero.locations.items')}
                  </p>
                </div>
                <p className="text-muted-foreground font-body text-sm mt-1">
                  {t('main:hero.locations.description')}
                </p>
              </div>
              <div className="bg-card rounded-3xl p-6">
                <div className="flex items-center gap-1">
                  <p className="font-display text-6xl font-light text-foreground">
                    {t('main:hero.rating.value')}
                  </p>
                  <span className="text-primary text-2xl">★</span>
                </div>
                <p className="text-muted-foreground font-body text-sm mt-1">
                  {t('main:hero.rating.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-1/2 ml-8 rounded-2xl bg-secondary min-h-[300px] flex-1" />
    </section>
  );
};
