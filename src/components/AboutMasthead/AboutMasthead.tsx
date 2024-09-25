import { storyblokEditable } from "@storyblok/react/rsc";
import { AboutMastheadStoryblok } from '../../../component-types-sb';

import Image from 'next/image';

import Masthead from '@/components/Masthead/Masthead';
import Container from '@/components/Container/Container';
import LinkIcon from '@/components/LinkIcon/LinkIcon';

import styles from './AboutMasthead.module.scss';

interface Props {
    blok: AboutMastheadStoryblok
}

const AboutMasthead: React.FC<Props> = ({ blok }) => {
    const { masthead, experience_subtitle, experience_content, experience_highlight, experience_link, clients_logos, clients_subtitle } = blok;
    return (
        <section className={styles.aboutMasthead} {...storyblokEditable(blok)}>
            <Container>

                <div className={styles.intro}>
                    <Masthead blok={masthead[0]} />
                </div>

                <div className={styles.panel}>
                    <span className={styles.panelTitle}>
                        {experience_subtitle}
                    </span>
                    <p className={styles.panelHighlight}>
                        {experience_highlight}
                    </p>
                    <p>{experience_content}</p>
                    <p> <LinkIcon url={experience_link.url} label={`Download my CV`} external={experience_link.target === '_blank'} /></p>
                </div>

                <div className={styles.panel}>
                    <span className={styles.panelTitle}>
                        {clients_subtitle}
                    </span>
                    <div className={styles.clientLogos}>
                        {clients_logos.map((logo) => (
                            <Image src={logo.filename} alt="" key={logo.id} width={0} height={0} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default AboutMasthead;
