import { createFileRoute } from '@tanstack/react-router';
import IndexPage from '@/pages/index';

export const Route = createFileRoute('/$studio/$lang/')({
  component: IndexPage,
});
