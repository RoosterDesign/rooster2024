'use client';

import { useRef, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Container from '@/components/Container/Container';
import styles from './SkillSet.module.scss';
import html5 from './images/html5.svg';
import css3 from './images/css3.svg';
import less from './images/less.svg';
import sass from './images/sass.svg';
import tailwind from './images/tailwind.svg';
import w3c from './images/w3c.svg';
import javascript from './images/javascript.svg';
import react from './images/react.svg';
import typescript from './images/typescript.svg';
import gatsby from './images/gatsby.svg';
import nextJs from './images/nextjs.svg';
import vue from './images/vue.svg';
import jquery from './images/jquery.svg';
import umbraco from './images/umbraco.svg';
import wordpress from './images/wordpress.svg';
import php from './images/php.svg';
import git from './images/git.svg';
import devops from './images/devops.svg';
import figma from './images/figma.svg';
import photoshop from './images/photoshop.svg';
import React from 'react';

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
  
  const logos: StaticImageData[] = [html5, css3, less, sass, react, tailwind, javascript, typescript, nextJs, gatsby, vue, jquery, w3c, umbraco, wordpress, php, git, devops, photoshop, figma];

  return (
    <section className={`${styles.skillset} block`}>
      <Container>
        {children}

        <div ref={elementRef} className={`${styles.logoGrid} ${isVisible ? styles.inView : ''}`}>
          {logos.map((logo, index) => (
            <div className={styles.skillLogo} key={index}>
              <Image src={logo} alt="" />
            </div>            
          ))}
        </div>

        <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg"><defs><filter id="hex"><feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur"/><feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9" result="hex"/><feComposite in="SourceGraphic" in2="hex" operator="atop"/></filter></defs></svg>          
      </Container>
    </section>
  )
}