import Image from 'next/image';
import Container from '@/components/Container/Container';
import Button from '@/components/Button/Button';

import styles from './SkillsGraph.module.scss';

import neilHeadshotSm from '/public/neil-headshot-sm.jpg';

export default function SkillsGraph({ reverse } : { reverse?: boolean }) {

    const skillLogos: string[] = ['html5', 'css3', 'javascript', 'react', 'nextjs', 'tailwind', 'wordpress', 'figma'];

    return (
        <section className={`${styles.skillsGraph} ${reverse ? styles.skillsGraphReverse : ''} block`}>
            <Container>

                <div className={styles.skillsWrap}>
                    {skillLogos.map((logo, index) => (
                        <div className={styles.skill} key={index}>
                            <Image src={`/skill-logos/${logo}.svg`} alt="" height={0} width={0} />
                        </div>
                    ))}
                    <div className={styles.skillPhoto}>
                        <Image src={neilHeadshotSm} alt="" height={300} width={300} placeholder="blur" quality={90} />
                    </div>
                </div>

                <div className={styles.intro}>
                    <h2 className="h3">{`As a UI/UX Designer and front-end developer, I blend design and code to craft engaging websites, web applications, and software solutions that deliver a seamless and captivating user experience.`}</h2>
                    <p>{`I create pixel-perfect, accessible websites and applications that look great and function smoothly across a range of devices. I use React for dynamic interfaces and my go-to framework for most projects is Next.js. I'm also well-versed in content management systems like WordPress and Umbraco, ensuring clients can easily manage their content.`}</p>
                    <p>{`On the design side, I use Figma to create intuitive, user-friendly interfaces that perfectly align with a client's brand and vision, ensuring the design not only looks great but also reflects the essence of their business.`}</p>
                    <Button url={`/services`}  label={`My services`} />
                </div>

            </Container>
        </section>
    )
}
