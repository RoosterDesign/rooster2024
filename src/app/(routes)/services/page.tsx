import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import ServicesMasthead from '@/components/ServicesMasthead/ServicesMasthead';
import BulletsCallout from '@/components/BulletsCallout/BulletsCallout';
import Testimonials from '@/components/Testimonials/Testimonials';

export default function Services() {
    return (
        <>
            <Breadcrumbs />
            <ServicesMasthead />

            <BulletsCallout />

            <Testimonials />

        </>
    )
}
