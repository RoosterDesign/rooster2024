import { storyblokEditable } from "@storyblok/react/rsc";
import { SkillsGraphStoryblok, ButtonStoryblok } from '../../../component-types-sb';
import { render } from 'storyblok-rich-text-react-renderer-ts';
import Image from 'next/image';
import Container from '@/components/Container/Container';
import Button from '@/components/Button/Button';
import styles from './SkillsGraph.module.scss';

interface Props {
    blok: SkillsGraphStoryblok
}

const SkillsGraph: React.FC<Props> = ({ blok }) => {
    const { title, content, image, logos, buttons } = blok;
    return (
        <section className={`${styles.skillsGraph} block`} {...storyblokEditable(blok)}>
            <Container>

                <div className={styles.skillsWrap}>
                    {logos.map((logo) => (
                        <div className={styles.skill} key={logo.id}>
                            <Image src={logo.filename} alt="" height={0} width={0} />
                        </div>
                    ))}
                    <div className={styles.skillPhoto}>
                        <Image src={image.filename} alt="" height={300} width={300} quality={90} />
                    </div>
                </div>

                <div className={styles.intro}>
                    <h2 className="h3">{title}</h2>
                    {render(content)}
                    {buttons?.map((button: ButtonStoryblok) => {
                        return (
                            <Button
                                url={button.link.url}
                                label={button.label}
                                external={button.link.target === '_blank'}
                                key={button._uid}
                            />
                        )
                    })}
                </div>

            </Container>
        </section>
    )
}

export default SkillsGraph;
