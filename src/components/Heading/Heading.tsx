import styles from './Heading.module.scss';

interface Heading {
  isH1?: boolean;
  title: string;
  subTitle?: string;
}

export default function Heading({title, subTitle, isH1} : Heading) {

  return (
    <>
        { subTitle ?
        <hgroup className={styles.headingGroup}>
            <span className={styles.subHeading}>{subTitle}</span>
            { isH1 ?
                <h1 className={styles.heading}>{title}</h1>
            :
                <h2 className={styles.heading}>{title}</h2>
            }
        </hgroup>
        :
            isH1 ?
                <h1 className={styles.heading}>{title}</h1>
            :
                <h2 className={styles.heading}>{title}</h2>
        }
    </>
  )
}
