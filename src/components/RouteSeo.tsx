import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type SeoConfig = {
  title: string;
  description: string;
  keywords: string;
};

const SITE_NAME = 'The Movement in the U-District';
const SITE_URL = 'https://movementuw.college';
const DEFAULT_IMAGE_URL = `${SITE_URL}/media/the-movement-mark.svg`;

const ROUTE_SEO: Record<string, SeoConfig> = {
  '/': {
    title: 'The Movement | U-District Student Discounts in Seattle',
    description:
      'Discover verified U-District student discounts on The Ave and in Seattleâ€™s University District. Save at local businesses with The Movement Social App.',
    keywords:
      'The Movement, U-District student discounts Seattle, The Ave deals, University District discounts, student app Seattle',
  },
  '/about': {
    title: 'About The Movement | U-District Student Savings in Seattle',
    description:
      'Learn how The Movement helps U-District students save in Seattle while supporting local businesses across the University District and The Ave.',
    keywords:
      'The Movement U-District, U-District student savings Seattle, University District student discounts, local business student platform',
  },
  '/u-district': {
    title: 'Maison Blanc Salon, One Bite Cafe, Mama Grandeâ€™s Cafe | U-District Student Discounts',
    description:
      'Find verified student deals at Maison Blanc Salon, One Bite Cafe, Mama Grandeâ€™s Cafe, and more on The Ave and across Seattleâ€™s University District.',
    keywords:
      'Maison Blanc Salon, One Bite Cafe, Mama Grandeâ€™s Cafe, U-District student discounts, The Ave student deals, U District discount app, Seattle student savings',
  },
  '/merchants': {
    title: 'Maison Blanc Salon, One Bite Cafe & More | U-District Student Deals',
    description:
      'Explore local student offers from Maison Blanc Salon, One Bite Cafe, Mama Grandeâ€™s Cafe, and other University District businesses with The Movement.',
    keywords:
      'Maison Blanc Salon, One Bite Cafe, Mama Grandeâ€™s Cafe, U-District student discount program, Seattle student offers, The Ave merchant promotions, U District student marketing',
  },
  '/students': {
    title: 'U-District Seattle Student Deals | Save on The Ave',
    description:
      'Get exclusive U-District student deals in Seattle with The Movement. Verify your student status, unlock offers, and save on food, services, and local shopping.',
    keywords:
      'U-District Seattle student deals, U-District discounts, The Ave student savings, Seattle student app offers',
  },
  '/community': {
    title: 'U-District Student Community & Local Deals | The Movement',
    description:
      'Support local businesses and save with the U-District student community in Seattle. Discover verified deals and community-powered savings.',
    keywords:
      'U-District student community, Seattle student discounts, local business support U-District, student savings community',
  },
  '/u-district-student-discounts-the-ave': {
    title: 'The Ave Student Discounts | U-District Seattle Deals',
    description:
      'Find the best U-District student discounts on The Ave and across the U District. Save on coffee, food, services, and local shopping with verified offers.',
    keywords:
      'The Ave student discounts, U-District Seattle deals, U District discounts, University Way student offers, Seattle student savings',
  },
  '/university-district-student-savings-guide': {
    title: 'University District Student Savings Guide | U-District Seattle',
    description:
      'Explore student savings in the University District with The Movement. Find local deals, dining offers, and ways to save on The Ave.',
    keywords:
      'University District student savings, U-District Seattle deals, The Ave discounts, U District student offers',
  },
};

function upsertMeta(selectorName: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${selectorName}="${key}"]`;
  let metaTag = document.head.querySelector(selector);

  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.setAttribute(selectorName, key);
    document.head.appendChild(metaTag);
  }

  metaTag.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let canonicalLink = document.head.querySelector('link[rel="canonical"]');

  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }

  canonicalLink.setAttribute('href', href);
}

function upsertJsonLd(id: string, schema: object) {
  let script = document.getElementById(id) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    document.head.appendChild(script);
  }

  script.text = JSON.stringify(schema);
}

export default function RouteSeo() {
  const location = useLocation();

  useEffect(() => {
    const normalizedPath = location.pathname === '/' ? '/' : location.pathname.replace(/\/+$/, '');
    const seo = ROUTE_SEO[normalizedPath] ?? ROUTE_SEO['/'];
    const canonicalPath = normalizedPath === '/' ? '' : normalizedPath;
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;

    document.title = seo.title;
    upsertCanonical(canonicalUrl);

    upsertMeta('name', 'description', seo.description);
    upsertMeta('name', 'keywords', seo.keywords);
    upsertMeta('name', 'robots', 'index,follow');
    upsertMeta('name', 'theme-color', '#5a4fcf');
    upsertMeta('property', 'og:locale', 'en_US');

    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', DEFAULT_IMAGE_URL);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);
    upsertMeta('name', 'twitter:image', DEFAULT_IMAGE_URL);

    upsertJsonLd('movement-org-schema', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: DEFAULT_IMAGE_URL,
      sameAs: ['https://github.com/molefarm-jpg/movementuw'],
      areaServed: 'Seattle, WA',
    });

    upsertJsonLd('movement-webpage-schema', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: seo.title,
      description: seo.description,
      url: canonicalUrl,
      isPartOf: {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
      },
    });
  }, [location.pathname]);

  return null;
}


