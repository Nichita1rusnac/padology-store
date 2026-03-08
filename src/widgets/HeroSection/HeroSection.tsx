import { useLanguageStore } from '@/shared/store/language';

export const HeroSection = () => {
  const { t } = useLanguageStore();

  return (
    <section className="pt-28 pb-16 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Hero card */}
        <div className="bg-card rounded-3xl p-8 md:p-12 lg:p-16 mb-6 flex">
          <div className="flex-1">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
              {t.heroTitle}
            </h1>
            <p className="mt-4 max-w-xl text-muted-foreground font-body text-sm md:text-base leading-relaxed">
              {t.heroSubtitle}
            </p>
          </div>
          <div className="hidden lg:block w-1/2 ml-8 rounded-2xl bg-secondary min-h-[300px]" />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Specialists */}
          <div className="bg-card rounded-3xl p-8">
            <div className="flex gap-2 mb-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full bg-secondary" />
              ))}
            </div>
            <p className="font-display text-5xl font-light text-foreground">
              10+
            </p>
            <p className="text-muted-foreground font-body text-sm mt-1">
              Lorem ipsum specialists
            </p>
          </div>

          {/* Rating + Locations */}
          <div className="grid grid-rows-2 gap-4">
            <div className="bg-card rounded-3xl p-8">
              <p className="font-display text-4xl font-light text-foreground">
                2
              </p>
              <p className="text-muted-foreground font-body text-sm mt-1">
                Lorem ipsum locations
              </p>
            </div>
            <div className="bg-card rounded-3xl p-8">
              <div className="flex items-baseline gap-1">
                <p className="font-display text-4xl font-light text-foreground">
                  4.9
                </p>
                <span className="text-primary text-xl">★</span>
              </div>
              <p className="text-muted-foreground font-body text-sm mt-1">
                Lorem ipsum rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
