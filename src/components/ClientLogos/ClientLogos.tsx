import Image, { StaticImageData } from 'next/image';
import styles from './ClientLogos.module.scss';
import Container from '@/components/Container/Container';

import dcl from './images/dcl.svg';
import hitachi from './images/hitachi.svg';
import santander from './images/santander.svg';
import boots from './images/boots.svg';
import bmw from './images/bmw.svg';
import heineken from './images/heineken.svg';
import hollandAndBarrett from './images/holland-and-barrett.svg';
import homeserve from './images/homeserve.svg';
import bicesterVillage from './images/bicester-village.svg';
import mini from './images/mini.svg';
import orange from './images/orange.svg';
import muk from './images/muk.svg';

export default function ClientLogos() {

  const images: StaticImageData[] = [dcl, hitachi, santander, boots, bmw, heineken, hollandAndBarrett, homeserve, bicesterVillage, mini, orange, muk]
  
  return (
    <section className={`${styles.clientLogos} block`}>
      <Container>
        {images.map((image, index) => (
          <Image src={image} alt="" key={index} />
        ))}
      </Container>
    </section>
  )
}