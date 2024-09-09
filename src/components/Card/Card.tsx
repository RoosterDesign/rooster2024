import Link from 'next/link';

import { CardType } from './CardType';
import styles from './Card.module.scss';

export default function Card({ icon, title, body, link, noBg, isExternal}: CardType) {
    return (
        <>
        {link ?

            isExternal ?
                <a href={link} title={title} className={`${styles.card} ${styles.cardLink}`} target="_blank">
                    {icon}
                    <h3>{title}</h3>
                    <p>{body}</p>
                </a>
            :
                <Link href={link} title={title} className={`${styles.card} ${styles.cardLink}`}>
                    {icon}
                    <h3>{title}</h3>
                    <p>{body}</p>
                </Link>

        :
            <div className={` ${styles.card} ${noBg ? styles.noBg : ''}`}>
                {icon}
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        }
        </>
    )
}
