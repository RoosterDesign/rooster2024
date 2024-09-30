import { StoryblokStory } from "@storyblok/react/rsc";
import { fetchData } from '@/lib/storyblok';

const About: React.FC = async () => {
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

export default About;
