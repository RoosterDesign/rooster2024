import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';

import { FaqType } from './Faq/FaqType';
import Faq from './Faq/Faq';

import styles from './Faqs.module.scss';

export default function Faqs() {

    const faqs: FaqType[] = [
        {
            question: `How do you ensure code quality and consistency across different projects?`,
            answer: `I follow industry best practices, including writing clean, maintainable code and conducting thorough testing. I also use tools like version control (Git) and code review processes to ensure consistency and quality across all projects, whether working solo or collaborating with teams.`
        },
        {
            question: `Can you handle both the design and development aspects of a project?`,
            answer: `Yes, I offer a full range of services, from UI/UX design to front end development. This means I can handle both the visual design and the technical implementation, ensuring a seamless integration of design and functionality.`
        },
        {
            question: `What types of projects do you typically work on?`,
            answer: `I work on a variety of projects, including website redesigns, new website builds, UI/UX enhancements, and custom front end development for applications. My focus is on creating responsive, user-friendly interfaces that meet the specific needs of each client.`
        },
        {
            question: `How do you approach project deadlines and communication?`,
            answer: `I prioritise clear communication and timely updates throughout the project. I work with clients to establish realistic deadlines and keep them informed of progress, addressing any concerns promptly to ensure that projects stay on track.`
        },
        {
            question: 'What is your experience with agency collaborations?',
            answer: 'I have extensive experience working with agencies, integrating seamlessly into teams to support various front end development needs. I understand the dynamics of agency workflows and am adept at following guidelines, meeting deadlines, and contributing effectively to projects.'
        },
        {
            question: `How do you ensure your work aligns with the agency's standards and client expectations when outsourcing?`,
            answer: `I adopt a thorough understanding of the agency's standards and client requirements. I follow detailed project briefs and guidelines, regularly check in with the agency for feedback, and make necessary adjustments to ensure the final deliverables meet or exceed expectations.`
        }
    ]
    return (
        <section className={` ${styles.faqs} block`}>
            <Container>

                <Heading title={`Frequently Asked Questions`} subTitle={`Don’t be afraid to ask!`} />

                <div className={styles.faqsList}>
                    {faqs.map((faq, i) => <Faq question={faq.question} answer={faq.answer} key={i} /> )}
                </div>

            </Container>
        </section>
    )
}
