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
        <section id="contacts" className="py-16 px-4">
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
                        return (
                            <div key={location.name} className="bg-card rounded-3xl p-8 flex flex-col">
                                <h3 className="font-display text-display-sm text-foreground mb-6">
                                    {location.category} <span className="text-primary">{location.name}</span>
                                </h3>
                                <div className="space-y-3 flex-1">
                                    {address && (
                                        <div className="flex items-start gap-3 text-foreground font-body">
                                            <MapPin size={20} className="text-primary shrink-0 mt-1" />
                                            <span className="text-base-fluid">{address}</span>
                                        </div>
                                    )}
                                    {phone && (
                                        <div className="flex items-center gap-3 text-foreground font-body">
                                            <Phone size={20} className="text-primary shrink-0" />
                                            <span className="text-base-fluid">{phone}</span>
                                        </div>
                                    )}
                                    {workingHours && (
                                        <div className="flex items-center gap-3 text-foreground font-body">
                                            <Clock size={20} className="text-primary shrink-0" />
                                            <span className="text-base-fluid">{workingHours}</span>
                                        </div>
                                    )}
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <Link
                                            to={`${bookingPath}?location=${location.contact.find((c) => c.id === 'tag')?.value}`}
                                            className="inline-block w-full md:w-auto px-8 py-3.5 bg-primary text-primary-foreground rounded-full text-button font-body font-semibold text-center hover:shadow-lg hover:shadow-primary/20 transition-all"
                                        >
                                            {t('common:buttons.book')}
                                        </Link>
                                    </div>
                                </div>
                                <div className="mt-6 aspect-video rounded-3xl bg-secondary overflow-hidden">
                                    <iframe
                                        src={location.embed}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
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