/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Required for GitHub Pages
    images: {
        unoptimized: true, // Required as GitHub Pages doesn't support Image Optimization API
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
};

export default nextConfig;
