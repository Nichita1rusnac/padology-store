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
import { SpecialistsSection } from '@/widgets/SpecialistsSection/SpecialistsSection';
import { Footer } from '@/widgets/Footer/Footer';

const Specialists = () => {
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
                  <BreadcrumbPage>{t('nav.specialists')}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        <SpecialistsSection />

        <section className="py-12 px-4 border-t border-border">
          <div className="mx-auto max-w-9xl space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-light text-foreground">
              Expert Team Focus
            </h2>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Our specialists regularly attend trainings and workshops to stay
              aligned with modern podology standards. We focus on practical
              diagnostics, detailed treatment planning, and continuous quality
              control at every stage of care.
            </p>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              In each appointment, we aim to explain not only what we do, but
              why we do it. This approach helps clients feel informed and
              confident while supporting better long-term outcomes.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Specialists;
