import { PortfolioItemStoryblok } from '../../../component-types-sb';

import Container from "@/components/Container/Container";
import Carousel from '@/components/Carousel/Carousel';
import PortfolioCarouselItem from './PortfolioCarouselItem/PortfolioCarouselItem';

import styles from './PortfolioCarousel.module.scss';

interface Props {
    items: PortfolioItemStoryblok[];
}

const PortfolioCarousel: React.FC<Props> = ({ items }) => {
    return (
        <section className={styles.caseStudies}>
            <Container>
                <Carousel>
                    {items.map((caseStudy: PortfolioItemStoryblok) => <PortfolioCarouselItem key={caseStudy.uuid} content={caseStudy.content} />)}
                </Carousel>
            </Container>
        </section>
    )
}

export default PortfolioCarousel;
