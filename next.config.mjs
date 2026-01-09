/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',  // Required for GitHub Pages
    basePath: isProd ? '/kifaayat' : '', // Adapts for GitHub Pages subdirectory
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
