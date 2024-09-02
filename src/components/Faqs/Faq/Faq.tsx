import styles from './Faq.module.scss';

export default function Faq() {
    return (
        <dl className={styles.faq}>
            <dt>This is a question</dt>
            <dd>Ut hendrerit tincidunt tellus, ut vestibulum neque efficitur ac. Ut ornare, leo at interdum consectetur, sem erat lobortis risus, ut vestibulum neque efficitur ac non pharetra sapien diam sit amet tellus.</dd>
        </dl>
    )
}
