import { HASHNODE_API, PUBLICATION } from "../hasnode";

const fetchPublicationInfo = async () => {
  const query = {
    query: `query {
      publication(host: "${PUBLICATION}") {
        id
        title
        descriptionSEO
        url
        favicon
        author {
          id
          name
          username
          profilePicture
        }
        ogMetaData {
          image
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
    return data.data?.publication;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getPublication = async () => {
  const query = {
    query: `
      query {
        publication(host: "${PUBLICATION}") {
          id
          title
          displayTitle
          descriptionSEO
          about {
            markdown
            html
            text
          }
          url
          canonicalURL
          author {
            id
            username
            name
            profilePicture
            followersCount
            followingsCount
            tagline
            dateJoined
            location
            availableFor
          }
        }
      }
    `,
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

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    if (!data?.data?.publication) {
      throw new Error("Invalid response structure or no publication found");
    }

    return data.data.publication;
  } catch (error) {
    console.error("Error fetching publication:", error);
    return null;
  }
};

export default fetchPublicationInfo;
