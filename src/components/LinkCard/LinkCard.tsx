import Link from 'next/link';
import Image from 'next/image';
import LinkIcon from '@/components/LinkIcon/LinkIcon';
import { LinkCardType } from './LinkCardType';

import styles from './LinkCard.module.scss';

export default function LinkCard({ image, icon, title, body, link, linkLabel, isExternal }: LinkCardType) {
    return (

        link ? (
            isExternal ? (
                <a href={link} className={styles.linkCard} target="_blank">
                    {image &&
                        <div className={styles.image}>
                            <Image src={image} alt={title} placeholder="blur" quality={90} />
                        </div>
                    }
                    {icon && <span className={styles.icon}>{icon}</span>}
                    <h3>{title}</h3>
                    <p>{body}</p>
                    <p className={styles.fauxLink}><LinkIcon url={``} label={`${linkLabel ? linkLabel : 'Find out more'}`} faux /></p>
                </a>
            ) : (
                <Link href={link} className={styles.linkCard}>
                    {image &&
                        <div className={styles.image}>
                            <Image src={image} alt={title} placeholder="blur" quality={90} />
                        </div>
                    }
                    {icon && <span className={styles.icon}>{icon}</span>}
                    <h3>{title}</h3>
                    <p>{body}</p>
                    <p className={styles.fauxLink}><LinkIcon url={``} label={`${linkLabel ? linkLabel : 'Find out more'}`} faux /></p>
                </Link>
            )
        ) :
            (
                <>No LINK</>
            )

    )

}
