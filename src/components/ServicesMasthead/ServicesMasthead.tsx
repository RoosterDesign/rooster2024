import { storyblokEditable } from "@storyblok/react/rsc";
import { ServicesMastheadStoryblok } from '../../../component-types-sb';

import Masthead from '@/components/Masthead/Masthead';
import Container from '@/components/Container/Container';
import Card from '@/components/Card/Card';

import styles from './ServicesMasthead.module.scss';

interface Props {
    blok: ServicesMastheadStoryblok
}

const ServicesMasthead: React.FC<Props> = ({ blok }) => {
    const { masthead, cards } = blok;

    return (
        <section className={styles.servicesMasthead} {...storyblokEditable(blok)}>
            <Container>

                <div className={styles.intro}>
                    <Masthead blok={masthead[0]} />
                </div>

                {cards.map((service) => (
                    <Card
                        key={service._uid}
                        cardContent={service}
                    />
                ))}
            </Container>
        </section>
    )
}

export default ServicesMasthead;
