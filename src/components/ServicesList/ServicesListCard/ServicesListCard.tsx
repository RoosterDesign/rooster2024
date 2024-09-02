import styles from './ServicesListCard.module.scss';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import LinkIcon from '@/components/LinkIcon/LinkIcon';

interface ServicesListCard {
    icon: StaticImageData;
    title: string;
    body: string;
    link: string;
}

export default function ServicesListCard({icon, title, body, link}: ServicesListCard) {
    return (
        <Link href={link} className={`${styles.card}`} title={title}>
            <Image src={icon} alt={title} className={styles.icon} />
            <h2>{title}</h2>
            <p>{body}</p>
            <p className={styles.fauxLink}><LinkIcon url={``} label={`Find out more`} faux /></p>
        </Link>
    )
}
