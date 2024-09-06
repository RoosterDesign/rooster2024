import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';

import { CardType } from '@/components/Card/CardType';
import Card from '@/components/Card/Card';

import styles from './ServicesMasthead.module.scss';

export default function ServicesMasthead() {

    const services: CardType[] = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24"><path d="M15.517 24H3.871c.522-3.035.897-6.162-.422-8.028C1.783 13.615 1.019 11.23 1 9.089.955 3.899 5.231-.025 11.203 0c7.236.03 9.328 6.156 9.773 7.943.34 1.369-.898 1.869-.166 2.702.596.679 1.035 1.364 1.789 2.177.292.315.405.646.401.943-.006.434-.291.798-.748.958-.429.15-.76.32-1.215.443-.145 1.16-.521 2.572-.798 3.557-.737 2.62-2.896 1.059-3.881 2.607-.426.668-.64 1.738-.841 2.67zM11.673 5h-1.346c-.243.681-.312 1.122-.842 1.341-.53.22-.888-.041-1.545-.353l-.952.952c.311.654.573 1.015.353 1.545-.219.53-.66.599-1.341.841v1.347c.68.242 1.122.312 1.341.842.222.534-.047.902-.353 1.544l.952.952c.652-.309 1.015-.573 1.545-.353v.001c.529.219.599.657.842 1.341h1.346c.243-.682.313-1.121.845-1.343h.001c.526-.219.883.042 1.541.354l.952-.952c-.31-.651-.573-1.014-.354-1.544.219-.529.662-.6 1.342-.842V9.326c-.688-.244-1.123-.313-1.341-.841-.22-.53.041-.89.353-1.545l-.952-.952c-.651.31-1.014.573-1.545.353-.529-.219-.598-.657-.842-1.341zM11 11.667a1.668 1.668 0 1 1 .002-3.336A1.668 1.668 0 0 1 11 11.667z"/></svg>,
            title: `Problem Solver`,
            body: `I thrive on finding creative, innovative solutions that enhance both functionality and aesthetics, ensuring the best user experience all round.`
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m23.111 20.058-4.977-4.977a9.767 9.767 0 0 0 1.523-5.251c0-5.42-4.409-9.83-9.829-9.83C4.408 0 0 4.41 0 9.83s4.408 9.83 9.829 9.83a9.764 9.764 0 0 0 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zM3.047 9.83c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749a7.002 7.002 0 0 0-9.922-.749z"/></svg>,
            title: `Detail Oriented`,
            body: `I have a keen eye for design, ensuring that every pixel and line of code works together to create a polished, cohesive, visually appealing product.`
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 12a3 3 0 1 1-5.943-.581c1.474.541 2.927-.882 2.405-2.371A3 3 0 0 1 15 12zm-2.985-7C4.446 5 0 11.551 0 11.551S4.835 19 12.015 19C19.748 19 24 11.551 24 11.551S19.709 5 12.015 5zM12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/></svg>,
            title: `User Centric`,
            body: `I design and develop always with the end user in mind, ensuring interfaces are not only intuitive, and accessible, but also engaging and unique.`
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24"><path d="M12.5 17.52c1.415-1.054 3.624-1.846 5.5-2v6.479c-1.739.263-3.755 1.104-5.5 2V17.52zm-1 0c-1.415-1.054-3.624-1.846-5.5-2v6.479c1.739.263 3.755 1.104 5.5 2V17.52zM5 20.437C2.951 19.763 2.004 19 2.004 19L2 16.975c-.008-2.127.088-3.344 2.648-3.909 2.805-.619 5.799-1.317 4.241-3.521C4.988 4.022 8.08 0 12 0c3.921 0 6.996 3.991 3.11 9.545-1.529 2.185 1.376 2.888 4.242 3.521 2.57.568 2.657 1.791 2.647 3.934l-.003 2s-.947.763-2.996 1.437v-6.003l-1.082.089c-2.054.169-4.36 1.002-5.918 2.128-1.559-1.126-3.863-1.959-5.918-2.128L5 14.434v6.003z"/></svg>,
            title: `Adaptable`,
            body: `I'm quick to learn and adapt to new tools, technologies, and project requirements, ensuring I always stay current with the latest industry trends.`
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24"><path d="M6.72 20.492A9.941 9.941 0 0 0 12 22c1.934 0 3.741-.55 5.272-1.503l1.24 1.582A11.94 11.94 0 0 1 12 24c-2.403 0-4.642-.708-6.52-1.926l1.24-1.582zm6.405-.992-.594.391a.465.465 0 0 1-.307.109h-.447a.466.466 0 0 1-.308-.109l-.594-.391h2.25zM24 19h-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zM6 19H0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zm7.146-.5a.25.25 0 0 1 0 .5h-2.279a.25.25 0 0 1 0-.5h2.279zm.247-.5c0-2.002 1.607-2.83 1.607-4.614 0-1.86-1.501-2.886-3.001-2.886S9 11.524 9 13.386c0 1.784 1.607 2.639 1.607 4.614h2.786zM21 12a2.25 2.25 0 1 1-.002 4.502A2.25 2.25 0 0 1 21 12zM3 12a2.25 2.25 0 1 1-.002 4.502A2.25 2.25 0 0 1 3 12zm12.87 2.385 1.349.612-.413.911-1.298-.588c.15-.3.275-.608.362-.935zm-7.739 0c.087.332.208.631.36.935l-1.296.588-.414-.911 1.35-.612zM17.5 12.5v1h-1.501c.01-.335-.02-.672-.093-1H17.5zm-9.406 0a4.076 4.076 0 0 0-.092.997v.003H6.5v-1h1.594zm6.928-1.714 1.242-.882.579.816-1.252.888a3.627 3.627 0 0 0-.569-.822zm-6.044-.001c-.23.252-.418.525-.569.823l-1.251-.888.578-.816 1.242.881zm4.435-1.046.663-1.345.897.443-.664 1.345a4.063 4.063 0 0 0-.896-.443zm-2.826-.001c-.315.11-.618.258-.897.442l-.663-1.343.897-.443.663 1.344zM8 .684v2.149a10.026 10.026 0 0 0-5.798 7.158L.168 9.988C.9 5.66 3.953 2.116 8 .684zm8 0c4.047 1.432 7.1 4.976 7.832 9.304l-2.034.003A10.026 10.026 0 0 0 16 2.833V.684zM12.5 9.53a4.233 4.233 0 0 0-1-.001V8h1v1.53zM15 7H9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zm-3-7a2.25 2.25 0 1 1-.002 4.502A2.25 2.25 0 0 1 12 0z"/></svg>,
            title: `Collaboration`,
            body: `I work well with teams to bring their vision to life, while also being able to manage projects independently for smooth and efficient delivery.`
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4.435C10.011-.964 0-.162 0 8.003 0 12.071 3.06 17.484 12 23c8.94-5.516 12-10.929 12-14.997C24-.115 14-.996 12 4.435z"/></svg>,
            title: `Passion`,
            body: ` I bring passion for design and development, consistently striving for excellence and going the extra mile to deliver exceptional results.`
        }
        // {
        //     icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0z"/></svg>,
        //     title: 'NextJS',
        //     body: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Nunc eu sapien.'
        // }
        // {
        //     icon: <svg className="cms" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.776 18.689 7.012-7.012a.763.763 0 0 0 .217-.532.715.715 0 0 0-.218-.515l-2.423-2.415a.74.74 0 0 0-1.045 0l-7.027 6.996c-.442 1.371-1.158 3.586-1.265 3.952-.125.433.199.834.573.834.41 0 .696-.099 4.176-1.308zm-2.258-2.392 1.17 1.171c-.704.232-1.275.418-1.729.566zm.968-1.154 5.356-5.331 1.347 1.342-5.346 5.347zM9 13.75a.772.772 0 0 0-.75-.75h-5.5c-.394 0-.75.348-.75.75s.356.75.75.75h5.5c.394 0 .75-.348.75-.75zm5-3a.772.772 0 0 0-.75-.75H2.75c-.394 0-.75.348-.75.75s.356.75.75.75h10.5c.394 0 .75-.348.75-.75zm0-3a.772.772 0 0 0-.75-.75H2.75c-.394 0-.75.348-.75.75s.356.75.75.75h10.5c.394 0 .75-.348.75-.75zm0-3a.772.772 0 0 0-.75-.75H2.75c-.394 0-.75.348-.75.75s.356.75.75.75h10.5c.394 0 .75-.348.75-.75z" fillRule="nonzero"/></svg>,
        //     title: 'CMS',
        //     body: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Nunc eu sapien.'
        // },
        // {
        //     icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m4.558 7 4.701-4.702a1.02 1.02 0 0 1 1.442 1.442L7.441 7H4.558zm12.001 0h2.883l-4.701-4.702a1.02 1.02 0 0 0-1.442 1.442L16.559 7zm3.703 4-.016.041L16.648 20H7.352l-3.597-8.961L3.739 11h16.523zM24 9H0v2h.643c.534 0 1.021.304 1.256.784L6 22h12l4.102-10.214A1.396 1.396 0 0 1 23.358 11H24V9z"/></svg>,
        //     title: 'E-Commerce',
        //     body: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Nunc eu sapien.'
        // },
        // {
        //     icon: <svg className="wcag" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.002 2C17.52 2 22 6.48 22 11.998c0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997C2.005 6.48 6.485 2 12.002 2zm4.047 7.107c-.235 0-1.893.576-4.044.576-2.167 0-3.792-.576-4.045-.576a.688.688 0 0 0-.156 1.356c.613.16 1.262.293 1.757.542.459.231.78.566.78 1.14 0 2.027-1.325 3.92-1.859 4.817l-.001.001a.688.688 0 0 0 1.083.827c.447-.449 1.334-1.784 1.739-2.429.2-.319.395-.621.705-.622.302.001.498.303.699.622.405.645 1.29 1.98 1.737 2.429a.688.688 0 0 0 1.078-.836l-.001-.002c-.546-.919-1.853-2.778-1.853-4.807 0-.609.368-.956.851-1.186.519-.247 1.167-.362 1.681-.495a.693.693 0 0 0 .536-.67.688.688 0 0 0-.687-.687zm-4.031-3.113a1.59 1.59 0 0 0-1.586 1.593 1.59 1.59 0 0 0 1.586 1.592 1.59 1.59 0 0 0 1.586-1.592c0-.88-.71-1.593-1.586-1.593z" fillRule="nonzero"/></svg>,
        //     title: 'WCAG / WAI-ARIA',
        //     body: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Nunc eu sapien.'
        // },
        // {
        //     icon: <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 24 24"><path d="M3 24h19V1h-1v22H3v1zM20 0H2v22h18V0zm-1 1H3v20h16V1zm-2 16H5v1h12v-1zm0-3H5v1h12v-1zm0-3H5v1h12v-1zM9.652 7.137l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231a1.026 1.026 0 0 0-.358-.594 1.025 1.025 0 0 0-.663-.218c-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z"/></svg>,
        //     title: 'Download my CV',
        //     body: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Nunc eu sapien.',
        //     link: '/neil-dewing-cv.pdf',
        //     isExternal: true
        // }
    ];

    return (
        <section className={styles.servicesMasthead}>
            <Container>

                <div className={styles.intro}>
                    <Heading title={`What I offer`} isH1 />
                    <p>{`I offer comprehensive services to help businesses create engaging, user-friendly digital experiences. From designing intuitive interfaces to developing responsive, high-performance websites, I blend creativity with technical expertise. I offer a range of services which include Contracting, Outsourcing and Freelancing.`}</p>
                </div>

                { services.map((service, i) => (
                    <Card
                        key={i}
                        icon={service.icon}
                        title={service.title}
                        body={service.body}
                        link={service.link}
                        isExternal={service.isExternal}
                    />
                )) }




            </Container>
        </section>
    )
}
