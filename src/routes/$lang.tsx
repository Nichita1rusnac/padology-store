import { createFileRoute } from '@tanstack/react-router';
import { langLayoutRouteOptions } from './-lib/langRoute';

export const Route = createFileRoute('/$lang')(langLayoutRouteOptions);
