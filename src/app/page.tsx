import AOS from '@/components/AOS/AOS';
import Container from '@/components/Container/Container';
import HomeHero from '@/components/HomeHero/HomeHero';
import ClientLogos from '@/components/ClientLogos/ClientLogos';
import LatestProjects from '@/components/LatestProjects/LatestProjects';
import Callout from '@/components/Callout/Callout';
import Testimonials from '@/components/Testimonials/Testimonials';
import Cite from '@/components/Cite/Cite';
import Skillset from '@/components/SkillSet/SkillSet';
// import LinkIcon from '@/components/LinkIcon/LinkIcon';
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
          <h2>{`Hi, I'm Neil, a senior UI Designer and Front End Developer based just outside of Leamington Spa in Warwickshire.`}</h2>          
          <p>{`I'm a meticulous, creative problem solver, specialising in UI/UX Design and Front End Development, designing and building interactive, responsive websites and software applications, writing clean, accessible, HTML5 and SCSS/LESS alongside JavaScript and React in an Agile environment.`}</p>
          <p>{`In my spare time, I enjoy darts, bowling and gaming and I'm a bit of a movie nut. I also run a couple of YouTube channels dedicated to Photography/Videography and another passion of mine, Airsoft.`}</p>
          <Cite author="Neil Dewing" company="Rooster Design Ltd" role="Managing Director" />
        </Callout>
      </AOS>

      <AOS>
        <Testimonials />
      </AOS>

      <Skillset>
        <IntroBlock title={`Skillset`} alignRight>
          {/* <p>I am always learning new skills and technologies through my own projects, freelancing and courses. I find this helps with settling in to new find this helps with settling in find this helps with settling in find this helps with settling incontract roles and being able to bring new development practices to the table.&nbsp;&nbsp; <LinkIcon url={`#`} label="Find out more" /></p> */}

          <p>{`I'm always learning new skills and technologies through contracting and my own projects. I find this helps with hitting the ground running with new contract roles and being able to bring new development practices to the table. Having a background in UI/UX Design also helps me stand out and offers a unique perspective as a developer.`}</p>

        </IntroBlock>
      </Skillset>


      <section className={`block`}>
        <Container>
          <IntroBlock title={`Services`}>
            <p>{`With a wealth of experience in both UI/UX Design and Front End Development I offer a range of digital services, as both a full-time contractor and highly skilled freelancer. I build long-term relationships with agencies looking to outsource work to me safe in the knowledge it'll be delivered to a high standard and on time.

`}</p>
          </IntroBlock>         
          <AOS>
            <CardsList>
              <Card icon={contracting} title={`Contracting`} body={`Working as a Senior Front End Developer, I have contracted at award winning design agencies and in-house at multinational companies. I integrate seamlessly with your working practices and ethos and adapt very quickly.`} />
              <Card icon={outsourcing} title={`Outsourcing`} body={`As a busy Design Agency, there is often limited resource to complete all projects on time. By outsourcing to me, you can be safe in the knowledge that the project will be delivered to your exacting standards and meeting your deadlines.`} />
              <Card icon={freelance} title={`Freelance`} body={`I work directly with a number of small to medium sized businesses in order to either help them create their first online presence, freshen up an existing website or help boost sales through integrated e-commerce solutions.`} />
            </CardsList>
          </AOS> 
        </Container>

      </section>

    </>
  );
}