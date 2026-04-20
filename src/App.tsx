import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Index from './pages/index';
import About from './pages/About';
import Services from './pages/Services';
import Specialists from './pages/Specialists';
import Pricing from './pages/Pricing';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import { LanguageLayout, RootRedirect } from '@/components/LanguageRoutes';

import { MainLayout } from '@/widgets/Layout/MainLayout';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<RootRedirect />} />
          <Route path="/:lang" element={<LanguageLayout />}>
            <Route element={<MainLayout />}>
              <Route index element={<Index />} />
              <Route path="book" element={<Index />} />
              <Route path="about" element={<About />} />
              <Route path="about/book" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="services/book" element={<Services />} />
              <Route path="specialists" element={<Specialists />} />
              <Route path="specialists/book" element={<Specialists />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="pricing/book" element={<Pricing />} />
              <Route path="products" element={<Products />} />
              <Route path="products/book" element={<Products />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="contacts/book" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Route>
          {/* Catch-all for non-matching URLs */}
          <Route path="*" element={<RootRedirect />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
