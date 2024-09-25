import { CaseStudyStoryblok } from '../../../component-types-sb';

import Container from "@/components/Container/Container";
import Carousel from '@/components/Carousel/Carousel';
import PortfolioCarouselItem from './PortfolioCarouselItem/PortfolioCarouselItem';

import styles from './PortfolioCarousel.module.scss';

interface Props {
    items: CaseStudyStoryblok[];
}

const PortfolioCarousel: React.FC<Props> = ({ items }) => {
    return (
        <section className={styles.caseStudies}>
            <Container>
                <Carousel>
                    {items.map((caseStudy) =>
                        <PortfolioCarouselItem
                            key={caseStudy.uuid}
                            name={caseStudy.content.client_name}
                            synopsis={caseStudy.content.description}
                            link={caseStudy.content.link.url}
                            image={caseStudy.content.casestudy_image.filename}
                        />
                    )}
                </Carousel>
            </Container>
        </section>
    )
}

export default PortfolioCarousel;
