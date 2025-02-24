

import { postImage } from "@/lib/postlink"
import moment from "moment"
import './blog.css'
import Link from "next/link"
import PostComent from "@/components/Card/PostComent"
import Layout from "@/components/layout/Layout"
import { fetcher } from "@/lib/dataFetcher"
import TrendingPosts from "@/components/Card/TrendingPosts"
import Categorys from "@/components/Card/Categorys"


export const generateMetadata = async ({
	params,
}) => {
	const { slug } = await params;

	try {
		const post = await fetcher({ path: `/blog/single/${slug}` })

		const title = post.seo?.title || "GENZ IT Blogs"; // Use optional chaining and default value
		const description =
			post.seo?.description ||
			"A blog for the next generation of IT professionals.";
		const imageUrl = post.coverImage?.url || "/no-image.png"; // Default image URL
		return {
			title,
			description,
			canonical: post.canonicalUrl,
			keywords: post.tags.map((tag) => tag.name),
			openGraph: {
				title,
				description,
				images: [imageUrl],
				type: "article",
			},
			twitter: {
				card: "summary_large_image",
				title,
				description,
				images: [imageUrl],
			},
		};
	} catch (error) {
		console.error(`Error generating metadata for slug ${slug}:`, error);
		return {
			title: "GENZ IT Blogs",
			description: "A blog for the next generation of IT professionals.",
		};
	}
};

export default async function SinglePost1({ params }) {
	const { slug } = await params
	const ipRes = await fetch('https://api64.ipify.org/?format=json')
	const ip = await ipRes.json()
	const ipAdress = ip.ip
	const post = await fetcher({ path: `/blog/single/${slug}?ip=${ipAdress}` })
	const postUrl = `https://genzit.xyz/${post.slug}`
	return (
		<>
			<Layout breadcrumbTitle="title">

				<div>
					<section className="post-layout-1 padding">
						<div className="container">
							<div className="top-content">
								<div className="post-card single-card">
									<div className="post-content">
										<Link href="/#" className="card-btn bg-green">Tech</Link>
										<h3 className="title">
											{post?.title}
										</h3>
										<ul className="post-list">
											<li className="author">
												by <span><Link href="/author-details">Tamiz Uddin</Link></span>
											</li>
											<li className="date">{moment(post?.publishedAt).format('MMM DD, YYYY')}</li>
											<li><i className="las la-comments" />{post?.commentCount}</li>
											<li><i className="las la-eye" />{post?.views} View</li>
										</ul>
										<p>
											{post?.brief}
										</p>
									</div>
								</div>
								<div className="post-social">
									<span>Share:</span>
									<ul className="social-list d-flex align-items-center">
										<li>
											<Link href="/#" className="facebook"><i className="lab la-facebook-f" /></Link>
										</li>
										<li>
											<Link href="/#" className="twitter"><i className="lab la-twitter" /></Link>
										</li>
										<li>
											<Link href="/#" className="linkedin"><i className="lab la-linkedin-in" /></Link>
										</li>
										<li>
											<Link href="/#" className="instagram"><i className="lab la-instagram" /></Link>
										</li>
										<li>
											<Link href="/#" className="pinterest"><i className="lab la-pinterest-p" /></Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-8">
									<div className="post-layout-content">
										<div className="layout-thumb mb-30">
											<img src={postImage(post)} alt={post.title} />
										</div>
										<article
											className="post-content"
										>

											<div dangerouslySetInnerHTML={{ __html: post?.content?.html || '' }}>

											</div>

										</article>
										<div className="layout-social-box">
											<div className="box-left">
												<h4 className="tag">Tagged:</h4>
												<ul>
													{
														post?.tags?.map((tag, i) => (
															<li key={i}><Link href={`/category/${tag.slug}`}>{tag.name} {i < post?.tags?.length - 1 && ','}</Link></li>
														))
													}
												</ul>
											</div>
											<div className="box-right">
												<h4 className="share">Share This Article</h4>
												<ul className="social-list d-flex align-items-center">
													<li>
														<a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`} className="facebook"><i className="lab la-facebook-f" /></a>
													</li>
													<li>
														<a target="_blank" href={` https://twitter.com/intent/tweet?url=${postUrl}`} className="twitter"><i className="lab la-twitter" /></a>
													</li>
													<li>
														<a target="_blank" href={`https://www.linkedin.com/cws/share?url=${postUrl}`} className="linkedin"><i className="lab la-linkedin-in" /></a>
													</li>
													<li>
														<a target="_blank" href={`https://www.instagram.com/share?url=${postUrl}`} className="instagram"><i className="lab la-instagram" /></a>
													</li>
													<li>
														<a target="_blank" href={`https://pinterest.com/pin/create/button/?url=${postUrl}&media=${post?.image}&description=${post?.title}`} className="pinterest"><i className="lab la-pinterest-p" /></a>
													</li>
												</ul>
											</div>
										</div>
										<PostComent post={post} />
									</div>
								</div>
								<div className="col-lg-4">
									<TrendingPosts />
									<Categorys />
								</div>
							</div>
						</div>
					</section>
					{/* ./ post-layout-1 */}
					<section className="subscribe-section bg-grey-2">
						<div className="container">
							<div className="row">
								<div className="col-lg-6">
									<div className="subscribe-content">
										<h3 className="title">Get the best blog stories into your inbox!</h3>
										<div className="subscribe-form">
											<input type="email" id="email" name="email" className="form-control" placeholder="Enter Your Email" />
											<button id="submit" className="default-btn" type="submit">
												<i className="lab la-telegram-plane" />Subscribe
											</button>
											<div className="form-icon">
												<i className="las la-envelope" />
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="subscribe-thumb">
										<div className="line" />
										<img src="/assets/img/images/subscribe-img.png" alt="img" />
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>

			</Layout>
		</>
	)
}
