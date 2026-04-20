
import { Phone, Send, Instagram, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

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
}

export const Footer = () => {
  const { t, i18n } = useTranslation(['common', 'contacts', 'main']);
  const currentLang = i18n.resolvedLanguage || i18n.language || 'ru';

  const navItems = [
    { label: t('common:nav.specialists'), path: `/${currentLang}/specialists` },
    { label: t('common:nav.price'), path: `/${currentLang}/pricing` },
    { label: t('common:nav.contacts'), path: `/${currentLang}/contacts` },
  ];

  const locations = t<string, { returnObjects: true }, ContactLocation[]>('contacts:contacts', {
    returnObjects: true,
  });

  const validLocations = Array.isArray(locations) ? locations : [];
  const buiucaniStore = validLocations.find((location) => location.name === 'Evasstore');
  const centerStore = validLocations.find((location) => location.name === 'EvPodolux');

  const formatPhoneLink = (phone: string) => {
    return phone.replace(/\s/g, '');
  };

  return (
    <footer className="pb-12 px-4">
      <div className="mx-auto max-w-9xl w-full">
        <div className="bg-card rounded-3xl p-8 flex flex-col gap-8 w-full">
          {/* Top Section: Navigation + Clinics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* Clinics */}
            <div className="bg-secondary rounded-3xl p-6 w-full md:col-span-3">
              <h2 className="text-xl-fluid font-display tracking-[-0.02em]  whitespace-nowrap">
                {t('main:footer.title')}
              </h2>
              <div className="flex flex-col md:flex-row align-start justify-start gap-4 mt-4">
                {buiucaniStore && (
                  <div
                    className="flex flex-col gap-3 border border-primary/50 rounded-2xl p-6 w-full hover:border-primary hover:shadow-sm transition-all"
                    key={buiucaniStore.id}
                  >
                    <div className="flex flex-row items-center justify-start gap-3">
                      <img
                        className="w-16 h-16 shrink-0 rounded-full object-cover"
                        src="/logo.webp"
                        alt={`Logo of ${buiucaniStore.name} Podiatry Clinic`}
                        loading="lazy"
                      />
                      <h3 className="text-2xl-fluid font-display tracking-[-0.02em] gradient-text uppercase font-medium">
                        {buiucaniStore.name}
                      </h3>
                    </div>

                    <div className="flex flex-col gap-2 font-light">
                      {buiucaniStore.contact.find((c) => c.id === 'address')?.value && (
                        <a
                          href={buiucaniStore.location}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-base-fluid leading-tight hover:text-primary transition-colors flex items-start gap-2"
                        >
                          <MapPin size={16} className="shrink-0 mt-0.5" />
                          <span>{buiucaniStore.contact.find((c) => c.id === 'address')?.value}</span>
                        </a>
                      )}

                      {buiucaniStore.contact.find((c) => c.id === 'phone')?.value && (
                        <a
                          href={`tel:${formatPhoneLink(buiucaniStore.contact.find((c) => c.id === 'phone')?.value || '')}`}
                          className="font-body text-base-fluid leading-tight hover:text-primary transition-colors flex items-center gap-2"
                        >
                          <Phone size={16} className="shrink-0" />
                          <span>{buiucaniStore.contact.find((c) => c.id === 'phone')?.value}</span>
                        </a>
                      )}
                      <div className="flex flex-row gap-2">
                        <a
                          href={`tel:${formatPhoneLink(centerStore.contact.find((c) => c.id === 'phone')?.value || '')}`}
                          className="flex w-10 h-10 rounded-full bg-transparent border border-border items-center justify-center text-foreground hover:bg-[#34C759] hover:text-white hover:border-[#34C759] transition-colors"
                        >
                          <Phone size={20} />
                        </a>
                        <a
                          href={buiucaniStore.contact.find((c) => c.id === 'telegram')?.value}
                          className="flex w-10 h-10 rounded-full bg-transparent border border-border items-center justify-center text-foreground hover:bg-[#2AABEE] hover:text-white hover:border-[#2AABEE] transition-colors"
                        >
                          <Send size={20} />
                        </a>
                        <a
                          href={buiucaniStore.contact.find((c) => c.id === 'instagram')?.value}
                          className="flex w-10 h-10 rounded-full bg-transparent border border-border items-center justify-center text-foreground hover:bg-instagram hover:text-white hover:border-transparent transition-all"
                        >
                          <Instagram size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {centerStore && (
                  <div
                    className="flex flex-col gap-3 border border-primary/50 rounded-2xl p-6 w-full hover:border-primary hover:shadow-sm transition-all"
                    key={centerStore.id}
                  >
                    <div className="flex flex-row items-center justify-start gap-3">
                      <img
                        className="w-16 h-16 shrink-0 rounded-full object-cover"
                        src="/logo.webp"
                        alt={`Logo of ${centerStore.name} Podiatry Clinic`}
                        loading="lazy"
                      />
                      <h3 className="text-2xl-fluid font-display tracking-[-0.02em] gradient-text uppercase font-medium">
                        {centerStore.name}
                      </h3>
                    </div>

                    <div className="flex flex-col gap-2 font-light">
                      {centerStore.contact.find((c) => c.id === 'address')?.value && (
                        <a
                          href={centerStore.location}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-base-fluid leading-tight hover:text-primary transition-colors flex items-start gap-2"
                        >
                          <MapPin size={16} className="shrink-0 mt-0.5" />
                          <span>{centerStore.contact.find((c) => c.id === 'address')?.value}</span>
                        </a>
                      )}

                      {centerStore.contact.find((c) => c.id === 'phone')?.value && (
                        <a
                          href={`tel:${formatPhoneLink(centerStore.contact.find((c) => c.id === 'phone')?.value || '')}`}
                          className="font-body text-base-fluid leading-tight hover:text-primary transition-colors flex items-center gap-2"
                        >
                          <Phone size={16} className="shrink-0" />
                          <span>{centerStore.contact.find((c) => c.id === 'phone')?.value}</span>
                        </a>
                      )}
                    </div>
                    <div className="flex flex-row gap-2">
                      <a
                        href={`tel:${formatPhoneLink(centerStore.contact.find((c) => c.id === 'phone')?.value || '')}`}
                        className="flex w-10 h-10 rounded-full bg-transparent border border-border items-center justify-center text-foreground hover:bg-[#34C759] hover:text-white hover:border-[#34C759] transition-colors"
                      >
                        <Phone size={20} />
                      </a>
                      <a
                        href={centerStore.contact.find((c) => c.id === 'telegram')?.value}
                        className="flex w-10 h-10 rounded-full bg-transparent border border-border items-center justify-center text-foreground hover:bg-[#2AABEE] hover:text-white hover:border-[#2AABEE] transition-colors"
                      >
                        <Send size={20} />
                      </a>
                      <a
                        href={centerStore.contact.find((c) => c.id === 'instagram')?.value}
                        className="flex w-10 h-10 rounded-full bg-transparent border border-border items-center justify-center text-foreground hover:bg-instagram hover:text-white hover:border-transparent transition-all"
                      >
                        <Instagram size={20} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Section: Brand + Social */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-border">
            <div className="text-small text-muted-foreground font-body">
              <p>© {new Date().getFullYear()} EV PODOLUX. {t('main:footer.all_rights_reserved')}.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};