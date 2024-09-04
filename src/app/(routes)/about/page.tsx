// import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import AboutMasthead from "@/components/AboutMasthead/AboutMasthead";
import SkillsGraph from "@/components/SkillsGraph/SkillsGraph";
import ImageBlock from "@/components/ImageBlock/ImageBlock";
import Callout from "@/components/Callout/Callout";
import Testimonials from '@/components/Testimonials/Testimonials';

import neilHeadshot from '/public/neil-headshot.jpg';

export default function About() {
    return (
        <>
            {/* <Breadcrumbs /> */}

            <AboutMasthead />

            <SkillsGraph />

            <ImageBlock image={neilHeadshot} alt={`Neil Dewing - Freelance Front End Web Developer`} />

            <Callout image={neilHeadshot}>
                <h2>{` Ut hendrerit tincidunt tellus, ut vestibulum neque efficitur ac. Ut ornare, leo at interdum consectetur, sem erat lobortis.`}</h2>
                <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat vel purus sed bibendum. Donec porttitor leo suscipit lorem finibus dignissim.`}</p>
                <p>{`Ut hendrerit tincidunt tellus, ut vestibulum neque efficitur ac. Ut ornare, leo at interdum consectetur, sem erat lobortis risus, ut vestibulum neque efficitur ac non pharetra sapien diam sit amet tellus.`}</p>
                <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat vel purus sed bibendum. Donec porttitor leo suscipit lorem finibus dignissim.`}</p>
            </Callout>

            <Testimonials />
        </>
    )
}
