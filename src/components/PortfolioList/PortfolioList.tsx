import Container from '@/components/Container/Container';
import CardGrid from '@/components/CardGrid/CardGrid';

import { LinkCardType } from '@/components/LinkCard/LinkCardType';
import LinkCard from '@/components/LinkCard/LinkCard';

import pumpCourt from '/public/work/5-pump-court-small.jpg';
import drSharon from '/public/work/dr-sharon-small.jpg';
import theSpa from '/public/work/the-spa-small.jpg';
import harringtons from '/public/work/harringtons.jpg';
import muk from '/public/work/muk.jpg';
import abbeyFields from '/public/work/abbey-fields.jpg';

export default function PortfolioList() {

    const portfolioItems: LinkCardType[] = [
        {
            image: drSharon,
            title: 'Dr Sharon Facial Aesthetics',
            body: 'I was approached by Dr Sharon to design and build a fully responsive website with an integrated Umbraco CMS for her facial aesthetics business. The website had to match her brand, be fully accessible and easy to update.',
            link: 'https://www.drsharonsfacialaesthetics.co.uk/'
        },
        {
            image: theSpa,
            title: 'The Spa, Leamington',
            body: 'Local beauty spa, The Spa Leamington, is a long running client of mine who I have worked with for a number of years. I recently redesigned their existing website as well as creating an e-commerce shop for their beauty products using Shopify.',
            link: 'https://www.thespaleamington.com/'
        },
        {
            image: pumpCourt,
            title: '5 Pump Court',
            body: 'London based Law firm, 5 Pump Court, asked me to design and build a fully responsive website to replace their ageing current site. The site had to match their brand and be easy for the client to update themselves, through use of an integrated Umbraco CMS.',
            link: 'https://www.5pumpcourt.com/'
        },
        {
            image: harringtons,
            title: 'Harringtons on the Hill',
            body: 'Local beauty spa, The Spa Leamington, is a long running client of mine who I have worked with for a number of years. I recently redesigned their existing website as well as creating an e-commerce shop for their beauty products using Shopify.',
            link: 'https://harringtonsonthehill.com/'
        },
        {
            image: muk,
            title: 'Muk',
            body: 'Local beauty spa, The Spa Leamington, is a long running client of mine who I have worked with for a number of years. I recently redesigned their existing website as well as creating an e-commerce shop for their beauty products using Shopify.',
            link: 'https://www.mukme.com/'
        },
        {
            image: abbeyFields,
            title: 'Friends of Abbey Fields',
            body: 'Local beauty spa, The Spa Leamington, is a long running client of mine who I have worked with for a number of years. I recently redesigned their existing website as well as creating an e-commerce shop for their beauty products using Shopify. Website still under development.',
            link: 'https://www.friendsofabbeyfields.org.uk/'
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
                            linkLabel={`Visit website`}
                            isExternal
                        />
                    )}
                </CardGrid>
        </section>

    )
}
