import AOS from '@/components/AOS/AOS';
import Container from '@/components/Container/Container';
import HomeHero from '@/components/HomeHero/HomeHero';
import ClientLogos from '@/components/ClientLogos/ClientLogos';
import LatestProjects from '@/components/LatestProjects/LatestProjects';
import Callout from '@/components/Callout/Callout';
import Testimonials from '@/components/Testimonials/Testimonials';
// import Cite from '@/components/Cite/Cite';
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
            <h2>{`I specialise in creating seamless user experiences and intuitive designs using a wide range of technologies.`}</h2>

            <p>{`Whether building from scratch or collaborating with agencies, I bring a combination of technical skills and creative problem-solving to every project. I'm always looking to improve my craft, staying up-to-date with the latest trends and tools in web development.`}</p>

            <p>{`When I'm not working I enjoy a variety of activities that help me unwind. From playing darts and bowling to participating in Airsoft — an interest that's led me to create a YouTube channel dedicated to the sport.`}</p>
          {/* <Cite author="Neil Dewing" company="Rooster Design Ltd" role="Managing Director" /> */}
        </Callout>
      </AOS>

      <AOS>
        <Testimonials />
      </AOS>

      <Skillset>
        <IntroBlock title={`Skillset`} intro={`I work daily with a range of technologies that form the backbone of modern web development. I'm always exploring new ways to enhance my skills, keeping up with the latest tools, libraries, and best practices in the industry. My focus is on delivering clean, efficient code while continually learning and improving to stay at the forefront of web development.`} link={`/services`} />
      </Skillset>


      <section className={`block`}>
        <Container>
          <IntroBlock title={`Services`} intro={`As a front-end developer, I offer a range of services tailored to different needs. I work as a contractor on short and long-term projects, provide outsourced support to local agencies, and take on individual projects for small to medium-sized businesses. My goal is to deliver high-quality, scalable solutions, whether collaborating with larger teams or working directly with clients on their specific requirements.`} />
        </Container>

        <AOS>
            <ServicesList />
        </AOS>

      </section>

    </>
  );
}
