"use client";
import { PropsWithChildren } from "react";
// import { getStoryblokApi, storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { initStoryblok } from '@/storyblok';
import Page from "@/components/Page/Page";
import HomeHero from '@/components/HomeHero/HomeHero';
import ClientLogos from "@/components/ClientLogos/ClientLogos";
import AOS from '@/components/AOS/AOS';
import Callout from '@/components/Callout/Callout';
import Testimonials from "@/components/Testimonials/Testimonials";
import SkillSet from "@/components/SkillSet/SkillSet";
import ServicesList from "@/components/ServicesList/ServicesList";
import AboutMasthead from "@/components/AboutMasthead/AboutMasthead";
import SkillsGraph from "@/components/SkillsGraph/SkillsGraph";
import BulletsCallout from "@/components/BulletsCallout/BulletsCallout";
import ServicesMasthead from "@/components/ServicesMasthead/ServicesMasthead";
import Faqs from "@/components/Faqs/Faqs";
import Masthead from "@/components/Masthead/Masthead";
import Portfolio from "@/components/Portfolio/Portfolio";

const components = {
    page: Page,
    home_hero: HomeHero,
    client_logos: ClientLogos,
    aos: AOS,
    testimonials_list: Testimonials,
    callout: Callout,
    skillset: SkillSet,
    services: ServicesList,
    intro_text: ServicesList,
    about_masthead: AboutMasthead,
    skills_graph: SkillsGraph,
    bullet_callout: BulletsCallout,
    services_masthead: ServicesMasthead,
    frequently_asked_questions: Faqs,
    masthead: Masthead,
    portfolio_list: Portfolio
};

initStoryblok({
    components: components,
    enableFallbackComponent: true
});

// storyblokInit({
//     accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
//     use: [apiPlugin],
//     components: components,
//     enableFallbackComponent: true
// });

export default function StoryblokProvider({ children }: PropsWithChildren) {
    return children;
}
