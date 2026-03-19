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
import { Header } from '@/widgets/Header/Header';
import { ContactsSection } from '@/widgets/ContactsSection/ContactsSection';
import { Footer } from '@/widgets/Footer/Footer';

const Contacts = () => {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
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
      <Footer />
    </div>
  );
};

export default Contacts;
