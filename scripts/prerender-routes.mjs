export const LANGUAGES = ['ro', 'en', 'ru'];

/** Path segments after /{lang}/ — empty string is home */
export const PAGES = ['', 'specialists', 'pricing', 'products', 'contacts'];

export function getPrerenderPaths() {
  const paths = [];

  for (const lang of LANGUAGES) {
    for (const page of PAGES) {
      paths.push(page ? `/${lang}/${page}` : `/${lang}/`);
    }
  }

  return paths;
}
