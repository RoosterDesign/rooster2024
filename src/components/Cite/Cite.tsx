import Image, { StaticImageData } from 'next/image';
import styles from './Cite.module.scss';

interface Cite {
  avatar?: StaticImageData;
  author: string;
  company: string;
  role: string;
}

export default function Cite({avatar, author, company, role}: Cite) {
  return (
    <cite className={`${styles.cite} ${avatar ? styles.hasAvatar : ""}`}>
      {avatar && <Image src={avatar} alt={author} placeholder="blur" className={styles.avatar} /> }
      <p><strong>{author}</strong></p>
      <p className={styles.role}>
        <strong>{role}</strong> | {company}
      </p>        
    </cite>
  )
}