import styles from './IntroBlock.module.scss';
import Heading from '@/components/Heading/Heading';

interface IntroBlock {
  title: string;
  children?: React.ReactNode;
  alignRight?: boolean;
}

export default function IntroBlock({title, children, alignRight}: IntroBlock) {
  return (
    <div className={`${styles.introBlock} ${alignRight ? styles.alignRight: ''}`}>
      <Heading title={title} />
      {children}
    </div>
  )
}