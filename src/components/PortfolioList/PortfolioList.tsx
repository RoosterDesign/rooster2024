import { PortfolioListStoryblok } from '../../../component-types-sb';

import Container from '@/components/Container/Container';
import CardGrid from '@/components/CardGrid/CardGrid';
import Card from '@/components/Card/Card';

interface Props {
    items: PortfolioListStoryblok[]
}

const PortfolioList: React.FC<Props> = ({ items }) => {
    return (
        <section className="block">
            <Container>
                <CardGrid>
                    {items.map((item: PortfolioListStoryblok) => {

                        const formattedCardContent = {
                            image: item.content.thumbnail.filename,
                            title: item.content.client_name,
                            body: item.content.synopsis,
                            link: item.content.link.url,
                            isExternal: item.content.link.target === '_blank',
                            link_label: `Visit website`,
                            ...item.content
                        }

                        return (
                            <Card
                                key={item.content._uid}
                                cardContent={formattedCardContent}
                            />
                        )
                    }
                    )}
                </CardGrid>
            </Container>
        </section>

    )
}

export default PortfolioList;
