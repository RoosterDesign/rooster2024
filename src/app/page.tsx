import HomeHero from '@/components/HomeHero/HomeHero';
import ClientLogos from '@/components/ClientLogos/ClientLogos';
import LatestProjects from '@/components/LatestProjects/LatestProjects';
import Callout from '@/components/Callout/Callout';

export default function Home() {
  return (
    <>
      <HomeHero />
      <ClientLogos />
      <LatestProjects />
      <Callout image={`/neil-headshot.jpg`}>
        <h2>Hi, I’m Neil, a senior UI Designer and Front End Developer based just outside of Leamington Spa in Warwickshire.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat vel purus sed bibendum. Donec porttitor leo suscipit lorem finibus dignissim.</p>
        <p>Ut hendrerit tincidunt tellus, ut vestibulum neque efficitur ac. Ut ornare, leo at interdum consectetur, sem erat lobortis risus, ut vestibulum neque efficitur ac non pharetra sapien diam sit amet tellus.</p>
        <cite><strong>Neil Dewing</strong> | Managing Director, Rooster Design Ltd</cite>
      </Callout>
    </>
  );
}