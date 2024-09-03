import Container from '@/components/Container/Container';
import CardGrid from '@/components/CardGrid/CardGrid';

import { LinkCardType } from '@/components/LinkCard/LinkCardType';
import LinkCard from '@/components/LinkCard/LinkCard';

import pumpCourt from './images/5-pump-court.jpg';


export default function PortfolioList() {

    const portfolioItems: LinkCardType[] = [
        {
            image: pumpCourt,
            title: '5 Pump Court',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a sodales turpis, eu pharetra turpis. Quisque eget orci magna. Fusce posuere tellus ac magna iaculis mattis..',
            link: '#'
        },
        {
            image: pumpCourt,
            title: '5 Pump Court',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a sodales turpis, eu pharetra turpis. Quisque eget orci magna. Fusce posuere tellus ac magna iaculis mattis..',
            link: '#'
        },
        {
            image: pumpCourt,
            title: '5 Pump Court',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a sodales turpis, eu pharetra turpis. Quisque eget orci magna. Fusce posuere tellus ac magna iaculis mattis..',
            link: '#'
        },
        {
            image: pumpCourt,
            title: '5 Pump Court',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a sodales turpis, eu pharetra turpis. Quisque eget orci magna. Fusce posuere tellus ac magna iaculis mattis..',
            link: '#'
        },
        {
            image: pumpCourt,
            title: '5 Pump Court',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a sodales turpis, eu pharetra turpis. Quisque eget orci magna. Fusce posuere tellus ac magna iaculis mattis..',
            link: '#'
        },
        {
            image: pumpCourt,
            title: '5 Pump Court',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a sodales turpis, eu pharetra turpis. Quisque eget orci magna. Fusce posuere tellus ac magna iaculis mattis..',
            link: '#'
        }
    ]

    return (
        <section className="block">
                <CardGrid>
                    {portfolioItems.map((item, i) =>
                        <LinkCard
                            key={i}
                            image={item.image}
                            title={item.title}
                            body={item.body}
                            link={item.link}
                        />
                    )}
                </CardGrid>
        </section>

    )
}
