import Image, { StaticImageData } from 'next/image';
import styles from './SkillLogo.module.scss';

export default function SkillLogo({logo}: {logo: StaticImageData}) {
 
  return (
    <div className={styles.skillLogo} >      
      <Image src={logo} alt="" />
    </div>
  )
}