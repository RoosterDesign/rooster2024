import Image, {StaticImageData}from 'next/image';
import Container from '@/components/Container/Container';
import styles from './Callout.module.scss';

interface Callout {
  children: React.ReactNode;
  image: StaticImageData;
}

export default function Callout({ children, image }: Callout) {
  return (
    <section className={`${styles.callout} block`}>
      <Container>


        <div className={`imgDotGrid`}>
          <Image src={image} alt="Neil Dewing - Front-end developer" width={875} height={875} className={` ${styles.calloutImage}`} placeholder="blur" quality={90}  />
        </div>

        <div className={styles.calloutContent}>
          {children}
        </div>

      </Container>
    </section>
  )
}
