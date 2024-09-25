// This file was generated by the storyblok CLI.
// DO NOT MODIFY THIS FILE BY HAND.
import type { ISbStoryData } from "storyblok";
export type MultilinkStoryblok =
    | {
        id?: string;
        cached_url?: string;
        anchor?: string;
        linktype?: "story";
        target?: "_self" | "_blank";
        story?: {
            name: string;
            created_at?: string;
            published_at?: string;
            id: number;
            uuid: string;
            content?: {
                [k: string]: any;
            };
            slug: string;
            full_slug: string;
            sort_by_date?: null | string;
            position?: number;
            tag_list?: string[];
            is_startpage?: boolean;
            parent_id?: null | number;
            meta_data?: null | {
                [k: string]: any;
            };
            group_id?: string;
            first_published_at?: string;
            release_id?: null | number;
            lang?: string;
            path?: null | string;
            alternates?: any[];
            default_full_slug?: null | string;
            translated_slugs?: null | any[];
            [k: string]: any;
        };
        [k: string]: any;
    }
    | {
        url?: string;
        cached_url?: string;
        anchor?: string;
        linktype?: "asset" | "url";
        target?: "_self" | "_blank";
        [k: string]: any;
    }
    | {
        email?: string;
        linktype?: "email";
        target?: "_self" | "_blank";
        [k: string]: any;
    };

export type MultiassetStoryblok = {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
    [k: string]: any;
}[];

export interface AboutMastheadStoryblok {
    experience_subtitle: string;
    clients_subtitle: string;
    experience_highlight: string;
    experience_content: string;
    experience_link: Exclude<MultilinkStoryblok, { linktype?: "email" } | { linktype?: "asset" }>;
    clients_logos: MultiassetStoryblok;
    component: "about_masthead";
    _uid: string;
    [k: string]: any;
}

export interface AosStoryblok {
    items?: (
        | AboutMastheadStoryblok
        | AosStoryblok
        | BulletCalloutStoryblok
        | ButtonStoryblok
        | CalloutStoryblok
        | CardStoryblok
        | CaseStudyStoryblok
        | ClientLogosStoryblok
        | FaqStoryblok
        | FrequentlyAskedQuestionsStoryblok
        | GridStoryblok
        | HomeHeroStoryblok
        | IntroTextStoryblok
        | MastheadStoryblok
        | PageStoryblok
        | PortfolioStoryblok
        | ServicesStoryblok
        | ServicesMastheadStoryblok
        | SkillsetStoryblok
        | SkillsGraphStoryblok
        | TestimonialStoryblok
        | TestimonialsListStoryblok
    )[];
    component: "aos";
    _uid: string;
    [k: string]: any;
}

export interface AssetStoryblok {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
    focus?: string;
    [k: string]: any;
}

export interface RichtextStoryblok {
    type: string;
    content?: RichtextStoryblok[];
    marks?: RichtextStoryblok[];
    attrs?: any;
    text?: string;
    [k: string]: any;
}

export interface BulletCalloutStoryblok {
    bullets: CardStoryblok[];
    image: AssetStoryblok;
    title: string;
    content: RichtextStoryblok;
    reversed?: boolean;
    component: "bullet_callout";
    _uid: string;
    [k: string]: any;
}

export interface ButtonStoryblok {
    label: string;
    link: Exclude<MultilinkStoryblok, { linktype?: "email" } | { linktype?: "asset" }>;
    component: "button";
    _uid: string;
    [k: string]: any;
}

export interface CalloutStoryblok {
    image: AssetStoryblok;
    title: string;
    content: RichtextStoryblok;
    component: "callout";
    _uid: string;
    [k: string]: any;
}

export interface CardStoryblok {
    link_label?: string;
    icon?: string;
    title: string;
    body: string;
    no_bg?: boolean;
    link?: Exclude<MultilinkStoryblok, { linktype?: "email" } | { linktype?: "asset" }>;
    isExternal?: boolean;
    component: "card";
    _uid: string;
    [k: string]: any;
}

export interface CaseStudyStoryblok {
    show_on_homepage?: boolean;
    thumbnail?: AssetStoryblok;
    show_as_casestudy?: boolean;
    casestudy_image?: AssetStoryblok;
    home_image?: AssetStoryblok;
    project_type?: string;
    client_name: string;
    synopsis?: string;
    description?: RichtextStoryblok;
    link?: Exclude<MultilinkStoryblok, { linktype?: "email" } | { linktype?: "asset" }>;
    component: "Case Study";
    _uid: string;
    [k: string]: any;
}

export interface ClientLogosStoryblok {
    images: MultiassetStoryblok;
    component: "client_logos";
    _uid: string;
    [k: string]: any;
}

export interface FaqStoryblok {
    question: string;
    answer: string;
    component: "faq";
    _uid: string;
    [k: string]: any;
}

export interface FrequentlyAskedQuestionsStoryblok {
    faqs: FaqStoryblok[];
    subtitle: string;
    title: string;
    component: "frequently_asked_questions";
    _uid: string;
    [k: string]: any;
}

export interface GridStoryblok {
    blocks?: (
        | AboutMastheadStoryblok
        | AosStoryblok
        | BulletCalloutStoryblok
        | ButtonStoryblok
        | CalloutStoryblok
        | CardStoryblok
        | CaseStudyStoryblok
        | ClientLogosStoryblok
        | FaqStoryblok
        | FrequentlyAskedQuestionsStoryblok
        | GridStoryblok
        | HomeHeroStoryblok
        | IntroTextStoryblok
        | MastheadStoryblok
        | PageStoryblok
        | PortfolioStoryblok
        | ServicesStoryblok
        | ServicesMastheadStoryblok
        | SkillsetStoryblok
        | SkillsGraphStoryblok
        | TestimonialStoryblok
        | TestimonialsListStoryblok
    )[];
    component: "grid";
    _uid: string;
    [k: string]: any;
}

export interface HomeHeroStoryblok {
    heading: RichtextStoryblok;
    cv_synopsis?: string;
    buttons?: ButtonStoryblok[];
    component: "home_hero";
    _uid: string;
    [k: string]: any;
}

export interface IntroTextStoryblok {
    title: string;
    body?: RichtextStoryblok;
    component: "intro_text";
    _uid: string;
    [k: string]: any;
}

export interface MastheadStoryblok {
    title: string;
    intro: RichtextStoryblok;
    has_container?: boolean;
    component: "masthead";
    _uid: string;
    [k: string]: any;
}

export interface PageStoryblok {
    body?: (
        | AboutMastheadStoryblok
        | AosStoryblok
        | BulletCalloutStoryblok
        | ButtonStoryblok
        | CalloutStoryblok
        | CardStoryblok
        | CaseStudyStoryblok
        | ClientLogosStoryblok
        | FaqStoryblok
        | FrequentlyAskedQuestionsStoryblok
        | GridStoryblok
        | HomeHeroStoryblok
        | IntroTextStoryblok
        | MastheadStoryblok
        | PageStoryblok
        | PortfolioStoryblok
        | ServicesStoryblok
        | ServicesMastheadStoryblok
        | SkillsetStoryblok
        | SkillsGraphStoryblok
        | TestimonialStoryblok
        | TestimonialsListStoryblok
    )[];
    component: "page";
    _uid: string;
    [k: string]: any;
}

export interface PortfolioStoryblok {
    items: (ISbStoryData<CaseStudyStoryblok> | string)[];
    layout: "" | "home-carousel" | "portfolio-carousel" | "portfolio-list";
    component: "portfolio";
    _uid: string;
    [k: string]: any;
}

export interface ServicesStoryblok {
    title: string;
    intro: RichtextStoryblok;
    blocks?: CardStoryblok[];
    component: "services";
    _uid: string;
    [k: string]: any;
}

export interface ServicesMastheadStoryblok {
    cards: CardStoryblok[];
    component: "services_masthead";
    _uid: string;
    [k: string]: any;
}

export interface SkillsetStoryblok {
    logos?: MultiassetStoryblok;
    title?: string;
    intro?: RichtextStoryblok;
    component: "skillset";
    _uid: string;
    [k: string]: any;
}

export interface SkillsGraphStoryblok {
    title: string;
    content: RichtextStoryblok;
    buttons?: ButtonStoryblok[];
    image: AssetStoryblok;
    logos: MultiassetStoryblok;
    component: "skills_graph";
    _uid: string;
    [k: string]: any;
}

export interface TestimonialStoryblok {
    avatar?: AssetStoryblok;
    author: string;
    jobRole?: string;
    company?: string;
    quote: string;
    component: "Testimonial";
    _uid: string;
    [k: string]: any;
}

export interface TestimonialsListStoryblok {
    items: (ISbStoryData<TestimonialStoryblok> | ISbStoryData<TestimonialStoryblok> | string)[];
    component: "testimonials_list";
    _uid: string;
    [k: string]: any;
}
