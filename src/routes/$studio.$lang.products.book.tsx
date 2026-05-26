import { createFileRoute } from '@tanstack/react-router';
import ProductsPage from '@/pages/Products';

export const Route = createFileRoute('/$studio/$lang/products/book')({
  component: ProductsPage,
});
