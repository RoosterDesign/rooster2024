import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

import { PageStoryblok } from '../../../component-types-sb';

interface Props {
    blok: PageStoryblok
}

const Page: React.FC<Props> = ({ blok }) => {
    const { body } = blok;

    return (
        <main {...storyblokEditable(blok)}>
            {body?.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </main>
    )
}

export default Page;
