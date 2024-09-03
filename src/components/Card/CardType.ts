import { StaticImageData } from 'next/image';

export interface CardType {
    image: StaticImageData;
    icon: React.ReactNode;
    title: string;
    body: string;
    link?: string;
    noBg?: boolean;
}
