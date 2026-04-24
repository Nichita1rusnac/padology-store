
import { Phone, Send, Instagram, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import cn from 'clsx';

interface ContactDetail {
  id: string;
  label: string;
  value: string;
}

interface ContactLocation {
  id: string;
  name: string;
  category: string;
  contact: ContactDetail[];
  location: string;
  logo?: string;
}

export const Footer = () => {
  const { t } = useTranslation(['contacts', 'main']);

  const locations = t<string, { returnObjects: true }, ContactLocation[]>('contacts:contacts', {
    returnObjects: true,
  });

  const validLocations = Array.isArray(locations)
    ? locations.map((loc) => ({
      ...loc,
      logo: loc.name === 'Evasstore' ? '/logo_2.webp' : '/logo.webp',
    }))
    : [];

  const formatPhoneLink = (phone: string) => {
    return phone.replace(/\s/g, '');
  };

  return (
    <footer className="pb-12 px-4 sm:px-[clamp(1rem,5vw,2rem)] mt-8">
      <div className="mx-auto max-w-9xl w-full">
        <div className={cn(
          "bg-card rounded-3xl p-8 flex flex-col gap-10 w-full"
        )}>
          {/* Top Section: Navigation + Clinics */}
          <div className="w-full">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
              {t('main:footer.title')}
            </h2>
            <div className="flex flex-col md:flex-row align-start justify-start gap-6">
              {validLocations.map((location) => {
                const address = location.contact.find((c) => c.id === 'address')?.value;
                const phone = location.contact.find((c) => c.id === 'phone')?.value;
                const telegram = location.contact.find((c) => c.id === 'telegram')?.value;
                const instagram = location.contact.find((c) => c.id === 'instagram')?.value;

                return (
                  <div
                    key={location.id || location.name}
                    className={cn("flex flex-col gap-5",
                      "border border-border rounded-2xl p-7 w-full",
                      "shadow-sm hover:shadow-md hover:border-primary/20",
                      "transition-all duration-300 group")}
                  >
                    <div className="flex flex-row items-center justify-start gap-4">
                      <img
                        className="w-14 h-14 shrink-0 rounded-full object-cover opacity-80"
                        src={location.logo}
                        alt={`Logo of ${location.name} Podiatry Clinic`}
                        loading="lazy"
                      />
                      <h3 className="text-xl font-semibold font-display text-primary uppercase tracking-wide">
                        {location.name}
                      </h3>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col gap-2">
                        {address && (
                          <a
                            href={location.location}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn("font-body text-sm text-muted-foreground leading-tight hover:text-primary transition-colors flex items-start gap-2.5")}
                          >
                            <MapPin size={16} className="text-muted-foreground shrink-0 mt-0.5" />
                            <span>{address}</span>
                          </a>
                        )}

                        {phone && (
                          <a
                            href={`tel:${formatPhoneLink(phone)}`}
                            className={cn(
                              "font-body text-base text-foreground font-medium leading-tight",
                              "hover:text-primary transition-colors flex items-center gap-2.5"
                            )}
                          >
                            <Phone size={16} className="text-muted-foreground shrink-0" />
                            <span>{phone}</span>
                          </a>
                        )}
                      </div>

                      <div className="flex flex-row gap-2.5 mt-2">
                        {phone && (
                          <a
                            href={`tel:${formatPhoneLink(phone)}`}
                            className={cn(
                              "flex w-10 h-10 rounded-full bg-secondary items-center justify-center",
                              "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                              "hover:-translate-y-0.5 transition-all duration-300"
                            )}
                          >
                            <Phone size={18} />
                          </a>
                        )}
                        {telegram && (
                          <a
                            href={telegram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              "flex w-10 h-10 rounded-full bg-secondary items-center justify-center",
                              "text-muted-foreground hover:-translate-y-0.5 hover:bg-[#2AABEE]",
                              "hover:text-white hover:border-[#2AABEE] transition-colors duration-300"
                            )}
                          >
                            <Send size={18} />
                          </a>
                        )}
                        {instagram && (
                          <a
                            href={instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              "flex w-10 h-10 rounded-full bg-secondary items-center justify-center",
                              "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                              "hover:bg-instagram hover:text-white hover:-translate-y-0.5",
                              "hover:border-transparent transition-all duration-300"
                            )}
                          >
                            <Instagram size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Section: Brand + Social */}
          <div className="pt-8 border-t border-border/50">
            <div className="text-sm text-muted-foreground font-body">
              <p>© {new Date().getFullYear()} EV PODOLUX. {t('main:footer.all_rights_reserved')}.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};