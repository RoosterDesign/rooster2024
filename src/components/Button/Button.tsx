import styles from './Button.module.scss';
import Link from 'next/link'

interface Props {
    label: string;
    url: string;
    external?: boolean;
}

const Button: React.FC<Props> = ({ label, url, external }) => {

    return (
        external ? (
            <a href={url} target="_blank" title={label} className={styles.button}>
                {label}
            </a>
        ) : (
            <Link href={url} className={styles.button} title={label}>{label}</Link>
        )
    )
}

export default Button;
