import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Clock, ChevronRight, MessageSquare } from 'lucide-react';
import { LOCATIONS } from '@/shared/content/locations';
import { SEO } from '@/components/SEO';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const LocationDetail = () => {
  const { lang = 'ro', slug } = useParams<{ lang: string; slug: string }>();
  const { t } = useTranslation(['common', 'faq']);

  const location = LOCATIONS.find(
    (loc) => loc.slugs[lang as keyof typeof loc.slugs] === slug
  );

  if (!location) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-display-md font-bold mb-4">Location Not Found</h1>
        <Link to={`/${lang}`} className="text-primary underline">
          Return to Home
        </Link>
      </div>
    );
  }

  const localizedSEO = location.seo[lang as keyof typeof location.seo];
  const localizedName = location.names[lang as keyof typeof location.names];
  const localizedAddress = location.addresses[lang as keyof typeof location.addresses];

  const faqData = t<{ title: string; items: { question: string; answer: string }[] }>('faq', {
    returnObjects: true,
  });

  return (
    <main className="pt-20">
      <SEO
        title={localizedSEO.title}
        description={localizedSEO.description}
        path={`/${lang}/locations/${slug}`}
        schemaType="LocalBusiness"
        locationData={{
          name: localizedName,
          address: localizedAddress,
          phone: location.phones,
        }}
      />

      {/* Breadcrumbs */}
      <section className="pt-4 px-4 mb-8">
        <div className="mx-auto max-w-9xl">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={`/${lang}`}>{t('nav.main')}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{localizedName}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero Section */}
      <section className="px-4 mb-16">
        <div className="mx-auto max-w-9xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <MapPin size={16} />
                <span>Chișinău, {location.tag === 'center' ? 'Center' : 'Buiucani'}</span>
              </div>
              <h1 className="text-display-lg font-light gradient-text mb-6">
                {localizedName}
              </h1>
              <p className="text-xl-fluid text-muted-foreground mb-8 max-w-2xl">
                {localizedSEO.description}
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t('common:salon.select')}</h3>
                    <p className="text-muted-foreground">{localizedAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                    <Phone className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t('common:nav.contacts')}</h3>
                    <div className="flex flex-col gap-1">
                      {location.phones.map((phone) => (
                        <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                    <Clock className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Working Hours</h3>
                    <p className="text-muted-foreground">Mon - Fri: 09:00 - 19:00</p>
                    <p className="text-muted-foreground">Sat: 10:00 - 15:00</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to={`/${lang}/book?location=${location.tag}`}
                  className="px-10 py-4 bg-primary text-primary-foreground rounded-full text-button font-bold hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center gap-2"
                >
                  {t('common:buttons.book')}
                  <ChevronRight size={20} />
                </Link>
                <a
                  href={`tel:${location.phones[0].replace(/\s/g, '')}`}
                  className="px-10 py-4 bg-secondary text-foreground rounded-full text-button font-bold hover:bg-secondary/80 transition-all flex items-center gap-2"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </div>
            </div>

            <div className="aspect-square lg:aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl bg-secondary">
              <iframe
                src={location.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${localizedName}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-light mb-4">{faqData.title}</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-none rounded-2xl px-6 py-2 shadow-sm data-[state=open]:shadow-md transition-all"
              >
                <AccordionTrigger className="text-left font-display text-xl hover:no-underline hover:text-primary py-4">
                  <span className="flex items-center gap-4">
                    <MessageSquare size={20} className="text-primary shrink-0" />
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg-fluid pb-6 pl-9">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 text-center">
        <div className="mx-auto max-w-4xl bg-primary rounded-[3rem] p-12 lg:p-20 text-primary-foreground relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-display-md font-light mb-6">
              Ready to take care of your feet?
            </h2>
            <p className="text-xl-fluid opacity-90 mb-10 max-w-2xl mx-auto">
              Book an appointment at our {location.tag === 'center' ? 'Center' : 'Buiucani'} studio and experience professional podiatric care.
            </p>
            <Link
              to={`/${lang}/book?location=${location.tag}`}
              className="px-12 py-5 bg-background text-foreground rounded-full text-button font-bold hover:scale-105 transition-transform inline-block"
            >
              {t('common:buttons.book')}
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        </div>
      </section>

      {/* Analytics Placeholder */}
      {/* <!-- GA4 Event: View Location {{GA4_ID}} --> */}
    </main>
  );
};

export default LocationDetail;
