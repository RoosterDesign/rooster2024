import Image from 'next/image';
import Container from '@/components/Container/Container';
import styles from './Callout.module.scss';

interface Callout {
  children: React.ReactNode;
  image: string;
}

export default function Callout({ children, image }: Callout) {
  return (
    <Container>
      <section className={styles.callout}>
        <Image src={image} alt="Neil Dewing - Front End Developer" width={875} height={875} className={styles.calloutImage} />
        <div className={styles.calloutContent}>
          {children}
        </div>      
      </section>
    </Container>
  )
}