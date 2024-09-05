import Image, {StaticImageData}from 'next/image';
import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';

import { CardType } from '@/components/Card/CardType';
import Card from '@/components/Card/Card';

import styles from './BulletsCallout.module.scss';

interface BulletsCallout {
    title: string;
    image: StaticImageData;
    body: string;
    bullets: CardType[];
    reverse?: boolean
}

export default function BulletsCallout({title, image, body, bullets, reverse} : BulletsCallout) {

    return (
        <section className={` ${styles.bulletsCallout} ${reverse ? styles.bulletsCalloutReverse : ''} block`}>
            <Container>

                <div className={styles.intro}>
                    <Heading title={title} />
                    <p>{body}</p>
                </div>

                <ol className={styles.bullets}>
                    {bullets.map((bullet, i) =>
                        (
                            <li key={i}>
                                <Card
                                    icon={bullet.icon}
                                    title={bullet.title}
                                    body={bullet.body}
                                    noBg
                                />
                            </li>
                        )
                    )}
                </ol>

                <div className={` ${styles.bulletsCalloutImage} imgDotGrid`}>
                    <Image src={image} alt={``} width={610} height={875} placeholder="blur" quality={90} />
                </div>

            </Container>
        </section>
    )
}
