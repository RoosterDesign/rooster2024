import Image from 'next/image';
import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';

import { CardType } from '@/components/Card/CardType';
import Card from '@/components/Card/Card';

import styles from './BulletsCallout.module.scss';


export default function BulletsCallout() {

    const cards: CardType[] = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0z"/></svg>,
            title: 'Lorem ipsum',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique arcu quis nibh rhoncus.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0z"/></svg>,
            title: 'Lorem ipsum',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique arcu quis nibh rhoncus.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0z"/></svg>,
            title: 'Lorem ipsum',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique arcu quis nibh rhoncus.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0z"/></svg>,
            title: 'Lorem ipsum',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique arcu quis nibh rhoncus.'
        }
    ];

    return (
        <section className={` ${styles.bulletsCallout} block`}>
            <Container>

                <div className={styles.intro}>
                    <Heading title={`Why choose me?`} />
                    <p>{`I am a highly adaptable, creative problem solver, with keen desire to improve and develop new skills. I am quick to respond to an ever changing landscape and used to working in a fast paced environment and offer a wealth of knowledge and experience from my work across several different sectors.`}</p>
                </div>

                <ol className={styles.bullets}>
                    {cards.map((card, i) =>
                        (
                            <li key={i}>
                                <Card
                                    icon={card.icon}
                                    title={card.title}
                                    body={card.body}
                                    noBg
                                />
                            </li>
                        )
                    )}
                </ol>

                <div className={` ${styles.bulletsCalloutImage} imgDotGrid`}>
                    {/* <Image src={`neil-headshot.jpg`} alt="Neil Dewing - Front End Developer" width={610} height={875} className={''} placeholder="blur" quality={100}  /> */}
                    <Image src={`/neil-headshot.jpg`} alt="Neil Dewing - Front End Developer" width={610} height={875} className={''} />
                </div>

            </Container>
        </section>
    )
}
