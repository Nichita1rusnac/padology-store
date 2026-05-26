export const LANGUAGES = ['ro', 'en', 'ru'];

/** Path segments after /{lang}/ — empty string is home */
export const PAGES = ['', 'specialists', 'pricing', 'products', 'contacts'];

/**
 * Indexed routes only. Studio campaign URLs (/center/ro, /buiucani/en, …) are
 * excluded — they are noindex and served client-side for social/deep links.
 */
export function getPrerenderPaths() {
  const paths = [];

  for (const lang of LANGUAGES) {
    for (const page of PAGES) {
      const segments = [lang];

      if (page) {
        segments.push(page);
      }

      const path = `/${segments.join('/')}`;
      paths.push(page ? path : `${path}/`);
    }
  }

  return paths;
}
