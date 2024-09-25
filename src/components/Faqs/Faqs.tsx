import { storyblokEditable } from "@storyblok/react/rsc";
import { FrequentlyAskedQuestionsStoryblok } from '../../../component-types-sb';

import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import Faq from './Faq/Faq';

import styles from './Faqs.module.scss';

interface Props {
    blok: FrequentlyAskedQuestionsStoryblok
}

const Faqs: React.FC<Props> = ({ blok }) => {
    const { subtitle, title, faqs } = blok;

    return (
        <section className={` ${styles.faqs} block`} {...storyblokEditable(blok)}>
            <Container>
                <Heading title={title} subTitle={subtitle} />

                <div className={styles.faqsList}>
                    {faqs.map((faq) => <Faq faq={faq} key={faq._uid} />)}
                </div>

            </Container>
        </section>
    )
}

export default Faqs;
