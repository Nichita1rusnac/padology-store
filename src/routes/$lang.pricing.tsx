import { createFileRoute } from '@tanstack/react-router';
import PricingPage from '@/pages/Pricing';

export const Route = createFileRoute('/$lang/pricing')({
  component: PricingPage,
});
