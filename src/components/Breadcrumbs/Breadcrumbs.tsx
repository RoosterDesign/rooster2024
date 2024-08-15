'use client'

import { usePathname  } from 'next/navigation';
import Link from 'next/link';
import styles from './Breadcrumbs.module.scss';

export default function Breadcrumbs() {

  const pathname = usePathname();
  const pathArray = pathname.split('/').filter((path) => path);

  return (
    <nav aria-label="breadcrumb">
      <ol className={styles.breadcrumbs}>
        <li key="home" className={styles.crumb}>
          <Link href="/" className="textLink">Home</Link>
        </li>
        {pathArray.map((path, index) => {
          const href = `/${pathArray.slice(0, index + 1).join('/')}`;
          const isLast = index === pathArray.length - 1;
          return (
            <li
              key={path}
              className={` ${styles.crumb} ${isLast ? styles.crumbCurrent : ''}`}
              aria-current={isLast ? 'page' : undefined}
            >
              {isLast ? (
                path
              ) : (
                <Link href={href}>
                  {path.replace(/-/g, ' ')}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  )
}