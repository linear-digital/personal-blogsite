
export default function robots() {
    return {
        rules: [
            {
                userAgent: "Googlebot",
                allow: "/",
                disallow: ["/admin"],
            },
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/private"],
            },
        ],
        sitemap: "https://genzit.xyz/sitemap.xml",
    };
}
