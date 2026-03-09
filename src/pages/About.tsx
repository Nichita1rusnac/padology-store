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
import { AboutSection } from '@/widgets/AboutSection/AboutSection';
import { Footer } from '@/widgets/Footer/Footer';

const About = () => {
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
                  <BreadcrumbPage>{t.about}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        <AboutSection />

        <section className="py-12 px-4 border-t border-border">
          <div className="mx-auto max-w-9xl space-y-4">
            <h2 className="font-display text-2xl md:text-3xl font-light text-foreground">
              More About Our Studio
            </h2>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Our podology studio was created to combine medical precision with
              comfort and care. Over the years, we have built a team that values
              professional growth, transparent communication, and individual
              treatment plans for every client.
            </p>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              We continuously improve our methods, introduce modern protocols,
              and maintain strict hygiene standards in every treatment room. Our
              objective is not only to resolve current concerns, but also to
              provide practical recommendations for long-term foot health.
            </p>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Whether this is your first appointment or a regular visit, we
              focus on a calm atmosphere, clear explanations, and measurable
              results. We are glad to be part of your health and wellness
              routine.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
