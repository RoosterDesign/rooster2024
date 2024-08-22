import Image, {StaticImageData}from 'next/image';
import Container from '@/components/Container/Container';

import styles from './ImageBlock.module.scss';

interface ImageBlock {
    image: StaticImageData;
    alt?: string;
}

export default function ImageBlock({ image, alt }: ImageBlock) {
    return (
        <section className={` ${styles.imageBlock} block`}>
            <Container>
                <Image src={image} alt={alt ? alt : ''} placeholder="blur" />
            </Container>
        </section>
    )
}
