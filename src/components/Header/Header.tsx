import Image from 'next/image';
import styles from './Header.module.scss';
import Container from '@/components/Container/Container';
import Nav from '@/components/Nav/Nav';

export default function Header() {
    return (
        <header className={styles.siteHeader}>
            <Container>
                <Image src={`/rooster-logo.svg`} alt="{{TODO - ALT TAG}}" width="90" height="168" className={styles.logo} />
                <Nav/>
            </Container>
        </header>
    );
  }