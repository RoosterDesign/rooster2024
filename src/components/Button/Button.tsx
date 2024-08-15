import styles from './Button.module.scss';
import Link from 'next/link'

interface Button {
  label: string;
  url: string;
  reverse?: boolean;
  external?: boolean;
}

export default function Button({label, url, reverse, external}: Button) {

  return (
    external ?
      <a href={url} target="_blank" title={label} className={`${styles.button} ${reverse ? styles.buttonAlt : ''}`}>
       {label}
      </a>
    :
      <Link href={url} className={`${styles.button} ${reverse ? styles.buttonAlt : ''}`} title={label}>{label}</Link>
  )
}