'use client';

import { AosStoryblok } from '../../../component-types-sb';

import React from "react";
import { useRef, useEffect, useState } from 'react';
import styles from './AOS.module.scss';

import Callout from '@/components/Callout/Callout';
import Testimonials from '@/components/Testimonials/Testimonials';
import ServicesList from "@/components/ServicesList/ServicesList";

const Components: any = {
    callout: Callout,
    testimonials_list: Testimonials,
    services: ServicesList
};

interface Props {
    blok: AosStoryblok
}

const AOS: React.FC<Props> = ({ blok }) => {

    const { items } = blok;

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
        <div ref={elementRef} className={`${styles.animate} ${isVisible ? styles.inView : ''}`} >
            {items?.map((item) => {
                if (typeof Components[item.component] !== "undefined") {
                    return React.createElement(Components[item.component],
                        {
                            key: item._uid,
                            blok: item
                        }
                    );
                }
            })}
        </div>
    )
}

export default AOS;
