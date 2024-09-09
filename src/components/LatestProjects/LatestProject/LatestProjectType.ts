import { StaticImageData } from 'next/image';

export interface LatestProjectType {
    type: string;
    name: string;
    synopsis: string;
    link: string;
    image: string | StaticImageData;
  }
