import { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useRouterState } from '@tanstack/react-router';
import { useDefaultStudio } from '@/shared/lib/hooks/useDefaultStudio';
import type { StudioSlug } from '@/shared/lib/routing/constants';

interface BookingDrawerProps {
  open: boolean;
  onClose: () => void;
}

export const BookingDrawer = ({ open, onClose }: BookingDrawerProps) => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const defaultStudio = useDefaultStudio();
  const locationParam = useRouterState({
    select: (state) => {
      const value = state.location.search.location;
      return typeof value === 'string' ? value : undefined;
    },
  });
  const selectedSalon: StudioSlug =
    locationParam === 'center' ? 'center' : locationParam === 'buiucani' ? 'buiucani' : defaultStudio;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [selectedSalon]);

  const bookingUrls = {
    buiucani: 'https://n611751.alteg.io/',
    center: 'https://n1382034.alteg.io',
  };

  const handleSalonChange = (salon: StudioSlug) => {
    if (salon !== selectedSalon) {
      setIsLoading(true);
      navigate({
        search: (prev) => ({ ...prev, location: salon }),
        replace: true,
      });
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="absolute right-0 top-0 bottom-0 w-full max-w-lg bg-background shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between gap-3 p-[clamp(1rem,4vw,1.5rem)] border-b border-border">
          <div className="flex min-w-0 flex-wrap gap-2">
            <button
              onClick={() => handleSalonChange('buiucani')}
              className={`px-[clamp(0.875rem,3vw,1rem)] py-2 rounded-full text-sm-fluid font-body font-medium transition-colors ${selectedSalon === 'buiucani'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-foreground hover:bg-muted'
                }`}
            >
              {t('salon.buiucani')}
            </button>
            <button
              onClick={() => handleSalonChange('center')}
              className={`px-[clamp(0.875rem,3vw,1rem)] py-2 rounded-full text-sm-fluid font-body font-medium transition-colors ${selectedSalon === 'center'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-foreground hover:bg-muted'
                }`}
            >
              {t('salon.center')}
            </button>
          </div>
          <button
            onClick={onClose}
            className="size-10 shrink-0 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-muted transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex-1">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
              <Loader2 className="size-8 animate-spin text-primary" />
            </div>
          )}
          <iframe
            key={selectedSalon}
            src={bookingUrls[selectedSalon]}
            className="w-full h-full border-0"
            title={t('buttons.book')}
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </div>
  );
};
