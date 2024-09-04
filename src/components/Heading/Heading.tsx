import styles from './Heading.module.scss';

interface Heading {
  isH1?: boolean;
  title: string;
  subTitle?: string;
  body?: string;
}

export default function Heading({title, subTitle, body, isH1} : Heading) {

  return (
    <>
        { subTitle || body ?
        <hgroup className={styles.headingGroup}>
            {subTitle && <span className={styles.subHeading}>{subTitle}</span> }
            { isH1 ?
                <h1 className={styles.heading}>{title}</h1>
            :
                <h2 className={styles.heading}>{title}</h2>
            }
            {body && <p>{body}</p> }
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
