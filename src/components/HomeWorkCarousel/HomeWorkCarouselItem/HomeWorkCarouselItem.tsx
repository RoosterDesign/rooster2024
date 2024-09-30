import { PortfolioItemStoryblok } from '../../../../component-types-sb';

import Image from 'next/image';
import Button from "@/components/Button/Button";

import styles from './HomeWorkCarouselItem.module.scss';

interface Props {
    client: PortfolioItemStoryblok
}

const HomeWorkCarouselItem: React.FC<Props> = ({ client }) => {

    const {
        project_type,
        client_name,
        synopsis,
        link,
        home_image } = client;

    return (
        <div className={styles.latestProject}>
            <div className={styles.projectDetails}>
                {project_type && <span>{project_type}</span>}
                <h2>{client_name}</h2>
                {synopsis && <p>{synopsis}</p>}
                {link?.url && <Button url={link.url} label={`Visit Website`} external />}
            </div>
            <div className={styles.projectDetailsMask}></div>
            {home_image && <Image src={home_image.filename} alt={client_name} width={1340} height={900} quality={90} />}
        </div>
    )
}

export default HomeWorkCarouselItem;
