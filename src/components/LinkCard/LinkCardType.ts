import { StaticImageData } from 'next/image';

export interface LinkCardType {
    image?: StaticImageData;
    icon?: StaticImageData;
    title: string;
    body: string;
    link: string;
}
