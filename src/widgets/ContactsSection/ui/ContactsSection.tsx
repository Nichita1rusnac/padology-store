import { useTranslation } from 'react-i18next';
import { useBookingPath } from '@/shared/lib/hooks/useBookingPath';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLightbox } from '../lib/useLightbox';
import { StudioInfo } from './StudioInfo';
import { Lightbox } from './Lightbox';
import { ContactLocation } from '../model/types';

export const ContactsSection = () => {
  const { t } = useTranslation(['contacts', 'common']);
  const bookingPath = useBookingPath();
  const {
    selectedIndex,
    images,
    open,
    close,
    showNext,
    showPrev,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useLightbox();

  const locations = t<string, { returnObjects: true }, ContactLocation[]>('contacts', {
    returnObjects: true,
  });

  const buiucaniStudio = locations.find(loc => loc.name === 'Evasstore');
  const centerStudio = locations.find(loc => loc.name === 'EvPodolux');

  return (
    <section id="contacts" className="py-[clamp(3rem,7vw,5rem)]">
      <div className="mx-auto max-w-9xl">
        <Tabs defaultValue="buiucani" className="w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-[clamp(2rem,5vw,3rem)]">
            <h2 className="font-display text-display-md font-light text-foreground">{t('hero.title')}</h2>
            <TabsList className="bg-secondary/50 p-1 h-auto self-start md:self-auto rounded-full max-w-full overflow-x-auto">
              <TabsTrigger
                value="buiucani"
                className="px-[clamp(1rem,4vw,2rem)] py-2.5 text-sm-fluid rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                {t('common:salon.buiucani')}
              </TabsTrigger>
              <TabsTrigger
                value="center"
                className="px-[clamp(1rem,4vw,2rem)] py-2.5 text-sm-fluid rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                {t('common:salon.center')}
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="center" className="mt-0 outline-none focus:ring-0">
            {centerStudio && (
              <StudioInfo
                loc={centerStudio}
                type="center"
                bookingPath={bookingPath}
                onImageClick={open}
              />
            )}
          </TabsContent>

          <TabsContent value="buiucani" className="mt-0 outline-none focus:ring-0">
            {buiucaniStudio && (
              <StudioInfo
                loc={buiucaniStudio}
                type="buiucani"
                bookingPath={bookingPath}
                onImageClick={open}
              />
            )}
          </TabsContent>
        </Tabs>
      </div>

      {selectedIndex !== null && (
        <Lightbox
          selectedIndex={selectedIndex}
          images={images}
          onClose={close}
          onNext={showNext}
          onPrev={showPrev}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
      )}
    </section>
  );
};
