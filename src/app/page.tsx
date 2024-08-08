import HomeHero from '@/components/HomeHero/HomeHero';
import ClientLogos from '@/components/ClientLogos/ClientLogos';
import LatestProjects from '@/components/LatestProjects/LatestProjects';

export default function Home() {
  return (
    <>
      <HomeHero />
      <ClientLogos />
      <LatestProjects />
    </>
  );
}