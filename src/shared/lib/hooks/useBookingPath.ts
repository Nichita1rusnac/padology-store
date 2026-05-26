import { useRouterState } from '@tanstack/react-router';

/**
 * Booking path relative to the current location.
 * Appends `/book` unless the path already ends with `/book`.
 */
export const useBookingPath = () => {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  if (pathname.endsWith('/book') || pathname.endsWith('/book/')) {
    return pathname;
  }

  return `${pathname.replace(/\/$/, '')}/book`;
};
