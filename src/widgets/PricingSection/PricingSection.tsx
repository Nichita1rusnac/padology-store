import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FilterTabs } from '@/shared/ui/FilterTabs';

interface Service {
  title: string;
  price?: number;
  price_range?: [number, number];
  note?: string;
}

interface Category {
  category: string;
  services: Service[];
}

interface SalonData {
  currency: string;
  categories: Category[];
}

export const PricingSection = () => {
  const { t, i18n } = useTranslation(['price', 'common']);

  const getPriceDisplay = (service: Service, currency: string) => {
    if (service.price_range) {
      return `${service.price_range[0]} - ${service.price_range[1]} ${currency}`;
    }
    return `${service.price} ${currency}`;
  };

  const renderSalonContent = (salonKey: 'center' | 'buiucani') => {
    const salonData = t(`price_list.${salonKey}`, { returnObjects: true }) as SalonData;

    if (!salonData || !salonData.categories) return null;

    const firstCategory = salonData.categories[0]?.category;
    const filterOptions = salonData.categories.map((cat) => ({
      label: cat.category,
      value: cat.category,
      disabled: !cat.services || cat.services.length === 0,
    }));

    return (
      <Tabs
        key={`${salonKey}-${i18n.language}`}
        defaultValue={firstCategory}
        className="w-full"
      >
        <FilterTabs options={filterOptions} />

        {salonData.categories.map((cat, catIdx) => (
          <TabsContent
            key={catIdx}
            value={cat.category}
            className="mt-0 outline-none animate-in fade-in slide-in-from-bottom-2 duration-500"
          >
            <div className="flex flex-col gap-3">
              {cat.services.map((service, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center justify-between px-6 md:px-8 py-5 font-body bg-card rounded-2xl border border-transparent hover:border-primary/20 transition-all cursor-default group"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-foreground text-base-fluid group-hover:text-primary transition-colors">
                      {service.title}
                    </span>
                    {service.note && (
                      <span className="text-muted-foreground text-caption italic">
                        {service.note}
                      </span>
                    )}
                  </div>
                  <span className="font-sans font-semibold text-primary text-base-fluid whitespace-nowrap ml-4">
                    {getPriceDisplay(service, salonData.currency)}
                  </span>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    );
  };

  return (
    <section id="pricing" className="py-12">
      <div className="mx-auto max-w-9xl">
        <Tabs defaultValue="buiucani" className="w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <h2 className="font-display text-display-md font-light text-foreground">
              {t('common:titles.pricing')}
            </h2>
            <TabsList className="bg-secondary/50 p-1 h-auto self-start md:self-auto rounded-full">
              <TabsTrigger
                value="buiucani"
                className="px-8 py-2.5 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                {t('common:salon.buiucani')}
              </TabsTrigger>
              <TabsTrigger
                value="center"
                className="px-8 py-2.5 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                {t('common:salon.center')}
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="center" className="mt-0 outline-none">
            {renderSalonContent('center')}
          </TabsContent>

          <TabsContent value="buiucani" className="mt-0 outline-none">
            {renderSalonContent('buiucani')}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
