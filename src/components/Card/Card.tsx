import styles from './Card.module.scss';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import LinkIcon from '@/components/LinkIcon/LinkIcon';

interface Card {
  icon: StaticImageData;
  title: string;
  body: string;
  link?: string;
}

export default function Card({icon, title, body, link}: Card) {
  return (
    link ? 
      <Link href={link} className={`${styles.card} ${styles.cardLink}`} title={title}>
        <Image src={icon} alt={title} className={styles.icon} />
        <h3>{title}</h3>
        <p>{body}</p>
        <p><LinkIcon url={``} label={`Find out more`} faux/></p>
      </Link>
    :    
    <div className={styles.card} title={title}>
      <Image src={icon} alt={title} className={styles.icon} />
      <h3>{title}</h3>
      <p>{body}</p>
    </div>    
  )
}