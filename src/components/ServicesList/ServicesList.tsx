import { ServicesStoryblok, CardStoryblok } from '../../../component-types-sb';
// import { CardType } from '@/lib/types';
import Card from '@/components/Card/Card';
import Container from '@/components/Container/Container';
import IntroBlock from '@/components/IntroBlock/IntroBlock';
import CardGrid from '@/components/CardGrid/CardGrid';

import styles from './ServicesList.module.scss';

interface Props {
    blok: ServicesStoryblok
}

const ServicesList: React.FC<Props> = ({ blok }) => {

    const { title, intro } = blok;
    const services = blok.blocks;

    return (
        <Container>
            <IntroBlock title={title} intro={intro} />
            <div className={` ${styles.servicesList}`}>
                <CardGrid>
                    {services?.map((service: CardStoryblok) => (
                        <Card
                            key={service._uid}
                            cardContent={service}
                        />
                    ))}
                </CardGrid>
            </div>
        </Container>
    )
}

export default ServicesList;
