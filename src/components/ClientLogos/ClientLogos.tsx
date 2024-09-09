import Image, { StaticImageData } from 'next/image';
import styles from './ClientLogos.module.scss';
import Container from '@/components/Container/Container';

export default function ClientLogos() {

  const images: string[] = ['dcl', 'warner-bros', 'hitachi', 'santander', 'boots', 'bmw', 'heineken', 'holland-and-barrett', 'homeserve', 'bicester-village', 'mini', 'orange'];

  return (
    <section className={`${styles.clientLogos} block`}>
      <Container>
        {images.map((image, index) => (
          <Image src={`/client-logos/${image}.svg`} alt="" key={index} width={0} height={0} />
        ))}
      </Container>
    </section>
  )
}
