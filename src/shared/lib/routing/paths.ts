import type { StudioSlug, SupportedLanguage } from './constants';

type LocalizedPathOptions = {
  studio?: StudioSlug;
  page?: 'specialists' | 'pricing' | 'products' | 'contacts';
  book?: boolean;
};

/** Builds a pathname like /ro, /center/ro/pricing, /ro/specialists/book */
export function buildLocalizedPath(
  lang: SupportedLanguage,
  options: LocalizedPathOptions = {},
): string {
  const segments: string[] = [];

  if (options.studio) {
    segments.push(options.studio);
  }

  segments.push(lang);

  if (options.page) {
    segments.push(options.page);
  }

  if (options.book) {
    segments.push('book');
  }

  return `/${segments.join('/')}`;
}

/** SEO paths use a trailing slash on locale home only. */
export function buildSeoPath(
  lang: SupportedLanguage,
  options: LocalizedPathOptions = {},
): string {
  const path = buildLocalizedPath(lang, options);

  if (!options.page && !options.book) {
    return path.endsWith('/') ? path : `${path}/`;
  }

  return path;
}
