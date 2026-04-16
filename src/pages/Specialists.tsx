import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useTranslation } from 'react-i18next';
// import { Header } from '@/widgets/Header/Header';
// import { SpecialistsSection } from '@/widgets/SpecialistsSection/SpecialistsSection';
// import { Footer } from '@/widgets/Footer/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SPECIALISTS_LIST } from '@/entities/specialist/model/specialists';
import { SpecialistCard } from '@/entities/specialist/ui/SpecialistCard';

const Specialists = () => {
  const { t } = useTranslation('common');

  const centerSpecialists = SPECIALISTS_LIST.filter(s => s.location.includes('center'));
  const buiucaniSpecialists = SPECIALISTS_LIST.filter(s => s.location.includes('buiucani'));
  console.log(buiucaniSpecialists)
  return (
    <main className="pt-20">
      <section className="pt-4 px-4">
        <div className="mx-auto max-w-9xl">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">{t('nav.main')}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{t('nav.specialists')}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="mx-auto max-w-9xl">
          <Tabs defaultValue="center" className="w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <h1 className="font-display text-display-md font-light text-foreground">
                {t('titles.specialists')}
              </h1>
              <TabsList className="bg-secondary/50 p-1 h-auto self-start md:self-auto rounded-full">
                <TabsTrigger
                  value="center"
                  className="px-8 py-2.5 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                >
                  {t('common:salon.center')}
                </TabsTrigger>
                <TabsTrigger
                  value="buiucani"
                  className="px-8 py-2.5 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                >
                  {t('common:salon.buiucani')}
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="center" className="mt-0 outline-none">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {centerSpecialists.map((specialist) => (
                  <SpecialistCard key={specialist.id} specialist={specialist} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="buiucani" className="mt-0 outline-none">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {buiucaniSpecialists.map((specialist) => (
                  <SpecialistCard key={specialist.id} specialist={specialist} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  );
};

export default Specialists;
