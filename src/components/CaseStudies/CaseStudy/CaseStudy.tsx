import Image from 'next/image';
import styles from './CaseStudy.module.scss';

import LinkIcon from '@/components/LinkIcon/LinkIcon';

import { CaseStudyType } from './CaseStudyType';

export default function CaseStudy( { name, synopsis, link, image }: CaseStudyType ) {

  return (
    <div className={styles.caseStudy}>

        <div className={styles.caseStudyDetails}>
            <h2>{name}</h2>
            {synopsis}
            {link && <p className={styles.link}><LinkIcon url={link} label={`Visit website`} /></p>}
        </div>

        <Image src={image} alt="" placeholder="blur" quality={100} className={styles.caseStudyImage} />
    </div>
  )
}
