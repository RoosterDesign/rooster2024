import { RichtextStoryblok } from '../../../component-types-sb';
import Heading from '@/components/Heading/Heading';
import { render } from 'storyblok-rich-text-react-renderer-ts';
import styles from './IntroBlock.module.scss';

interface Props {
    title: string;
    intro: RichtextStoryblok;
    // link?: string;
    // alignRight?: boolean;
}

const IntroBlock: React.FC<Props> = ({ title, intro }) => {
    return (
        // <div className={`${styles.introBlock} ${alignRight ? styles.alignRight : ''}`}>
        <div className={styles.introBlock}>
            <Heading title={title} />
            {render(intro)}
        </div>
    )
}

export default IntroBlock;
