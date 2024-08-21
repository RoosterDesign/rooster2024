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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 14.725C13 9.584 16.892 4.206 23 3l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746A5.213 5.213 0 0 1 24 16.021C24 19.203 21.416 21 18.801 21 15.786 21 13 18.695 13 14.725zm-13 0C0 9.584 3.892 4.206 10 3l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746A5.213 5.213 0 0 1 11 16.021C11 19.203 8.416 21 5.801 21 2.786 21 0 18.695 0 14.725z" fill="#F21483"/></svg>
      <p className={styles.quote}>&quot;{quote}&quot;</p>
      <Cite avatar={avatar} author={author} company={company} role={role} />
    </blockquote>
  )
}
