import AOS from '@/components/AOS/AOS';
import Container from '@/components/Container/Container';
import HomeHero from '@/components/HomeHero/HomeHero';
import ClientLogos from '@/components/ClientLogos/ClientLogos';
import LatestProjects from '@/components/LatestProjects/LatestProjects';
import Callout from '@/components/Callout/Callout';
import Testimonials from '@/components/Testimonials/Testimonials';
import Cite from '@/components/Cite/Cite';
import Skillset from '@/components/SkillSet/SkillSet';
import neilHeadshot from '/public/neil-headshot.jpg';
import IntroBlock from '@/components/IntroBlock/IntroBlock';
import ServicesList from '@/components/ServicesList/ServicesList';

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
        <IntroBlock title={`Skillset`} intro={`I am always learning new skills and technologies through my own projects, freelancing and courses. I find this helps with settling in to new find this helps with settling in find this helps with settling in find this helps with settling incontract roles and being able to bring new development practices to the table.`} link={`/services`} alignRight />
      </Skillset>


      <section className={`block`}>
        <Container>
          <IntroBlock title={`Services`} intro={`With a wealth of experience in both UI/UX Design and Front End Development I offer a range of digital services, as both a full-time contractor and highly skilled freelancer. I build long-term relationships with agencies looking to outsource work to me safe in the knowledge it'll be delivered to a high standard and on time.`} />
          <AOS>
            <ServicesList />
          </AOS>
        </Container>

      </section>

    </>
  );
}
