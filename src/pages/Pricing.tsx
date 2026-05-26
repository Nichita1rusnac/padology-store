import { Link } from '@tanstack/react-router';
import { useLocalizedRoute } from '@/shared/lib/hooks/useLocalizedRoute';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useTranslation } from 'react-i18next';
import { PricingSection } from '@/widgets/PricingSection/PricingSection';
import { SEO } from '@/components/SEO';
import { PageBreadcrumbBar } from '@/widgets/Layout/PageBreadcrumbBar';

const Pricing = () => {
  const { t } = useTranslation('common');
  const { homePath, canonicalSeoPath, shareSeoPath, isCampaignRoute } = useLocalizedRoute();

  return (
    <main className="pt-20">
      <SEO
        title={t('seo.pricing.title')}
        description={t('seo.pricing.description')}
        path={canonicalSeoPath({ page: 'pricing' })}
        sharePath={shareSeoPath({ page: 'pricing' })}
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
              <BreadcrumbPage>{t('nav.price')}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageBreadcrumbBar>

      <PricingSection />
    </main>
  );
};

export default Pricing;
