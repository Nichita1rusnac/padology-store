export const SUPPORTED_LANGUAGES = ['ru', 'ro', 'en'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const STUDIO_SLUGS = ['buiucani', 'center'] as const;
export type StudioSlug = (typeof STUDIO_SLUGS)[number];

export const DEFAULT_STUDIO: StudioSlug = 'buiucani';
export const DEFAULT_LANGUAGE: SupportedLanguage = 'ru';
