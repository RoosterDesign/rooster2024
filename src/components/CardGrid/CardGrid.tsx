import styles from './CardGrid.module.scss';

import Container from '@/components/Container/Container';

export default function CardGrid({children}: {children: React.ReactNode}) {
    return (
        <div className={styles.cardGrid}>
            <Container>
                {children}
            </Container>
        </div>
    )
}
