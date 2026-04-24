import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useBookingPath } from '@/shared/lib/hooks/useBookingPath';

interface ContactDetail {
    id: string;
    label: string;
    value: string;
}

interface ContactLocation {
    name: string;
    category: string;
    contact: ContactDetail[];
    embed: string;
    location: string;
}

export const ContactsSection = () => {
    const { t } = useTranslation(['contacts', 'common']);
    // Using i18next generic for type safety instead of casting

    const locations = t<string, { returnObjects: true }, ContactLocation[]>('contacts', {
        returnObjects: true,
    });
    const bookingPath = useBookingPath();

    return (
        <section id="contacts" className="py-16">
            <div className="mx-auto max-w-9xl">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="font-display text-display-lg font-light gradient-text mb-6">
                        {t('common:titles.contacts')}
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {locations.map((location) => {
                        const address = location.contact.find((c) => c.id === 'address')?.value;
                        const phone = location.contact.find((c) => c.id === 'phone')?.value;
                        const workingHours = location.contact.find((c) => c.id === 'working')?.value;
                        const bookTag = location.contact.find((c) => c.id === 'tag')?.value;

                        // Split address into main and secondary for better hierarchy
                        const addressParts = address?.split(',');
                        const mainAddress = addressParts?.[0];
                        const secondaryAddress = addressParts?.slice(1).join(',');

                        return (
                            <div 
                                key={location.name} 
                                className="bg-card rounded-3xl p-6 flex flex-col transition-all duration-300 hover:shadow-lg group"
                            >
                                <h3 className="font-display text-2xl font-semibold leading-snug tracking-wide text-foreground mb-4">
                                    {location.category} <span className="text-primary">{location.name}</span>
                                </h3>
                                
                                <div className="flex-1">
                                    <div className="space-y-3">
                                        {address && (
                                            <div className="flex items-start gap-3 font-body">
                                                <MapPin size={18} className="text-muted-foreground shrink-0 mt-1" />
                                                <div className="text-base text-foreground leading-relaxed">
                                                    {mainAddress}
                                                    {secondaryAddress && (
                                                        <span className="text-muted-foreground">, {secondaryAddress}</span>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                        {phone && (
                                            <div className="flex items-center gap-3 font-body">
                                                <Phone size={18} className="text-muted-foreground shrink-0" />
                                                <span className="text-base text-foreground">{phone}</span>
                                            </div>
                                        )}
                                        {workingHours && (
                                            <div className="flex items-center gap-3 font-body">
                                                <Clock size={18} className="text-muted-foreground shrink-0" />
                                                <span className="text-base text-foreground">{workingHours}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-4 flex flex-col sm:flex-row gap-3">
                                        <Link
                                            to={`${bookingPath}?location=${bookTag}`}
                                            className="inline-block w-full md:w-auto px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-base font-medium text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                                        >
                                            {t('common:buttons.book')}
                                        </Link>
                                    </div>
                                </div>

                                <div className="mt-5 aspect-video rounded-2xl bg-secondary overflow-hidden border border-border">
                                    <iframe
                                        src={location.embed}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="grayscale-[0.2] contrast-[1.1] transition-all duration-500 group-hover:grayscale-0"
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}