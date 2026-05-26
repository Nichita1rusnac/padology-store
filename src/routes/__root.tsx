import { Outlet, createRootRoute } from '@tanstack/react-router';
import ScrollToTop from '@/components/ScrollToTop';

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}
