export interface ContactDetail {
  id: string;
  label: string;
  value: string;
}

export interface ContactLocation {
  name: string;
  category: string;
  contact: ContactDetail[];
  embed: string;
  location: string;
}

export type GalleryType = 'center' | 'buiucani';
