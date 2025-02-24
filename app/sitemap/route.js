import { fetcher } from "@/lib/dataFetcher";
import { NextResponse } from "next/server";

const BASE_URL = "https://genzit.xyz";

const staticPages = [
    "/",
    "/contact",
    "/author-details",
    "/blogs",
    "/privacy-policy",
    "/terms-condition",
];

export async function GET() {
    // Fetch dynamic data (e.g., blog posts, categories, etc.)
    const blogs = await fetcher({ path: "/blog?limit=100" });
    const tags = await fetcher({ path: "/blog/tags" });

    const blogPosts = blogs.map(blog => ({
        slug: encodeURIComponent(blog.slug),
        lastmod: blog.publishedAt || new Date().toISOString(),
    }));

    // Process Categories
    const categories = tags.map(tag => encodeURIComponent(tag.slug));


    let sitemapEntries = [
        // Static Pages
        ...staticPages.map((page) => ({
            loc: `${BASE_URL}${page}`,
            lastmod: new Date().toISOString(),
            priority: 0.8,
        })),
        // Dynamic Blog Posts
        ...blogPosts.map((post) => ({
            loc: `${BASE_URL}/${post.slug}`,
            lastmod: post.lastmod,
            priority: 0.8,
        })),
        // Categories
        ...categories.map((category) => ({
            loc: `${BASE_URL}/category/${category}`,
            lastmod: new Date().toISOString(),
            priority: 0.8,
        })),
    ];

    // Generate XML Sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapEntries
            .map(
                ({ loc, lastmod, priority }) => `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>
  `
            )
            .join("")}
</urlset>`;

    return new NextResponse(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}