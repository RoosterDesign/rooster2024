import { getStoryblokApi, StoryblokClient, ISbStoriesParams } from "@storyblok/react/rsc";
// import { initStoryblok } from '@/storyblok';

export async function fetchData(sbOptions: ISbStoriesParams) {
    // initStoryblok();
    const { slug, resolve_relations } = sbOptions;
    let sbParams: ISbStoriesParams = {
        version: "draft",
        resolve_relations: resolve_relations
    };

    const storyblokApi: StoryblokClient = getStoryblokApi();
    return storyblokApi.get(`cdn/stories/${slug}`, sbParams, { cache: "no-store" });
}
