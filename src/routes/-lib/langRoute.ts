import { redirect } from '@tanstack/react-router';
import i18n from '@/lib/i18n/config';
import { DEFAULT_LANGUAGE } from '@/shared/lib/routing/constants';
import { isStudioSlug, isSupportedLanguage } from '@/shared/lib/routing/studio';
import { LangLayout } from '@/widgets/Layout/LangLayout';

export type BookingSearch = {
  location?: string;
};

export const bookingSearchValidator = (search: Record<string, unknown>): BookingSearch => ({
  location: typeof search.location === 'string' ? search.location : undefined,
});

export const langLayoutRouteOptions = {
  validateSearch: bookingSearchValidator,
  beforeLoad: ({ params }: { params: { lang: string } }) => {
    const { lang } = params;

    if (!isSupportedLanguage(lang)) {
      const fallbackLang = isSupportedLanguage(i18n.resolvedLanguage)
        ? i18n.resolvedLanguage
        : DEFAULT_LANGUAGE;

      throw redirect({
        to: '/$lang',
        params: { lang: fallbackLang },
      });
    }
  },
  component: LangLayout,
};

export const studioLangLayoutRouteOptions = {
  validateSearch: bookingSearchValidator,
  beforeLoad: ({ params }: { params: { lang: string; studio: string } }) => {
    const { lang, studio } = params;

    if (!isStudioSlug(studio)) {
      throw redirect({
        to: '/$lang',
        params: { lang: isSupportedLanguage(lang) ? lang : DEFAULT_LANGUAGE },
      });
    }

    if (!isSupportedLanguage(lang)) {
      const fallbackLang = isSupportedLanguage(i18n.resolvedLanguage)
        ? i18n.resolvedLanguage
        : DEFAULT_LANGUAGE;

      throw redirect({
        to: '/$studio/$lang',
        params: { studio, lang: fallbackLang },
      });
    }
  },
  component: LangLayout,
};
