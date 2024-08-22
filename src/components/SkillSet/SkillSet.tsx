'use client';

import { useRef, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Container from '@/components/Container/Container';
import styles from './SkillSet.module.scss';
// import React from 'react';

export default function Skillset({children} : { children : React.ReactNode}) {

  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Adjust this threshold as necessary
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const logos: string[] = ['html5', 'css3', 'less', 'sass', 'react', 'tailwind', 'javascript', 'typescript', 'nextjs', 'gatsby', 'vue', 'jquery', 'w3c', 'umbraco', 'wordpress', 'php', 'git', 'devops', 'photoshop', 'figma'];

  return (
    <section className={`${styles.skillset} block`}>
      <Container>
        {children}

        <div ref={elementRef} className={`${styles.logoGrid} ${isVisible ? styles.inView : ''}`}>
          {logos.map((logo, index) => (
            <div className={styles.skillLogo} key={index}>
              <Image src={`/skill-logos/${logo}.svg`} alt="" height={0} width={0} />
            </div>
          ))}
        </div>

        <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg"><defs><filter id="hex"><feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur"/><feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9" result="hex"/><feComposite in="SourceGraphic" in2="hex" operator="atop"/></filter></defs></svg>
      </Container>
    </section>
  )
}
