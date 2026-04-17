import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
  const { t } = useTranslation(['price', 'common']);

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

    return (
      <Tabs defaultValue={firstCategory} className="w-full">
        <div className="flex overflow-x-auto px-4 mb-10 -mx-4 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <TabsList className="bg-transparent p-0 h-auto flex gap-3 min-w-max flex-nowrap">
            {salonData.categories.map((cat, idx) => (
              <TabsTrigger
                key={idx}
                value={cat.category}
                className="px-6 py-2.5 rounded-full text-sm-fluid font-medium transition-all border border-primary/10 data-[state=inactive]:bg-secondary/30 data-[state=inactive]:text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary data-[state=active]:shadow-md flex-shrink-0"
              >
                {cat.category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

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
                  <span className="text-primary font-semibold text-base-fluid whitespace-nowrap ml-4">
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
    <section id="pricing" className="py-12 px-4">
      <div className="mx-auto max-w-9xl">
        <Tabs defaultValue="center" className="w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <h2 className="font-display text-display-md font-light text-foreground">
              {t('common:titles.pricing')}
            </h2>
            <TabsList className="bg-secondary/50 p-1 h-auto self-start md:self-auto rounded-full">
              <TabsTrigger
                value="center"
                className="px-8 py-2.5 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                {t('common:salon.center')}
              </TabsTrigger>
              <TabsTrigger
                value="buiucani"
                className="px-8 py-2.5 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                {t('common:salon.buiucani')}
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
