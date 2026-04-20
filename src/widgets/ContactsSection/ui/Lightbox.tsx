import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  selectedIndex: number;
  images: string[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onTouchStart: (clientX: number) => void;
  onTouchMove: (clientX: number) => void;
  onTouchEnd: () => void;
}

export const Lightbox = ({
  selectedIndex,
  images,
  onClose,
  onNext,
  onPrev,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
}: LightboxProps) => {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity animate-in fade-in duration-300"
      onTouchStart={(e) => onTouchStart(e.targetTouches[0].clientX)}
      onTouchMove={(e) => onTouchMove(e.targetTouches[0].clientX)}
      onTouchEnd={onTouchEnd}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95 cursor-pointer" 
        onClick={onClose}
      />

      {/* Close Button */}
      <button
        className="absolute top-6 right-6 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors z-[110]"
        onClick={onClose}
      >
        <X size={32} />
      </button>

      {/* Navigation Arrows (Desktop) */}
      <button
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors p-4 focus:outline-none z-[110]"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
      >
        <ChevronLeft size={48} />
      </button>
      <button
        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors p-4 focus:outline-none z-[110]"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
      >
        <ChevronRight size={48} />
      </button>

      {/* Navigation Buttons (Mobile) */}
      <div className="md:hidden absolute bottom-12 left-0 right-0 flex justify-center gap-12 text-white/50 z-[110]">
        <button 
          onClick={(e) => { e.stopPropagation(); onPrev(); }} 
          className="p-4 active:scale-95 transition-transform"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); onNext(); }} 
          className="p-4 active:scale-95 transition-transform"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Image Counter */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-white/50 font-body text-sm tracking-widest z-[110]">
        {selectedIndex + 1} / {images.length}
      </div>

      {/* Image Container */}
      <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
        <img
          key={selectedIndex}
          src={images[selectedIndex]}
          alt="Gallery fullscreen"
          className="max-w-full max-h-[80vh] md:max-h-[90vh] object-contain animate-in zoom-in-95 duration-300 select-none shadow-2xl pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};
