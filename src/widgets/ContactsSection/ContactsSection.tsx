import { Phone, MapPin, Clock } from 'lucide-react';
import { useLanguageStore } from '@/shared/store/language';

export const ContactsSection = () => {
  const { t } = useLanguageStore();

  return (
    <section id="contacts" className="py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-8">
          {t.contactsTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Salon Buiucani */}
          <div className="bg-card rounded-3xl p-8">
            <h3 className="font-display text-xl text-foreground mb-4">
              {t.salonBuiucani}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                <MapPin size={16} className="text-primary shrink-0" />
                Lorem ipsum, str. Dolor 42
              </div>
              <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                <Phone size={16} className="text-primary shrink-0" />
                +373 00 000 000
              </div>
              <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                <Clock size={16} className="text-primary shrink-0" />
                09:00 – 21:00
              </div>
            </div>
            {/* Map placeholder */}
            <div className="mt-6 aspect-video rounded-2xl bg-secondary" />
          </div>

          {/* Salon Center */}
          <div className="bg-card rounded-3xl p-8">
            <h3 className="font-display text-xl text-foreground mb-4">
              {t.salonCenter}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                <MapPin size={16} className="text-primary shrink-0" />
                Lorem ipsum, bd. Amet 15
              </div>
              <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                <Phone size={16} className="text-primary shrink-0" />
                +373 00 000 001
              </div>
              <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                <Clock size={16} className="text-primary shrink-0" />
                09:00 – 21:00
              </div>
            </div>
            <div className="mt-6 aspect-video rounded-2xl bg-secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};
