import { CardStoryblok } from '../../../component-types-sb';

import Link from 'next/link';
import Image from 'next/image';
import LinkIcon from '@/components/LinkIcon/LinkIcon';

import styles from './Card.module.scss';

interface Props {
    cardContent: CardStoryblok
}

const Card: React.FC<Props> = ({ cardContent }) => {
    const { image, icon, title, body, link_label, link, no_bg, isExternal } = cardContent;

    const cardHtml = <>
        {image &&
            <div className={styles.image}>
                <Image src={image} alt={title} width={445} height={250} quality={90} />
            </div>
        }
        {icon && <span className={styles.icon} dangerouslySetInnerHTML={{ __html: icon }} />}
        <p className={styles.title}>{title}</p>
        <p>{body}</p>
    </>

    const linkCardHtml = <>
        {cardHtml}
        <p className={styles.fauxLink}>
            <LinkIcon url={``} label={`${link_label ? link_label : 'Find out more'}`} faux />
        </p>
    </>

    return (
        link?.url ? (
            isExternal ? (
                <a href={link.url} title={title} className={`${styles.card} ${styles.cardLink}`} target="_blank">
                    {linkCardHtml}
                </a>
            ) : (
                <Link href={link.url} title={title} className={`${styles.card} ${styles.cardLink}`}>
                    {linkCardHtml}
                </Link>
            )
        ) : (
            <div className={` ${styles.card} ${no_bg ? styles.noBg : ''}`}>
                {cardHtml}
            </div>
        )
    )
}

export default Card;
