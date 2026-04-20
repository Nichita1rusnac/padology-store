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
import { ContactsSection } from '@/widgets/ContactsSection';
import { SEO } from '@/components/SEO';

const Contacts = () => {
  const { t, i18n } = useTranslation('common');
  const lang = i18n.resolvedLanguage || i18n.language || 'ro';

  return (
    <main className="pt-20">
      <SEO
        title={t('seo.contacts.title')}
        description={t('seo.contacts.description')}
        path={`/${lang}/contacts`}
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
                <BreadcrumbPage>{t('nav.contacts')}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>
      <ContactsSection />
    </main>
  );
};

export default Contacts;
