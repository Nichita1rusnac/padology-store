import { create } from 'zustand';

export type Language = 'ru' | 'ro' | 'en';

interface Translations {
  about: string;
  services: string;
  specialists: string;
  pricing: string;
  contacts: string;
  book: string;
  salonBuiucani: string;
  salonCenter: string;
  heroTitle: string;
  heroSubtitle: string;
  langLabel: string;
  aboutTitle: string;
  servicesTitle: string;
  specialistsTitle: string;
  pricingTitle: string;
  contactsTitle: string;
  selectSalon: string;
}

const translations: Record<Language, Translations> = {
  ru: {
    about: 'О нас',
    services: 'Услуги',
    specialists: 'Специалисты',
    pricing: 'Прайс',
    contacts: 'Контакты',
    book: 'Записаться',
    salonBuiucani: 'Студия Буюкань',
    salonCenter: 'Студия Центр',
    heroTitle: 'Студия подологии',
    heroSubtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    langLabel: 'Русский',
    aboutTitle: 'О нас',
    servicesTitle: 'Наши услуги',
    specialistsTitle: 'Специалисты',
    pricingTitle: 'Прайс-лист',
    contactsTitle: 'Контакты',
    selectSalon: 'Выберите салон',
  },
  ro: {
    about: 'Despre noi',
    services: 'Servicii',
    specialists: 'Specialiști',
    pricing: 'Prețuri',
    contacts: 'Contacte',
    book: 'Programare',
    salonBuiucani: 'Studio Buiucani',
    salonCenter: 'Studio Centru',
    heroTitle: 'Studio de padologie',
    heroSubtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    langLabel: 'Română',
    aboutTitle: 'Despre noi',
    servicesTitle: 'Serviciile noastre',
    specialistsTitle: 'Specialiștii',
    pricingTitle: 'Lista de prețuri',
    contactsTitle: 'Contacte',
    selectSalon: 'Selectați salonul',
  },
  en: {
    about: 'About',
    services: 'Services',
    specialists: 'Specialists',
    pricing: 'Pricing',
    contacts: 'Contacts',
    book: 'Book Now',
    salonBuiucani: 'Studio Buiucani',
    salonCenter: 'Studio Center',
    heroTitle: 'Padology Studio',
    heroSubtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    langLabel: 'English',
    aboutTitle: 'About Us',
    servicesTitle: 'Our Services',
    specialistsTitle: 'Specialists',
    pricingTitle: 'Price List',
    contactsTitle: 'Contacts',
    selectSalon: 'Select a salon',
  },
};

const langLabels: Record<Language, string> = {
  ru: 'Русский',
  ro: 'Română',
  en: 'English',
};

interface LanguageState {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
  langLabels: typeof langLabels;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: 'ru',
  t: translations.ru,
  langLabels,
  setLanguage: (lang) => set({ language: lang, t: translations[lang] }),
}));
