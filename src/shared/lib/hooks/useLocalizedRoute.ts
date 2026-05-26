import { useRouterState } from '@tanstack/react-router';
import { parseLocalizedPathname } from '@/shared/lib/routing/parsePathname';
import {
  buildCanonicalSeoPath,
  buildShareSeoPath,
  parseSeoRoute,
  type SeoPage,
} from '@/shared/lib/routing/seoPaths';
import { buildLocalizedPath } from '@/shared/lib/routing/paths';

export type { SeoPage };

export function useLocalizedRoute() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const { lang, studio, defaultStudio } = parseLocalizedPathname(pathname);
  const route = parseSeoRoute(pathname);

  /** App path; omit page/book to target locale home (hero). */
  const localizedPath = (options?: { page?: SeoPage; book?: boolean }) =>
    buildLocalizedPath(lang, {
      studio,
      page: options?.page,
      book: options?.book,
    });

  /** Locale home (hero) — preserves studio prefix on campaign URLs. */
  const homePath = () => localizedPath();

  /** Canonical path for meta/link (indexed URLs only — no studio, no /book). */
  const canonicalSeoPath = (options?: { page?: SeoPage }) =>
    buildCanonicalSeoPath(lang, { page: options?.page ?? route.page });

  /** Current URL path for og:url (keeps studio + /book on campaign links). */
  const shareSeoPath = (options?: { page?: SeoPage; book?: boolean }) =>
    buildShareSeoPath(lang, {
      studio,
      page: options?.page ?? route.page,
      book: options?.book ?? route.book,
    });

  return {
    lang,
    studio,
    defaultStudio,
    isCampaignRoute: route.isCampaignRoute,
    localizedPath,
    homePath,
    canonicalSeoPath,
    shareSeoPath,
    /** @deprecated Use canonicalSeoPath for SEO path prop */
    seoPath: canonicalSeoPath,
  };
}
