import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import About from './pages/About';
import Services from './pages/Services';
import Specialists from './pages/Specialists';
import Pricing from './pages/Pricing';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import { LanguageLayout, RootRedirect } from '@/components/LanguageRoutes';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootRedirect />} />
          <Route path="/:lang" element={<LanguageLayout />}>
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="specialists" element={<Specialists />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          {/* Catch-all for non-matching URLs */}
          <Route path="*" element={<RootRedirect />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
