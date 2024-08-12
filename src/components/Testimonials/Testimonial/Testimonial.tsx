import { StaticImageData } from 'next/image';
import styles from './Testimonial.module.scss';
import Cite from '@/components/Cite/Cite';

interface Testimonial {  
  quote: string;
  avatar?: StaticImageData;  
  author: string;
  company: string;
  role: string;
}

export default function Testimonial({avatar, quote, author, company, role}: Testimonial) {
  return (     
    <blockquote className={styles.testimonial}>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 43"><path d="M32.142 42.125V25.187c0-13.071 8.55-21.931 20.586-24.312l2.28 4.93c-5.573 2.1-9.155 8.337-9.155 13.403h9.166v22.917H32.142Zm-32.122 0V25.187C.02 12.116 8.609 3.256 20.645.875l2.282 4.93c-5.576 2.1-9.157 8.337-9.157 13.403h9.127v22.917H.02Z" fill="#F21483"/></svg>
      <p className={styles.quote}>&quot;{quote}&quot;</p>
      <Cite avatar={avatar} author={author} company={company} role={role} />
    </blockquote>
  )
}