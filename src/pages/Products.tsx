import { Link } from 'react-router-dom';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useTranslation } from 'react-i18next';
import { ProductsSection } from '@/widgets/ProductsSection/ProductsSection';
import { SEO } from '@/components/SEO';

const Products = () => {
    const { t, i18n } = useTranslation('common');
    const lang = i18n.resolvedLanguage || i18n.language || 'ro';

    return (
        <main className="pt-20">
            <SEO
                title={t('seo.products.title')}
                description={t('seo.products.description')}
                path={`/${lang}/products`}
            />
            <section className="pt-4 px-4">
                <div className="mx-auto max-w-9xl">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="/">{t('nav.main')}</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{t('nav.products')}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </section>

            <ProductsSection />
        </main>
    );
};

export default Products;
