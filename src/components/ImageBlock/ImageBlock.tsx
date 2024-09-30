import Image, { StaticImageData } from 'next/image';
import Container from '@/components/Container/Container';
import styles from './ImageBlock.module.scss';

interface Props {
    image: StaticImageData;
    alt?: string;
    fullWidth?: boolean;
}

const ImageBlock: React.FC<Props> = ({ image, alt, fullWidth }) => {
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

export default ImageBlock;
