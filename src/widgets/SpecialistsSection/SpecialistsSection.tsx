import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SpecialistCarousel } from '../specialist-carousel/ui/SpecialistCarousel';
import { ArrowRight } from 'lucide-react';

export const SpecialistsSection = () => {
  const { t, i18n } = useTranslation('main');
  const currentLang = i18n.resolvedLanguage || i18n.language || 'ru';

  return (
    <section id="specialists" className="py-12 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="font-display text-lg-fluid text-primary font-medium tracking-wide uppercase mb-4 block">
            {t('specialists.subtitle')}
          </span>
          <h2 className="font-display text-display-lg font-light gradient-text mb-6">
            {t('specialists.title')}
          </h2>
          <p className="text-muted-foreground font-body text-lg-fluid leading-relaxed">
            {t('specialists.description')}
          </p>
        </div>

        {/* Carousel Widget */}
        <SpecialistCarousel />

        {/* Bottom CTA */}
        <div className="mt-8 md:mt-10 flex justify-center">
          <Link
            to={`/${currentLang}/specialists`}
            className="group flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-medium text-base-fluid hover:bg-foreground/90 transition-all hover:gap-4 shadow-lg hover:shadow-xl"
          >
            {t('specialists.view_all_cta', {
              defaultValue: 'View All Specialists',
            })}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
