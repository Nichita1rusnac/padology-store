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
  const addressParts = address?.split(',');
  const mainAddress = addressParts?.[0];
  const secondaryAddress = addressParts?.slice(1).join(',');
  const bookTag = loc.contact.find((c) => c.id === 'tag')?.value;

  return (
    <div className="space-y-12">
      <div className="bg-card rounded-3xl lg:h-[50vh] p-6 flex flex-col md:flex-row justify-between gap-8 border shadow-sm transition-all duration-300 hover:shadow-lg group">
        <div className="flex-1">
          <h3 className="font-display text-2xl font-semibold leading-snug tracking-wide text-foreground mb-4">
            {loc.category} <span className="text-primary">{loc.name}</span>
          </h3>
          <div className="space-y-3 mb-8">
            {address && (
              <div className="flex items-start gap-3 text-foreground font-body">
                <MapPin size={18} className="text-muted-foreground shrink-0 mt-1" />
                <div className="text-base leading-relaxed">
                  {mainAddress}
                  {secondaryAddress && (
                    <span className="text-muted-foreground">, {secondaryAddress}</span>
                  )}
                </div>
              </div>
            )}
            {phone && (
              <div className="flex items-center gap-3 text-foreground font-body">
                <Phone size={18} className="text-muted-foreground shrink-0" />
                <span className="text-base">{phone}</span>
              </div>
            )}
            {workingHours && (
              <div className="flex items-center gap-3 text-foreground font-body">
                <Clock size={18} className="text-muted-foreground shrink-0" />
                <span className="text-base">{workingHours}</span>
              </div>
            )}
          </div>
          <Link
            to={`${bookingPath}?location=${bookTag}`}
            className="inline-block w-full md:w-auto px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-base font-medium text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            {t('common:buttons.book')}
          </Link>
        </div>
        <div className="aspect-video md:aspect-auto md:w-1/2 rounded-2xl bg-secondary overflow-hidden shadow-sm border border-border">
          <iframe
            src={loc.embed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[0.2] contrast-[1.1] transition-all duration-500 group-hover:grayscale-0"
          />
        </div>
      </div>

      {/* Gallery Section */}
      <div className="space-y-6">
        <h3 className="font-display text-xl font-medium tracking-wide text-foreground">
          {t('hero.gallery')}
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-3">
          {galleryData[type].map((img, idx) => (
            <div
              key={idx}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border shadow-sm cursor-pointer"
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
