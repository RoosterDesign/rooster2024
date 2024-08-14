'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './AOS.module.scss';

export default function AOS({children} : { children: React.ReactNode}) {

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {

    const elRefCurrent = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elRefCurrent) {
      observer.observe(elRefCurrent);
    }

    return () => {
      if (elRefCurrent) {
        observer.unobserve(elRefCurrent);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${styles.animate} ${isVisible ? styles.inView : ''}`}
    >
      {children}
    </div>
  )
}