import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ContactLocation, GalleryType } from '../model/types';
import { galleryData } from '../model/gallery-data';

interface StudioInfoProps {
  loc: ContactLocation;
  type: GalleryType;
  bookingPath: string;
  onImageClick: (idx: number, type: GalleryType) => void;
}

export const StudioInfo = ({ loc, type, bookingPath, onImageClick }: StudioInfoProps) => {
  const { t } = useTranslation(['contacts', 'common']);
  
  const address = loc.contact.find((c) => c.id === 'address')?.value;
  const phone = loc.contact.find((c) => c.id === 'phone')?.value;
  const workingHours = loc.contact.find((c) => c.id === 'working')?.value;

  return (
    <div className="space-y-12">
      <div className="bg-card rounded-3xl lg:h-[50vh] p-8 flex flex-col md:flex-row justify-between gap-8 border shadow-sm">
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
              onClick={() => onImageClick(idx, type)}
            >
              <img
                src={img}
                alt={`${loc.name} gallery ${idx + 1}`}
                loading="lazy"
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
