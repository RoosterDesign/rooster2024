import styles from './Heading.module.scss';

interface Heading {
  isH1?: boolean;
  title: string;
}

export default function Heading({title, isH1} : Heading) {
  return (
    <>
      {isH1 ? <h1 className={styles.heading}>{title}</h1> : <h2 className={styles.heading}>{title}</h2> }
    </>    
  )
}