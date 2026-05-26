import { createFileRoute } from '@tanstack/react-router';
import IndexPage from '@/pages/index';

export const Route = createFileRoute('/$lang/book')({
  component: IndexPage,
});
