import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type SeoConfig = {
  title: string;
  description: string;
  keywords: string;
};

const SITE_NAME = 'The Movement at the U-District';
const SITE_URL = 'https://movementuw.college';
const DEFAULT_IMAGE_URL = `${SITE_URL}/media/the-movement-mark.svg`;

const ROUTE_SEO: Record<string, SeoConfig> = {
  '/': {
    title: 'U-District Student Discounts on The Ave | The Movement at U-District Seattle',
    description:
      'Discover exclusive University of Washington student discounts on The Ave and across the U District. Download The Movement Social App, verify student ID, and save daily.',
    keywords:
      'University of Washington student discounts, U-District discounts, The Ave deals, University District deals, U-District student app',
  },
  '/about': {
    title: 'About The Movement at U-District | Student Savings + Local Growth',
    description:
      'Learn how The Movement helps University of Washington students save money while helping Seattle-area merchants reach the U-District campus community.',
    keywords:
      'about The Movement, U-District student savings, University of Washington community, student discount platform',
  },
  '/u-district': {
    title: 'University of Washington Discount Hub | The Movement U-District',
    description:
      'Your U-District hub for student deals on The Ave, Wallingford, Montlake, Roosevelt, and University Village. Find local merchants and redeem discounts instantly.',
    keywords:
      'U-District discount hub, U-District Seattle student discounts, The Ave merchants, University Way NE deals',
  },
  '/merchants': {
    title: 'For Merchants: Reach U-District Students in Seattle | The Movement',
    description:
      'Grow foot traffic from University of Washington students. Partner with The Movement to offer verified student discounts in the U District and The Ave.',
    keywords:
      'U-District merchant marketing, student discount marketing, University District business promotions, partner with The Movement',
  },
  '/students': {
    title: 'For Students: U-District Seattle Deals & Discounts | The Movement',
    description:
      'U-District students get exclusive local discounts with The Movement Social App. Browse offers, show your digital student ID, and save at participating University District businesses.',
    keywords:
      'U-District student deals, University of Washington discounts, Seattle student savings, digital student ID discounts',
  },
  '/community': {
    title: 'Community Impact in U District Seattle | The Movement at U-District',
    description:
      'See how The Movement supports local businesses and helps U-District students save while strengthening the University District community.',
    keywords:
      'U-District community, University District support local, Seattle student community, local business support U-District',
  },
  '/u-district-student-discounts-the-ave': {
    title: 'U-District Student Discounts on The Ave | 2026 Savings Guide',
    description:
      'Find U-District student discounts on The Ave with this practical guide. Learn where to look, how to redeem with The Movement Social App, and how to save more each week.',
    keywords:
      'U-District student discounts The Ave, University Way discounts, Seattle student deals, U District savings guide',
  },
  '/university-district-student-savings-guide': {
    title: 'University District Student Savings Guide | U-District Seattle',
    description:
      'A complete University District savings guide for U-District students, including The Ave, Wallingford, Montlake, Roosevelt, and University Village.',
    keywords:
      'University District student discounts, U-District Seattle savings guide, U District deals, University Village student deals',
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


