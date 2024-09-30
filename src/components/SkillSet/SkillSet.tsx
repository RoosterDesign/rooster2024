'use client';
import { storyblokEditable } from "@storyblok/react/rsc";
import { useRef, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Container from '@/components/Container/Container';
import IntroBlock from '@/components/IntroBlock/IntroBlock';

import styles from './SkillSet.module.scss';

interface LogoInterface {
    id: number;
    filename: string;
}

export default function Skillset({ blok }: any) {

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

    return (
        <section className={`${styles.skillset} block`} {...storyblokEditable(blok)}>
            <Container>

                <IntroBlock title={blok.title} intro={blok.intro} />

                <div ref={elementRef} className={`${styles.logoGrid} ${isVisible ? styles.inView : ''}`}>
                    {blok.logos.map((logo: LogoInterface) => (
                        <div className={styles.skillLogo} key={logo.id}>
                            <Image src={logo.filename} alt="" height={0} width={0} />
                        </div>
                    ))}
                </div>

                <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg"><defs><filter id="hex"><feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" /><feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9" result="hex" /><feComposite in="SourceGraphic" in2="hex" operator="atop" /></filter></defs></svg>
            </Container>
        </section>
    )
}
