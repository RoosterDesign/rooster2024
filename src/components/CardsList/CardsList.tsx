import styles from './CardsList.module.scss';
import Container from '@/components/Container/Container';

interface CardsList {
  children: React.ReactNode;
}

export default function CardsList({children}: CardsList) {
  return (
    <div className={` ${styles.cardsList}`}>
      {children}
    </div>
  )
}