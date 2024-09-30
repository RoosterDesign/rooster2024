import { PortfolioItemStoryblok } from '../../../../component-types-sb';
import { render } from 'storyblok-rich-text-react-renderer-ts';

import Image from 'next/image';
import styles from './PortfolioCarouselItem.module.scss';

import LinkIcon from '@/components/LinkIcon/LinkIcon';

interface Props {
    content: PortfolioItemStoryblok;
}

const PortfolioCarouselItem: React.FC<Props> = ({ content }) => {
    const { client_name, description, link, link_label, casestudy_image } = content;

    return (
        <div className={styles.caseStudy}>

            <div className={styles.caseStudyDetails}>
                <h2>{client_name}</h2>
                {render(description)}
                {link?.url && <p className={styles.link}>
                    <LinkIcon url={link.url} label={link_label ? link_label : `Visit website`} external={link.target === '_blank'} /></p>
                }
            </div>

            {casestudy_image &&
                <Image src={casestudy_image.filename} alt="" quality={100} width={700} height={690} className={styles.caseStudyImage} />
            }
        </div>
    )
}
export default PortfolioCarouselItem;
