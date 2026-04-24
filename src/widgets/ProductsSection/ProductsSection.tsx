import { useTranslation } from 'react-i18next';
import { PRODUCTS } from '@/entities/specialist/model/products';
import { CardGrid } from '@/shared/ui/CardGrid';
import { MediaCard } from '@/shared/ui/MediaCard';
import { InsoleCardItem } from '../ServicesSection/InsoleCardItem';

export const ProductsSection = () => {
    const { t } = useTranslation('products');
    return (
        <section id="products" className="py-12">
            <div className="mx-auto max-w-9xl">
                <div className="mb-12">
                    <h2 className="font-display text-display-md font-light text-foreground">{t('title')}</h2>
                </div>
                <CardGrid gridCols="lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
                    {PRODUCTS.map((product) =>
                        product.type === 'insoles' ? (
                            <InsoleCardItem key={product.id} service={product} />
                        ) : (
                            <MediaCard
                                key={product.id}
                                image={product.image}
                                title={t(`${product.token}.title`)}
                            >
                                <h3 className="font-sans text-[18px] font-semibold text-foreground tracking-[0.3px] leading-tight">
                                    {t(`${product.token}.price`).replace('-', '–')}
                                </h3>
                            </MediaCard>
                        )
                    )}
                </CardGrid>
            </div>
        </section>
    );
};
