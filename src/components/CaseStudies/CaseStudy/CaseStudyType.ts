import { StaticImageData } from 'next/image';

export interface CaseStudyType {
    name: string;
    synopsis: React.ReactNode;
    link: string;
    image: string | StaticImageData;
  }
