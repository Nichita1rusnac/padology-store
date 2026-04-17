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
import { AboutSection } from '@/widgets/AboutSection/AboutSection';
import { Footer } from '@/widgets/Footer/Footer';
import { SEO } from '@/components/SEO';

const About = () => {
  const { t, i18n } = useTranslation('common');
  const lang = i18n.resolvedLanguage || i18n.language || 'ro';

  return (
    <main className="pt-20">
      <SEO 
        title={t('seo.about.title')}
        description={t('seo.about.description')}
        path={`/${lang}/about`}
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
                <BreadcrumbPage>{t('nav.about')}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="mt-8 font-display text-display-md font-light text-foreground">
            {t('titles.about', { defaultValue: 'About Podiatric Studios' })}
          </h1>
        </div>
      </section>

      <AboutSection />

      <section className="py-12 px-4 border-t border-border">
        <div className="mx-auto max-w-9xl space-y-4">
          <h2 className="font-display text-display-sm font-light text-foreground">
            More About Our Studio
          </h2>
          <p className="text-muted-foreground font-body text-base-fluid leading-relaxed">
            Our podology studio was created to combine medical precision with
            comfort and care. Over the years, we have built a team that values
            professional growth, transparent communication, and individual
            treatment plans for every client.
          </p>
          <p className="text-muted-foreground font-body text-base-fluid leading-relaxed">
            We continuously improve our methods, introduce modern protocols,
            and maintain strict hygiene standards in every treatment room. Our
            objective is not only to resolve current concerns, but also to
            provide practical recommendations for long-term foot health.
          </p>
          <p className="text-muted-foreground font-body text-base-fluid leading-relaxed">
            Whether this is your first appointment or a regular visit, we
            focus on a calm atmosphere, clear explanations, and measurable
            results. We are glad to be part of your health and wellness
            routine.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
