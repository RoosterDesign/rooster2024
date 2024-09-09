import Image, {StaticImageData}from 'next/image';
import Container from '@/components/Container/Container';

import styles from './ImageBlock.module.scss';

interface ImageBlock {
    image: StaticImageData;
    alt?: string;
    fullWidth?: boolean;
}

export default function ImageBlock({ image, alt, fullWidth }: ImageBlock) {
    return (
        <section className={`${fullWidth ? styles.imageBlockFull : styles.imageBlock} block`}>

            {fullWidth ?
                <Image src={image} alt={alt ? alt : ''} placeholder="blur" />
            :
                <Container>
                    <Image src={image} alt={alt ? alt : ''} placeholder="blur" />
                </Container>
            }

        </section>
    )
}
