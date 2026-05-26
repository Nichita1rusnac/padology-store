import { useRouterState } from '@tanstack/react-router';
import { parseLocalizedPathname } from '@/shared/lib/routing/parsePathname';

export function useDefaultStudio() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return parseLocalizedPathname(pathname).defaultStudio;
}
