import { HASHNODE_API, PUBLICATION } from "../hasnode";

export const fetchTag = async ({
  limit,
  tag,
}: { limit?: number; tag?: string } = {}) => {
  const query = {
    query: `query {
        publication(host: "${PUBLICATION}") {
          posts(first: ${limit ? limit : 10} , filter: {tagSlugs: "${tag}"}) {
            edges {
              node {
                id
                title
                slug
                subtitle
                brief
                coverImage {
                  url
                }
                tags { id name slug }
                publishedAt
                updatedAt
                author { id name username profilePicture tagline  }
                canonicalUrl
                series { id name }
                views
                readTimeInMinutes
                seo { title description }
              }
            }
          }
        }
      }`,
  };

  try {
    const response = await fetch(HASHNODE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
      cache: "no-cache",
    });

    const data = await response.json();
    return data.data.publication.posts.edges.map((edge: any) => edge.node);
  } catch (error) {
    console.error(error);
    return [];
  }
};
