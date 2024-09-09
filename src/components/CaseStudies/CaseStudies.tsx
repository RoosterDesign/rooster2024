import styles from './CaseStudies.module.scss';
import { CaseStudyType } from './CaseStudy/CaseStudyType';
import Container from "@/components/Container/Container";
import Carousel from '@/components/Carousel/Carousel';
import CaseStudy from './CaseStudy/CaseStudy';

import teenTitans from '/public/work/teen-titans.jpg';
import amba from '/public/work/amba.jpg';
import cotl from '/public/work/cameras-on-the-line.jpg';
import hitachiCo2 from '/public/work/hitachi-co2.jpg';
import trustFirstParts from '/public/work/trust-first-parts-2.jpg';
import applyOnceFunding from '/public/work/apply-once-funding-2.jpg';
import gasRegulatory from '/public/work/gas-regulatory-2.jpg';

export default function CaseStudies() {

    const caseStudies: CaseStudyType[] = [
        // {
        //     name: "Disney Cruise Lines",
        //     synopsis: (<><p>I was tasked with putting together a conceptual design for TrustFirstParts new Ford parts application. I came up with a set of wireframes to demonstrate how the new app would work and then turned these into high-fidelity designs for the client.</p></>),
        //     link: "",
        //     image: trustFirstParts
        // },
        {
            name: "Teen Titans Go",
            synopsis: (<><p>One of the contracting projects I worked on as the sole front-end developer was a microsite for a Teen Titans competition.</p><p>The site was built using React and a headless CMS. I collaborated closely with the design team and backend developers to bring their creative vision to life while ensuring the user interface remained responsive and engaging across devices.</p><p>The project required a balance of technical expertise and teamwork, resulting in a site that was not only visually striking but also highly functional.</p></>),
            link: "",
            image: teenTitans
        },
        {
            name: "Hitachi Co2 Calculator",
            synopsis: (<><p>Another of my contracting projects involved building the front end for a responsive Co2 calculator using React. The application allowed users to input data related to their energy consumption and emissions, generating an accurate carbon footprint.</p><p>The challenge was to create an intuitive, user-friendly interface while working closely with backend developers to handle the complex calculations, ensuring the application remained accessible and responsive across various devices, from desktops to mobile phones.</p></>),
            link: "",
            image: hitachiCo2
        },
        {
            name: "Aston Martin - COTL",
            synopsis: (<><p>Whilst contracting, I was tasked with building the UI for a web application using React. The project involved creating a series of UI screens, ensuring that they were fully functional and responsive across various devices. These screens would later be integrated with third-party software.</p><p>My role was to build a seamless, intuitive interface that aligned with the design specifications while ensuring it was optimized for performance and user experience. I ensured the screens were structured in a way that allowed for smooth integration with the third-party systems by the back-end developers.</p></>),
            link: "",
            image: cotl
        },
        {
            name: "Ford TrustFirstParts",
            synopsis: (<><p>During another contract, I worked on a project for a potential client seeking a web-based application to manage various aspects of their car parts stocking system.</p><p>The goal was to design an intuitive, user-friendly interface that would allow users to efficiently handle inventory, track stock levels, and manage orders.</p><p>I focused on creating a clean, organized layout that streamlined complex processes and provided clear navigation, ensuring ease of use for both experienced and novice users. These designs laid the groundwork for a functional, scalable web application that could support the client&apos;s business operations.</p></>),
            link: "",
            image: trustFirstParts
        },
        {
            name: "ApplyOnce Funding",
            synopsis: <><p>I worked on a project for a potential client whose business aimed to help small businesses secure funding. The client needed a website design concept that conveyed trust and professionalism while providing an intuitive user experience for business owners seeking financial support.</p><p>My approach was to design a clean, approachable interface that guided users through the process of discovering funding options, submitting applications, and accessing resources. Key design elements included clear calls to action, and simplified forms that made the application process as smooth as possible.</p></>,
            link: "",
            image: applyOnceFunding
        },
        {
            name: "GasRegulatory App",
            synopsis: <><p>I was tasked with creating a design concept for a web application tailored towards professionals in the gas trade.</p><p>The goal of the application was to help users track their certifications, manage renewal deadlines, and stay updated on any further training requirements. The design needed to provide a seamless experience for users to ensure they remained compliant with industry standards.</p><p>I focused on simplicity and clarity, offering features like a personalised dashboard for tracking certification statuses, automated renewal reminders, and easy access to training resources.</p></>,
            link: "",
            image: gasRegulatory
        },
        {
            name: "AMBA / BGA",
            synopsis: (<><p>As a contract front-end developer, I worked on building a large-scale website for AMBA, the organization responsible for accrediting Master of Business Administration (MBA) programs.</p><p>My role involved developing the front end using React, with daily tasks focused on integrating the site with a headless CMS for dynamic content management.</p><p>One of the key challenges of the project was managing the distinct branding for two sides of the website, each of which required its own unique theme while maintaining a cohesive user experience.</p></>),
            link: "",
            image: amba
        },
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
