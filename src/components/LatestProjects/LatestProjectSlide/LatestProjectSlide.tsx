import Image, { StaticImageData } from 'next/image';
import Button from "@/components/Button/Button";
import styles from './LatestProjectSlide.module.scss';

interface Client {
  type: string;
  name: string;
  synopsis: string;
  link: string;
  image: string | StaticImageData;
}

export default function LatestProjectSlide( { type, name, synopsis, link, image }: Client ) {

  return (
    <div className={styles.latestProjectsSlide}>
      <div className={styles.projectDetails}>
        <span>{type}</span>
        <h2>{name}</h2>
        <p>{synopsis}</p>
        {/* <Button url={link} reverse>View Project</Button> */}
      </div>
        <div className={styles.projectDetailsMask}></div>
        <Image src={image} alt="" placeholder="blur" />
    </div>
  )
}