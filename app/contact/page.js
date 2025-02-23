
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export const metadata = {
	title: "GENZ IT Blogs | Contact Page",
}

export default function Contact() {
	return (
		<>
			<Layout breadcrumbTitle="title">

				<div>
					<section className="contact-section padding">
						<div className="container">
							<div className="row">
								<div className="col-lg-6">
									<div className="contact-content">
										<div className="contact-left">
											<div className="adress-wrap">
												<div className="adress-box">
													<h3 className="title">Call Information</h3>
													<ul className="adress-list list-2">
														<li>
															<i className="las la-mobile" />Phone:
															<Link href="/tel:+8801824692955">(+880) 182 469 2955</Link>
														</li>
														<li>
															<i className="las la-envelope" />Email:
															<Link href="/mailto:tamizrabbi@gmail.com">tamizrabbi@gmail.com</Link>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="contact-form-wrap">
											<h3 className="title">Get in Touch</h3>
											<p>
												Your email address will not be published. Required fields are marked
											</p>
											<div className="contact-form">
												<form action="contact.php" method="post" id="ajax_contact" className="form-horizontal">
													<div className="form-group colum-row row">
														<div className="col-sm-6">
															<input type="text" id="fullname" name="fullname" className="form-control" placeholder="Name" required />
														</div>
														<div className="col-sm-6">
															<input type="email" id="email" name="email" className="form-control" placeholder="Email" required />
														</div>
													</div>
													<div className="form-group row">
														<div className="col-sm-6">
															<input type="text" id="phone" name="phone" className="form-control" placeholder="Phone Number" required />
														</div>
														<div className="col-sm-6">
															<input type="text" id="website" name="website" className="form-control" placeholder="Website Name" />
														</div>
													</div>
													<div className="form-group row">
														<div className="col-md-12">
															<textarea id="message" name="message" cols={30} rows={5} className="form-control address" placeholder="Message" required />
														</div>
													</div>
													<button id="submit" className="default-btn" type="submit">
														Send Message<span style={{ top: '-154px', left: '-699.328px' }} />
													</button>
													<div id="form-messages" className="alert" role="alert" />
												</form>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="map-wrapper">
										<div style={{ width: '100%' }}>
										
											<iframe width="100%" height={840} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.9730353436!2d90.33728796691412!3d23.780818635400582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1740309688390!5m2!1sen!2sbd">&lt;a href="https://www.maps.ie/population/"&gt;Find Population on Map&lt;/a&gt;</iframe>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* ./ contact-section */}
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
