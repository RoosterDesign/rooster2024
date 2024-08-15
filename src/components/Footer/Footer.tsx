import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import LinkIcon from '@/components/LinkIcon/LinkIcon';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>

        <div className={styles.topFooter}>
          <Heading title={`Want to get in touch?`} />
          <Image src={`/rooster-logo.svg`} alt="Rooster Design ltd" width={90} height={168} />

          <ul className={styles.footerContactLinks}>
            {/* <li>
              Drop me a message
              <p><LinkIcon url={`#`} label={`Send me an online enquiry`} /></p>
            </li> */}
            <li>
              Send me an email
              <p><LinkIcon url={`mailto:neil@roosterdesign.co.uk`} label={`neil@roosterdesign.co.uk`} external /></p>
            </li>
            <li>
              Message me on LinkedIn
              <p><LinkIcon url={`https://www.linkedin.com/in/roosterdesign`} label={`@roosterdesign`} external /></p>
            </li>
          </ul>
        </div>

        <div className={styles.bottomFooter}>
          <p>&copy; 2024 Rooster Design Ltd <span>|</span> <Link href={`/privacy`} title={`Privacy & Legal`} className="textLink">Privacy & Legal</Link></p>
          <p className={styles.small}>Rooster Design is registered in England and Wales, No: 07335844, VAT No: 996320685 <span>|</span> Registered Address: 7 Dale Close, Long Itchington, CV47 9SE</p>
        </div>

        
      </Container>
    </footer>
  )
}