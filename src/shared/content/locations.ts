export interface Location {
  id: string;
  tag: 'center' | 'buiucani';
  slugs: {
    ro: string;
    ru: string;
    en: string;
  };
  names: {
    ro: string;
    ru: string;
    en: string;
  };
  addresses: {
    ro: string;
    ru: string;
    en: string;
  };
  phones: string[];
  mapEmbed: string;
  seo: {
    ro: { title: string; description: string };
    ru: { title: string; description: string };
    en: { title: string; description: string };
  };
}

export const LOCATIONS: Location[] = [
  {
    id: 'center-1',
    tag: 'center',
    slugs: {
      ro: 'chisinau-centru-1',
      ru: 'chisinau-center-1',
      en: 'chisinau-center-1',
    },
    names: {
      ro: 'EvPodolux - Centru',
      ru: 'EvPodolux - Центр',
      en: 'EvPodolux - City Center',
    },
    addresses: {
      ro: 'Strada Mihai Eminescu 70, Chișinău MD-2012, Moldova',
      ru: 'улица Михай Эминеску 70, Кишинев MD-2012, Молдова',
      en: 'Mihai Eminescu Street 70, Chisinau MD-2012, Moldova',
    },
    phones: ['+373 699 47 949'],
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8535.45819176193!2d28.827175036794298!3d47.025710401950676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97d887c620191%3A0x7ec9e739489e53ef!2zUG9kb2xvZyBDaGlzaW5hdSB8IEVWUG9kb2x1eCB8INCf0L7QtNC-0LvQvtCzINCa0LjRiNC40L3QtdCy!5e0!3m2!1sen!2s!4v1773318695929!5m2!1sen!2s',
    seo: {
      ro: {
        title: 'Podolog Chișinău Centru | EvPodolux - Eminescu 70',
        description: 'Servicii de podologie profesională în centrul Chișinăului. EvPodolux de pe strada Mihai Eminescu 70 oferă pedichiură medicală și tratament unghii încarnate.',
      },
      ru: {
        title: 'Подолог Кишинев Центр | EvPodolux - Эминеску 70',
        description: 'Профессиональные услуги подолога в центре Кишинева. EvPodolux на улице Михай Эминеску 70 предлагает медицинский педикюр и лечение вросшего ногтя.',
      },
      en: {
        title: 'Podiatrist Chisinau Center | EvPodolux - Eminescu 70',
        description: 'Professional podiatry services in Chisinau city center. EvPodolux on Mihai Eminescu Street 70 offers medical pedicures and ingrown nail treatments.',
      },
    },
  },
  {
    id: 'center-2',
    tag: 'buiucani',
    slugs: {
      ro: 'chisinau-centru-2',
      ru: 'chisinau-center-2',
      en: 'chisinau-center-2',
    },
    names: {
      ro: 'Evasstore - Buiucani',
      ru: 'Evasstore - Буюкань',
      en: 'Evasstore - Buiucani',
    },
    addresses: {
      ro: 'Strada Ioana Radu 27/4, Chișinău MD-2008, Moldova',
      ru: 'улица Иоана Раду 27/4, Кишинев MD-2008, Молдова',
      en: 'Ioana Radu Street 27/4, Chisinau MD-2008, Moldova',
    },
    phones: ['+373 696 39 898'],
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.7728685665093!2d28.798051300000004!3d47.0250632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97df235a250d7%3A0x695d32cb97ee6623!2z0JrQuNGI0LjQvdC10LIg0J_QvtC00L7Qu9C-0LMgfCBFdmFzc3RvcmUgfCBQb2RvbG9nIENoaXNpbmF1!5e0!3m2!1sen!2s!4v1773318461729!5m2!1sen!2s',
    seo: {
      ro: {
        title: 'Podolog Chișinău Buiucani | Evasstore - Ioana Radu 27/4',
        description: 'Vizitați clinica noastră de podologie din sectorul Buiucani. Evasstore oferă îngrijire expertă pentru picioare și pedichiură medicală în Chișinău.',
      },
      ru: {
        title: 'Подолог Кишинев Буюкань | Evasstore - Иоана Раду 27/4',
        description: 'Посетите нашу клинику подологии в секторе Буюкань. Evasstore предлагает экспертный уход за стопами и медицинский педикюр в Кишиневе.',
      },
      en: {
        title: 'Podiatrist Chisinau Buiucani | Evasstore - Ioana Radu 27/4',
        description: 'Visit our podiatry clinic in the Buiucani district. Evasstore offers expert foot care and medical pedicure services in Chisinau.',
      },
    },
  },
];
