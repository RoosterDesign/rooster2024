import { CaseStudyStoryblok } from '../../../component-types-sb';
import Container from "@/components/Container/Container";
import Carousel from '@/components/Carousel/Carousel';
import HomeWorkCarouselItem from './HomeWorkCarouselItem/HomeWorkCarouselItem';

interface Props {
    items: CaseStudyStoryblok[]
}

const HomeWorkCarousel: React.FC<Props> = ({ items }) => {
    return (
        <section className="block">
            <Container>
                <Carousel>
                    {items.map((item: CaseStudyStoryblok) => {
                        return (
                            <HomeWorkCarouselItem
                                key={item.uuid}
                                client={item.content}
                            />
                        )
                    }
                    )}
                </Carousel>
            </Container>
        </section>
    )
}

export default HomeWorkCarousel;
