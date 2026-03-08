import { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguageStore } from '@/shared/store/language';

interface BookingDrawerProps {
  open: boolean;
  onClose: () => void;
}

export const BookingDrawer = ({ open, onClose }: BookingDrawerProps) => {
  const { t } = useLanguageStore();
  const [selectedSalon, setSelectedSalon] = useState<'buiucani' | 'center'>(
    'buiucani',
  );

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
              onClick={() => setSelectedSalon('buiucani')}
              className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-colors ${
                selectedSalon === 'buiucani'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-foreground hover:bg-muted'
              }`}
            >
              {t.salonBuiucani}
            </button>
            <button
              onClick={() => setSelectedSalon('center')}
              className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-colors ${
                selectedSalon === 'center'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-foreground hover:bg-muted'
              }`}
            >
              {t.salonCenter}
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
        <div className="flex-1 p-6">
          <div className="w-full h-full rounded-2xl bg-card border-2 border-dashed border-border flex items-center justify-center">
            <p className="text-muted-foreground font-body text-sm">
              {t.selectSalon}:{' '}
              {selectedSalon === 'buiucani' ? t.salonBuiucani : t.salonCenter}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
