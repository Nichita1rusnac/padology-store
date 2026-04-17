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
}

export const SEO = ({
  title,
  description,
  path = '',
  image = '/logo.webp',
  type = 'website',
  noIndex = false,
  schemaType = 'None',
  serviceName,
  serviceDescription,
  locationData,
  specialistsData,
}: SEOProps) => {
  const { i18n, t } = useTranslation('common');
  const lang = i18n.resolvedLanguage || i18n.language || 'ro';

  const siteName = 'Podiatric Studios';
  const defaultTitle = `${siteName} | Chișinău`;
  const fullTitle = title ? `${title} | ${siteName} | Chișinău` : defaultTitle;

  // Base domain
  const baseDomain = 'https://podiatricstudios.md';

  // Formatting path
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${baseDomain}${cleanPath}`;

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
      "email": "contact@podiatricstudios.md",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": locationData?.address || "Mihai Eminescu Street 70",
        "addressLocality": "Chișinău",
        "addressRegion": "Chișinău Municipality",
        "postalCode": "MD-2012",
        "addressCountry": "MD"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": locationData?.geo?.lat || "47.0245",
        "longitude": locationData?.geo?.lng || "28.8322"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "10:00",
          "closes": "15:00"
        }
      ],
      "priceRange": "$$",
      "currenciesAccepted": "MDL",
      "paymentAccepted": "Cash, Credit Card",
      "areaServed": {
        "@type": "City",
        "name": "Chișinău"
      },
      "hasMap": `https://maps.google.com/?q=${encodeURIComponent(locationData?.name || siteName)}+Chisinau`,
      "sameAs": [
        "https://www.facebook.com/podiatricstudios",
        "https://www.instagram.com/podiatricstudios"
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
        "medicalSpecialty": "Podiatric",
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
      {description && <meta name="description" content={description.substring(0, 160)} />}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${baseDomain}${image}`} />
      <meta property="og:locale" content={currentLocale} />
      <meta property="og:site_name" content={siteName} />

      <link rel="alternate" hrefLang="en" href={getHreflangPath('en')} />
      <link rel="alternate" hrefLang="ro" href={getHreflangPath('ro')} />
      <link rel="alternate" hrefLang="ru" href={getHreflangPath('ru')} />
      <link rel="alternate" hrefLang="x-default" href={getHreflangPath('ro')} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="//maps.googleapis.com" />

      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      {schemaData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};

