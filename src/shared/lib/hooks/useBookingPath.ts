import { useLocation } from 'react-router-dom';

/**
 * Custom hook to generate the correct booking path relative to the current location.
 * If the current path already ends with '/book', it returns the current path.
 * Otherwise, it appends '/book' to the current path.
 */
export const useBookingPath = () => {
  const location = useLocation();
  
  const bookingPath = location.pathname.endsWith('/book') || location.pathname.endsWith('/book/') 
    ? location.pathname 
    : `${location.pathname.replace(/\/$/, '')}/book`;

  return bookingPath;
};
