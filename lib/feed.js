const RSS = require('rss');

const NON_ASCII_REGEX = /[\u0080-\uFFFF]/g;

const constructRSSFeedFromPosts = (
	publication,
	posts,
	currentCursor,
	nextCursor
) => {
	const baseUrl = publication.url;

	const customElements = [
		{
			'atom:link': {
				_attr: {
					rel: 'first',
					href: `${baseUrl}/rss.xml`,
				},
			},
		},
	];
	if (nextCursor) {
		customElements.push({
			'atom:link': {
				_attr: {
					rel: 'next',
					href: `${baseUrl}/rss.xml${nextCursor ? `?after=${nextCursor}` : ''}`,
				},
			},
		});
	}

	const feedConfig = {
		title: `${publication.title || `${publication.author.name}'s blog`}`,
		description: publication.about?.html,
		feed_url: `${baseUrl}/rss.xml${currentCursor ? `?after=${currentCursor}` : ''}`,
		site_url: baseUrl,
		image_url: publication.preferences.logo,
		language: 'en',
		tl: 60,
		custom_elements: customElements,
	};

	const feed = new RSS(feedConfig);

	posts.forEach((post) => {
		feed.item({
			title: post.title,
			description: post.content.html.replace(NON_ASCII_REGEX, ''),
			url: `${baseUrl}/${post.slug}`,
			categories: post.tags.map((tag) => tag.name),
			author: post.author.name,
			date: post.publishedAt,
			...(post.coverImage && { custom_elements: [{ cover_image: post.coverImage }] }),
		});
	});

	return feed.xml();
};

module.exports = { constructRSSFeedFromPosts };
