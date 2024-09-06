import styles from './LatestProjects.module.scss';
import { LatestProjectType } from './LatestProject/LatestProjectType';

import Container from "@/components/Container/Container";
import Carousel from '@/components/Carousel/Carousel';
import LatestProject from './LatestProject/LatestProject';

import trustFirstParts from '/public/work/trust-first-parts.jpg';
import applyOnceFunding from '/public/work/apply-once-funding.jpg';
import gasRegulatory from '/public/work/gas-regulatory.jpg';
import drSharon from '/public/work/dr-sharon.jpg';
// import pcAccounts from '/public/work/pc-accounts.jpg';
import pumpCourt from '/public/work/5-pump-court.jpg';
import theSpa from '/public/work/the-spa.jpg';

export default function LatestProjects() {

  const clients: LatestProjectType[] = [
    {
      type: "UI/UX Design Concept" ,
      name: "Ford TrustFirstParts",
      synopsis: "I was tasked with putting together a conceptual design for TrustFirstParts new Ford parts application. I came up with a set of wireframes to demonstrate how the new app would work and then turned these into high-fidelity designs for the client.",
      link: "#",
      image: trustFirstParts
    },
    {
      type: "Design & Build" ,
      name: "ApplyOnce Funding",
      synopsis: "ApplyOnce Funding is a new start-up who requested a brand new website for their new financing business. I created a modern, professional design and turned this into a brochure style website to help launch their new business.",
      link: "#",
      image: applyOnceFunding
    },
    {
      type: "UI/UX Design Concept" ,
      name: "GasRegulatory App",
      synopsis: "GasRegulatory asked for a set of wireframes and conceptual designs for their new gas professionals application to be put together. The designs had to take into account handling large datasets as well as being fully responsive to work on mobile devices.",
      link: "#",
      image: gasRegulatory
    },
    {
      type: "Design & Build" ,
      name: "Dr Sharon Facial Aesthetics",
      synopsis: "I was approached by Dr Sharon to design and build a fully responsive website with an integrated Umbraco CMS for her facial aesthetics business. The website had to match her brand, be fully accessible and easy to update.",
      link: "#",
      image: drSharon
    },
    // {
    //   type: "Design & Build" ,
    //   name: "PC Accounts",
    //   synopsis: "PC Accounts came to my other company, jbandg, asking for us to design and develop them their new website. I created a number of bespoke wireframes based on their brief and once we had perfected these I turned them into high-fidelity designs. Once completed, as the sole Front End Developer working alongside a alongside a ASP.NET C# developer, built the new responsive website on an Umbraco CMS backend.",
    //   link: "#",
    //   image: pcAccounts
    // },
    {
      type: "Design & Build" ,
      name: "5 Pump Court",
      synopsis: "London based Law firm, 5 Pump Court, asked me to design and build a fully responsive website to replace their ageing current site. The site had to match their brand and be easy for the client to update themselves, through use of an integrated Umbraco CMS.",
      link: "#",
      image: pumpCourt
    },
    {
      type: "Design & Build" ,
      name: "The Spa",
      synopsis: "Local beauty spa, The Spa Leamington, is a long running client of mine who I have worked with for a number of years. I recently redesigned their existing website as well as creating an e-commerce shop for their beauty products using Shopify.",
      link: "#",
      image: theSpa
    }

  ]

  return (
    <section className="block">
        <Container>
            <Carousel>
                {clients.map((client, index) =>
                    <LatestProject
                        key={index}
                        type={client.type}
                        name={client.name}
                        synopsis={client.synopsis}
                        link={client.link}
                        image={client.image}
                    />
                )}
            </Carousel>
            <p className={styles.notes}>{`This is a small selection of some past freelance projects I have created. Due to the sensitive nature of my contract and outsourcing work, I am unable to share projects I was involved with. Specific examples are available upon request.`}</p>
        </Container>
    </section>
  )
}
