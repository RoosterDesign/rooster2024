'use client'

import styles from './LatestProjects.module.scss';
import "slick-carousel/slick/slick.css";
import {useState} from 'react';
import { StaticImageData } from 'next/image';
import Slider from "react-slick";
import Container from "@/components/Container/Container";
import LatestProjectSlide from './LatestProjectSlide/LatestProjectSlide';
import gasRegulatory from './images/gas-regulatory.jpg';

interface Client {
  type: string;
  name: string;
  synopsis: string;
  link: string;
  image: string | StaticImageData;
}

export default function LatestProjects() {

  const [isEnabled, setIsEnabled] = useState(true);
 
  const clients: Client[] = [
    {
      type: "UI/UX Design Concept" ,
      name: "Gas Regulatory App",
      synopsis: "Gas Regulatory was a new start up who I put together a conceptual design for their new gas professionals application.",
      link: "/gas-regulatory",
      image: gasRegulatory
    },
    {
      type: "UI/UX Design Concept" ,
      name: "Gas Regulatory App",
      synopsis: "Gas Regulatory was a new start up who I put together a conceptual design for their new gas professionals application.",
      link: "/gas-regulatory",
      image: gasRegulatory
    },
    {
      type: "UI/UX Design Concept" ,
      name: "Gas Regulatory App",
      synopsis: "Gas Regulatory was a new start up who I put together a conceptual design for their new gas professionals application.",
      link: "/gas-regulatory",
      image: gasRegulatory
    },
    {
      type: "UI/UX Design Concept" ,
      name: "Gas Regulatory App",
      synopsis: "Gas Regulatory was a new start up who I put together a conceptual design for their new gas professionals application.",
      link: "/gas-regulatory",
      image: gasRegulatory
    },
    {
      type: "UI/UX Design Concept" ,
      name: "Gas Regulatory App",
      synopsis: "Gas Regulatory was a new start up who I put together a conceptual design for their new gas professionals application.",
      link: "/gas-regulatory",
      image: gasRegulatory
    },
    {
      type: "UI/UX Design Concept" ,
      name: "Gas Regulatory App",
      synopsis: "Gas Regulatory was a new start up who I put together a conceptual design for their new gas professionals application.",
      link: "/gas-regulatory",
      image: gasRegulatory
    }
  ]

  const carouselSettings = {
    autoplay: true,
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
    <section className={`${styles.latestProjects} ${isEnabled ? 'hoverEnabled' : ''} block`} >
      <Container>
        <Slider {...carouselSettings} >          
          {clients.map((client, index) =>
              <LatestProjectSlide
                key={index}
                type={client.type}
                name={client.name}
                synopsis={client.synopsis}
                link={client.link}
                image={client.image}                
              />
          )}
        </Slider>
      </Container>
    </section>       
  )
}