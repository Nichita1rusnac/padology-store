import { createFileRoute } from '@tanstack/react-router';
import { studioLangLayoutRouteOptions } from './-lib/langRoute';

export const Route = createFileRoute('/$studio/$lang')(studioLangLayoutRouteOptions);
