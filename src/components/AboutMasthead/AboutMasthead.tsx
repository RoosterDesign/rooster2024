import Image from 'next/image';

import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import LinkIcon from '@/components/LinkIcon/LinkIcon';

import styles from './AboutMasthead.module.scss';

import clientLogos1 from './images/client-logos-1.svg';
import clientLogos2 from './images/client-logos-2.svg';

export default function AboutMasthead() {

    const clientLogos: string[] = ['dcl', 'warner-bros', 'hitachi', 'santander', 'homeserve', 'heineken', 'holland-and-barrett-sml', 'boots', 'bmw'];

    return (
        <section className={styles.aboutMasthead}>
            <Container>

                <div className={styles.intro}>
                    <Heading title={`Who I am`} isH1 />
                    <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique arcu quis nibh rhoncus, vel faucibus lorem semper. Ut consequat mi id diam blandit, ac consequat dolor imperdiet. Suspendisse id nibh iaculis, tincidunt mauris ac, porta massa.`}</p>
                    <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique arcu quis nibh rhoncus, vel faucibus lorem semper. Ut consequat mi id diam blandit, ac consequat dolor imperdiet. Suspendisse id nibh iaculis, tincidunt mauris ac, porta massa.`}</p>
                </div>

                <div className={styles.panels}>

                    <div className={styles.panel}>
                        <span className={styles.panelTitle}>
                            {`My Experience`}
                        </span>

                        <p className={styles.panelHighlight}>
                            {`17+ Years`}
                        </p>

                        <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique arcu quis nibh rhoncus, vel faucibus lorem semper.`}</p>

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
                </div>

            </Container>
        </section>
    )
}
