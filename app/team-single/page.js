'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	spaceBetween: 30,
	slidesPerGroup: 1,
	loop: true,
	autoplay: true,
	speed: 700,
	navigation: {
		nextEl: ".team-nav-wrap .swiper-prev",
		prevEl: ".team-nav-wrap .swiper-next",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
		767: {
			slidesPerView: 2,
			slidesPerGroup: 1,
		},
		1024: {
			slidesPerView: 3,
			slidesPerGroup: 1,
		},
	},
}
export default function TeamSingle() {
	return (
		<>
			<Layout breadcrumbTitle="title">

				<div>
					<section className="team-details padding">
						<div className="container">
							<div className="row">
								<div className="col-lg-4">
									<div className="team-details-left">
										<img src="/assets/img/images/team-member.jpg" alt="team" />
										<div className="team-member-info">
											<h3 className="title">Maria David</h3>
											<span className="prof">Manager &amp; QC</span>
											<ul className="team-list">
												<li>Website : <Link href="/#">yourwebsite.com</Link></li>
												<li>Phone : <Link href="/tel:44-20-7328-449">44-20-7328-449</Link></li>
												<li>Email : <Link href="/mailto:custom@gmail.com">custom@gmail.com</Link></li>
												<li>Address : <span>380 Albert St, Melbourne</span></li>
											</ul>
											<ul className="team-social">
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
											</ul>
										</div>
									</div>
								</div>
								<div className="col-lg-8">
									<div className="team-details-content mb-50">
										<h3 className="title">Information</h3>
										<p className="mb-20">
											Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
											laudantium, totam rem aperiam, the eaque ipsa quae ab illo inventore veritatis et quasi
											architecto beatae vitae dicta sunt explicabo. Nemo ipsam voluptatem quia voluptas sit
											aspernatur aut odit aut fugit, sed quia consequuntur magni dolores ratione voluptatem
											sequi nesciunt.
										</p>
										<p className="mb-0">
											Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
											laudantium, totam rem aperiam, the architecto beatae vitae dicta sunt explicabo.
										</p>
									</div>
									<div className="team-details-content">
										<h3 className="title">Skill</h3>
										<ul className="skills-items">
											<li className="skills-item">
												<h5>Development</h5>
												<div className="progress">
													<div className="progress-bar wow slideInLeft" data-wow-delay="0ms" data-wow-duration="2000ms" role="progressbar" style={{ width: '80%', visibility: 'visible', animationDuration: '2000ms', animationDelay: '0ms', animationName: 'slideInLeft' }}>
														<span>85%</span>
													</div>
												</div>
											</li>
											<li className="skills-item">
												<h5>Success</h5>
												<div className="progress">
													<div className="progress-bar wow slideInLeft" data-wow-delay="200ms" data-wow-duration="2000ms" role="progressbar" style={{ width: '90%', visibility: 'visible', animationDuration: '2000ms', animationDelay: '200ms', animationName: 'slideInLeft' }}>
														<span>75%</span>
													</div>
												</div>
											</li>
											<li className="skills-item">
												<h5>Finished Projects</h5>
												<div className="progress">
													<div className="progress-bar wow slideInLeft" data-wow-delay="300ms" data-wow-duration="2000ms" role="progressbar" style={{ width: '75%', visibility: 'visible', animationDuration: '2000ms', animationDelay: '300ms', animationName: 'slideInLeft' }}>
														<span>90%</span>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* ./ team-details */}
					<section className="team-section padding pt-0">
						<div className="container">
							<div className="team-nav-wrap">
								<h3 className="title">Related Team Member</h3>
								<div className="swiper-arrow">
									<div className="swiper-nav swiper-next">
										<i className="las la-angle-left" />
									</div>
									<div className="swiper-nav swiper-prev">
										<i className="las la-angle-right" />
									</div>
								</div>
							</div>
							<div className="team-carousel swiper">
								<Swiper {...swiperOptions} className="swiper-wrapper swiper-container">
									<SwiperSlide>
										<div className="team-item">
											<div className="team-thumb">
												<Link href="/team-single"><img src="/assets/img/images/team-4.jpg" alt="team" /></Link>
											</div>
											<div className="team-content">
												<h3 className="title">
													<Link href="/team-single">David bin</Link><span>Creative Director</span>
												</h3>
												<ul className="team-social">
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
												</ul>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="team-item">
											<div className="team-thumb">
												<Link href="/team-single"><img src="/assets/img/images/team-6.jpg" alt="team" /></Link>
											</div>
											<div className="team-content">
												<h3 className="title">
													<Link href="/team-single">Martin Bin</Link><span>Creative Director</span>
												</h3>
												<ul className="team-social">
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
												</ul>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="team-item">
											<div className="team-thumb">
												<Link href="/team-single"><img src="/assets/img/images/team-7.jpg" alt="team" /></Link>
											</div>
											<div className="team-content">
												<h3 className="title">
													<Link href="/team-single">David bin</Link><span>Creative Director</span>
												</h3>
												<ul className="team-social">
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
												</ul>
											</div>
										</div>
									</SwiperSlide>
								</Swiper>
							</div>
						</div>
					</section>
					{/* ./ team-section */}
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
