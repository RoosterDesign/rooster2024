import { getStoryblokApi, storyblokInit, apiPlugin } from "@storyblok/react/rsc";

type resolve_relations = string | string[];

interface sbOptionsInterface {
    slug: string;
    resolve_relations?: resolve_relations;
}

interface sbParamsInterface {
    version: "draft" | "published";
    resolve_relations?: resolve_relations;
}

const storyblokApi = getStoryblokApi();

export async function fetchData(sbOptions: sbOptionsInterface) {
    const { slug, resolve_relations } = sbOptions;
    let sbParams: sbParamsInterface = {
        version: "draft",  // or published
        resolve_relations: resolve_relations
    };

    const data = storyblokApi.get(`cdn/stories/${slug}`, sbParams, { cache: "no-store" })
    return data;
}


// export async function fetchTestimonials() {
//     let sbParams: sbParamsInterface = {
//         "by_uuids": "7d9f8c88-46cb-4e58-8dce-03f40f469762",
//         version: "draft",  // or published
//     };

//     const data = storyblokApi.get(`cdn/stories/`, sbParams, {

//         cache: "no-store"
//     }).then(response => {
//         console.log('response: ', response)
//     }).catch(error => {
//         console.log('error: ', error)
//     })

//     return data;

// }
