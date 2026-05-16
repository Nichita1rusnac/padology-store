import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Index from './pages/index';
import Specialists from './pages/Specialists';
import Pricing from './pages/Pricing';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import { LanguageLayout, RootRedirect } from '@/components/LanguageRoutes';

import { MainLayout } from '@/widgets/Layout/MainLayout';

const App = () => (
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<RootRedirect />} />
          <Route path="/:lang" element={<LanguageLayout />}>
            <Route element={<MainLayout />}>
              <Route index element={<Index />} />
              <Route path="book" element={<Index />} />
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
);

export default App;
