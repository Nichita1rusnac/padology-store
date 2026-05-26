import type { StudioSlug, SupportedLanguage } from './constants';
import { buildLocalizedPath, buildSeoPath } from './paths';
import { isStudioSlug, isSupportedLanguage } from './studio';

export type SeoPage = 'specialists' | 'pricing' | 'products' | 'contacts';

const SEO_PAGES: readonly SeoPage[] = ['specialists', 'pricing', 'products', 'contacts'];

function pageFromSegments(segments: string[]): SeoPage | undefined {
  const candidate = segments[0];
  return SEO_PAGES.includes(candidate as SeoPage) ? (candidate as SeoPage) : undefined;
}

export type ParsedSeoRoute = {
  studio?: StudioSlug;
  lang: SupportedLanguage;
  page?: SeoPage;
  book: boolean;
  isCampaignRoute: boolean;
};

/** Parse a pathname or SEO path into studio, language, and page segments. */
export function parseSeoRoute(pathname: string): ParsedSeoRoute {
  const parts = pathname.split('/').filter(Boolean);
  let studio: StudioSlug | undefined;
  let lang: SupportedLanguage = 'ro';
  let rest: string[] = [];

  if (parts[0] && isStudioSlug(parts[0])) {
    studio = parts[0];
    if (parts[1] && isSupportedLanguage(parts[1])) {
      lang = parts[1];
      rest = parts.slice(2);
    } else {
      rest = parts.slice(1);
    }
  } else if (parts[0] && isSupportedLanguage(parts[0])) {
    lang = parts[0];
    rest = parts.slice(1);
  }

  const book = rest.at(-1) === 'book';
  const pageSegments = book ? rest.slice(0, -1) : rest;

  return {
    studio,
    lang,
    page: pageFromSegments(pageSegments),
    book,
    isCampaignRoute: studio !== undefined,
  };
}

type SeoPathOptions = {
  page?: SeoPage;
  book?: boolean;
};

/** Indexed canonical URL path (never includes studio or /book). */
export function buildCanonicalSeoPath(lang: SupportedLanguage, options: SeoPathOptions = {}) {
  return buildSeoPath(lang, { page: options.page });
}

/** Full path for sharing / og:url (may include studio and /book). */
export function buildShareSeoPath(
  lang: SupportedLanguage,
  options: SeoPathOptions & { studio?: StudioSlug } = {},
) {
  return buildLocalizedPath(lang, options);
}
