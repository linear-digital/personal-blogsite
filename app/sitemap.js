import { fetcher } from "@/lib/dataFetcher";
import { fetchHashnodeBlogs } from "@/lib/hasnode";

export default async function sitemap() {
    // Fetch dynamic routes from your database or CMS
    const posts = await fetcher({ path: "/blog?limit=20" });

    // Generate sitemap entries
    const postEntries = posts.map((post) => ({
        url: `https://genzit.xyz/${post._id}`,
        lastModified: post.updatedAt,
        changeFrequency: "weekly",
        priority: 0.7,
    }));

    // Static routes
    const staticEntries = [
        {
            url: "https://genzit.xyz",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: "https://genzit.xyz/contact",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];

    return [...staticEntries, ...postEntries];
}
