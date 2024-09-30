import React from 'react';
import styles from './Container.module.scss';

interface Props {
    children: React.ReactNode;
    narrow?: boolean;
}

const Container: React.FC<Props> = ({ children, narrow }) => {

    return (
        <div className={` ${styles.container} ${narrow ? styles.containerNarrow : ''}`}>
            {children}
        </div>
    )
}

export default Container;
