import styles from './Button.module.scss';
import Link from 'next/link'

interface Button {
  children: React.ReactNode;
  url: string;
  reverse?: boolean;
}

export default function Button({ children, url, reverse }: Button) {

  return (
    <Link href={url} className={`${styles.button} ${reverse ? styles.buttonAlt : ''}`}>{children}</Link>
  )
}