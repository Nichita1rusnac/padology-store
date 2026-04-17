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
import { PricingSection } from '@/widgets/PricingSection/PricingSection';
import { SEO } from '@/components/SEO';

const Pricing = () => {
  const { t, i18n } = useTranslation('common');
  const lang = i18n.resolvedLanguage || i18n.language || 'ro';

  return (
    <main className="pt-20">
      <SEO
        title={t('seo.pricing.title')}
        description={t('seo.pricing.description')}
        path={`/${lang}/pricing`}
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
                <BreadcrumbPage>{t('nav.price')}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      <PricingSection />
    </main>
  );
};

export default Pricing;
