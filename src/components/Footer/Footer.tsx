'use client';

import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import LinkIcon from '@/components/LinkIcon/LinkIcon';
import { usePathname } from 'next/navigation';

interface NavItem {
    label: string;
    url: string;
}

export default function Footer({ noTopFooter } : { noTopFooter?: boolean }) {
    const pathname = usePathname();
    const year = new Date().getFullYear();

    const navItems: NavItem[] = [
        {
            label: 'Home',
            url: '/',
        },
        {
            label: 'About',
            url: '/about',
        },
        {
            label: 'Services',
            url: '/services',
        },
        {
            label: 'Portfolio',
            url: '/portfolio',
        },
        {
        	label: 'Get in touch',
        	url: '/contact',
        },
    ];

  return (
    <footer className={styles.footer}>
      <Container>

        {!noTopFooter &&
          <div className={styles.topFooter}>
            <Heading title={`Want to get in touch?`} />
            <Image src={`/rooster-logo.svg`} alt="Rooster Design ltd" width={90} height={168} />

            <ul className={styles.footerContactLinks}>
              <li>
                Drop me a message
                <p><LinkIcon url={`#`} label={`Send me an online enquiry`} /></p>
              </li>
              <li>
                {`Send me an email`}
                <p><LinkIcon url={`mailto:neil@roosterdesign.co.uk`} label={`neil@roosterdesign.co.uk`} title={`Send me an email`} external /></p>
              </li>
              <li>
                {`Message me on LinkedIn`}
                <p><LinkIcon url={`https://www.linkedin.com/in/roosterdesign`} label={`@roosterdesign`} title={`Message me on LinkedIn`} external /></p>
              </li>
            </ul>
          </div>
        }

        <div className={styles.bottomFooter}>

          <p>&copy; {year} Rooster Design Ltd <span>|</span> <Link href={`/privacy`} title={`Privacy & Legal`} className="textLink">Privacy & Legal</Link></p>

          <nav className={styles.nav}>
            <ul className={styles.navLinks}>
                {navItems.map(item => {
                const isActive = pathname === item.url;
                return (
                    <li key={item.label}>
                        <Link href={item.url} title={item.label} className={`textLink ${isActive ? styles.active : '' }`}>
                            {item.label}
                        </Link>
                    </li>
                );
                })}
            </ul>
        </nav>


          <p className={styles.small}>Rooster Design is registered in England and Wales, No: 07335844, VAT No: 996320685 <span>|</span> Registered Address: 7 Dale Close, Long Itchington, CV47 9SE</p>
        </div>


      </Container>
    </footer>
  )
}
