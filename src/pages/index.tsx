import { useTranslation } from 'react-i18next';
import { HeroSection } from '@/widgets/HeroSection/HeroSection';
import { AboutSection } from '@/widgets/AboutSection/AboutSection';
import { ServicesSection } from '@/widgets/ServicesSection/ServicesSection';
import { SpecialistsSection } from '@/widgets/SpecialistsSection/SpecialistsSection';
import { ContactsSection } from '@/widgets/Contacts/hero/ContactsSection';
import { SEO } from '@/components/SEO';

const Index = () => {
  const { t, i18n } = useTranslation('common');
  const lang = i18n.resolvedLanguage || i18n.language || 'ro';

  return (
    <>
      <SEO 
        title={t('seo.home.title')}
        description={t('seo.home.description')}
        path={`/${lang}`}
        schemaType="MedicalOrganization"
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SpecialistsSection />
      <ContactsSection />
    </>
  );
};

export default Index;

