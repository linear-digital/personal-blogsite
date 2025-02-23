
import Categorys from "@/components/Card/Categorys"
import TrendingPosts from "@/components/Card/TrendingPosts"
import Layout from "@/components/layout/Layout"
import { fetcher } from "@/lib/dataFetcher";
import { postImage } from "@/lib/postlink";
import moment from "moment";
import Link from "next/link"

export const metadata = {
	title: "GENZ IT Blogs | Blogs Page",
}

export default async function BlogDefault(context) {
	const blogs = await fetcher({ path: `/blog/blogs?limit=5&page=${context.searchParams.page || 1}&query=${context.searchParams.query || ""}` });
	return (
		<>
			<Layout breadcrumbTitle="title">

				<div>
					<section className="blog-default padding">
						<div className="container">
							<div className="row">
								<div className="col-lg-8">
									{
										blogs?.data?.map((item, i) => (
											<div className="post-card blog-default-card" key={i}>
												<div className="post-thumb">
													<Link href={`/${item?._id}`}><img src={postImage(item)} alt={item?.title} /></Link>
												</div>
												<div className="post-content">
													{
														item?.tags?.slice(0, 2).map((tag, i) => (
															<Link href={`/category/${tag.slug}`} className="card-btn bg-blue me-2">{tag.name}</Link>
														))
													}
													<h3 className="title">
														<Link href={`/${item?._id}`}>
															{item?.title}
														</Link>
													</h3>
													<ul className="post-list">
														<li className="author">
															by <span><Link href="/author-details">Tamiz Uddin</Link></span>
														</li>
														<li className="date">
															{moment(item?.publishedAt).format("MMM DD, YYYY")}
														</li>
														<li><i className="las la-comments" />{item?.commentCount}</li>
													</ul>
													<p>
														{item?.brief}
													</p>
													<Link href={`/${item?._id}`} className="news-post-btn"><i className="las la-arrow-right" /></Link>
												</div>
											</div>

										))
									}

									<div className="post-pagination">
										{
											context.searchParams.page > 1 && <div className="pagination-right">
												<Link href={`/blogs?page=${context.searchParams.page - 1 || 1}`}><i className="las la-angle-left" />
												</Link>
											</div>
										}
										<ul className="pagination-list">
											{
												Array.from({ length: Math.ceil(blogs?.total / 5) > 8 ? 8 : Math.ceil(blogs?.total / 5) }).map((item, i) => (
													<li key={i}>
														<Link className={context.searchParams.page === i + 1 ? "active" : ""} href={`/blogs?page=${i + 1}`}>
															{i + 1}
														</Link>
													</li>
												))
											}
										</ul>
										{
											context.searchParams.page < Math.ceil(blogs?.total / 5) && <div className="pagination-right">
												<Link href={`/blogs?page=${context.searchParams.page + 1 || 1}`}><i className="las la-angle-right" /></Link>
											</div>
										}
									</div>
								</div>
								<div className="col-lg-4">
									<Categorys />
									<TrendingPosts />
								</div>
							</div>
						</div>
					</section>
					{/* ./ blog-default */}
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
