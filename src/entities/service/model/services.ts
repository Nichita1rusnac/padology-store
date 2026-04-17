import PlaceholderImage from '@/shared/assets/images/placeholder.svg';

export interface ServiceItem {
  id: string;
  token: string;
  image: string;
  results: string[];
}

const DEFAULT_RESULTS = ['0', '1', '2']

export const TOP_SERVICES: ServiceItem[] = [
  {
    id: 'service_1',
    token: 'service_1',
    image: 'images/top-services/IMG_7095.webp',
    results: DEFAULT_RESULTS
  },
  {
    id: 'service_2',
    token: 'service_2',
    image: 'images/top-services/IMG_7749.webp',
    results: DEFAULT_RESULTS
  },
  {
    id: 'service_3',
    token: 'service_3',
    image: 'images/top-services/IMG_7751.webp',
    results: DEFAULT_RESULTS
  },
  {
    id: 'service_4',
    token: 'service_4',
    image: 'images/top-services/IMG_7756.webp',
    results: DEFAULT_RESULTS
  },
  {
    id: 'service_5',
    token: 'service_5',
    image: 'images/top-services/IMG_7760.webp',
    results: DEFAULT_RESULTS
  },
  {
    id: 'service_6',
    token: 'service_6',
    image: 'images/top-services/IMG_7762.webp',
    results: DEFAULT_RESULTS
  },
  {
    id: 'service_7',
    token: 'service_7',
    image: 'images/top-services/IMG_7755.webp',
    results: DEFAULT_RESULTS
  },
  {
    id: 'service_8',
    token: 'service_8',
    image: 'images/top-services/IMG_9107.webp',
    results: DEFAULT_RESULTS
  },
  {
    id: 'service_9',
    token: 'service_9',
    image: 'images/top-services/IMG_9106.webp',
    results: DEFAULT_RESULTS
  },
];
