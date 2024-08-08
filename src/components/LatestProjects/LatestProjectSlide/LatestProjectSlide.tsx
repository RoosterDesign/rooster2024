import Image, { StaticImageData } from 'next/image';
import Button from "@/components/Button/Button";
import styles from './LatestProjectSlide.module.scss';

interface Client {
  type: string, name: string, synopsis: string, link: string, image: StaticImageData
}

export default function LatestProjectSlide({
  client
}: {
  client: Client
}) {

  const { type, name, synopsis, link, image } = client;

  return (
    <div className={styles.latestProjectsSlide}>
      <div className={styles.projectDetails}>
        <span>{type}</span>
        <h2>{name}</h2>
        <p>{synopsis}</p>
        <Button url={link} alt>View Project</Button>              
      </div>
        <div className={styles.projectDetailsMask}></div>
        <Image src={image} alt="" />
    </div>
  )
}