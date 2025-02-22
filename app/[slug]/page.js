

import { postImage } from "@/lib/postlink"
import moment from "moment"
import './blog.css'
import Link from "next/link"
import PostComent from "@/components/Card/PostComent"
import Layout from "@/components/layout/Layout"
import { fetcher } from "@/lib/dataFetcher"
export default async function SinglePost1({ params }) {
	const { slug } = await params
	const ipRes = await fetch('https://api64.ipify.org/?format=json')
	const ip = await ipRes.json()
	const ipAdress = ip.ip
	const post = await fetcher({ path: `/blog/single/${slug}?ip=${ipAdress}` })
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
													<li><Link href="/#">Health,</Link></li>
													<li><Link href="/#">Wellness,</Link></li>
													<li><Link href="/#">Workout</Link></li>
												</ul>
											</div>
											<div className="box-right">
												<h4 className="share">Share This Article</h4>
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
										<PostComent post={post}/>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="post-author-box text-center mb-40">
										<div className="bg" />
										<img src="/assets/img/post/post-author.png" alt="post" />
										<h3 className="author">Hello, I'm James</h3>
										<p>
											Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus
											rutrum tellus eget ultrices pretium.
										</p>
										<Link href="/#" className="default-btn">About Me</Link>
									</div>
									<div className="trending-post-wrap">
										<div className="section-heading mb-30">
											<h3 className="section-title title-border"><span>Trending Posts</span></h3>
										</div>
										<div className="list-post-area list-2">
											<div className="list-post-card">
												<div className="post-img">
													<Link href="/#"><img src="/assets/img/post/trending-post-1.jpg" alt="post" /></Link>
												</div>
												<div className="post-content">
													<h3 className="title">
														<Link href="/#">The Climate Shift in Allows Venice to Recover</Link>
													</h3>
													<span>July 29, 2024</span>
												</div>
											</div>
											<div className="list-post-card">
												<div className="post-img">
													<Link href="/#"><img src="/assets/img/post/trending-post-2.jpg" alt="post" /></Link>
												</div>
												<div className="post-content">
													<h3 className="title">
														<Link href="/#">Football and Figure Skating Collide to The Crowd’s Delight</Link>
													</h3>
													<span>July 29, 2024</span>
												</div>
											</div>
											<div className="list-post-card">
												<div className="post-img">
													<Link href="/#"><img src="/assets/img/post/trending-post-3.jpg" alt="post" /></Link>
												</div>
												<div className="post-content">
													<h3 className="title">
														<Link href="/#">Tips to Keep Cloud Storage Safe and Secure</Link>
													</h3>
													<span>July 29, 2024</span>
												</div>
											</div>
											<div className="list-post-card">
												<div className="post-img">
													<Link href="/#"><img src="/assets/img/post/trending-post-4.jpg" alt="post" /></Link>
												</div>
												<div className="post-content">
													<h3 className="title">
														<Link href="/#">The Season Courses and any Salads wow!</Link>
													</h3>
													<span>July 29, 2024</span>
												</div>
											</div>
										</div>
									</div>
									<div className="categorie-wrap">
										<div className="section-heading mb-30">
											<h3 className="section-title title-border"><span>Categories</span></h3>
										</div>
										<ul className="categorie-list">
											<li>
												<Link href="/single-post-1"><h4 className="list-title">Technology <span>(15)</span></h4><i className="las la-arrow-right" />
												</Link></li><Link href="/single-post-1">
											</Link><li className="active"><Link href="/single-post-1">
											</Link><Link href="/single-post-1"><h4 className="list-title">Lifestyle <span>(24)</span></h4><i className="las la-arrow-right" /></Link>
											</li>
											<li>
												<Link href="/single-post-1"><h4 className="list-title">Food <span>(29)</span></h4><i className="las la-arrow-right" /></Link>
											</li>
											<li>
												<Link href="/single-post-1"><h4 className="list-title">Health Care <span>(17)</span></h4><i className="las la-arrow-right" /></Link>
											</li>
											<li>
												<Link href="/single-post-1"><h4 className="list-title">Sport <span>(21)</span></h4><i className="las la-arrow-right" /></Link>
											</li>
											<li>
												<Link href="/single-post-1"><h4 className="list-title">Travel <span>(11)</span></h4><i className="las la-arrow-right" /></Link>
											</li>
											<li>
												<Link href="/single-post-1"><h4 className="list-title">Business <span>(30)</span></h4><i className="las la-arrow-right" /></Link>
											</li>
										</ul>
									</div>
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
