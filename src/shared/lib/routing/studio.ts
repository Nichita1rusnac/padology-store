import {
  DEFAULT_STUDIO,
  STUDIO_SLUGS,
  SUPPORTED_LANGUAGES,
  type StudioSlug,
  type SupportedLanguage,
} from './constants';

export function isStudioSlug(value: string | undefined): value is StudioSlug {
  return value !== undefined && (STUDIO_SLUGS as readonly string[]).includes(value);
}

export function isSupportedLanguage(value: string | undefined): value is SupportedLanguage {
  return value !== undefined && (SUPPORTED_LANGUAGES as readonly string[]).includes(value);
}

export function resolveDefaultStudio(studio: string | undefined): StudioSlug {
  return isStudioSlug(studio) ? studio : DEFAULT_STUDIO;
}
