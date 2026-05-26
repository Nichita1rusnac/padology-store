import { Link } from '@tanstack/react-router';
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
import { useLocalizedRoute } from '@/shared/lib/hooks/useLocalizedRoute';
import { PageBreadcrumbBar } from '@/widgets/Layout/PageBreadcrumbBar';

const Products = () => {
  const { t } = useTranslation('common');
  const { homePath, canonicalSeoPath, shareSeoPath, isCampaignRoute } = useLocalizedRoute();

  return (
    <main className="pt-20">
      <SEO
        title={t('seo.products.title')}
        description={t('seo.products.description')}
        path={canonicalSeoPath({ page: 'products' })}
        sharePath={shareSeoPath({ page: 'products' })}
        noIndex={isCampaignRoute}
        siteName={t('seo.siteName')}
      />
      <PageBreadcrumbBar>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={homePath()}>{t('nav.main')}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{t('nav.products')}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageBreadcrumbBar>

      <ProductsSection />
    </main>
  );
};

export default Products;
