// import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import AboutMasthead from "@/components/AboutMasthead/AboutMasthead";
import SkillsGraph from "@/components/SkillsGraph/SkillsGraph";
// import ImageBlock from "@/components/ImageBlock/ImageBlock";
import BulletsCallout from '@/components/BulletsCallout/BulletsCallout';
import Callout from "@/components/Callout/Callout";
import Testimonials from '@/components/Testimonials/Testimonials';
import { CardType } from '@/components/Card/CardType';

import neilHeadshot from '/public/neil-headshot.jpg';

const bullets: CardType[] = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.852 6h-.004c.485-.627 1.072-1.547 1.072-2.744C15.92 1.684 14.421 0 12.189 0 9.959 0 8.46 1.684 8.46 3.256c0 1.195.587 2.117 1.072 2.744H3v6.528c0 .974.438 1.736 1.172 2.04.709.293 1.547.078 2.186-.562C7.604 12.708 9 13.875 9 15.189c0 1.29-1.396 2.484-2.644 1.184-.638-.639-1.476-.854-2.185-.561C3.438 16.115 3 16.878 3 17.852V24h18V6h-6.148zM5 22v-4.152c.627.485 1.547 1.072 2.744 1.072 1.572 0 3.256-1.499 3.256-3.73 0-2.23-1.684-3.729-3.256-3.729-1.195 0-2.117.587-2.744 1.072V8h4.528c.974 0 1.736-.438 2.04-1.171.293-.71.078-1.548-.562-2.187C9.708 3.397 10.875 2 12.189 2c1.29 0 2.484 1.397 1.184 2.644-.639.638-.854 1.476-.561 2.185.303.733 1.066 1.171 2.04 1.171H19v14H5z"/></svg>,
        title: 'Problem-Solving',
        body: 'I demonstrate strong problem-solving abilities, effectively addressing challenges and finding innovative solutions.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24"><path d="M10.5 24h-7A2.5 2.5 0 0 1 1 21.5V9.86a2.368 2.368 0 0 1-.711-3.07 262.16 262.16 0 0 1 3.265-5.654A2.366 2.366 0 0 1 5.599 0c.635 0 .972.204 1.445.479.662.386 9 5.352 12.512 7.441.087.052 3.366 1.988 3.449 2.045.663.49.995 1.197.995 1.934 0 .375-.092.745-.295 1.13a255.783 255.783 0 0 1-3.265 5.655c-.577.92-1.615 1.29-2.496 1.088-.392.234-5.826 3.75-6.252 3.968-.413.212-.762.26-1.192.26M3 13.237V21.5a.5.5 0 0 0 .5.5h4.588A595.88 595.88 0 0 1 3 13.237m1.606-1.238c.053.092 5.681 9.797 5.726 9.859a.36.36 0 0 0 .455.098c.164-.092 5.081-3.251 5.081-3.251-.639-.377-8.144-4.851-11.262-6.706m.659-9.829C4.352 3.626 2.066 7.695 2.03 7.78a.377.377 0 0 0 .149.464c.201.12 16.023 9.547 16.177 9.571a.376.376 0 0 0 .377-.174c.942-1.584 3.206-5.55 3.232-5.601a.38.38 0 0 0-.15-.465c-.201-.12-15.983-9.499-16.09-9.546a.375.375 0 0 0-.46.141m1.557 2.695a2 2 0 1 1-.001 3.999 2 2 0 0 1 .001-3.999"/></svg>,
        title: 'Creative Design Skills',
        body: 'I combine technical know-how with strong UI design skills to create visually appealing and functional interfaces.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 3.002c4.411 0 8 2.849 8 6.35 0 3.035-3.029 6.311-7.925 6.311-1.58 0-2.718-.317-3.718-.561-.966.593-1.256.813-3.006 1.373.415-1.518.362-2.182.331-3.184C2.845 12.29 2 11.222 2 9.352c0-3.501 3.589-6.35 8-6.35zM10 1C4.719 1 0 4.526 0 9.352c0 1.711.615 3.391 1.705 4.695.047 1.527-.851 3.718-1.661 5.312 2.168-.391 5.252-1.258 6.649-2.115 1.181.289 2.312.421 3.382.421 5.903 0 9.925-4.038 9.925-8.313C20 4.5 15.249 1 10 1zm11.535 11.174a9.229 9.229 0 0 1-.601 1.416c1.677 1.262 2.257 3.226.464 5.365-.021.745-.049 1.049.138 1.865-.892-.307-.979-.392-1.665-.813-2.127.519-4.265.696-6.089-.855-.562.159-1.145.278-1.74.364 1.513 1.877 4.298 2.897 7.577 2.1.914.561 2.933 1.127 4.352 1.385-.53-1.045-1.117-2.479-1.088-3.479 1.755-2.098 1.543-5.436-1.348-7.348zM6.5 8.411a1.071 1.071 0 1 0 0 2.142 1.071 1.071 0 0 0 0-2.142zm3.5 0a1.071 1.071 0 1 0 0 2.142 1.071 1.071 0 0 0 0-2.142zm3.5 0a1.071 1.071 0 1 0 0 2.142 1.071 1.071 0 0 0 0-2.142z"/></svg>,
        title: 'Clear Communication',
        body: 'I value clear and effective communication to keep projects on track and aligned with your vision.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24"><path d="M19.004 1c-.947 0-1.895.268-2.719.803a12.06 12.06 0 0 1 6.914 6.909A4.99 4.99 0 0 0 24 5.995 4.994 4.994 0 0 0 19.004 1M12 21c-4.411 0-8.001-3.59-8.001-8 0-4.413 3.59-8.001 8.001-8.001 4.412 0 8.002 3.588 8.002 8.001 0 4.41-3.59 8-8.002 8m10.002-8c0-5.522-4.475-10.001-10.002-10.001C6.477 2.999 1.999 7.478 1.999 13c0 4.316 3.087 10 10.001 10 6.93 0 10.002-5.693 10.002-10M.803 8.715a4.99 4.99 0 0 1-.802-2.718 4.993 4.993 0 0 1 7.712-4.192 12.037 12.037 0 0 0-6.91 6.91M12.999 13V8H11v6.998h5.999V13h-4z"/></svg>,
        title: 'Reliable, Timely Delivery',
        body: 'I consistently deliver projects on time, adhering to deadlines and maintaining high standards of quality.'
    }
];

export default function About() {
    return (
        <>
            {/* <Breadcrumbs /> */}

            <AboutMasthead />

            <BulletsCallout
                title={`Why choose me?`}
                image={neilHeadshot}
                body={`I bring a blend of technical expertise, creative design, and a commitment to delivering exceptional results. I prioritize clear communication, timely delivery, and a collaborative approach to align closely with your project goals and requirements. Choosing to work with me means partnering with a dedicated professional who values quality and reliability, offering you peace of mind and confidence in achieving your objectives.`}
                bullets={bullets}
                reverse
            />

            <SkillsGraph reverse />

            {/* <ImageBlock image={neilHeadshot} alt={`Neil Dewing - Freelance Front End Web Developer`} /> */}

            <Callout image={neilHeadshot}>
                <h2>{`Outside of my work, I have a variety of hobbies that keep me active and engaged.`}</h2>
                <p>{`I'm a big Arsenal fan, and an avid darts enthusiast. You may also find me down the local bowling alley where a misspent youth led to my highest ever score of 246 (including 7 strikes in a row!). Movies are another passion of mine, offering a great way to unwind.`}</p>
                <p>{`Gaming and airsoft are two of my more interactive hobbies, where strategy and skill come together. Airsoft, in particular, has led me to create a YouTube channel dedicated to sharing tips, gear reviews, and gameplay footage with a community of enthusiasts.`}</p>
                <p>{`Additionally, I have a black Labrador named Skye, who I love taking on long walks with my wife. Spending time outdoors with her is one of the best ways to relax and reset. Together, these activities keep me balanced, creative, and constantly engaged with new challenges.`}</p>
            </Callout>

            <Testimonials />
        </>
    )
}
