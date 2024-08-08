import styles from './Button.module.scss';
import Link from 'next/link'

export default function Button({
  alt, url, children,
  }: {
    alt?: boolean,
    url: string;
    children: React.ReactNode;
}) {

  return (
    <Link href={url} className={`${styles.button} ${alt ? styles.buttonAlt : ''}`}>{children}</Link>
  )
}