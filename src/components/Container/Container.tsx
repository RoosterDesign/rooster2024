import React from 'react';
import styles from './Container.module.scss';

interface Container {
  children: React.ReactNode;
  narrow?: boolean;
}

export default function Container({ children, narrow }: Container ) {
  return (
    <div className={` ${styles.container} ${narrow ? styles.containerNarrow : ''}`}>
      {children}
    </div>
  )
}
