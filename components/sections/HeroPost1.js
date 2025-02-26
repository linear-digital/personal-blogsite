
import Link from 'next/link'

export default async function HeroPost1({blogs}) {
	const isTab = 1
	return (
		<>
			<section className="hero-post-area">
				<div className="container">
					<div className="post-area-wrap">
						<div className="post-area-right-2">
							<div className="post-card-wrap">
								<div className="post-card">
									<div className="post-thumb">
										<Link href="/single-post-1"><img src="/assets/img/post/post-img-1.jpg" alt="post" /></Link>
									</div>
									<div className="post-content">
										<Link href="/single-post-1" className="card-btn bg-blue">Health</Link>
										<h3 className="title">
											<Link href="/single-post-1">Who Owns Your Body: 10 Steps to the Best Shape</Link>
										</h3>
									</div>
								</div>
								<div className="post-card">
									<div className="post-thumb">
										<Link href="/single-post-1"><img src="/assets/img/post/post-img-2.jpg" alt="post" /></Link>
									</div>
									<div className="post-content">
										<Link href="/single-post-1" className="card-btn bg-green">Travel</Link>
										<h3 className="title">
											<Link href="/single-post-1">The Best Therapy for Your Mind and Soul done.</Link>
										</h3>
									</div>
								</div>
							</div>
						</div>
						<div className="post-carousel-wrap">
							<div className="post-carousel-card card-2 text-center">
								<div className="post-carousel-thumb">
									<Link href="/single-post-1"><img src="/assets/img/slider/post-slider-img-1.jpg" alt="img" /></Link>
								</div>
								<div className="post-carousel-content">
									<Link href="/single-post-1" className="card-btn bg-pink">Lifestyle</Link>
									<h3 className="title">
										<Link href="/single-post-1">Fashion, Tips, Trends and Celebrity Style</Link>
									</h3>
									<ul className="post-list">
										<li className="author">
											by <span><Link href="/author-details">David Bin</Link></span>
										</li>
										<li className="date">July 29, 2024</li>
										<li><i className="las la-comments" />5</li>
									</ul>
								</div>
								{/* /. post-card-content */}
							</div>
						</div>
						<div className="post-area-right-2 tab-wrap">

							<div className="tab-content" id="myTabContent">
								<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"}>
									<div className="list-post-area">
										<div className="list-post-card">
											<div className="post-img">
												<Link href="/single-post-1"><img src="/assets/img/post/list-post-img-1.png" alt="post" /></Link>
											</div>
											<div className="post-content">
												<Link href="/single-post-1" className="category">Health</Link>
												<h3 className="title">
													<Link href="/single-post-1">The Season Courses and Salads wow!</Link>
												</h3>
											</div>
										</div>
										<div className="list-post-card">
											<div className="post-img">
												<Link href="/single-post-1"><img src="/assets/img/post/list-post-img-2.png" alt="post" /></Link>
											</div>
											<div className="post-content">
												<Link href="/single-post-1" className="category">Food</Link>
												<h3 className="title">
													<Link href="/single-post-1">Catch the Best iPhone 13 Deals Favorite
														gadgets</Link>
												</h3>
											</div>
										</div>
										<div className="list-post-card">
											<div className="post-img">
												<Link href="/single-post-1"><img src="/assets/img/post/list-post-img-4.png" alt="post" /></Link>
											</div>
											<div className="post-content">
												<Link href="/single-post-1" className="category">Tech</Link>
												<h3 className="title">
													<Link href="/single-post-1">Which Game to Choose for Your Kids Middle
														School</Link>
												</h3>
											</div>
										</div>
										<div className="list-post-card">
											<div className="post-img">
												<Link href="/single-post-1"><img src="/assets/img/post/list-post-img-5.png" alt="post" /></Link>
											</div>
											<div className="post-content">
												<Link href="/single-post-1" className="category">Travel</Link>
												<h3 className="title">
													<Link href="/single-post-1">The Widening Impact of the Motion Design
														Industry</Link>
												</h3>
											</div>
										</div>
										<div className="list-post-card">
											<div className="post-img">
												<Link href="/single-post-1"><img src="/assets/img/post/list-post-img-3.png" alt="post" /></Link>
											</div>
											<div className="post-content">
												<Link href="/single-post-1" className="category">Sports</Link>
												<h3 className="title">
													<Link href="/single-post-1">If You Ever Decide to Travel to a Volcano…</Link>
												</h3>
											</div>
										</div>
									</div>
								</div>
								<div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"}>
									<div className="list-post-area">
										<div className="list-post-card">
											<div className="post-img">
												<Link href="/single-post-1"><img src="/assets/img/post/list-post-img-1.png" alt="post" /></Link>
											</div>
											<div className="post-content">
												<Link href="/single-post-1" className="category">Health</Link>
												<h3 className="title">
													<Link href="/single-post-1">The Season Courses and Salads wow!</Link>
												</h3>
											</div>
										</div>
										<div className="list-post-card">
											<div className="post-img">
												<Link href="/single-post-1"><img src="/assets/img/post/list-post-img-2.png" alt="post" /></Link>
											</div>
											<div className="post-content">
												<Link href="/single-post-1" className="category">Food</Link>
												<h3 className="title">
													<Link href="/single-post-1">Catch the Best iPhone 13 Deals Favorite
														gadgets</Link>
												</h3>
											</div>
										</div>
										<div className="list-post-card">
											<div className="post-img">
												<Link href="/single-post-1"><img src="/assets/img/post/list-post-img-4.png" alt="post" /></Link>
											</div>
											<div className="post-content">
												<Link href="/single-post-1" className="category">Tech</Link>
												<h3 className="title">
													<Link href="/single-post-1">Which Game to Choose for Your Kids Middle
														School</Link>
												</h3>
											</div>
										</div>
										<div className="list-post-card">
											<div className="post-img">
												<Link href="/single-post-1"><img src="/assets/img/post/list-post-img-5.png" alt="post" /></Link>
											</div>
											<div className="post-content">
												<Link href="/single-post-1" className="category">Travel</Link>
												<h3 className="title">
													<Link href="/single-post-1">The Widening Impact of the Motion Design
														Industry</Link>
												</h3>
											</div>
										</div>
										<div className="list-post-card">
											<div className="post-img">
												<Link href="/single-post-1"><img src="/assets/img/post/list-post-img-3.png" alt="post" /></Link>
											</div>
											<div className="post-content">
												<Link href="/single-post-1" className="category">Sports</Link>
												<h3 className="title">
													<Link href="/single-post-1">If You Ever Decide to Travel to a Volcano…</Link>
												</h3>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
