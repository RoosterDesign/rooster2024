import { storyblokEditable } from "@storyblok/react/rsc";
import { TestimonialStoryblok, TestimonialsListStoryblok } from '../../../component-types-sb';
import Container from '@/components/Container/Container';
import Testimonial from './Testimonial/Testimonial';
import styles from './Testimonials.module.scss';

interface Props {
    blok: TestimonialsListStoryblok
}

const Testimonials: React.FC<Props> = ({ blok }) => {
    const { items } = blok;
    return (
        <section className={`${styles.testimonials} block`} {...storyblokEditable(blok)}>
            <Container>
                {items.map((testimonial: TestimonialStoryblok) => {
                    return (
                        <Testimonial key={testimonial.content._uid} testimonial={testimonial.content} />
                    )
                }
                )}
            </Container>
        </section>
    )
}

export default Testimonials;
