import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';

const cachedFetch = (input: any, init?: any): Promise<Response> => {
    return fetch(input, {
        ...init,
        cache: "no-store",
    })
}

export const initStoryblok = (options = {}) => {
    storyblokInit({
        accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
        use: [apiPlugin],
        apiOptions: {
            fetch: cachedFetch,
            region: "eu",
        },
        ...options,
    });
};
