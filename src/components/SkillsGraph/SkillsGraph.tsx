import Image from 'next/image';
import Container from '@/components/Container/Container';
import Button from '@/components/Button/Button';

import styles from './SkillsGraph.module.scss';

export default function SkillsGraph() {

    const skillLogos: string[] = ['html5', 'css3', 'javascript', 'react', 'nextjs', 'tailwind', 'wordpress', 'figma'];

    return (
        <section className={`${styles.skillsGraph} block`}>
            <Container>

                <div className={styles.skillsWrap}>
                    {skillLogos.map((logo, index) => (
                        <div className={styles.skill} key={index}>
                            <Image src={`/skill-logos/${logo}.svg`} alt="" height={0} width={0} />
                        </div>
                    ))}
                    <div className={styles.skillPhoto}>
                        <Image src={`/neil-headshot.jpg`} alt="" height={300} width={300} />
                    </div>
                </div>

                <div className={styles.intro}>
                    <h2>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique arcu quis nibh rhoncus, vel faucibus lorem semper. Ut consequat mi id diam blandit.`}</h2>
                    <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique arcu quis nibh rhoncus, vel faucibus lorem semper. Ut consequat mi id diam blandit, ac consequat.`}</p>
                    <Button url={``}  label={`My services`} />
                </div>

            </Container>
        </section>
    )
}
