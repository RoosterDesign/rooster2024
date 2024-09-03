import Link from 'next/link';
import Image from 'next/image';
import LinkIcon from '@/components/LinkIcon/LinkIcon';
import { LinkCardType } from './LinkCardType';

import styles from './LinkCard.module.scss';

export default function LinkCard({ image, icon, title, body, link}: LinkCardType) {
    return (
        <Link href={link} className={styles.linkCard}>
            {image &&
                <div className={styles.image}>
                    <Image src={image} alt={title} placeholder="blur" quality={90} />
                </div>
            }
            {icon && <Image src={icon} alt={title} className={styles.icon} /> }
            <h3>{title}</h3>
            <p>{body}</p>
            <p className={styles.fauxLink}><LinkIcon url={``} label={`Find out more`} faux /></p>
        </Link>
    )
}