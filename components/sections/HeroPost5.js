
import { fetcher } from '@/lib/dataFetcher'
import Link from 'next/link'
import TopPost from '../Card/TopPost'
import { postImage, postLink } from '@/lib/postlink'
import moment from 'moment'

export default async function HeroPost5() {
    const posts = await fetcher({ path: "/blog?limit=5" })
    return (
        <>
            <section className="hero-post-3 bg-grey-2 padding">
                <div className="container">
                    <div className="row hero-top-wrap">
                        <div className="col-lg-8">
                            <TopPost post={posts[0]} />
                        </div>
                        <div className="col-lg-4">
                            <div className="post-card gadget-card mb-25">
                                <div className="post-thumb ">
                                    <Link href={postLink(posts[1])}>
                                    <img src={postImage(posts[1])} alt="post" />
                                    </Link>
                                </div>
                                <div className="post-content">
                                    {posts[1]?.tags?.slice(0, 2).map((tag, i) => (
                                        <Link
                                            href={`/category/${tag.slug}`}
                                            key={i}
                                            className="card-btn me-2 bg-blue-light"
                                        >
                                            {tag.name}
                                        </Link>
                                    ))}
                                    <h3 className="title">
                                        <Link href="/single-post-1">
                                            {posts[1]?.title?.slice(0, 60)}
                                        </Link>
                                    </h3>
                                    <ul className="post-list">
                                        <li className="author">
                                            by <span><Link href="/author-details">Tamiz Uddin</Link></span>
                                        </li>
                                        <li className="date">{moment(posts[1]?.publishedAt).format('MMM DD, YYYY')}</li>
                                        <li><i className="las la-comments" />{posts[1]?.commentCount}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row hero-bottom-wrap justify-content-center">
                        {
                            posts.slice(2, 5).map((post, i) => (
                                <div key={i} className="col-lg-4 col-md-6">
                                    <div className="post-card gadget-card mb-25">
                                        <div className="post-thumb">
                                            <Link href={postLink(post)}><img src={postImage(post)} alt="post" /></Link>
                                        </div>
                                        <div className="post-content">
                                            {post?.tags?.slice(0, 2).map((tag, i) => (
                                                <Link
                                                    href={`/category/${tag.slug}`}
                                                    key={i}
                                                    className="card-btn me-2 bg-blue-light"
                                                >
                                                    {tag.name}
                                                </Link>
                                            ))}
                                            <h3 className="title">
                                                <Link href={postLink(post)}>{post?.title?.slice(0, 50)}</Link>
                                            </h3>
                                            <ul className="post-list">
                                                <li className="author">
                                                    by <span><Link href="/author-details">{post?.author?.name}</Link></span>
                                                </li>
                                                <li className="date">{moment(post?.publishedAt).format('MMM DD, YYYY')}</li>
                                                <li><i className="las la-comments" />{post?.commentCount}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
