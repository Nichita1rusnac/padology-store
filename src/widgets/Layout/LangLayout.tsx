import { useEffect } from 'react';
import { Outlet, useNavigate, useRouterState } from '@tanstack/react-router';
import i18n from '@/lib/i18n/config';
import { parseLocalizedPathname } from '@/shared/lib/routing/parsePathname';
import { isSupportedLanguage } from '@/shared/lib/routing/studio';
import { Header } from '@/widgets/Header/Header';
import { Footer } from '@/widgets/Footer/Footer';
import { BookingDrawer } from '@/widgets/BookingDrawer/BookingDrawer';

export function LangLayout() {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const { lang } = parseLocalizedPathname(pathname);
  const isBookingOpen = pathname.endsWith('/book') || pathname.endsWith('/book/');

  useEffect(() => {
    if (!isSupportedLanguage(lang)) {
      document.documentElement.removeAttribute('data-i18n-ready');
      return;
    }

    const markReady = () => {
      document.documentElement.lang = lang;
      document.documentElement.dataset.i18nReady = 'true';
    };

    if (i18n.isInitialized && i18n.language === lang) {
      markReady();
      return;
    }

    void i18n.changeLanguage(lang).then(markReady);
  }, [lang]);

  const handleCloseDrawer = () => {
    const parentPath = pathname.replace(/\/book\/?$/, '') || pathname;
    navigate({ to: parentPath });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow min-w-0 px-4 sm:px-[clamp(1rem,4vw,2rem)]">
        <Outlet />
      </main>
      <Footer />
      <BookingDrawer open={isBookingOpen} onClose={handleCloseDrawer} />
    </div>
  );
}
