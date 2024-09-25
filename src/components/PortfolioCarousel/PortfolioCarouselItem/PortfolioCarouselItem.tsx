import { CaseStudyStoryblok } from '../../../../component-types-sb';
import { render } from 'storyblok-rich-text-react-renderer-ts';

import Image from 'next/image';
import styles from './PortfolioCarouselItem.module.scss';

import LinkIcon from '@/components/LinkIcon/LinkIcon';

const PortfolioCarouselItem: React.FC<CaseStudyStoryblok> = ({ name, synopsis, link, image }) => {
    return (
        <div className={styles.caseStudy}>

            <div className={styles.caseStudyDetails}>
                <h2>{name}</h2>
                {render(synopsis)}
                {link?.url && <p className={styles.link}><LinkIcon url={link.url} label={link.label} /></p>}
            </div>

            <Image src={image} alt="" quality={100} width={700} height={690} className={styles.caseStudyImage} />
        </div>
    )
}
export default PortfolioCarouselItem;
