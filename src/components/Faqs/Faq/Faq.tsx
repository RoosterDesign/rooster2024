import { FaqStoryblok } from '../../../../component-types-sb';

import styles from './Faq.module.scss';

interface Props {
    faq: FaqStoryblok
}

const Faq: React.FC<Props> = ({ faq }) => {
    const { question, answer } = faq;
    return (
        <dl className={styles.faq}>
            <dt className="h3">{question}</dt>
            <dd>{answer}</dd>
        </dl>
    )
}

export default Faq;
