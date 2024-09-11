import { StaticImageData } from 'next/image';
import styles from './Testimonials.module.scss';
import Container from '@/components/Container/Container';
import Testimonial from './Testimonial/Testimonial';

import robertNash from './images/robert-nash.jpg';
import davidMaidment from './images/david-maidment.jpg';
import theSpa from './images/the-spa.png';

export default function Testimonials() {

  interface Testimonial {
    quote: string;
    avatar?: StaticImageData;
    author: string;
    company: string;
    role: string;
  }

  const testimonials: Testimonial[] = [
    {
      quote: "Neil worked with us for a couple of years, which passed far too quickly. He is one of a small breed of contractors that can be helicoptered into any project and he will get the job done. He's worked on many projects including technologies such as REACT, NextJs, Velocity and obviously LESS and SASS. I wish he could have worked for us directly, then he would not have had to leave.",
      avatar: robertNash,
      author: "Robert Nash",
      role: "Managing Director",
      company: "4Roads"
    },
    {
      quote: "Neil worked with us on two large projects and left nothing to be desired with regards to the code that he produced. On one project he was able to create complex interactive widgets from flat PSD designs and bring the site to life with very little direct management required. I found him to be very personable and professional during his time in the team.",
      avatar: davidMaidment,
      author: "David Maidment",
      role: "Lead Developer",
      company: "Team ITG"
    },
    {
      quote: "Neil delivered an impeccable service. His commitment and support throughout our relationship has been second to none. Our site has been continually updated to meet our customer demands and to ensure we deliver the ultimate spa experience, which in return has allowed us to gain further business through our site.",
      avatar: theSpa,
      author: "Marc Philpott",
      role: "Director",
      company: "The Spa Leamington"
    }
  ];

  return (
    <section className={`${styles.testimonials} block`}>
      <Container>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} quote={testimonial.quote} avatar={testimonial.avatar} author={testimonial.author} role={testimonial.role} company={testimonial.company} />
        ))}
      </Container>
    </section>
  )
}
