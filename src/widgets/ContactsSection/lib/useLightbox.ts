import { useState, useCallback, useEffect } from 'react';
import { galleryData } from '../model/gallery-data';
import { GalleryType } from '../model/types';

export const useLightbox = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeGallery, setActiveGallery] = useState<GalleryType>('center');
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const showNext = useCallback(() => {
    setSelectedIndex((prev) => 
      prev !== null ? (prev + 1) % galleryData[activeGallery].length : null
    );
  }, [activeGallery]);

  const showPrev = useCallback(() => {
    setSelectedIndex((prev) => 
      prev !== null ? (prev - 1 + galleryData[activeGallery].length) % galleryData[activeGallery].length : null
    );
  }, [activeGallery]);

  const close = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const open = useCallback((index: number, type: GalleryType) => {
    setSelectedIndex(index);
    setActiveGallery(type);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, showNext, showPrev, close]);

  const handleTouchStart = (clientX: number) => setTouchStart(clientX);
  const handleTouchMove = (clientX: number) => setTouchEnd(clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) showNext();
    if (isRightSwipe) showPrev();
    setTouchStart(null);
    setTouchEnd(null);
  };

  return {
    selectedIndex,
    activeGallery,
    open,
    close,
    showNext,
    showPrev,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    images: selectedIndex !== null ? galleryData[activeGallery] : [],
  };
};
