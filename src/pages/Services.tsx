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
import { ServicesSection } from '@/widgets/ServicesSection/ServicesSection';
import { Footer } from '@/widgets/Footer/Footer';

const Services = () => {
  const { t } = useTranslation('common');

  return (
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
                <BreadcrumbPage>{t('nav.services')}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      <ServicesSection />

      <section className="py-12 px-4 border-t border-border">
        <div className="mx-auto max-w-9xl grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h2 className="font-display text-display-sm font-light text-foreground">
              Consultation Process
            </h2>
            <p className="text-muted-foreground font-body text-base-fluid leading-relaxed">
              Every treatment starts with a short consultation where we assess
              your current condition and discuss your goals. This helps us
              choose the most suitable procedure, estimate timing, and provide
              clear aftercare instructions.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="font-display text-display-sm font-light text-foreground">
              Service Standards
            </h2>
            <p className="text-muted-foreground font-body text-base-fluid leading-relaxed">
              We use sterilised instruments, proven techniques, and carefully
              selected products. Our focus is on delivering safe, effective,
              and consistent results while ensuring that each session remains
              comfortable for the client.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
