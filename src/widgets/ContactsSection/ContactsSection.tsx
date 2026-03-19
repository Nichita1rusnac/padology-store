import { Phone, MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Define the interface for the contact list based on your JSON structure
interface ContactDetail {
  id: string;
  label: string;
  value: string;
}

interface ContactLocation {
  name: string;
  category: string;
  contact: ContactDetail[];
  location: string;
}

export const ContactsSection = () => {
  const { t } = useTranslation(['contacts', 'common']);
  // Using i18next generic for type safety instead of casting
  const locations = t<string, { returnObjects: true }, ContactLocation[]>('contacts', {
    returnObjects: true,
  });

  return (
    <section id="contacts" className="py-16 px-4">
      <div className="mx-auto max-w-9xl">
        <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-8">
          {t('hero.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {locations.map((loc, index) => {
            // Find specific details to render correct icons
            const address = loc.contact.find((c) => c.id === 'address')?.value;
            const phone = loc.contact.find((c) => c.id === 'phone')?.value;
            const workingHours = loc.contact.find((c) => c.id === 'working')?.value;

            return (
              <div key={index} className="bg-card rounded-3xl p-8 flex flex-col">
                <h3 className="font-display text-xl text-foreground mb-4">
                  {loc.category} <span className="text-primary">{loc.name}</span>
                </h3>
                <div className="space-y-3 flex-1">
                  {address && (
                    <div className="flex items-center gap-3 text-foreground font-body text-sm">
                      <MapPin size={16} className="text-primary shrink-0" />
                      {address}
                    </div>
                  )}
                  {phone && (
                    <div className="flex items-center gap-3 text-foreground font-body text-sm">
                      <Phone size={16} className="text-primary shrink-0" />
                      {phone}
                    </div>
                  )}
                  {workingHours && (
                    <div className="flex items-center gap-3 text-foreground font-body text-sm">
                      <Clock size={16} className="text-primary shrink-0" />
                      {workingHours}
                    </div>
                  )}
                  <button
                    className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-body font-semibold hover:opacity-90 transition-opacity"
                  >
                    {t('common:buttons.book')}
                  </button>
                </div>
                {/* Embedded Map */}
                <div className="mt-6 aspect-video rounded-2xl bg-secondary overflow-hidden">
                  <iframe
                    src={loc.location}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
