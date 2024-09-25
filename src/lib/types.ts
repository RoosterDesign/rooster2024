import { StaticImageData } from 'next/image';

export interface SbLinkUrlInterface {
    url: string
}

// export interface TestimonialInterface {
//     _uid: string;
//     content: {

//         avatar: {
//             filename: string
//         };
//         author: string;
//         quote: string;
//         company?: string;
//         jobRole?: string;
//     }
// }

export interface ButtonInterface {
    link: SbLinkUrlInterface;
    label: string;
    external: boolean;
}

export interface CardType {
    _uid?: string;
    image?: StaticImageData;
    icon?: string;
    title: string;
    body: string;
    link_label?: string;
    link: SbLinkUrlInterface;
    no_bg?: boolean;
    isExternal?: boolean;
}
