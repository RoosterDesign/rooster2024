import { storyblokEditable } from "@storyblok/react/rsc";
import { ClientLogosStoryblok } from '../../../component-types-sb';
import Image from 'next/image';
import styles from './ClientLogos.module.scss';
import Container from '@/components/Container/Container';

interface Props {
    blok: ClientLogosStoryblok
}

const ClientLogos: React.FC<Props> = ({ blok }) => {

    const { images } = blok;

    return (
        <section className={`${styles.clientLogos} block`} {...storyblokEditable(blok)}>
            <Container>
                {images.map((image) => (
                    <Image src={image.filename} alt="" key={image.id} width={0} height={0} />
                ))}
            </Container>
        </section>
    )
}

export default ClientLogos;
