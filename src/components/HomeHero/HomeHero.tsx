import styles from './HomeHero.module.scss';
import Container from '@/components/Container/Container';
import Button from '@/components/Button/Button';

export default function HomeHero() {
  return (
    <section className={styles.homeHero}>
      <Container>

        <h1>Hi! I’m Neil, a <span>UI Designer</span> &amp; <span>Front End Developer</span> based in Warwickshire with <span>over 17 years</span> of industry experience.</h1>

        <div className={styles.downloadCv}>
          <p>I am open to contracting, freelance and outsourcing opportunities. You can download my CV below.</p>
          <Button url="#" label={`Download CV`} />
        </div>

      </Container>
    </section>
  )
}