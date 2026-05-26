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
import { ContactsSection } from '@/widgets/ContactsSection';
import { SEO } from '@/components/SEO';
import { PageBreadcrumbBar } from '@/widgets/Layout/PageBreadcrumbBar';

const Contacts = () => {
  const { t } = useTranslation('common');
  const { homePath, canonicalSeoPath, shareSeoPath, isCampaignRoute } = useLocalizedRoute();

  return (
    <main className="pt-20">
      <SEO
        title={t('seo.contacts.title')}
        description={t('seo.contacts.description')}
        path={canonicalSeoPath({ page: 'contacts' })}
        sharePath={shareSeoPath({ page: 'contacts' })}
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
              <BreadcrumbPage>{t('nav.contacts')}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageBreadcrumbBar>

      <ContactsSection />
    </main>
  );
};

export default Contacts;
