import 'normalize.css/normalize.css';
import '@/app/globals.scss';
import { poppins, permanent_marker } from '@/lib/fonts'
import type { Metadata } from "next";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "@/components/StoryblokProvider";

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
    title: "Front-End Developer and UI/UX Designer based in Leamington Spa, Warwickshire",
    description: "Front-End Developer and UI/UX Designer offering outsourcing and contracting services across Warwickshire and West Midlands.",
};

const cachedFetch = (input: any, init?: any): Promise<Response> => {
    return fetch(input, {
        ...init,
        cache: "no-store",
    })
}
storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
    use: [apiPlugin],
    apiOptions: {
        fetch: cachedFetch,
        region: "eu",
    },
})

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
    return (
        <StoryblokProvider>
            <html lang="en" className={`${poppins.variable} ${permanent_marker.variable}`}>
                <body>
                    <Header />
                    {children}
                    <Footer />
                </body>
            </html>
        </StoryblokProvider>
    );
}
