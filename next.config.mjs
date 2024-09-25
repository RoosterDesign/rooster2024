/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     remotePatterns: [
    //     {
    //         protocol: 'https',
    //         hostname: 'images.ctfassets.net',
    //         port: '',
    //         pathname: '/**',
    //     },
    //     ],
    // },
    images: {
        domains: ["a.storyblok.com"],
    },
    // images: {
    //   domains: ['images.ctfassets.net'],
    // },
};

export default nextConfig;
