
import moment from 'moment'
import Link from 'next/link'
import PostCardSM from '../Card/PostCardSM'
import fetchPublicationInfo from '@/lib/hasnode/publication'
import { fetcher } from '@/lib/dataFetcher'

export default async function EditorBlog1() {
    const blogs = await fetcher({ path: "/blog?limit=4&skip=5" })
    const blogs1 = blogs[0] || null
    const blogs2 = blogs[1] || null
    const blogs3 = blogs[2] || null
    const blogs4 = blogs[3] || null
    const publisher = await fetchPublicationInfo()
    return (
        <>
            <section className="editor-blog-area mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="section-heading mb-40">
                                <h3 className="section-title title-border"><span>Editor's Pick</span></h3>
                            </div>
                            <div className="post-card editor-post-card">
                                <div className="post-thumb">
                                    <Link href={`/${blogs1?._id}`}>
                                        <img src={blogs1?.coverImage?.url} alt={blogs1?.title} />
                                    </Link>
                                </div>
                                <div className="post-content">
                                    {
                                        blogs1?.tags?.slice(0, 2).map((tag, i) => (
                                            <Link href={`/category/${tag.slug}`} key={i} className="card-btn bg-green">{tag.name}</Link>
                                        ))
                                    }
                                    <h3 className="title">
                                        <Link href={`/${blogs1?._id}`}>{blogs1?.title}</Link>
                                    </h3>
                                    <p>{blogs1?.brief}</p>
                                    <ul className="post-list">
                                        <li className="author">
                                            by <span><Link href="/author-details">{blogs1?.author?.name}</Link></span>
                                        </li>
                                        <li className="date">{moment(blogs1?.publishedAt).format('MMM DD, YYYY')}</li>
                                        <li><i className="las la-comments" />{blogs1?.commentCount}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="editor-post-wrap">
                                <PostCardSM blogs={blogs2} />
                                <PostCardSM blogs={blogs3} />
                                <PostCardSM blogs={blogs4} />

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="section-heading mb-40">
                                <h3 className="section-title title-border"><span>Follow Us</span></h3>
                            </div>
                            <div className="social-box-wrap">
                                <div className="social-box facebook">
                                    <Link href="/#"><i className="lab la-facebook-square" /></Link>
                                    <h4 className="title"><Link href="/#">Facebook</Link> <span>23k Likes</span></h4>
                                </div>
                                <div className="social-box twitter">
                                    <Link href="/#" className="icon"><i className="lab la-twitter" /></Link>
                                    <h4 className="title"><Link href="/#">Twitter</Link> <span>56k Followers</span></h4>
                                </div>
                                <div className="social-box youtube">
                                    <Link href="/#" className="icon"><i className="lab la-youtube" /></Link>
                                    <h4 className="title"><Link href="/#">Youtube</Link> <span>56k Subscribe</span></h4>
                                </div>
                                <div className="social-box spotify">
                                    <Link href="/#" className="icon"><i className="lab la-spotify" /></Link>
                                    <h4 className="title"><Link href="/#">Spotify</Link> <span>14k Followers</span></h4>
                                </div>
                                <div className="social-box insta">
                                    <Link href="/#" className="icon"><i className="lab la-instagram" /></Link>
                                    <h4 className="title"><Link href="/#">Instagram</Link> <span>5m Followers</span></h4>
                                </div>
                                <div className="social-box pinterest">
                                    <Link href="/#" className="icon"><i className="lab la-pinterest-p" /></Link>
                                    <h4 className="title"><Link href="/#">Pinterest</Link> <span>59k Followers</span></h4>
                                </div>
                            </div>
                            <div className="post-author-box text-center">
                                <div className="bg" />
                                <img src="/assets/img/post/post-author.png" alt="post" />
                                <h3 className="author">Hello, I'm James</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus
                                    rutrum tellus eget ultrices pretium.
                                </p>
                                <Link href="/author-details" className="default-btn">About Me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
