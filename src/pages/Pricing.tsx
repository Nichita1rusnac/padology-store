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
import { PricingSection } from '@/widgets/PricingSection/PricingSection';
import { Footer } from '@/widgets/Footer/Footer';

const Pricing = () => {
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
                  <BreadcrumbPage>{t.pricing}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        <PricingSection />

        <section className="py-12 px-4 border-t border-border">
          <div className="mx-auto max-w-9xl space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-light text-foreground">
              Pricing Notes
            </h2>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Prices listed on this page are reference values and may be
              adjusted based on treatment complexity, duration, and the
              materials required. Final pricing is confirmed during consultation
              before treatment begins.
            </p>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              We periodically offer promotional packages for combined procedures
              and seasonal care plans. For current offers, please contact our
              team directly.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
