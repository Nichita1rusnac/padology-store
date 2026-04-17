// import { Button } from "@/components/ui/button";
// import { Phone, Send, Instagram } from "lucide-react";
// import logo from "@/assets/logo.png";
// import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";

// interface ContactDetail {
//   id: string;
//   label: string;
//   value: string;
// }

// interface ContactLocation {
//   id: string;
//   name: string;
//   category: string;
//   contact: ContactDetail[];
//   location: string;
// }

// export const Footer = () => {
//   const { t, i18n } = useTranslation(['common', 'contacts']);
//   const currentLang = i18n.resolvedLanguage || i18n.language || 'ru';

//   const navItems = [
//     { label: t('common:nav.specialists'), path: `/${currentLang}/specialists` },
//     { label: t('common:nav.price'), path: `/${currentLang}/pricing` },
//     { label: t('common:nav.contacts'), path: `/${currentLang}/contacts` },
//   ];

//   const locations = t<string, { returnObjects: true }, ContactLocation[]>('contacts:contacts', {
//     returnObjects: true,
//   });

//   const validLocations = Array.isArray(locations) ? locations : [];
//   const buiucaniStore = validLocations.find((location) => location.name === 'Evasstore');
//   const centerStore = validLocations.find((location) => location.name === 'EvPodolux');

//   return (
//     <footer className="pb-12 px-4">
//       <div className="mx-auto max-w-9xl w-full">
//         <div className="bg-card rounded-3xl p-8 flex flex-col gap-6 w-full">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
//             <div className="bg-secondary rounded-3xl p-6 w-full md:col-span-1">
//               <h2 className="text-2xl font-display tracking-[-0.02em] whitespace-nowrap md:text-[clamp(12px,2vw,24px)]">EV PODOLUX</h2>
//               <ul className="flex flex-col gap-1 mt-4">
//                 {navItems.map((item) => (
//                   <li key={item.label}>
//                     <Link to={item.path} className="text-muted-foreground md:text-[clamp(12px,1vw,24px)] font-body text-sm transition-colors">
//                       {item.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="bg-secondary rounded-3xl p-6 w-full md:col-span-3">
//               <h2 className="text-2xl font-display tracking-[-0.02em] whitespace-nowrap md:text-[clamp(12px,2vw,24px)]">Клиники</h2>
//               <div className="flex flex-row align-center justify-start gap-10 mt-4">
//                 {buiucaniStore && (
//                   <div className="flex flex-col gap-1 border border-primary/50 rounded-2xl p-4 w-full" key={buiucaniStore.id}>
//                     <div className="flex flex-row align-center justify-start gap-2">
//                       <img className="w-[76px] h-[76px] md:w-[56px] md:h-[56px] shrink-0 flex items-center justify-center rounded-full" src="/logo.webp" alt="Buiucani" />
//                       <h3 className="text-lg font-display tracking-[-0.02em] whitespace-nowrap md:text-[clamp(12px,2vw,24px)] vertical-align-middle">{buiucaniStore.name}</h3>
//                     </div>
//                     <p className="text-muted-foreground font-body text-[0.75rem] md:text-[clamp(0.75rem,1vw,1.875rem)] leading-tight">{buiucaniStore.contact.find((c) => c.id === 'address')?.value}</p>

//                     <p className="text-muted-foreground font-body text-[0.75rem] md:text-[clamp(0.75rem,1vw,1.875rem)] leading-tight">{buiucaniStore.contact.find((c) => c.id === 'phone')?.value}</p>
//                   </div>
//                 )}
//                 {centerStore && (
//                   <div className="flex flex-col gap-1 border border-primary/50 rounded-2xl p-4 w-full" key={centerStore.id}>
//                     <div className="flex flex-row align-center justify-start gap-2">
//                       <img className="w-[76px] h-[76px] md:w-[56px] md:h-[56px] shrink-0 flex items-center justify-center rounded-full" src="/logo.webp" alt="Center" />
//                       <h3 className="text-lg font-display tracking-[-0.02em] whitespace-nowrap md:text-[clamp(12px,2vw,24px)] mt-2">{centerStore.name}</h3>
//                     </div>
//                     <p className="text-muted-foreground font-body text-[0.75rem] md:text-[clamp(0.75rem,1vw,1.875rem)] leading-tight">{centerStore.contact.find((c) => c.id === 'address')?.value}</p>
//                     <p className="text-muted-foreground font-body text-[0.75rem] md:text-[clamp(0.75rem,1vw,1.875rem)] leading-tight">{centerStore.contact.find((c) => c.id === 'phone')?.value}</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
//             <div className="w-full flex flex-col gap-6 md:col-span-1">
//               <div className="flex flex-row items-center justify-start gap-3 w-full shrink">
//                 <div className="w-[76px] h-[76px] md:w-[56px] md:h-[56px] shrink-0 flex items-center justify-center">
//                   <img className="w-full h-full object-cover rounded-full" src="/logo.webp" alt="Logo" />
//                 </div>
//                 <p className="font-bold font-display gradient-text shrink whitespace-nowrap min-w-0 text-[24px] md:text-[clamp(12px,1vw,24px)] overflow-hidden text-ellipsis">
//                   EV PODOLUX
//                 </p>
//               </div>
//               <Button variant="default" className="rounded-full w-fit text-xs h-9">Contact</Button>
//               <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
//                 <Button variant="outline" size="icon" className="rounded-full w-9 h-9 border-border bg-transparent hover:bg-secondary shrink-0"><Phone size={16} /></Button>
//                 <Button variant="outline" size="icon" className="rounded-full w-9 h-9 border-border bg-transparent hover:bg-secondary shrink-0"><Send size={16} /></Button>
//                 <Button variant="outline" size="icon" className="rounded-full w-9 h-9 border-border bg-transparent hover:bg-secondary shrink-0"><Instagram size={16} /></Button>
//               </div>
//             </div>
//             <div className="w-full md:col-span-1">
//               <p className="text-muted-foreground font-body text-[0.75rem] md:text-[clamp(0.75rem,1vw,1.875rem)] leading-tight">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
//               </p>
//             </div>
//             <div className="w-full md:col-span-1">
//               <p className="text-muted-foreground font-body text-[0.75rem] md:text-[clamp(0.75rem,1vw,1.875rem)] leading-tight">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
//               </p>
//             </div>
//             <div className="w-full md:col-span-1">
//               <p className="text-muted-foreground font-body text-[0.75rem] md:text-[clamp(0.75rem,1vw,1.875rem)] leading-tight">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };
import { Button } from "@/components/ui/button";
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
  const { t, i18n } = useTranslation(['common', 'contacts']);
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

  // Helper function to create Google Maps URL
  const getMapUrl = (address: string) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  };

  // Helper function to format phone for tel: link
  const formatPhoneLink = (phone: string) => {
    return phone.replace(/\s/g, '');
  };

  // Social media links - update with your actual URLs
  const socialLinks = {
    phone: 'tel:+37369947949', // Center (primary)
    telegram: 'https://t.me/evpodolux',
    instagram: 'https://instagram.com/evpodolux',
    email: 'TODO: contact@podiatricstudios.md', // To be updated
    domain: 'TODO: podiatricstudios.md' // To be updated
  };

  return (
    <footer className="pb-12 px-4">
      <div className="mx-auto max-w-9xl w-full">
        <div className="bg-card rounded-3xl p-8 flex flex-col gap-8 w-full">
          {/* Top Section: Navigation + Clinics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
            {/* Navigation */}
            <div className="bg-secondary rounded-3xl p-6 w-full md:col-span-1">
              <div className="flex flex-row items-center justify-start gap-3 w-full md:flex-wrap">
                <div className="w-16 h-16 shrink-0 flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src="/logo.webp"
                    alt="Podiatric Studios Logo"
                    loading="lazy"
                  />
                </div>
                <p className="font-bold font-display gradient-text shrink whitespace-nowrap min-w-0 text-2xl-fluid overflow-hidden text-ellipsis">
                  EV PODOLUX
                </p>
              </div>
              <nav>
                <ul className="flex flex-col gap-2 mt-4">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.path}
                        className="text-muted-foreground font-body text-sm-fluid hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Clinics */}
            <div className="bg-secondary rounded-3xl p-6 w-full md:col-span-3">
              <h2 className="text-xl-fluid font-display tracking-[-0.02em] whitespace-nowrap">
                Клиники
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
                      <h3 className="text-2xl-fluid font-display tracking-[-0.02em]">
                        {buiucaniStore.name}
                      </h3>
                    </div>

                    <div className="flex flex-col gap-2">
                      {buiucaniStore.contact.find((c) => c.id === 'address')?.value && (
                        <a
                          href={getMapUrl(buiucaniStore.contact.find((c) => c.id === 'address')?.value || '')}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground font-body text-base-fluid leading-tight hover:text-primary transition-colors flex items-start gap-2"
                        >
                          <MapPin size={16} className="shrink-0 mt-0.5" />
                          <span>{buiucaniStore.contact.find((c) => c.id === 'address')?.value}</span>
                        </a>
                      )}

                      {buiucaniStore.contact.find((c) => c.id === 'phone')?.value && (
                        <a
                          href={`tel:${formatPhoneLink(buiucaniStore.contact.find((c) => c.id === 'phone')?.value || '')}`}
                          className="text-muted-foreground font-body text-base-fluid leading-tight hover:text-primary transition-colors flex items-center gap-2"
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
                          href={`https://t.me/${centerStore.contact.find((c) => c.id === 'telegram')?.value || ''}`}
                          className="flex w-10 h-10 rounded-full bg-transparent border border-border items-center justify-center text-foreground hover:bg-[#2AABEE] hover:text-white hover:border-[#2AABEE] transition-colors"
                        >
                          <Send size={20} />
                        </a>
                        <a
                          href={`https://www.instagram.com/${centerStore.contact.find((c) => c.id === 'instagram')?.value || ''}`}
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
                      <h3 className="text-2xl-fluid font-display tracking-[-0.02em]">
                        {centerStore.name}
                      </h3>
                    </div>

                    <div className="flex flex-col gap-2">
                      {centerStore.contact.find((c) => c.id === 'address')?.value && (
                        <a
                          href={getMapUrl(centerStore.contact.find((c) => c.id === 'address')?.value || '')}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground font-body text-base-fluid leading-tight hover:text-primary transition-colors flex items-start gap-2"
                        >
                          <MapPin size={16} className="shrink-0 mt-0.5" />
                          <span>{centerStore.contact.find((c) => c.id === 'address')?.value}</span>
                        </a>
                      )}

                      {centerStore.contact.find((c) => c.id === 'phone')?.value && (
                        <a
                          href={`tel:${formatPhoneLink(centerStore.contact.find((c) => c.id === 'phone')?.value || '')}`}
                          className="text-muted-foreground font-body text-base-fluid leading-tight hover:text-primary transition-colors flex items-center gap-2"
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
                        href={`https://t.me/${centerStore.contact.find((c) => c.id === 'telegram')?.value || ''}`}
                        className="flex w-10 h-10 rounded-full bg-transparent border border-border items-center justify-center text-foreground hover:bg-[#2AABEE] hover:text-white hover:border-[#2AABEE] transition-colors"
                      >
                        <Send size={20} />
                      </a>
                      <a
                        href={`https://www.instagram.com/${centerStore.contact.find((c) => c.id === 'instagram')?.value || ''}`}
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
              <p>© {new Date().getFullYear()} EV PODOLUX. Все права защищены.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};