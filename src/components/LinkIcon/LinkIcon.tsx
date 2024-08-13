import styles from './LinkIcon.module.scss';
import Link from 'next/link';

interface LinkIcon {
  url: string;
  label: string;
}

export default function LinkIcon({url, label}: LinkIcon) {
  return (
    <Link href={url} className={styles.linkIcon}>
      {label}      
      <svg width="13" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m4.406 1.494 7.029.041m0 0 .042 7.03m-.042-7.03-9.9 9.9" stroke="#F21483" stroke-width="2" stroke-linecap="square"/></svg>
    </Link>
  )
}