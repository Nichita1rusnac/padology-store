
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
    <footer className="pb-[clamp(2rem,5vw,3rem)] px-4 sm:px-[clamp(1rem,4vw,2rem)] mt-8">
      <div className="mx-auto max-w-9xl w-full">
        <div className={cn(
          "bg-card rounded-3xl p-[clamp(1.25rem,4vw,2rem)] flex flex-col gap-[clamp(1.5rem,4vw,2.5rem)] w-full"
        )}>
          {/* Top Section: Navigation + Clinics */}
          <div className="w-full">
            <h2 className="font-display text-2xl-fluid font-semibold text-foreground mb-6">
              {t('main:footer.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-[clamp(1rem,3vw,1.5rem)]">
              {validLocations.map((location) => {
                const address = location.contact.find((c) => c.id === 'address')?.value;
                const phone = location.contact.find((c) => c.id === 'phone')?.value;
                const telegram = location.contact.find((c) => c.id === 'telegram')?.value;
                const instagram = location.contact.find((c) => c.id === 'instagram')?.value;

                return (
                  <div
                    key={location.id || location.name}
                    className={cn("flex flex-col gap-5 min-w-0",
                      "border border-border rounded-2xl p-[clamp(1rem,3vw,1.75rem)] w-full",
                      "shadow-sm hover:shadow-md hover:border-primary/20",
                      "transition-all duration-300 group")}
                  >
                    <div className="flex flex-row items-center justify-start gap-3 sm:gap-4">
                      <img
                        className="size-[clamp(3rem,8vw,3.5rem)] shrink-0 rounded-full object-cover opacity-80"
                        src={location.logo}
                        alt={`Logo of ${location.name} Podiatry Clinic`}
                        loading="lazy"
                      />
                      <h3 className="text-base-fluid sm:text-xl-fluid font-semibold font-display text-primary uppercase tracking-wide">
                        {location.name}
                      </h3>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col gap-2">
                        {address && (
                          <a
                            href={location.location}
                            target="_blank"
                            aria-label={`${location.name} Address`}
                            rel="noopener noreferrer"
                            className={cn("font-body text-sm-fluid text-muted-foreground leading-tight hover:text-primary transition-colors flex items-start gap-2.5")}
                          >
                            <MapPin className="size-4 text-muted-foreground shrink-0 mt-0.5" />
                            <span>{address}</span>
                          </a>
                        )}

                        {phone && (
                          <a
                            href={`tel:${formatPhoneLink(phone)}`}
                            aria-label={`${location.name} Phone`}
                            className={cn(
                              "font-body text-base-fluid text-foreground font-medium leading-tight",
                              "hover:text-primary transition-colors flex items-center gap-2.5"
                            )}
                          >
                            <Phone className="size-4 text-muted-foreground shrink-0" />
                            <span>{phone}</span>
                          </a>
                        )}
                      </div>

                      <div className="flex flex-row gap-2.5 mt-2">
                        {phone && (
                          <a
                            href={`tel:${formatPhoneLink(phone)}`}
                            aria-label={`${location.name} Phone`}
                            className={cn(
                              "flex size-[clamp(2.5rem,8vw,2.75rem)] rounded-full bg-secondary items-center justify-center",
                              "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                              "hover:-translate-y-0.5 transition-all duration-300"
                            )}
                          >
                            <Phone className="size-[clamp(1rem,4vw,1.125rem)]" />
                          </a>
                        )}
                        {telegram && (
                          <a
                            href={telegram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${location.name} Telegram`}
                            className={cn(
                              "flex size-[clamp(2.5rem,8vw,2.75rem)] rounded-full bg-secondary items-center justify-center",
                              "text-muted-foreground hover:-translate-y-0.5 hover:bg-[#2AABEE]",
                              "hover:text-white hover:border-[#2AABEE] transition-colors duration-300"
                            )}
                          >
                            <Send className="size-[clamp(1rem,4vw,1.125rem)]" />
                          </a>
                        )}
                        {instagram && (
                          <a
                            href={instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${location.name} Instagram`}
                            className={cn(
                              "flex size-[clamp(2.5rem,8vw,2.75rem)] rounded-full bg-secondary items-center justify-center",
                              "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                              "hover:bg-instagram hover:text-white hover:-translate-y-0.5",
                              "hover:border-transparent transition-all duration-300"
                            )}
                          >
                            <Instagram className="size-[clamp(1rem,4vw,1.125rem)]" />
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
            <div className="text-sm-fluid text-muted-foreground font-body">
              <p>© {new Date().getFullYear()} EV PODOLUX. {t('main:footer.all_rights_reserved')}.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
