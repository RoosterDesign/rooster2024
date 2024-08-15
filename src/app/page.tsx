import AOS from '@/components/AOS/AOS';
import Container from '@/components/Container/Container';
import HomeHero from '@/components/HomeHero/HomeHero';
import ClientLogos from '@/components/ClientLogos/ClientLogos';
import LatestProjects from '@/components/LatestProjects/LatestProjects';
import Callout from '@/components/Callout/Callout';
import Testimonials from '@/components/Testimonials/Testimonials';
import Cite from '@/components/Cite/Cite';
import Skillset from '@/components/SkillSet/SkillSet';
import LinkIcon from '@/components/LinkIcon/LinkIcon';
import neilHeadshot from '../../public/neil-headshot.jpg';
import IntroBlock from '@/components/IntroBlock/IntroBlock';
import CardsList from '@/components/CardsList/CardsList';
import Card from '@/components/Card/Card';

import contracting from '../../public/icons/contracting.svg';
import outsourcing from '../../public/icons/outsourcing.svg';
import freelance from '../../public/icons/freelance.svg';

export default function Home() {
  return (
    <>
      <HomeHero />
      
      <ClientLogos />
      
      <LatestProjects />
      
      <AOS>
        <Callout image={neilHeadshot}>
          <h2>Hi, I’m Neil, a senior UI Designer and Front End Developer based just outside of Leamington Spa in Warwickshire.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat vel purus sed bibendum. Donec porttitor leo suscipit lorem finibus dignissim.</p>
          <p>Ut hendrerit tincidunt tellus, ut vestibulum neque efficitur ac. Ut ornare, leo at interdum consectetur, sem erat lobortis risus, ut vestibulum neque efficitur ac non pharetra sapien diam sit amet tellus.</p>
          <Cite author="Neil Dewing" company="Rooster Design Ltd" role="Managing Director" />
        </Callout>
      </AOS>

      <AOS>
        <Testimonials />
      </AOS>

      <Skillset>
        <IntroBlock title={`Skillset`} alignRight>
          {/* <p>I am always learning new skills and technologies through my own projects, freelancing and courses. I find this helps with settling in to new find this helps with settling in find this helps with settling in find this helps with settling incontract roles and being able to bring new development practices to the table.&nbsp;&nbsp; <LinkIcon url={`#`} label="Find out more" /></p> */}

          <p>I am always learning new skills and technologies through my own projects, freelancing and courses. I find this helps with settling in to new find this helps with settling in find this helps with settling in find this helps with settling incontract roles and being able to bring new development practices to the table.</p>

        </IntroBlock>
      </Skillset>


      <section className={`block`}>
        <Container>
          <IntroBlock title={`Services`}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis turpis nulla, venenatis vitae eleifend in, efficitur sit amet dolor etiam ultricies metus quis nisi imperdiet.</p>
          </IntroBlock>         
          <AOS>
            <CardsList>
              <Card icon={contracting} title={`Contracting`} body={`Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Nunc eu sapien ipsum adipiscing.`} />
              <Card icon={outsourcing} title={`Outsourcing`} body={`Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Nunc eu sapien ipsum adipiscing.`} />
              <Card icon={freelance} title={`Freelance`} body={`Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Nunc eu sapien ipsum adipiscing.`} />
            </CardsList>
          </AOS> 
        </Container>

      </section>

    </>
  );
}