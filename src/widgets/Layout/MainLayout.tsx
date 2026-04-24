import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { BookingDrawer } from '../BookingDrawer/BookingDrawer';

export const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { lang } = useParams();

  // Check if the current path ends with /book or /book/
  const isBookingOpen = location.pathname.endsWith('/book') || location.pathname.endsWith('/book/');

  const handleCloseDrawer = () => {
    const parentPath = location.pathname.replace(/\/book\/?$/, '');
    navigate(parentPath || `/${lang || 'ru'}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow px-4 sm:px-[clamp(1rem,5vw,2rem)]">
        <Outlet />
      </main>
      <Footer />
      <BookingDrawer open={isBookingOpen} onClose={handleCloseDrawer} />
    </div>
  );
};
