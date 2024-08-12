import HomeHero from '@/components/HomeHero/HomeHero';
import ClientLogos from '@/components/ClientLogos/ClientLogos';
import LatestProjects from '@/components/LatestProjects/LatestProjects';
import Callout from '@/components/Callout/Callout';
import Testimonials from '@/components/Testimonials/Testimonials';
import Cite from '@/components/Cite/Cite';
import Skillset from '@/components/SkillSet/SkillSet';

import neilHeadshot from '../../public/neil-headshot.jpg';

export default function Home() {
  return (
    <>
      <HomeHero />
      
      <ClientLogos />
      
      <LatestProjects />
      
      <Callout image={neilHeadshot}>
        <h2>Hi, I’m Neil, a senior UI Designer and Front End Developer based just outside of Leamington Spa in Warwickshire.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat vel purus sed bibendum. Donec porttitor leo suscipit lorem finibus dignissim.</p>
        <p>Ut hendrerit tincidunt tellus, ut vestibulum neque efficitur ac. Ut ornare, leo at interdum consectetur, sem erat lobortis risus, ut vestibulum neque efficitur ac non pharetra sapien diam sit amet tellus.</p>
        <Cite author="Neil Dewing" company="Rooster Design Ltd" role="Managing Director" />
      </Callout>

      <Testimonials />

      <Skillset />
      
      <footer>
        <p>ad nskjfnh dskjhf nksjdhf jsdhf kjsdhf jksdhf jksdhf jkdshf jkdshf</p>
        <p>ad nskjfnh dskjhf nksjdhf jsdhf kjsdhf jksdhf jksdhf jkdshf jkdshf</p>
        <p>ad nskjfnh dskjhf nksjdhf jsdhf kjsdhf jksdhf jksdhf jkdshf jkdshf</p>
        <p>ad nskjfnh dskjhf nksjdhf jsdhf kjsdhf jksdhf jksdhf jkdshf jkdshf</p>
        <p>ad nskjfnh dskjhf nksjdhf jsdhf kjsdhf jksdhf jksdhf jkdshf jkdshf</p>
        <p>ad nskjfnh dskjhf nksjdhf jsdhf kjsdhf jksdhf jksdhf jkdshf jkdshf</p>
      </footer>

    </>
  );
}