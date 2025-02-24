/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "lh3.googleusercontent.com",
            "firebasestorage.googleapis.com",
            "res.cloudinary.com"
        ],
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    async rewrites() {
        return [
            { source: "/sitemap.xml", destination: "/sitemap" },
            { source: "/ads.txt", destination: "/ads" },
            { source: "/robots.txt", destination: "/robots" }
        ];
    },
};

module.exports = nextConfig;