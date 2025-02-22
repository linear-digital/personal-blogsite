/* eslint-disable @typescript-eslint/no-explicit-any */

import { request, gql } from "graphql-request";

export const HASHNODE_API = "https://gql.hashnode.com";
export const PUBLICATION = "fullstackfortrees.hashnode.dev";
export async function getPosts(limit = 10) {
  const query = gql`
    query Publication($limit: Int!) {
      publication(host: "${PUBLICATION}") {
        posts(first: $limit) {
          edges {
            node {
              id
              title
              slug
              brief
              coverImage {
                url
              }
              publishedAt
            }
          }
        }
      }
    }
  `;

  const variables = { limit };
  const data = await request(HASHNODE_API, query, variables);
  return data.publication.posts.edges.map((edge) => edge.node);
}

export const fetchHashnodeBlogs = async (limit = 10) => {
  const query = gql`
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

  try {
    const data = await request(HASHNODE_API, query, { limit });
    return data.publication.posts.edges.map((edge) => edge.node);
  } catch (error) {
    console.error("Error fetching Hashnode blogs:", error);
    return [];
  }
};

export async function getPostBySlug(slug) {
  const query = gql`
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
  const data = await request(HASHNODE_API, query, variables);
  return data.publication.post;
}