export const postLink = (post) => {
    return `/${post?._id}`;
};

export const postImage = (post) => post?.coverImage?.url;

export const author = () => '/author-details'