import styles from './CardGrid.module.scss';

interface Props {
    children: React.ReactNode
}

const CardGrid: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.cardGrid}>
            {children}
        </div>
    )
}

export default CardGrid;
