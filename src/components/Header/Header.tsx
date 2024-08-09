import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';
import Container from '@/components/Container/Container';
import Nav from '@/components/Nav/Nav';

export default function Header() {
    return (
        <header className={styles.siteHeader}>
            <Container>
                <Link href="/" title="Rooster Design" className={styles.logo}>
                    <Image src={`/rooster-logo.svg`} alt="{{TODO - ALT TAG}}" width={90} height={168} />
                </Link>
                <Nav/>
            </Container>
        </header>
    );
  }