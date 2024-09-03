import styles from './CaseStudies.module.scss';
import { CaseStudyType } from './CaseStudy/CaseStudyType';
import Container from "@/components/Container/Container";
import Carousel from '@/components/Carousel/Carousel';
import CaseStudy from './CaseStudy/CaseStudy';

import trustFirstParts from './images/trust-first-parts.jpg';

export default function CaseStudies() {

    const caseStudies: CaseStudyType[] = [
        {
            name: "Ford TrustFirstParts",
            synopsis: (<><p>With their previous website, 5 Pump Court felt their brand identity was not being reflected correctly online. The website was very hard to update, and often lead to errors when changing or adding content. It was also very heavily reliant on images, with negative SEO implications, and was not optimised for mobile.</p><p>I was tasked with designing and developing their new website, addressing the issues faced with their previous website, alongside implementing new features.</p></>),
            link: "#",
            image: trustFirstParts
        },
        {
            name: "Ford TrustFirstParts",
            synopsis: <><p>I was tasked with putting together a conceptual design for TrustFirstParts new Ford parts application. I came up with a set of wireframes to demonstrate how the new app would work and then turned these into high-fidelity designs for the client.</p></>,
            link: "#",
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
