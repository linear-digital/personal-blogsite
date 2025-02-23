
import Categorys from "@/components/Card/Categorys"
import TrendingPosts from "@/components/Card/TrendingPosts"
import Layout from "@/components/layout/Layout"
import { fetcher } from "@/lib/dataFetcher"
import fetchPublicationInfo from "@/lib/hasnode/publication"
import { postImage, postLink } from "@/lib/postlink"
import Link from "next/link"
export default async function AuthorDetails(context) {
	const publisher = await fetchPublicationInfo()
	const page = context.searchParams.page || 1
	const blogs = await fetcher({ path: `/blog/blogs?limit=5&page=${page}` })
	return (
		<>
			<Layout breadcrumbTitle="title">

				<div>
					<section className="author-section padding pb-0">
						<div className="container">
							<div className="author-details-box">
								<div className="author-img">
									<img src={publisher.author.profilePicture} alt="author" />
								</div>
								<div className="author-info">
									<h3 className="name">{publisher?.author.name}</h3>
									<span className="prof">Full Stack Developer</span>
									<p>
										{publisher?.descriptionSEO}
									</p>
									<div className="author-social d-flex align-items-center">
										<h4 className="follow">Follow:</h4>
										<ul className="social-list d-flex align-items-center">
											<li>
												<Link href="/#" className="facebook"><i className="lab la-facebook-f" /></Link>
											</li>
											<li>
												<Link href="/#" className="twitter"><i className="lab la-twitter" /></Link>
											</li>
											<li>
												<Link href="/#" className="instagram"><i className="lab la-instagram" /></Link>
											</li>
											<li>
												<Link href="/#" className="linkedin"><i className="lab la-linkedin-in" /></Link>
											</li>
											<li>
												<Link href="/#" className="pinterest"><i className="lab la-pinterest-p" /></Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* ./author-section */}
					<section className="news-post-area padding">
						<div className="container">
							<div className="row">
								<div className="col-lg-8">
									<div className="news-post-wrap">
										<div className="section-heading mb-40">
											<h3 className="section-title title-border"><span>Latest Posts</span></h3>
										</div>
										{
											blogs?.data?.map((item, i) => (
												<div className="post-card news-post" key={i}>
													<div className="post-thumb">
														<Link href={postLink(item)}><img src={postImage(item)} alt="post" /></Link>
													</div>
													<div className="post-content">
														{
															item?.tags?.slice(0, 2).map((tag, i) => (
																<Link key={i} href={`/category/${tag.slug}`} className="card-btn bg-blue me-2">{tag.name}</Link>
															))
														}
														<h3 className="title">
															<Link href="/single-post-1">How To Change The Icons For Your Favorite Apps On MacOS</Link>
														</h3>
														<ul className="post-list">
															<li className="author">
																by <span><Link href="/author-details">David Bin</Link></span>
															</li>
															<li className="date">July 29, 2024</li>
															<li><i className="las la-comments" />5</li>
														</ul>
														<p>
															Lorem ipsum dolor sit amet consectetur. Tellus suspen any more at disse reasy
															nulla aliquam.
														</p>
														<Link href="/single-post-1" className="news-post-btn"><i className="las la-arrow-right" /></Link>
													</div>
												</div>
											))
										}

										<div className="post-pagination">
											<ul className="pagination-list">
												{Array.from({
													length:
														Math.ceil(blogs?.total / 5) > 8
															? 8
															: Math.ceil(blogs?.total / 5),
												}).map((item, i) => (
													<li key={i}>
														<Link
															href={`/author-details?page=${i + 1}`}
															className={page === i + 1 ? "active" : ""}
														>
															<span>{i + 1}</span>
														</Link>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="post-author-box text-center mb-40">
										<div className="bg" />
										<img src={publisher.author.profilePicture} alt="post" />
										<h3 className="author">Hello, I'm Tamiz</h3>
										<p>
											{publisher?.descriptionSEO}
										</p>
										<Link href="/author-details" className="default-btn">About Me</Link>
									</div>
									<TrendingPosts />
									<Categorys />
								</div>
							</div>
						</div>
					</section>
					{/* ./ news-post */}
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
