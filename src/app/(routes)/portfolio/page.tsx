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
                <IntroBlock title={`My work`} intro={`Based in Leamington Spa, Warwickshire, I offer a range of digital services, as both a full-time contractor and highly skilled freelancer. With over 12 years of experience in both UI/UX Design and Front End Development I can take projects through from initial conception, right through to development and beyond, working as either a lone-gun or as part of a team, I fit into your current working structure seamlessly.`} />
            </Container>

            <CaseStudies />

            <PortfolioList />

            <Testimonials />

        </>
    )
}
