import styles from './LinkIcon.module.scss';
import Link from 'next/link';

interface Props {
    url: string;
    label: string;
    title?: string;
    alt?: boolean;
    external?: boolean;
    faux?: boolean;
}

const LinkIcon: React.FC<Props> = ({ url, label, title, alt, external, faux }) => {

    const svg = <svg width="13" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m4.406 1.494 7.029.041m0 0 .042 7.03m-.042-7.03-9.9 9.9" stroke="#F21483" strokeWidth="2" strokeLinecap="square" /></svg>;

    const linkTitle = title ? title : label;

    if (external) {
        return (
            <a href={url} target="_blank" title={linkTitle} className={` ${styles.linkIcon} ${alt ? "textLink--alt" : ''} textLink`}>
                {label} {svg}
            </a>
        )
    }

    if (faux) {
        return (
            <span className={` ${styles.linkIcon} textLink textLink--faux`}>
                {label} {svg}
            </span>
        )
    }

    return (
        <Link href={url} className={` ${styles.linkIcon} ${alt ? "textLink--alt" : ''} textLink`} title={linkTitle}>
            {label} {svg}
        </Link>
    )
}

export default LinkIcon;
