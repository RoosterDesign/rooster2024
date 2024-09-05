import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import LinkIcon from '@/components/LinkIcon/LinkIcon';

import styles from './AboutMasthead.module.scss';

export default function AboutMasthead() {

    const clientLogos: string[] = ['dcl', 'warner-bros', 'hitachi', 'santander', 'homeserve', 'heineken', 'holland-and-barrett-sml', 'boots', 'bmw', 'bicester-village', 'mini'];

    return (
        <section className={styles.aboutMasthead}>
            <Container>

                <div className={styles.intro}>
                    <Heading title={`Who I am`} isH1 />
                    <p>{`Hi! I'm Neil, a UI Designer & Front End Developer based on the ourskirts of Leamington Spa in Warwickshire. With over 17 years in the industry, what began as a simple hobby has blossomed into a deep-seated passion for creating intuitive and visually compelling digital experiences.`}</p>
                    <p>{`Whether you're seeking a contractor for your next project, a trusted partner for outsourced projects, or if you're a small business looking to build a website that not only looks great but also functions seamlessly, I'm here to help`}</p>

                    <p>Why not check out my <Link href={'/services'}>services</Link> or <Link href={'/portfolio'}>view my latest work</Link> and when you&apos;re ready to find out more, please <Link href={'/contact'}>get in touch!</Link></p>

                </div>

                <div className={styles.panel}>
                    <span className={styles.panelTitle}>
                        {`My Experience`}
                    </span>

                    <p className={styles.panelHighlight}>
                        {`17+ Years`}
                    </p>

                    <p>{`With over 17 years of experience, I've created engaging digital experiences for a wide range of clients, from well-known brands to small businesses.`}</p>

                    <p><LinkIcon url={`/neil-dewing-cv.pdf`} label={`Download my CV`} external /></p>

                </div>

                <div className={styles.panel}>
                    <span className={styles.panelTitle}>
                        {`Brands I've worked with`}
                    </span>

                    <div className={styles.clientLogos}>
                        {clientLogos.map((logo, index) => (
                            <Image src={`/client-logos/${logo}.svg`} alt="" key={index} width={0} height={0} />
                        ))}
                    </div>

                </div>

            </Container>
        </section>
    )
}
