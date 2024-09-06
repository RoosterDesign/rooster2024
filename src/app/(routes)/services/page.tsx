// import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import ServicesMasthead from '@/components/ServicesMasthead/ServicesMasthead';
import Container from '@/components/Container/Container';
import IntroBlock from '@/components/IntroBlock/IntroBlock';
import ServicesList from '@/components/ServicesList/ServicesList';
import BulletsCallout from '@/components/BulletsCallout/BulletsCallout';
import Testimonials from '@/components/Testimonials/Testimonials';
import Faqs from '@/components/Faqs/Faqs';
import { CardType } from '@/components/Card/CardType';

import contracting from '/public/contracting.jpg';
import outsourcing from '/public/outsourcing.jpg';
import freelance from '/public/freelance.jpg';

export default function Services() {

    const contractingBullets: CardType[] = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24"><path d="M10 23a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1h-6v-1zm8 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1h-6v-1zM6.759 9c.649 0 1.293-.213 1.692-.436.755-.42 2.695-1.643 3.485-2.124a.505.505 0 0 1 .654.113l.008.011a.503.503 0 0 1-.043.68c-.622.597-2.443 2.328-3.37 3.213a2.794 2.794 0 0 0-.853 1.904c-.095 2.207-.261 6.912-.331 8.833a.838.838 0 0 1-.837.806h-.001c-.444 0-.786-.347-.836-.788-.111-.981-.329-3.28-.426-4.212-.04-.384-.28-.613-.585-.615-.304-.001-.523.226-.549.609-.061.921-.265 3.248-.341 4.22a.845.845 0 0 1-.84.786h-.001a.843.843 0 0 1-.842-.808l-.369-8.964-1.287 2.33a.58.58 0 0 1-.715.26H.371a.58.58 0 0 1-.349-.698l1.244-4.393A1 1 0 0 1 2.228 9h4.531zM13 16a2.25 2.25 0 1 1-.002 4.502A2.25 2.25 0 0 1 13 16zm8 0a2.25 2.25 0 1 1-.002 4.502A2.25 2.25 0 0 1 21 16zm3-1H10v-2h7v-1h3v1h2V2H2v4.356l-2 2V0h24v15zm-7-5h-3V9h3v1zM5.374 4c1.241 0 2.25 1.008 2.25 2.25S6.615 8.5 5.374 8.5a2.25 2.25 0 0 1 0-4.5zM20 8h-6V7h6v1zm0-2h-6V5h6v1z"/></svg>,
            title: `Flexibility`,
            body: `I can adapt to a variety of project scopes, timelines, and environments, making me a versatile addition to any team.`
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0v24h24V0H0zm1 1h11v3.55c0 .932.575 1.357 1.109 1.357.332 0 .672-.156.953-.438.284-.296.389-.469.786-.469.47 0 1.152.534 1.152 1.5S15.318 8 14.848 8c-.396 0-.501-.173-.785-.468-.281-.283-.621-.438-.953-.438-.535-.001-1.11.424-1.11 1.356V12H8.45c-.536 0-.439-.139-.108-.454.262-.245.658-.616.658-1.394C9 9.113 7.996 8 6.5 8S4 9.113 4 10.152c0 .777.396 1.148.658 1.394.333.317.425.454-.108.454H1V1zm0 22V13h3.55c.933 0 1.356-.575 1.356-1.109 0-.332-.155-.672-.438-.953-.294-.284-.468-.388-.468-.786C5 9.682 5.534 9 6.5 9S8 9.682 8 10.152c0 .397-.174.501-.469.785-.282.281-.438.621-.438.953.001.535.425 1.11 1.357 1.11H12v3.55c0 .535-.137.44-.454.109-.245-.263-.616-.659-1.394-.659C9.113 16 8 17.004 8 18.5S9.113 21 10.152 21c.777 0 1.148-.396 1.394-.659.317-.333.454-.424.454.109V23H1zm22 0H13v-2.55c0-.932-.575-1.357-1.109-1.357-.332 0-.672.156-.953.438-.284.296-.389.469-.786.469C9.682 20 9 19.466 9 18.5s.682-1.5 1.152-1.5c.396 0 .501.173.785.468.281.283.621.438.953.438.534 0 1.109-.425 1.109-1.357V13h3.55c.536 0 .439.139.108.454-.261.245-.657.616-.657 1.394C16 15.887 17.004 17 18.5 17s2.5-1.113 2.5-2.152c0-.777-.396-1.148-.658-1.394-.333-.317-.425-.454.108-.454H23v10zm-2.55-11c-.933 0-1.356.575-1.356 1.109 0 .332.155.672.438.953.294.284.468.388.468.786 0 .47-.534 1.152-1.5 1.152s-1.5-.682-1.5-1.152c0-.397.174-.501.469-.785.282-.281.438-.621.438-.953 0-.534-.424-1.109-1.356-1.109H13V8.45c0-.535.137-.44.454-.109.245.263.616.659 1.394.659C15.887 9 17 7.996 17 6.5S15.887 4 14.848 4c-.777 0-1.148.396-1.394.659-.317.333-.454.424-.454-.109V1h10v11h-2.55z"/></svg>,
            title: `Quick Integration`,
            body: `With years of experience, I’m able to quickly understand the needs of a project and integrate seamlessly into existing workflows.`
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m15.91 13.34 2.636-4.026-.454-.406-3.673 3.099a1.994 1.994 0 0 0-1.894.618 2 2 0 1 0 2.983 2.665 1.99 1.99 0 0 0 .402-1.95zM12 2.694V0h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064 1.407-1.407 1.414 1.414-1.321 1.321a12.052 12.052 0 0 0-1.5-1.328zM2 9h8v2H2V9zm-2 4h8v2H0v-2zm3 4h7v2H3v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28A7.87 7.87 0 0 0 14 22c4.411 0 8-3.589 8-8s-3.589-8-8-8a7.87 7.87 0 0 0-3.831 1h-3.28C8.7 5.155 11.21 4 14 4c5.523 0 10 4.477 10 10z"/></svg>,
            title: `Reliable Delivery`,
            body: `I focus on delivering high-quality code on time, ensuring projects stay on schedule without sacrificing quality.`
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 3a3 3 0 0 0-6 0c0 .312.061.606.149.889l-4.21 3.157c.473.471.878 1.01 1.201 1.599l4.197-3.148A3.002 3.002 0 0 0 20 3zm-2 0a1.001 1.001 0 0 1-2 0 1.001 1.001 0 0 1 2 0zm3 12.062a3 3 0 0 0 0-6A2.994 2.994 0 0 0 18.203 11H11.92c.047.328.08.66.08 1s-.033.672-.08 1h6.244A2.99 2.99 0 0 0 21 15.062zm-1-3a1.001 1.001 0 1 1 1 1 1 1 0 0 1-1-1zM0 12a5 5 0 1 0 10 0 5 5 0 0 0-10 0zm2 0c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm7.939 4.955 4.21 3.157A2.962 2.962 0 0 0 14 21a3 3 0 1 0 1.338-2.496l-4.197-3.148a7.078 7.078 0 0 1-1.202 1.599zM16 21a1.001 1.001 0 1 1 1 1c-.552 0-1-.449-1-1z"/></svg>,
            title: `Wide Skillset`,
            body: `My expertise in HTML, CSS, JavaScript, React, and Next.js and UI Design allows me to contribute across a range of requirements.`
        }
    ];

    const outsourcingBullets: CardType[] = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm8.975 16.383-2.608-1.485a6.956 6.956 0 0 0 0-5.795l2.608-1.485C21.625 8.943 22 10.427 22 12s-.375 3.057-1.025 4.383zM2 12c0-1.573.375-3.057 1.025-4.383l2.608 1.485a6.956 6.956 0 0 0 0 5.795l-2.608 1.485A9.92 9.92 0 0 1 2 12zm5 0c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5zm9.397-8.968L14.912 5.64C14.024 5.233 13.04 5 12 5s-2.024.233-2.912.64L7.603 3.032C8.932 2.378 10.421 2 12 2s3.068.378 4.397 1.032zM7.603 20.968l1.485-2.608c.888.407 1.872.64 2.912.64s2.024-.233 2.912-.64l1.485 2.608C15.068 21.622 13.579 22 12 22s-3.068-.378-4.397-1.032z"/></svg>,
            title: `Scalable Support`,
            body: `I offer agencies the ability to scale up their front end capabilities without the overhead of hiring additional full-time staff.`
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24"><path d="M16.272 5.451A4.001 4.001 0 0 1 20 0c2.208 0 4 1.792 4 4a4.001 4.001 0 0 1-7.251 2.33l-7.131 3.751C9.864 10.672 10 11.32 10 12a4.96 4.96 0 0 1-.384 1.922l7.131 3.751A4.001 4.001 0 0 1 24 20c0 2.208-1.792 4-4 4a4.001 4.001 0 0 1-3.73-5.447l-7.129-3.751A4.997 4.997 0 0 1 5 17c-2.76 0-5-2.24-5-5s2.24-5 5-5c1.723 0 3.243.873 4.143 2.201l7.129-3.75zM20 17a3.001 3.001 0 0 1 0 6 3.001 3.001 0 0 1 0-6zM5 8c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm15-7a3.001 3.001 0 0 1 0 6 3.001 3.001 0 0 1 0-6z"/></svg>,
            title: `Experience with Collaboration `,
            body: `I have worked with a wide variety of teams, and can easily collaborate with your in-house designers, developers, and project managers.`
        },
        {
            // icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m24 9.844-3.583 6.781L19.333 14c-4.05 2.278-5.11 5.961-5.333 10h-4c.189-5.147 1.358-10.246 7.75-13.875L16.709 7.5 24 9.844zm-13.242 3.975C9.66 12.478 8.2 11.233 6.25 10.125L7.291 7.5 0 9.844l3.583 6.781L4.667 14c2.018 1.135 3.293 2.62 4.093 4.323a15.463 15.463 0 0 1 1.998-4.504zM12 0 7 5h3v5.267a16.314 16.314 0 0 1 2.011 1.936A16.22 16.22 0 0 1 14 10.267V5h3l-5-5z"/></svg>,
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 14H0v-2h8.672L8 14zM0 24v-8h24v8H0zm2-2h20v-4h-2v2h-1v-2h-2v3h-1v-3h-2v2h-1v-2h-2v2h-1v-2H8v3H7v-3H5v2H4v-2H2v4zm9.398-12.26L10 14l4.227-1.432-2.829-2.828zM21.172 0 24 2.828l-8.587 8.554-2.828-2.828L21.172 0z"/></svg>,
            title: `Tailored Solutions`,
            body: `I adapt my services to fit the unique needs of each agency, from UI implementation to handling more complex front end challenges.`
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.888 19.744c-1.229.588-1.88.732-3.018.732-2.735 0-4.233-2.064-7.453-.977.489-.641 2.698-3 2.431-6.5H16v-1.988h-4.559c-.708-2.295-1.913-4.278-.517-6.471 1.441-2.263 4.976-1.733 5.967 1.484l3.561-.521C19.798 1.453 16.383 0 13.568 0 9.04 0 4.502 3.621 6.595 11.012H4V13h3.068c.692 3.823-.458 5.797-2.958 7.901L5.906 24c4.771-2.849 7.205 0 11.499 0 1.296-.008 2.394-.309 3.595-.994l-1.112-3.262z"/></svg>,
            title: `Cost-Effective`,
            body: `Outsourcing to me provides a cost-effective solution for agencies, helping you meet client demands without overstretching your team.`
        }
    ];

    const freelancingBullets: CardType[] = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.118 16.064c2.293-.529 4.428-.993 3.394-2.945C10.366 7.177 12.678 4 16 4c3.388 0 5.644 3.299 2.488 9.119-1.065 1.964 1.149 2.427 3.394 2.945 1.986.459 2.118 1.43 2.118 3.111l-.003.825H8.003c0-2.196-.176-3.407 2.115-3.936zM.002 20h6.001c-.028-6.542 2.995-3.697 2.995-8.901C8.998 9.09 7.687 8 6 8c-2.492 0-4.226 2.383-1.866 6.839.775 1.464-.825 1.812-2.545 2.209C.099 17.392 0 18.12 0 19.381L.002 20z"/></svg>,
            title: `Personalised Approach`,
            body: `I work closely with business owners to ensure their vision is fully realised, delivering websites that align with their goals and brand.`
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24"><path d="M13.403 24H0V2h3C4.231 2 5.181.916 6 0h8c.821.916 1.772 2 3 2h3v9.15a7.57 7.57 0 0 0-1.5-.15l-.5.016V4h-4l-2 2H8.103L6 4H2v18h9.866a7.529 7.529 0 0 0 1.537 2zM18.5 13c3.035 0 5.5 2.464 5.5 5.5S21.535 24 18.5 24c-3.036 0-5.5-2.464-5.5-5.5s2.464-5.5 5.5-5.5zm0 2c1.931 0 3.5 1.568 3.5 3.5S20.431 22 18.5 22c-1.932 0-3.5-1.568-3.5-3.5s1.568-3.5 3.5-3.5zm2.5 4h-3v-3h1v2h2v1zM5.849 14.948 4.8 13.964l-.8.823 1.864 1.776L9 13.371l-.815-.808-2.336 2.385zM12 16h-2v-1h2v1zm2-2h-4v-1h4v1zM5.849 9.975 4.8 8.992l-.8.823 1.864 1.776L9 8.399l-.815-.808-2.336 2.384zM14 11h-4v-1h4v1zm0-2h-4V8h4v1zM9 3a1.001 1.001 0 1 0 2.002-.002A1.001 1.001 0 0 0 9 3z"/></svg>,
            title: `Full Project Management`,
            body: `I handle everything from concept to deployment, providing an end-to-end service that small to medium businesses can rely on.`
        },
        {
            // icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m24 3.875-6 1.221 1.716 1.708-5.351 5.358-3.001-3.002-7.336 7.242 1.41 1.418 5.922-5.834 2.991 2.993 6.781-6.762 1.667 1.66L24 3.875zM24 20v2H0V2h2v18h22z"/></svg>,
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.5 21.5c2.081 0 4.239-.484 5.5-1.402v.652c0 1.243-2.56 2.25-5.5 2.25-2.939 0-5.5-1.007-5.5-2.25v-.652c1.26.918 3.42 1.402 5.5 1.402zm0-5c2.081 0 4.239-.484 5.5-1.402v.652c0 1.242-2.56 2.25-5.5 2.25-2.939 0-5.5-1.007-5.5-2.25v-.652c1.26.918 3.42 1.402 5.5 1.402zm0 2.5c2.081 0 4.239-.484 5.5-1.401v.651c0 1.243-2.56 2.25-5.5 2.25-2.939 0-5.5-1.007-5.5-2.25v-.651c1.26.917 3.42 1.401 5.5 1.401zm0-5c2.081 0 4.239-.484 5.5-1.401v.651c0 1.243-2.56 2.25-5.5 2.25-2.939 0-5.5-1.007-5.5-2.25v-.651c1.26.917 3.42 1.401 5.5 1.401zm0-13C15.561 1 13 2.007 13 3.25s2.561 2.25 5.5 2.25c2.94 0 5.5-1.007 5.5-2.25S21.44 1 18.5 1zm.174 3.28v.22h-.354v-.208a3.885 3.885 0 0 1-1.058-.152l.162-.343c.269.063.606.126.911.126l.229-.014c.405-.053.486-.301.037-.419-.328-.09-1.335-.166-1.335-.675 0-.284.367-.537 1.054-.593V2h.354v.211c.258.005.544.03.863.09l-.128.342a3.86 3.86 0 0 0-.779-.099l-.079.001c-.531.02-.573.287-.207.399.602.169 1.394.292 1.394.74-.001.358-.477.549-1.064.596zM18.5 11.5c2.081 0 4.239-.484 5.5-1.402v.652c0 1.243-2.56 2.25-5.5 2.25-2.939 0-5.5-1.007-5.5-2.25v-.652c1.26.918 3.42 1.402 5.5 1.402zm0-5c2.081 0 4.239-.484 5.5-1.402v.652C24 6.993 21.44 8 18.5 8 15.561 8 13 6.993 13 5.75v-.652c1.26.918 3.42 1.402 5.5 1.402zm0 2.5c2.081 0 4.239-.484 5.5-1.401v.651c0 1.243-2.56 2.25-5.5 2.25-2.939 0-5.5-1.007-5.5-2.25v-.651C14.26 8.516 16.42 9 18.5 9zm-13 2C2.561 11 0 12.007 0 13.25s2.561 2.25 5.5 2.25c2.94 0 5.5-1.007 5.5-2.25S8.44 11 5.5 11zm.174 3.28v.22h-.353v-.208a3.873 3.873 0 0 1-1.058-.152l.162-.343c.269.063.607.126.911.126l.229-.014c.405-.053.487-.301.038-.419-.329-.09-1.335-.166-1.335-.675 0-.284.368-.537 1.054-.593V12h.353v.211c.258.005.544.03.863.09l-.128.342a3.852 3.852 0 0 0-.779-.099l-.08.001c-.53.02-.572.287-.206.399.602.169 1.393.292 1.393.74-.001.358-.477.549-1.064.596zM5.5 21.5c2.081 0 4.239-.484 5.5-1.402v.652C11 21.993 8.44 23 5.5 23 2.561 23 0 21.993 0 20.75v-.652c1.26.918 3.42 1.402 5.5 1.402zm0-5c2.081 0 4.239-.484 5.5-1.402v.652C11 16.993 8.44 18 5.5 18 2.561 18 0 16.993 0 15.75v-.652c1.26.918 3.42 1.402 5.5 1.402zm0 2.5c2.081 0 4.239-.484 5.5-1.401v.651c0 1.243-2.56 2.25-5.5 2.25-2.939 0-5.5-1.007-5.5-2.25v-.651C1.26 18.516 3.42 19 5.5 19z"/></svg>,
            title: `Cost-Conscious`,
            body: `I understand budget constraints and deliver solutions that are both affordable and scalable as the business grows.`
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m13.895 10.623 1.37-2.054a1.143 1.143 0 0 1 1.901 1.268l-1.369 2.054a1.143 1.143 0 0 1-1.902-1.268zm-1.881-.684a1.145 1.145 0 0 0 1.587-.317l1.383-2.074a1.144 1.144 0 1 0-1.904-1.27l-1.383 2.074a1.142 1.142 0 0 0 .317 1.587zm7.007 3.949-1.212 1.817a1.052 1.052 0 0 0 1.75 1.166l1.211-1.817a1.05 1.05 0 1 0-1.749-1.166zm-3.071-.84a1.139 1.139 0 1 0 1.895 1.264l1.312-1.968a1.138 1.138 0 1 0-1.895-1.264l-1.312 1.968zM21.615 24c-.609 0-1.22-.232-1.686-.698l-7.022-7.144c1.088-1.203.56-3.279-1.182-3.588l-3.074-.546-1.058-1.058a2.992 2.992 0 0 0-2.273-.871 5.036 5.036 0 0 1-3.842-1.472A5.065 5.065 0 0 1 .277 3.396L3.491 6.61c1.253.074 3.192-1.865 3.118-3.119L3.396.277a5.06 5.06 0 0 1 5.226 1.202 5.04 5.04 0 0 1 1.472 3.842 2.99 2.99 0 0 0 .871 2.273l.027.027c-1.243 2.083.433 3.51 1.806 3.457-.247 1.181 1.017 2.411 2.102 2.411-.269 1.04.536 2.125 1.789 2.371-.505 1.822 2.258 3.767 3.857 1.315l2.756 2.755A2.384 2.384 0 0 1 21.615 24zm.885-2.5a1 1 0 1 0-2.001.001A1 1 0 0 0 22.5 21.5zm-9.631-3.939c-.667-.688-1.701-.739-3.584-.864-.286-.019-.462.165-.485.443l-.458 4.208s2.794 1.888 3.94 2.652c1.064-1.921 2.699-2.037 3.921-3.002l-3.334-3.437zm-1.622-1.692c1.457 0 1.678-2.064.303-2.308-5.171-.919-4.899-.889-5.069-.889-.635 0-1.186.453-1.309 1.078l-.446 3.946c-.061.631.145 1.176.633 1.532.487.354 2.026 1.449 2.026 1.449s.328-2.835.42-3.651c.093-.815.551-1.378 1.424-1.335.092.004 1.859.178 2.018.178z"/></svg>,
            title: `Ongoing Support`,
            body: `I offer continued support and maintenance, ensuring that websites stay updated and evolve with the business's needs.`
        }
    ];

    return (
        <>
            {/* <Breadcrumbs /> */}
            <ServicesMasthead />

            <BulletsCallout
                title={`Contracting`}
                image={contracting}
                body={`As a contractor, I bring flexibility and expertise to projects that require a skilled front-end developer. Whether you need additional support for a large-scale initiative or require a specialist to jump in and meet tight deadlines, I can seamlessly integrate into your team. I focus on delivering high-quality results, ensuring projects are completed efficiently and to the highest standards.`}
                bullets={contractingBullets}
                reverse
            />

            <BulletsCallout
                title={`Outsourcing`}
                image={outsourcing}
                body={`For local agencies looking to expand their capacity, I offer my services as an outsourced resource. I'm experienced in working with diverse teams and can provide front end support on a project-by-project basis, freeing up your internal resources. From UI design implementation to the development of custom interfaces, I work closely with agencies to help deliver exceptional digital experiences for their clients.`}
                bullets={outsourcingBullets}
            />

            <BulletsCallout
                title={`Freelancing`}
                image={freelance}
                body={`I also work directly with small to medium-sized businesses, offering bespoke front end development services. Whether it's building a website from scratch or improving an existing one, I collaborate closely with business owners to understand their vision and deliver solutions that enhance their online presence. My aim is to provide cost-effective, scalable websites that meet both business and user needs.`}
                bullets={freelancingBullets}
                reverse
            />

            <Testimonials />
            <Faqs />
        </>
    )
}
