import styles from './CaseStudies.module.scss';
import { CaseStudyType } from './CaseStudy/CaseStudyType';
import Container from "@/components/Container/Container";
import Carousel from '@/components/Carousel/Carousel';
import CaseStudy from './CaseStudy/CaseStudy';

import amba from '/public/work/amba.jpg';
import cotl from '/public/work/cameras-on-the-line.jpg';
import hitachiCo2 from '/public/work/hitachi-co2.jpg';
import trustFirstParts from './images/trust-first-parts.jpg';

export default function CaseStudies() {

    const caseStudies: CaseStudyType[] = [
        {
            name: "Disney Cruise Lines",
            synopsis: (<><p>I was tasked with putting together a conceptual design for TrustFirstParts new Ford parts application. I came up with a set of wireframes to demonstrate how the new app would work and then turned these into high-fidelity designs for the client.</p></>),
            link: "",
            image: trustFirstParts
        },
        {
            name: "Teen Titans Go",
            synopsis: (<><p>I was tasked with putting together a conceptual design for TrustFirstParts new Ford parts application. I came up with a set of wireframes to demonstrate how the new app would work and then turned these into high-fidelity designs for the client.</p></>),
            link: "",
            image: trustFirstParts
        },
        {
            name: "Hitachi Co2 Calculator",
            synopsis: (<><p>I was tasked with putting together a conceptual design for TrustFirstParts new Ford parts application. I came up with a set of wireframes to demonstrate how the new app would work and then turned these into high-fidelity designs for the client.</p></>),
            link: "",
            image: hitachiCo2
        },
        {
            name: "Aston Martin Cameras on the Line",
            synopsis: (<><p>I was tasked with putting together a conceptual design for TrustFirstParts new Ford parts application. I came up with a set of wireframes to demonstrate how the new app would work and then turned these into high-fidelity designs for the client.</p></>),
            link: "",
            image: cotl
        },

        {
            name: "AMBA / BGA",
            synopsis: (<><p>I was tasked with putting together a conceptual design for TrustFirstParts new Ford parts application. I came up with a set of wireframes to demonstrate how the new app would work and then turned these into high-fidelity designs for the client.</p></>),
            link: "",
            image: amba
        },
        {
            name: "Ford TrustFirstParts",
            synopsis: (<><p>I was tasked with putting together a conceptual design for TrustFirstParts new Ford parts application. I came up with a set of wireframes to demonstrate how the new app would work and then turned these into high-fidelity designs for the client.</p></>),
            link: "",
            image: trustFirstParts
        },
        {
            name: "ApplyOnce Funding",
            synopsis: <><p>ApplyOnce Funding is a new start-up who requested a brand new website for their new financing business. I created a modern, professional design and turned this into a brochure style website to help launch their new business.</p></>,
            link: "",
            image: trustFirstParts
        },
        {
            name: "GasRegulatory App",
            synopsis: <><p>GasRegulatory asked for a set of wireframes and conceptual designs for their new gas professionals application to be put together. The designs had to take into account handling large datasets as well as being fully responsive to work on mobile devices.</p></>,
            link: "",
            image: trustFirstParts
        }
    ]

    return (
        <section className={styles.caseStudies}>
            <Container>
                <Carousel>
                    {caseStudies.map((caseStudy, i) =>
                        <CaseStudy
                            key={i}
                            name={caseStudy.name}
                            synopsis={caseStudy.synopsis}
                            link={caseStudy.link}
                            image={caseStudy.image}
                        />
                    )}
                </Carousel>
            </Container>
        </section>
    )
}
