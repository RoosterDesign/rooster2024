import Image from 'next/image';
import styles from './CaseStudySlide.module.scss';

import LinkIcon from '@/components/LinkIcon/LinkIcon';

import { CaseStudyType } from '../CaseStudyType';

export default function CaseStudySlide( { name, synopsis, link, image }: CaseStudyType ) {

  return (
    <div className={styles.caseStudySlide}>

        <div className={styles.caseStudyDetails}>
            <h2>{name}</h2>
            {synopsis}
            <p className={styles.link}><LinkIcon url={link} label={`Visit website`} /></p>
        </div>

        <Image src={image} alt="" placeholder="blur" quality={90} className={styles.caseStudyImage} />
    </div>
  )
}
