import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';

import { FaqType } from './FaqType';
import Faq from './Faq/Faq';

import styles from './Faqs.module.scss';

export default function Faqs() {

    const faqs: FaqType[] = [
        {
            question: 'Lorem ipsum dolor sit amet, consectetur',
            answer: 'Ut hendrerit tincidunt tellus, ut vestibulum neque efficitur ac. Ut ornare, leo at interdum consectetur, sem erat lobortis risus, ut vestibulum neque efficitur ac non pharetra sapien diam sit amet tellus.'
        },
        {
            question: 'Lorem ipsum dolor sit amet, consectetur',
            answer: 'Ut hendrerit tincidunt tellus, ut vestibulum neque efficitur ac. Ut ornare, leo at interdum consectetur, sem erat lobortis risus, ut vestibulum neque efficitur ac non pharetra sapien diam sit amet tellus.'
        },
        {
            question: 'Lorem ipsum dolor sit amet, consectetur',
            answer: 'Ut hendrerit tincidunt tellus, ut vestibulum neque efficitur ac. Ut ornare, leo at interdum consectetur, sem erat lobortis risus, ut vestibulum neque efficitur ac non pharetra sapien diam sit amet tellus.'
        },
        {
            question: 'Lorem ipsum dolor sit amet, consectetur',
            answer: 'Ut hendrerit tincidunt tellus, ut vestibulum neque efficitur ac. Ut ornare, leo at interdum consectetur, sem erat lobortis risus, ut vestibulum neque efficitur ac non pharetra sapien diam sit amet tellus.'
        },
        {
            question: 'Lorem ipsum dolor sit amet, consectetur',
            answer: 'Ut hendrerit tincidunt tellus, ut vestibulum neque efficitur ac. Ut ornare, leo at interdum consectetur, sem erat lobortis risus, ut vestibulum neque efficitur ac non pharetra sapien diam sit amet tellus.'
        },
        {
            question: 'Lorem ipsum dolor sit amet, consectetur',
            answer: 'Ut hendrerit tincidunt tellus, ut vestibulum neque efficitur ac. Ut ornare, leo at interdum consectetur, sem erat lobortis risus, ut vestibulum neque efficitur ac non pharetra sapien diam sit amet tellus.'
        }
    ]
    return (
        <section className={` ${styles.faqs} block`}>
            <Container>

                <Heading title={`Frequently Asked Questions`} subTitle={`Don’t be afraid to ask!`} />

                <div className={styles.faqsList}>
                    {faqs.map((faq, i) => <Faq key={i} /> )}
                </div>

            </Container>
        </section>
    )
}
