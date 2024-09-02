import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import ServicesMasthead from '@/components/ServicesMasthead/ServicesMasthead';
import BulletsCallout from '@/components/BulletsCallout/BulletsCallout';
import Testimonials from '@/components/Testimonials/Testimonials';
import Faqs from '@/components/Faqs/Faqs';

export default function Services() {
    return (
        <>
            <Breadcrumbs />
            <ServicesMasthead />
            <BulletsCallout />
            <Faqs />
            <Testimonials />
        </>
    )
}
