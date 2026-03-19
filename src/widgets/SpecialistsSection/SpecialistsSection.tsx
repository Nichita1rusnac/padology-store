import { useTranslation } from 'react-i18next';

const specialists = [
  { name: 'Lorem Ipsum', role: 'Lorem Specialist' },
  { name: 'Dolor Amet', role: 'Consectetur Expert' },
  { name: 'Sed Eiusmod', role: 'Tempor Advisor' },
  { name: 'Magna Aliqua', role: 'Veniam Specialist' },
];

export const SpecialistsSection = () => {
  const { t } = useTranslation('common');

  return (
    <section id="specialists" className="py-16 px-4">
      <div className="mx-auto max-w-9xl">
        <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-8">
          {t('titles.specialists')}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {specialists.map((s) => (
            <div key={s.name} className="bg-card rounded-3xl overflow-hidden">
              <div className="aspect-[3/4] bg-secondary" />
              <div className="p-5">
                <h3 className="font-display text-lg text-foreground">
                  {s.name}
                </h3>
                <p className="text-muted-foreground font-body text-sm mt-1">
                  {s.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
