import styles from './Card.module.scss';
import Image, { StaticImageData } from 'next/image';
import LinkIcon from '@/components/LinkIcon/LinkIcon';

interface Card {
  icon: StaticImageData;
  title: string;
  body: string;
  link: string;
}

export default function Card({icon, title, body, link}: Card) {
  return (
    <div className={styles.card}>
      <Image src={icon} alt={title} className={styles.icon} />
      <h3>{title}</h3>
      <p>{body}</p>
      <p><LinkIcon url={link} label={`Find out more`} alt /></p>
    </div>
  )
}