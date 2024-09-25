import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from 'storyblok-rich-text-react-renderer-ts';
import { MastheadStoryblok } from '../../../component-types-sb';

import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';

import styles from './Masthead.module.scss';

interface Props {
    blok: MastheadStoryblok
}

const Masthead: React.FC<Props> = ({ blok }) => {

    const { title, intro, has_container } = blok;
    return (
        <div {...storyblokEditable(blok)}>
            {has_container ? (
                <Container>
                    <div className={styles.masthead}>
                        <Heading title={title} isH1 />
                        {render(intro)}
                    </div>
                </Container >
            ) : (
                <>
                    <Heading title={title} isH1 />
                    {render(intro)}
                </>
            )}

        </div>
    )
}

export default Masthead;
