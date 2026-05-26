import { useEffect } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { useLocalizedRoute } from '@/shared/lib/hooks/useLocalizedRoute';

const NotFound = () => {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const { homePath } = useLocalizedRoute();

  useEffect(() => {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      pathname,
    );
  }, [pathname]);

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="text-center">
        <h1 className="mb-4 text-display-md font-bold">404</h1>
        <p className="mb-4 text-xl-fluid text-muted-foreground">
          Oops! Page not found
        </p>
        <Link to={homePath()} className="text-primary underline hover:text-primary/90">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
