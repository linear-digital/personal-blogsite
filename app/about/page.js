
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function About() {
    return (
        <>
            <Layout breadcrumbTitle="title">

                <div>
                    <section className="about-section padding">
                        <div className="container">
                            <section className="text-center">
                                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                                    Empowering Developers Through Technical Knowledge
                                </h1>
                                <p className="mt-6 text-lg text-muted-foreground">
                                    Leading the way in web development education and resources
                                </p>
                            </section>
                            <div className="row align-items-center mt-5">
                                <div className="col-lg-6">
                                    <div className="about-content">
                                        <h3 className="title">
                                            Tamiz Uddin
                                        </h3>
                                        <h3 className="text-muted-foreground">
                                            Full Stack Web Developer
                                        </h3>
                                        <p>
                                            I am Md Tamiz, a passionate full-stack web developer with expertise in building dynamic and scalable web applications. With a strong command of modern technologies like React, Next.js, Node.js, and MongoDB, I specialize in creating efficient, user-friendly, and high-performance digital solutions. From frontend design to backend development, I bring ideas to life with clean code and a problem-solving mindset.
                                        </p>
                                        <div className="about-list-wrap">
                                            <ul className="about-list">
                                                <li><i className="las la-check-circle" />Web Design</li>
                                                <li><i className="las la-check-circle" />
                                                    Web Development
                                                </li>
                                                <li><i className="las la-check-circle" />
                                                    Responsive Design</li>
                                            </ul>
                                            <ul className="about-list">
                                                <li><i className="las la-check-circle" />
                                                    Backend Development
                                                </li>
                                                <li><i className="las la-check-circle" />
                                                    Seo Friendly Website
                                                </li>
                                                <li><i className="las la-check-circle" />
                                                    Bug Fixing
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-thumb">
                                        <img src="/assets/img/images/about-img.jpg" alt="about" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* ./ about-section */}
                    {/* Mission Statement */}
                    <section className="mb-5 container rounded-lg p-5 text-center mission">
                        <h2 className="text-3xl  font-bold">Our Mission</h2>
                        <p className="mt-4 text-xl">
                            Our Mission

                            At GENZ IT, our mission is to build innovative, scalable, and high-performance web applications that empower businesses and individuals. We strive to create seamless digital experiences using modern technologies like React, Next.js, Node.js, and MongoDB.

                            Our focus is on delivering efficient, user-friendly, and secure solutions that help clients grow in the digital landscape. Whether it’s custom web applications, SaaS platforms, or enterprise solutions, we are committed to excellence, innovation, and continuous improvement.

                            We believe in leveraging technology to solve real-world problems, enhance productivity, and drive digital transformation.
                        </p>
                    </section>
                </div>

            </Layout>
        </>
    )
}