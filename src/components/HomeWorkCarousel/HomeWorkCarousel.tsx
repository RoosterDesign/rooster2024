import { PortfolioItemStoryblok } from '../../../component-types-sb';
import Container from "@/components/Container/Container";
import Carousel from '@/components/Carousel/Carousel';
import HomeWorkCarouselItem from './HomeWorkCarouselItem/HomeWorkCarouselItem';

interface Props {
    items: PortfolioItemStoryblok[]
}

const HomeWorkCarousel: React.FC<Props> = ({ items }) => {
    return (
        <section className="block">
            <Container>
                <Carousel>
                    {items.map((item: PortfolioItemStoryblok) => {
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
