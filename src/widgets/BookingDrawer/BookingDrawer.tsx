import { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

interface BookingDrawerProps {
  open: boolean;
  onClose: () => void;
}

export const BookingDrawer = ({ open, onClose }: BookingDrawerProps) => {
  const { t } = useTranslation('common');
  const [searchParams, setSearchParams] = useSearchParams();
  const locationParam = searchParams.get('location');
  const selectedSalon = locationParam === 'center' ? 'center' : 'buiucani';

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [selectedSalon]);

  const bookingUrls = {
    buiucani: 'https://n611751.alteg.io/',
    center: 'https://n1382034.alteg.io',
  };

  const handleSalonChange = (salon: 'buiucani' | 'center') => {
    if (salon !== selectedSalon) {
      setIsLoading(true);
      const newParams = new URLSearchParams(searchParams);
      newParams.set('location', salon);
      setSearchParams(newParams, { replace: true });
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-lg bg-background shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex gap-2">
            <button
              onClick={() => handleSalonChange('buiucani')}
              className={`px-4 py-2 rounded-full text-sm-fluid font-body font-medium transition-colors ${selectedSalon === 'buiucani'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-foreground hover:bg-muted'
                }`}
            >
              {t('salon.buiucani')}
            </button>
            <button
              onClick={() => handleSalonChange('center')}
              className={`px-4 py-2 rounded-full text-sm-fluid font-body font-medium transition-colors ${selectedSalon === 'center'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-foreground hover:bg-muted'
                }`}
            >
              {t('salon.center')}
            </button>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-muted transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Placeholder for iframe */}
        <div className="flex-1">
          <div className="relative w-full h-full rounded-2xl bg-card border-border overflow-hidden">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-card z-10">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            )}
            <iframe
              key={selectedSalon}
              width="100%"
              height="100%"
              scrolling="no"
              frameBorder="0"
              id="ms_booking_iframe"
              src={bookingUrls[selectedSalon]}
              onLoad={() => setIsLoading(false)}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
