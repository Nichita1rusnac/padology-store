import { useTranslation } from 'react-i18next';

const priceItems = [
  { service: 'Lorem ipsum dolor', price: '500 MDL' },
  { service: 'Consectetur adipiscing', price: '700 MDL' },
  { service: 'Sed do eiusmod tempor', price: '350 MDL' },
  { service: 'Ut enim ad minim', price: '900 MDL' },
  { service: 'Quis nostrud exercitation', price: '600 MDL' },
  { service: 'Duis aute irure dolor', price: '450 MDL' },
  { service: 'Excepteur sint occaecat', price: '800 MDL' },
  { service: 'Cupidatat non proident', price: '550 MDL' },
];

export const PricingSection = () => {
  const { t } = useTranslation('common');

  return (
    <section id="pricing" className="py-16 px-4">
      <div className="mx-auto max-w-9xl">
        <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-8">
          {t('titles.pricing')}
        </h2>
        <div className="bg-card rounded-3xl overflow-hidden">
          {priceItems.map((item, i) => (
            <div
              key={item.service}
              className={`flex items-center justify-between px-8 py-5 font-body ${
                i !== priceItems.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <span className="text-foreground text-sm">{item.service}</span>
              <span className="text-primary font-semibold text-sm">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
