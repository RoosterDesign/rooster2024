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

        <Image src={image} alt="Neil Dewing - Front End Developer" width={875} height={875} className={styles.calloutImage} placeholder="blur" quality={100}  />
        <div className={styles.calloutContent}>
          {children}
        </div>    

      </Container>  
    </section>    
  )
}