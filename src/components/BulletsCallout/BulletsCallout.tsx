import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from 'storyblok-rich-text-react-renderer-ts';
import Image, { StaticImageData } from 'next/image';
import { BulletCalloutStoryblok } from '../../../component-types-sb';
import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import Card from '@/components/Card/Card';
import styles from './BulletsCallout.module.scss';

interface Props {
    blok: BulletCalloutStoryblok;
}

const BulletsCallout: React.FC<Props> = ({ blok }) => {
    const { title, image, content, bullets, reversed } = blok;

    return (
        <section className={` ${styles.bulletsCallout} ${reversed ? styles.bulletsCalloutReverse : ''} block`} {...storyblokEditable(blok)}>
            <Container>

                <div className={styles.intro}>
                    <Heading title={title} />
                    {render(content)}
                </div>

                <ol className={styles.bullets}>
                    {bullets.map((bullet) =>
                    (
                        <li key={bullet._uid}>
                            <Card cardContent={bullet} />
                        </li>
                    )
                    )}
                </ol>

                <div className={` ${styles.bulletsCalloutImage} imgDotGrid`}>
                    <Image src={image.filename} alt={``} width={610} height={875} quality={90} />
                </div>

            </Container>
        </section>
    )
}

export default BulletsCallout;
