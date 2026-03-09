import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useLanguageStore } from '@/shared/store/language';
import { Header } from '@/widgets/Header/Header';
import { ContactsSection } from '@/widgets/ContactsSection/ContactsSection';
import { Footer } from '@/widgets/Footer/Footer';

const Contacts = () => {
  const { t } = useLanguageStore();

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
                    <Link to="/">Main</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{t.contacts}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        <ContactsSection />

        <section className="py-12 px-4 border-t border-border">
          <div className="mx-auto max-w-9xl space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-light text-foreground">
              Visiting Information
            </h2>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              We recommend booking in advance to ensure preferred date and time.
              Walk-ins are possible depending on availability, but appointments
              receive priority. If your plans change, please notify us early so
              we can offer the slot to another client.
            </p>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              For questions about treatments, preparation, or post-care, our
              team is available by phone and messaging channels. We are happy to
              help you choose the most suitable service before your visit.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;
