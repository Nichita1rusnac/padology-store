import { Header } from '@/widgets/Header/Header';
import { HeroSection } from '@/widgets/HeroSection/HeroSection';
import { AboutSection } from '@/widgets/AboutSection/AboutSection';
import { ServicesSection } from '@/widgets/ServicesSection/ServicesSection';
import { SpecialistsSection } from '@/widgets/SpecialistsSection/SpecialistsSection';
import { PricingSection } from '@/widgets/PricingSection/PricingSection';
import { ContactsSection } from '@/widgets/ContactsSection/ContactsSection';
import { Footer } from '@/widgets/Footer/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SpecialistsSection />
        <PricingSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
