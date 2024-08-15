import styles from './Button.module.scss';
import Link from 'next/link'

interface Button {
  children: React.ReactNode;
  url: string;
  reverse?: boolean;
  external?: boolean;
}

export default function Button({children, url, reverse, external}: Button) {

  return (
    external ?
      <a href={url} target="_blank" title={url} className={`${styles.button} ${reverse ? styles.buttonAlt : ''}`}>
       {children}
      </a>
    :
      <Link href={url} className={`${styles.button} ${reverse ? styles.buttonAlt : ''}`}>{children}</Link>
  )
}