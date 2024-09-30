import { StoryblokStory } from "@storyblok/react/rsc";
import { fetchData } from '@/lib/storyblok';

const Portfolio: React.FC = async () => {
    const sbOptions = {
        slug: "portfolio",
        resolve_relations: ["testimonials_list.items", "portfolio_list.items"]
    }
    const { data } = await fetchData(sbOptions);
    const bridgeOptions = { resolveRelations: ["testimonials_list.items", "portfolio_list.items"] };

    return (
        <StoryblokStory story={data.story} bridgeOptions={bridgeOptions} />
    )
}

export default Portfolio;
