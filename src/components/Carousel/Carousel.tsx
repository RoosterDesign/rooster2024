'use client'

import styles from './Carousel.module.scss';
import "slick-carousel/slick/slick.css";
import { useState } from 'react';
import Slider from "react-slick";

interface Props {
    children: React.ReactNode
}

const Carousel: React.FC<Props> = ({ children }) => {

    const [isEnabled, setIsEnabled] = useState(true);

    const carouselSettings = {
        // autoplay: true,
        autoplaySpeed: 5000,
        focusOnSelect: true,
        arrows: false,
        dots: true,
        infinite: false,
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        beforeChange: () => setIsEnabled(false),
        afterChange: () => setIsEnabled(true)
    };

    return (
        <div className={`${styles.carousel} ${isEnabled ? 'hoverEnabled' : ''}`}>
            <Slider {...carouselSettings} >
                {children}
            </Slider>
        </div>
    )
}

export default Carousel;
