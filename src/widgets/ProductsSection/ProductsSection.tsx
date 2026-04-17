import { useTranslation } from 'react-i18next';
import { PRODUCTS } from '@/entities/specialist/model/products';
import { CardGrid } from '@/shared/ui/CardGrid';
import { MediaCard } from '@/shared/ui/MediaCard';

export const ProductsSection = () => {
    const { t } = useTranslation('products');
    return (
        <section id="products" className="py-12 px-4">
            <div className="mx-auto max-w-9xl">
                <div className="mb-12">
                    <h2 className="font-display text-display-md font-light text-foreground">{t('title')}</h2>
                </div>
                <CardGrid>
                    {PRODUCTS.map((product) => (
                        <MediaCard
                            key={product.id}
                            image={product.image}
                            title={t(`${product.token}.title`)}
                        // onClick={() => {}} // Add optional click handler here if needed in the future
                        >
                            <h3 className="font-display text-base-fluid font-bold">{t(`${product.token}.price`)}</h3>
                        </MediaCard>
                    ))}
                </CardGrid>
            </div>
        </section>
    );
};
