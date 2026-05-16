import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: string;
  noIndex?: boolean;
  schemaType?: 'LocalBusiness' | 'Service' | 'MedicalOrganization' | 'Physicians' | 'None';
  serviceName?: string;
  serviceDescription?: string;
  locationData?: {
    name: string;
    address: string;
    phone: string[];
    geo?: { lat: string; lng: string };
  };
  specialistsData?: any[];
  siteName?: string;
}

export const SEO = ({
  title,
  description,
  path = '',
  image = '/og-image.jpg',
  type = 'website',
  noIndex = false,
  schemaType = 'None',
  serviceName,
  serviceDescription,
  locationData,
  specialistsData,
  siteName,
}: SEOProps) => {
  const { i18n, t } = useTranslation('common');
  const lang = i18n.resolvedLanguage || i18n.language || 'ro';
  const defaultTitle = siteName ?? 'Podiatric Studios';
  const fullTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const metaDescription =
    description ||
    'Expert podiatry clinic in Chisinau. Medical pedicure, custom orthotics, and professional foot care at Podiatric Studios.';
  // Base domain
  const baseDomain = 'https://www.eugeniapodology.md';

  // Formatting path
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${baseDomain}${cleanPath}`;
  const imageUrl = image.startsWith('http') ? image : `${baseDomain}${image}`;
  const imageType = image.endsWith('.webp') ? 'image/webp' : 'image/jpeg';
  const isDefaultShareImage = image === '/og-image.jpg';
  // Locale mapping for OG
  const localeMap: Record<string, string> = {
    en: 'en_US',
    ro: 'ro_RO',
    ru: 'ru_RU',
  };
  const currentLocale = localeMap[lang] || 'ro_RO';

  // Hreflang mappings
  const getHreflangPath = (targetLang: string) => {
    const pathParts = cleanPath.split('/').filter(Boolean);
    if (pathParts.length > 0 && ['en', 'ro', 'ru'].includes(pathParts[0])) {
      pathParts[0] = targetLang;
    } else {
      pathParts.unshift(targetLang);
    }
    return `${baseDomain}/${pathParts.join('/')}/`;
  };

  // Schema Markup (JSON-LD)
  const schemaData: any[] = [];

  // Breadcrumb Schema
  if (cleanPath !== `/${lang}` && cleanPath !== `/${lang}/`) {
    schemaData.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": t('nav.main'),
          "item": `${baseDomain}/${lang}/`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": title || "Page",
          "item": canonicalUrl
        }
      ]
    });
  }

  // LocalBusiness Schema
  if (schemaType === 'LocalBusiness') {
    schemaData.push({
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": locationData?.name || siteName,
      "description": description,
      "url": canonicalUrl,
      "telephone": locationData?.phone[0] || "+373 699 47 949",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": locationData?.address || "Mihai Eminescu 70",
        "addressLocality": "Chișinău",
        "addressRegion": "Chișinău Municipality",
        "postalCode": "MD-2012",
        "addressCountry": "MD"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": locationData?.geo?.lat || "47.02403",
        "longitude": locationData?.geo?.lng || "28.84037"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00"
        },
      ],
      "priceRange": "$$",
      "currenciesAccepted": "MDL",
      "paymentAccepted": "Cash, Credit Card",
      "areaServed": {
        "@type": "City",
        "name": "Chișinău"
      },
      "sameAs": [
        "https://www.instagram.com/evgeniapoleakova/",
        "https://www.instagram.com/evpodolux/"
      ]
    });
  }

  // MedicalOrganization Schema
  if (schemaType === 'MedicalOrganization') {
    schemaData.push({
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": siteName,
      "url": baseDomain,
      "logo": `${baseDomain}/logo.webp`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+373 699 47 949",
        "contactType": "customer service"
      }
    });
  }

  // MD Physicians Schema
  if (schemaType === 'Physicians' && specialistsData) {
    specialistsData.forEach(specialist => {
      schemaData.push({
        "@context": "https://schema.org",
        "@type": "Physician",
        "name": `${specialist.first_name} ${specialist.last_name}`,
        "medicalSpecialty": "Podology",
        "memberOf": {
          "@type": "MedicalOrganization",
          "name": siteName
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chișinău",
          "addressCountry": "MD"
        }
      });
    });
  }

  // Service Schema
  if (schemaType === 'Service' && serviceName) {
    schemaData.push({
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": serviceName,
      "description": serviceDescription || description,
      "procedureType": "https://schema.org/TherapeuticProcedure",
      "provider": {
        "@type": "MedicalBusiness",
        "name": siteName,
        "url": baseDomain
      }
    });
  }

  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{fullTitle.substring(0, 70)}</title>
      <meta name="description" content={metaDescription.substring(0, 160)} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:type" content={imageType} />
      {isDefaultShareImage && <meta property="og:image:width" content="1200" />}
      {isDefaultShareImage && <meta property="og:image:height" content="630" />}
      <meta property="og:image:alt" content={`${defaultTitle}`} />
      <meta property="og:locale" content={currentLocale} />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={`${defaultTitle}`} />

      <link rel="alternate" hrefLang="en" href={getHreflangPath('en')} />
      <link rel="alternate" hrefLang="ro" href={getHreflangPath('ro')} />
      <link rel="alternate" hrefLang="ru" href={getHreflangPath('ru')} />
      <link rel="alternate" hrefLang="x-default" href={getHreflangPath('ro')} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="//maps.googleapis.com" />

      {schemaData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};

