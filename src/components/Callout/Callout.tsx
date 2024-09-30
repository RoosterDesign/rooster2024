import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from 'storyblok-rich-text-react-renderer-ts';
import { CalloutStoryblok } from '../../../component-types-sb';
import Image from 'next/image';
import Container from '@/components/Container/Container';
import styles from './Callout.module.scss';

interface Props {
    blok: CalloutStoryblok
}

const Callout: React.FC<Props> = ({ blok }) => {
    const { image, title, content } = blok;
    return (
        <section className={`${styles.callout} block`} {...storyblokEditable(blok)}>
            <Container>
                <div className={`imgDotGrid`}>
                    <Image src={image.filename} alt="Neil Dewing - Front-end developer" width={875} height={875} className={` ${styles.calloutImage}`} quality={90} />
                </div>
                <div className={styles.calloutContent}>
                    <h2>{title}</h2>
                    {render(content)}
                </div>
            </Container>
        </section>
    )
}

export default Callout;
