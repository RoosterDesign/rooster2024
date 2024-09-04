import styles from './ServicesList.module.scss';

import { LinkCardType } from '@/components/LinkCard/LinkCardType';
import LinkCard from '@/components/LinkCard/LinkCard';

import CardGrid from '@/components/CardGrid/CardGrid';

export default function ServicesList() {

    const services: LinkCardType[] = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40"><path fill-rule="evenodd" d="M26.667 40h-10v-1.667A3.332 3.332 0 0 1 20 35h3.333a3.334 3.334 0 0 1 3.334 3.333V40ZM40 40H30v-1.667A3.332 3.332 0 0 1 33.333 35h3.334A3.334 3.334 0 0 1 40 38.333V40ZM11.265 15a6.142 6.142 0 0 0 2.82-.727c1.258-.7 4.492-2.738 5.808-3.54a.841.841 0 0 1 1.09.189l.014.018a.838.838 0 0 1-.072 1.133c-1.037.995-4.072 3.88-5.617 5.355a4.656 4.656 0 0 0-1.421 3.174c-.159 3.678-.435 11.52-.552 14.721a1.396 1.396 0 0 1-1.395 1.344c-.74 0-1.312-.579-1.395-1.314-.185-1.635-.548-5.466-.71-7.02-.067-.64-.467-1.021-.975-1.025-.507-.001-.872.377-.915 1.015-.102 1.535-.442 5.414-.568 7.034a1.41 1.41 0 0 1-1.4 1.31 1.406 1.406 0 0 1-1.405-1.347c-.162-3.903-.615-14.94-.615-14.94l-2.145 3.883a.965.965 0 0 1-1.192.434H.618a.967.967 0 0 1-.581-1.164l2.073-7.321A1.667 1.667 0 0 1 3.713 15h7.552Zm10.402 11.667c2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75Zm13.333 0c2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75ZM40 25H15v-1.667h13.333v-1.666h5v1.666h5V1.667H1.667v11.666L0 17.908V0h40v25ZM30 15h-6.667v-1.667H30V15ZM8.957 6.667c2.068 0 3.75 1.68 3.75 3.75 0 2.07-1.682 3.75-3.75 3.75-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75Zm26.043 5H23.333V10H35v1.667Zm0-3.334H23.333V6.667H35v1.666Z" clip-rule="evenodd"/></svg>,
            title: 'Contracting',
            link: '/services',
            body: 'Working as a Senior Front End Developer, I have contracted at award winning design agencies and in-house at multinational companies. I integrate seamlessly with your working practices and ethos and adapt very quickly.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40"><path fill-rule="evenodd" d="M7.968 40a1.876 1.876 0 0 1-1.873-1.798l-.82-19.917-2.86 5.177c-.31.565-.988.81-1.588.578l-.002-.002a1.288 1.288 0 0 1-.825-1.2l.048-.35 2.765-9.76a2.224 2.224 0 0 1 2.14-1.616h30.094c.995 0 1.868.66 2.14 1.616l2.765 9.76.048.35c0 .522-.318 1.004-.825 1.2l-.002.002a1.282 1.282 0 0 1-1.588-.578l-2.86-5.177-.82 19.917A1.874 1.874 0 0 1 32.033 40a1.88 1.88 0 0 1-1.868-1.745c-.17-2.162-.623-7.333-.76-9.38-.057-.85-.678-1.35-1.353-1.35-.605 0-1.285.5-1.34 1.35-.139 2.047-.592 7.218-.76 9.38A1.88 1.88 0 0 1 24.085 40h-.003a1.873 1.873 0 0 1-1.87-1.798c-.217-5.2-1.074-21.535-1.074-21.535h-2.246s-.887 16.335-1.104 21.535A1.873 1.873 0 0 1 15.918 40h-.003a1.88 1.88 0 0 1-1.867-1.745c-.168-2.162-.621-7.333-.76-9.38-.055-.85-.735-1.35-1.34-1.35-.675 0-1.296.5-1.353 1.35-.137 2.047-.59 7.218-.76 9.38A1.878 1.878 0 0 1 7.968 40Zm3.974-40c2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.759 0-5-2.24-5-5s2.241-5 5-5Zm16.116 0c-2.76 0-5 2.24-5 5s2.24 5 5 5c2.759 0 5-2.24 5-5s-2.241-5-5-5Z" clip-rule="evenodd"/></svg>,
            title: 'Outsourcing',
            link: '/services',
            body: 'As a busy Design Agency, there is often limited resource to complete all projects on time. By outsourcing to me, you can be safe in the knowledge that the project will be delivered to your exacting standards and meeting your deadlines.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 42"><path d="M31.631 10.583c-.81 0-6.875 2.083-14.63 2.083-7.813 0-13.761-2.083-14.634-2.083a2.037 2.037 0 0 0-2.034 2.034c0 .943.67 1.779 1.578 1.98 4.504 1.174 9.523 1.976 9.523 6.526 0 7.427-4.836 14.373-6.792 17.658A2.035 2.035 0 0 0 7.85 41.23c1.602-1.608 4.775-6.4 6.227-8.712.815-1.296 1.648-2.459 2.936-2.46 1.256.001 2.093 1.164 2.91 2.46 1.452 2.312 4.623 7.104 6.225 8.712a2.035 2.035 0 0 0 3.481-1.43c0-.353-.093-.705-.293-1.051-2.005-3.369-6.771-10.19-6.771-17.625 0-4.81 5.731-5.544 9.506-6.521a2.052 2.052 0 0 0 1.596-1.986c0-1.12-.915-2.033-2.036-2.033ZM17.048.167c2.863 0 5.183 2.333 5.183 5.208s-2.32 5.208-5.183 5.208c-2.86 0-5.185-2.333-5.185-5.208S14.188.167 17.048.167Z"/></svg>,
            title: 'Freelance',
            link: '/services',
            body: 'I work directly with a number of small to medium sized businesses in order to either help them create their first online presence, freshen up an existing website or help boost sales through integrated e-commerce solutions.'
        }
    ]
    return (
        <div className={` ${styles.servicesList}`}>

            <CardGrid>
                {services.map((service, i) =>
                    <LinkCard
                        key={i}
                        icon={service.icon}
                        title={service.title}
                        body={service.body}
                        link={service.link}
                    />
                )}
            </CardGrid>
        </div>
    )
}
