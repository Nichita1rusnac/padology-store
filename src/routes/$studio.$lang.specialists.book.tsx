import { createFileRoute } from '@tanstack/react-router';
import SpecialistsPage from '@/pages/Specialists';

export const Route = createFileRoute('/$studio/$lang/specialists/book')({
  component: SpecialistsPage,
});
