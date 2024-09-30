import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from 'storyblok-rich-text-react-renderer-ts';
import { HomeHeroStoryblok, ButtonStoryblok } from '../../../component-types-sb';
import styles from './HomeHero.module.scss';
import Container from '@/components/Container/Container';
import Button from '@/components/Button/Button';

interface Props {
    blok: HomeHeroStoryblok
}

const HomeHero: React.FC<Props> = ({ blok }) => {
    const { heading, cv_synopsis, buttons } = blok;
    return (
        <section className={styles.homeHero} {...storyblokEditable(blok)}>
            <Container>
                {render(heading)}
                <div className={styles.downloadCv}>
                    <p>{cv_synopsis}</p>
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

export default HomeHero;
