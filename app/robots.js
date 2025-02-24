

export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/admin", "/private"],
        },
        sitemap: "https://genzit.xyz/sitemap.xml",
    };
}