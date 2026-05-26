import { createFileRoute, redirect } from '@tanstack/react-router';
import i18n from '@/lib/i18n/config';
import { DEFAULT_LANGUAGE } from '@/shared/lib/routing/constants';
import { isSupportedLanguage } from '@/shared/lib/routing/studio';

export const Route = createFileRoute('/buiucani')({
  beforeLoad: () => {
    const detected = i18n.resolvedLanguage || i18n.language || DEFAULT_LANGUAGE;
    const lang = isSupportedLanguage(detected) ? detected : DEFAULT_LANGUAGE;

    throw redirect({
      to: '/$studio/$lang',
      params: { studio: 'buiucani', lang },
    });
  },
});
