export const HASHNODE_API = "https://gql.hashnode.com";
export const PUBLICATION = "fullstackfortrees.hashnode.dev";

// getPosts function (using fetch API)
export const getPosts = async (limit = 10) => {
  const query = `
    query Publication($limit: Int!) {
      publication(host: "${PUBLICATION}") {
        posts(first: $limit) {
          edges {
            node {
              id
              title
              slug
              content { markdown html }
              subtitle
              brief
              coverImage { url }
              tags { id name slug }
              publishedAt
              author { id name username profilePicture }
              canonicalUrl
              series { id name }
              views
              readTimeInMinutes
              seo { title description }
            }
          }
        }
      }
    }
  `;

  const variables = { limit };

  try {
    const response = await fetch(HASHNODE_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: "no-store",
      body: JSON.stringify({
        query,
        variables,
      },
      ),
    });

    const result = await response.json();
    if (response.ok) {
      return result.data.publication.posts.edges.map((edge) => edge.node);
    } else {
      console.error("GraphQL error:", result.errors);
      return [];
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

// fetchHashnodeBlogs function (using fetch API)
export const fetchHashnodeBlogs = async (limit = 10) => {
  const query = `
    query GetPosts($limit: Int!) {
      publication(host: "${PUBLICATION}") {
        posts(first: $limit) {
          edges {
            node {
              id
              title
              slug
              content { markdown html }
              subtitle
              brief
              coverImage { url }
              tags { id name slug }
              publishedAt
              author { id name username profilePicture }
              canonicalUrl
              series { id name }
              views
              readTimeInMinutes
              seo { title description }
            }
          }
        }
      }
    }
  `;

  const variables = { limit };

  try {
    const response = await fetch(HASHNODE_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: "no-store",
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const result = await response.json();
    if (response.ok) {
      return result.data.publication.posts.edges.map((edge) => edge.node);
    } else {
      console.error("GraphQL error:", result.errors);
      return [];
    }
  } catch (error) {
    console.error("Error fetching Hashnode blogs:", error);
    return [];
  }
};

// Fetch post by slug using fetch API
export const getPostBySlug = async (slug) => {
  const query = `
    query GetPost($slug: String!) {
      publication(host: "${PUBLICATION}") {
        post(slug: $slug) {
          id
          title
          slug
          content { markdown html }
          subtitle
          brief
          coverImage { url }
          tags { id name slug }
          publishedAt
          author { id name username profilePicture }
          canonicalUrl
          series { id name }
          views
          readTimeInMinutes
          seo { title description }
        }
      }
    }
  `;

  const variables = { slug };

  try {
    const response = await fetch(HASHNODE_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: "no-store",
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const result = await response.json();
    if (response.ok) {
      return result.data.publication.post;
    } else {
      console.error("GraphQL error:", result.errors);
      return null;
    }
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
};