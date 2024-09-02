import Link from 'next/link';

import styles from './ServicePanel.module.scss';

interface Service {
    icon: React.ReactElement;
    title: string;
    body: string;
    link?: string;
}

export default function ServicePanel({ icon, title, body, link}: Service) {
    return (
        <>
        {link ?
            <Link href={link} title={title} className={`${styles.servicePanel} ${styles.servicePanelLink}`}>
                {icon}
                <h3>{title}</h3>
                <p>{body}</p>
            </Link>
        :
            <div className={styles.servicePanel}>
                {icon}
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        }
        </>
    )
}
