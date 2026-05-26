import { useTranslation } from 'react-i18next';
import { PRODUCTS } from '@/entities/specialist/model/products';
import { CardGrid } from '@/shared/ui/CardGrid';
import { MediaCard } from '@/shared/ui/MediaCard';
import { InsoleCardItem } from '../ServicesSection/InsoleCardItem';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { FilterTabs } from '@/shared/ui/FilterTabs';

export const ProductsSection = () => {
    const { t } = useTranslation('products');

    const filterOptions = [
        { label: t('filters.all'), value: 'all' },
        { label: t('filters.spring'), value: 'spring' },
        { label: t('filters.summer'), value: 'summer' },
        { label: t('filters.autumn'), value: 'autumn' },
        { label: t('filters.winter'), value: 'winter' },
        { label: t('filters.insoles'), value: 'insoles' },
        { label: t('filters.shoes'), value: 'shoes' },
    ].map(option => ({
        ...option,
        disabled: option.value !== 'all' && !PRODUCTS.some(product => product.tags.includes(option.value))
    }));

    return (
        <section id="products" className="pb-[clamp(3rem,7vw,5rem)]">
            <div className="mx-auto max-w-9xl">
                <div className="mb-[clamp(2rem,5vw,3rem)]">
                    <h2 className="font-display text-display-md font-light text-foreground">{t('title')}</h2>
                </div>

                <Tabs defaultValue="all" className="w-full">
                    <FilterTabs options={filterOptions} />

                    {filterOptions.map((option) => (
                        <TabsContent
                            key={option.value}
                            value={option.value}
                            className="mt-0 outline-none animate-in fade-in slide-in-from-bottom-2 duration-500"
                        >
                            <CardGrid gridCols="lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
                                {PRODUCTS.filter(product => option.value === 'all' || product.tags.includes(option.value)).map((product) =>
                                    product.type === 'insoles' ? (
                                        <InsoleCardItem key={product.id} service={product} />
                                    ) : (
                                        <MediaCard
                                            key={product.id}
                                            image={product.image}
                                            title={t(`${product.token}.title`)}
                                        >
                                            <div className="flex flex-col gap-2">
                                                <div className="flex flex-wrap gap-1.5">
                                                    {product.tags
                                                        .filter(tag => ['spring', 'summer', 'autumn', 'winter'].includes(tag))
                                                        .map(tag => (
                                                            <span 
                                                                key={tag} 
                                                                className="text-[clamp(0.625rem,1.8vw,0.6875rem)] uppercase tracking-wide font-bold text-primary/80 bg-primary/5 px-2 py-0.5 rounded-full border border-primary/10"
                                                            >
                                                                {t(`filters.${tag}`)}
                                                            </span>
                                                        ))
                                                    }
                                                </div>
                                                <h3 className="font-sans text-lg-fluid font-semibold text-foreground leading-tight">
                                                    {t(`${product.token}.price`).replace('-', '–')}
                                                </h3>
                                            </div>
                                        </MediaCard>
                                    )
                                )}
                            </CardGrid>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
};
