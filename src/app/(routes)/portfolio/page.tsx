import Container from '@/components/Container/Container';
// import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import IntroBlock from '@/components/IntroBlock/IntroBlock';
import Testimonials from '@/components/Testimonials/Testimonials';
import CaseStudies from '@/components/CaseStudies/CaseStudies';
import PortfolioList from '@/components/PortfolioList/PortfolioList';

export default function Portfolio() {

    return (
        <>
            {/* <Breadcrumbs /> */}

            <Container>
                <IntroBlock title={`My work`} intro={`I specialise in a diverse range of work, including contracting on various projects, providing outsourced development support to agencies, and collaborating directly with end clients. My expertise in HTML, CSS, JavaScript, React, and Next.js enables me to create responsive, high-performance websites tailored to each project's unique needs. Explore my portfolio to see how I blend technical proficiency with creative problem-solving across different types of engagements.`} />
            </Container>

            <CaseStudies />

            <PortfolioList />

            <Testimonials />

        </>
    )
}
