import { createFileRoute, redirect } from '@tanstack/react-router';
import i18n from '@/lib/i18n/config';
import { DEFAULT_LANGUAGE } from '@/shared/lib/routing/constants';
import { isStudioSlug, isSupportedLanguage } from '@/shared/lib/routing/studio';

export const Route = createFileRoute('/$')({
  beforeLoad: ({ params }) => {
    const splat = params._splat;
    const parts = splat?.split('/').filter(Boolean) ?? [];
    const detected = i18n.resolvedLanguage || i18n.language || DEFAULT_LANGUAGE;
    const fallbackLang = isSupportedLanguage(detected) ? detected : DEFAULT_LANGUAGE;

    if (parts[0] && isStudioSlug(parts[0])) {
      const lang = isSupportedLanguage(parts[1]) ? parts[1] : fallbackLang;
      throw redirect({
        to: '/$studio/$lang',
        params: { studio: parts[0], lang },
      });
    }

    throw redirect({
      to: '/$lang',
      params: { lang: fallbackLang },
    });
  },
});
