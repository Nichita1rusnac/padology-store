import { useLanguageStore } from '@/shared/store/language';

const serviceKeys = [
  'Lorem Ipsum Service A',
  'Lorem Ipsum Service B',
  'Lorem Ipsum Service C',
  'Lorem Ipsum Service D',
  'Lorem Ipsum Service E',
  'Lorem Ipsum Service F',
];

export const ServicesSection = () => {
  const { t } = useLanguageStore();

  return (
    <section id="services" className="py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-8">
          {t.servicesTitle}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceKeys.map((name) => (
            <div
              key={name}
              className="bg-card rounded-3xl overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[3/2] bg-secondary" />
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground">{name}</h3>
                <p className="text-muted-foreground font-body text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
