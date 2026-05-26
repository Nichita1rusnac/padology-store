import { DEFAULT_LANGUAGE, type StudioSlug, type SupportedLanguage } from './constants';
import { isStudioSlug, isSupportedLanguage, resolveDefaultStudio } from './studio';

export type ParsedLocalizedPath = {
  studio?: StudioSlug;
  lang: SupportedLanguage;
  defaultStudio: StudioSlug;
  /** Path segments after /{studio?}/{lang} */
  rest: string[];
};

export function parseLocalizedPathname(pathname: string): ParsedLocalizedPath {
  const parts = pathname.split('/').filter(Boolean);
  let studio: StudioSlug | undefined;
  let lang: SupportedLanguage = DEFAULT_LANGUAGE;
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

  return {
    studio,
    lang,
    rest,
    defaultStudio: resolveDefaultStudio(studio),
  };
}
