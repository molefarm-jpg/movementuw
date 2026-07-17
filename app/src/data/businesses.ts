import { SITE_NAME } from '@/lib/siteConfig';

export interface Merchant {
  id: string;
  name: string;
  // expanded category union to match CATEGORY_LABEL / CATEGORY_GRADIENT usages
  category: 'food' | 'services' | 'cafe' | 'retail' | 'health';
  websiteUrl?: string;
  imageUrl?: string;
  address: string;
  description: string;
  discount: string;
  status: 'active' | 'coming-soon';
  activatedDate?: string;
}

export type CategoryKey = 'all' | 'food' | 'services' | 'cafe';

export const CATEGORIES: { key: CategoryKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'food', label: 'Food' },
  { key: 'cafe', label: 'Cafe' },
  { key: 'services', label: 'Services' },
];

export const ACTIVE_MERCHANTS: Merchant[] = [
  {
    id: '1',
    name: 'Maison Blanc Salon',
    category: 'services',
    websiteUrl: 'https://www.maisonblancsalon.com/',
    imageUrl: '/images/merchants/maison-blanc-galina-photo.png',
    address: 'The Ave, Seattle, WA',
    description: 'Premium salon offering haircuts, styling, coloring, and treatments for all hair types.',
    discount: `Unlock discount via ${SITE_NAME} App`,
    status: 'active',
    activatedDate: 'Apr 29, 2026',
  },
  {
    id: '2',
    name: 'One Bite Cafe',
    category: 'cafe',
    websiteUrl: 'https://www.toasttab.com/local/order/onebitecafe-seattle/',
    address: 'The Ave, Seattle, WA',
    description: 'Cozy neighborhood cafe serving espresso drinks, fresh pastries, and light bites.',
    discount: `Unlock discount via ${SITE_NAME} App`,
    status: 'active',
    activatedDate: 'Jun 11, 2026',
  },
  {
    id: '3',
    name: "Mama Grande's Cafe",
    category: 'cafe',
    websiteUrl: 'https://www.mamagrandescafe.com/',
    imageUrl: '/images/merchants/Mama Grande Owner - Alex Garcia.jpg',
    address: 'The Ave, Seattle, WA',
    description: 'Family-owned cafe with hearty breakfast plates, Mexican-inspired dishes, and great coffee.',
    discount: `Unlock discount via ${SITE_NAME} App`,
    status: 'active',
    activatedDate: 'Apr 29, 2026',
  },
];

export const COMING_SOON_MERCHANTS: Merchant[] = [
  {
    id: '4',
    name: 'The Dish Cafe',
    category: 'cafe',
    address: 'The Ave, Seattle, WA',
    description: 'Local cafe known for classic American comfort food and all-day breakfast.',
    discount: 'Discount activation in progress',
    status: 'coming-soon',
  },
  {
    id: '5',
    name: 'Caravan Halal',
    category: 'food',
    address: 'The Ave, Seattle, WA',
    description: 'Authentic halal Mediterranean and Middle Eastern street food.',
    discount: 'Discount activation in progress',
    status: 'coming-soon',
  },
  {
    id: '6',
    name: 'Scorpio Cafe',
    category: 'cafe',
    address: 'The Ave, Seattle, WA',
    description: 'Vibrant cafe with specialty drinks, vegan options, and a creative atmosphere.',
    discount: 'Discount activation in progress',
    status: 'coming-soon',
  },
  {
    id: '7',
    name: 'Almanqal Mediterranean Grill',
    category: 'food',
    address: 'The Ave, Seattle, WA',
    description: 'Mediterranean grill serving fresh kabobs, shawarma, falafel, and house-made sides.',
    discount: 'Discount activation in progress',
    status: 'coming-soon',
  },
  {
    id: '8',
    name: 'Jewel of India',
    category: 'food',
    address: 'The Ave, Seattle, WA',
    description: 'Classic Indian restaurant with curries, tandoori, biryanis, and fresh naan.',
    discount: 'Discount activation in progress',
    status: 'coming-soon',
  },
];

export const ALL_MERCHANTS: Merchant[] = [
  ...ACTIVE_MERCHANTS,
  ...COMING_SOON_MERCHANTS,
];
