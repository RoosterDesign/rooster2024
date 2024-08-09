import React from 'react';
import styles from './Container.module.scss';

interface Container {
  children: React.ReactNode;
}

export default function Container({ children }: Container ) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}