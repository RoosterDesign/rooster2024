import styles from './IntroBlock.module.scss';
import Heading from '@/components/Heading/Heading';
import LinkIcon from '@/components/LinkIcon/LinkIcon';

interface IntroBlock {
  title: string;
  intro: string;
  link?: string;
  alignRight?: boolean;
}

export default function IntroBlock({title, intro, link, alignRight}: IntroBlock) {
  return (
    <div className={`${styles.introBlock} ${alignRight ? styles.alignRight: ''}`}>
      <Heading title={title} />
      <p>
        {intro}
        {link && <>
            &nbsp;&nbsp; <LinkIcon url={`#`} label="Find out more" />
        </>}
      </p>
    </div>
  )
}
