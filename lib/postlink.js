export const postLink = (post) => {
    return `/${post?.slug}`;
};

export const postImage = (post) => post?.coverImage?.url;

export const author = () => '/author-details'