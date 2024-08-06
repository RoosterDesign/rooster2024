import styles from './Button.module.scss';
import Link from 'next/link'

export default function Button({
  url, children,
  }: {
    url: string;
    children: React.ReactNode;
}) {

  return (
    <Link href={url} className={styles.button}>{children}</Link>
  )
}