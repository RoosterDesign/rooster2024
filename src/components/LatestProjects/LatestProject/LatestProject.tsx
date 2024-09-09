import Image from 'next/image';
import Button from "@/components/Button/Button";
import styles from './LatestProject.module.scss';

import { LatestProjectType } from './LatestProjectType';

export default function LatestProject( { type, name, synopsis, link, image }: LatestProjectType ) {

  return (
    <div className={styles.latestProject}>
      <div className={styles.projectDetails}>
        <span>{type}</span>
        <h2>{name}</h2>
        <p>{synopsis}</p>
        {link && <Button url={link} label={`Visit Website`} external />}
      </div>
        <div className={styles.projectDetailsMask}></div>
        <Image src={image} alt="" placeholder="blur" quality={90} />
    </div>
  )
}
