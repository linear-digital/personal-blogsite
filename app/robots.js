
export default function robots() {
    return {
        rules: [
            {
                userAgent: "Googlebot",
                allow: "/"
            },
            {
                userAgent: "*",
                allow: "/"
            },
        ],
        sitemap: "https://genzit.xyz/sitemap.xml",
    };
}
