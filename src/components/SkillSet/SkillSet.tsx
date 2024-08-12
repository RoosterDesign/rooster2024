import styles from './SkillSet.module.scss';

import Container from '@/components/Container/Container';

export default function Skillset() {

  const logos: string[] = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21'];


  return (
    <>
      <section className={`${styles.skillset}`}>
        <Container>

          {logos.map((index) => (
            <div className={styles.skill} key={index}><span>{index}</span></div>
          ))}
                    
        </Container>
      </section>

      <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg"><defs><filter id="hex"><feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur"/><feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9" result="hex"/><feComposite in="SourceGraphic" in2="hex" operator="atop"/></filter></defs></svg>
    </>
  )
}