import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useBookingPath } from '@/shared/lib/hooks/useBookingPath';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

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

const galleryData = {
  center: [
    '/images/gallery/center_1.webp',
    '/images/gallery/center_2.webp',
    '/images/gallery/center_3.webp',
    '/images/gallery/center_4.webp',
    '/images/gallery/center_5.webp',
    '/images/gallery/center_6.webp',
    '/images/gallery/center_7.webp',
  ],
  buiucani: [
    '/images/gallery/buiucani_1.webp',
    '/images/gallery/buiucani_2.webp',
    '/images/gallery/buiucani_3.webp',
    '/images/gallery/buiucani_4.webp',
    '/images/gallery/buiucani_5.webp',
  ],
};

export const ContactsSection = () => {
  const { t } = useTranslation(['contacts', 'common']);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Using i18next generic for type safety instead of casting
  const locations = t<string, { returnObjects: true }, ContactLocation[]>('contacts', {
    returnObjects: true,
  });

  const bookingPath = useBookingPath();

  // Evasstore is Buiucani, EvPodolux is Center
  const buiucaniStudio = locations.find(loc => loc.name === 'Evasstore');
  const centerStudio = locations.find(loc => loc.name === 'EvPodolux');

  const renderStudioInfo = (loc: ContactLocation, type: 'center' | 'buiucani') => {
    const address = loc.contact.find((c) => c.id === 'address')?.value;
    const phone = loc.contact.find((c) => c.id === 'phone')?.value;
    const workingHours = loc.contact.find((c) => c.id === 'working')?.value;

    return (
      <div className="space-y-12">
        <div className="bg-card rounded-3xl lg:h-[50vh] p-8 flex flex-col md:flex-row justify-between gap-8  border shadow-sm">
          <div className="flex-1">
            <h3 className="font-display text-display-sm text-foreground mb-6">
              {loc.category} <span className="text-primary">{loc.name}</span>
            </h3>
            <div className="space-y-4 mb-8">
              {address && (
                <div className="flex items-start gap-3 text-foreground font-body">
                  <MapPin size={20} className="text-primary shrink-0 mt-1" />
                  <span className="text-base-fluid">{address}</span>
                </div>
              )}
              {phone && (
                <div className="flex items-center gap-3 text-foreground font-body">
                  <Phone size={20} className="text-primary shrink-0" />
                  <span className="text-base-fluid">{phone}</span>
                </div>
              )}
              {workingHours && (
                <div className="flex items-center gap-3 text-foreground font-body">
                  <Clock size={20} className="text-primary shrink-0" />
                  <span className="text-base-fluid">{workingHours}</span>
                </div>
              )}
            </div>
            <Link
              to={`${bookingPath}?location=${loc.contact.find((c) => c.id === 'tag')?.value}`}
              className="inline-block w-full md:w-auto px-8 py-3.5 bg-primary text-primary-foreground rounded-full text-button font-body font-semibold text-center hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              {t('common:buttons.book')}
            </Link>
          </div>
          <div className="aspect-video md:aspect-auto md:w-1/2 rounded-3xl bg-secondary overflow-hidden shadow-sm border border-primary/5v">
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


        {/* Gallery Section */}
        <div className="space-y-6">
          <h3 className="font-display text-display-sm font-light text-foreground">
            {t('hero.gallery')}
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-3">
            {galleryData[type].map((img, idx) => (
              <div
                key={idx}
                className="group relative aspect-square overflow-hidden border border-primary/5 shadow-sm cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`${loc.name} gallery ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="contacts" className="py-12 px-4">
      <div className="mx-auto max-w-9xl">
        <Tabs defaultValue="center" className="w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <h2 className="font-display text-display-md font-light text-foreground">
              {t('hero.title')}
            </h2>
            <TabsList className="bg-secondary/50 p-1 h-auto self-start md:self-auto rounded-full">
              <TabsTrigger
                value="center"
                className="px-8 py-2.5 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                {t('common:salon.center')}
              </TabsTrigger>
              <TabsTrigger
                value="buiucani"
                className="px-8 py-2.5 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                {t('common:salon.buiucani')}
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="center" className="mt-0 outline-none focus:ring-0">
            {centerStudio && renderStudioInfo(centerStudio, 'center')}
          </TabsContent>

          <TabsContent value="buiucani" className="mt-0 outline-none focus:ring-0">
            {buiucaniStudio && renderStudioInfo(buiucaniStudio, 'buiucani')}
          </TabsContent>
        </Tabs>
      </div>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 transition-opacity animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery fullscreen"
            className="max-w-full max-h-[90vh] object-contain animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
