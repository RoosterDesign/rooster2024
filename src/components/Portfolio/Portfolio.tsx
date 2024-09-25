import { storyblokEditable } from "@storyblok/react/rsc";
import { PortfolioStoryblok } from '../../../component-types-sb';

import HomeWorkCarousel from '@/components/HomeWorkCarousel/HomeWorkCarousel';
import PortfolioCarousel from '@/components/PortfolioCarousel/PortfolioCarousel';
import PortfolioList from '@/components/PortfolioList/PortfolioList';

interface Props {
    blok: PortfolioStoryblok
}

const Portfolio: React.FC<Props> = ({ blok }) => {
    const { layout, items } = blok;

    return (
        <div {...storyblokEditable(blok)}>
            {layout === "home-carousel" && <HomeWorkCarousel items={items} />}
            {layout === "portfolio-carousel" && <PortfolioCarousel items={items} />}
            {layout === "portfolio-list" && <PortfolioList items={items} />}
        </div>
    )
}

export default Portfolio;
