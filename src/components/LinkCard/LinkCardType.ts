import { StaticImageData } from 'next/image';

export interface LinkCardType {
    image?: StaticImageData;
    icon?: React.ReactNode;
    title: string;
    body: string;
    link: string;
    linkLabel?: string;
    isExternal?: boolean;
}
