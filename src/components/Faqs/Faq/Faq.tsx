import { FaqType } from './FaqType';
import styles from './Faq.module.scss';

export default function Faq({ question, answer }: FaqType) {
    return (
        <dl className={styles.faq}>
            <dt className="h3">{question}</dt>
            <dd>{answer}</dd>
        </dl>
    )
}
