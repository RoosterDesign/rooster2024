import { StoryblokStory } from "@storyblok/react/rsc";
import { fetchData } from '@/lib/storyblok';

export default async function About() {
    const sbOptions = {
        slug: "about",
        resolve_relations: ["testimonials_list.items"]
    }
    const { data } = await fetchData(sbOptions);
    const bridgeOptions = { resolveRelations: ["testimonials_list.items"] };

    return (
        <StoryblokStory story={data.story} bridgeOptions={bridgeOptions} />
    )
}
