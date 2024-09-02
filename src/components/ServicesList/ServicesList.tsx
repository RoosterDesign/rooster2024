import styles from './ServicesList.module.scss';

import Image, { StaticImageData } from 'next/image';
import ServicesListCard from './ServicesListCard/ServicesListCard';

import contracting from '/public/icons/contracting.svg';
import outsourcing from '/public/icons/outsourcing.svg';
import freelance from '/public/icons/freelance.svg';

interface Service {
    icon: StaticImageData;
    title: string;
    link: string;
    body: string;
}

export default function ServicesList() {

    const services: Service[] = [
        {
            icon: contracting,
            title: 'Contracting',
            link: '/services',
            body: 'Working as a Senior Front End Developer, I have contracted at award winning design agencies and in-house at multinational companies. I integrate seamlessly with your working practices and ethos and adapt very quickly.'
        },
        {
            icon: outsourcing,
            title: 'Outsourcing',
            link: '/services',
            body: 'As a busy Design Agency, there is often limited resource to complete all projects on time. By outsourcing to me, you can be safe in the knowledge that the project will be delivered to your exacting standards and meeting your deadlines.'
        },
        {
            icon: freelance,
            title: 'Freelance',
            link: '/services',
            body: 'I work directly with a number of small to medium sized businesses in order to either help them create their first online presence, freshen up an existing website or help boost sales through integrated e-commerce solutions.'
        }
    ]
  return (
    <div className={` ${styles.servicesList}`}>
      {services.map((service, i) =>
            <ServicesListCard
                key={i}
                icon={service.icon}
                title={service.title}
                body={service.body}
                link={service.link}
            />
        )}
    </div>
  )
}
