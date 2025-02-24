
import { fetcher } from '@/lib/dataFetcher';
import { postImage } from '@/lib/postlink';
import moment from 'moment';
import Link from 'next/link'

export default async function RecentPost() {
    const blogs = await fetcher({ path: `/blog/blogs?limit=10` });
    return (
        <>
            <section className="recent-post-area padding">
                <div className="container">
                    <div className="top-area mb-40 title-border">
                        <div className="section-heading">
                            <h3 className="section-title"><span className="bg-grey-2">Recent Post</span></h3>
                        </div>
                        <div className="right-btn">
                            <Link href="/blog-layout-1" className="default-btn">See More</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="news-post-wrap">
                                {
                                    blogs?.data?.slice(0, 5)?.map((item, i) => (
                                        <div className="post-card news-post" key={i}>
                                            <div className="post-thumb">
                                                <Link href={`/${item?.slug}`}><img src={postImage(item)} alt={item?.title} /></Link>
                                            </div>
                                            <div className="post-content">
                                                <h3 className="title">
                                                    <Link href={`/${item?.slug}`}>
                                                        {item?.title}
                                                    </Link>
                                                </h3>
                                                <ul className="post-list">
                                                    <li className="author">
                                                        by <span><Link href="/author-details">Tamiz Uddin</Link></span>
                                                    </li>
                                                    <li className="date">
                                                        {moment(item?.publishedAt).format('MMM DD, YYYY')}
                                                    </li>
                                                    <li><i className="las la-comments" />{item?.commentCount}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="news-post-wrap">
                                {
                                    blogs?.data?.slice(5)?.map((item, i) => (
                                        <div className="post-card news-post" key={i}>
                                            <div className="post-thumb">
                                                <Link href={`/${item?.slug}`}><img src={postImage(item)} alt={item?.title} /></Link>
                                            </div>
                                            <div className="post-content">
                                                <h3 className="title">
                                                    <Link href={`/${item?.slug}`}>
                                                        {item?.title}
                                                    </Link>
                                                </h3>
                                                <ul className="post-list">
                                                    <li className="author">
                                                        by <span><Link href="/author-details">Tamiz Uddin</Link></span>
                                                    </li>
                                                    <li className="date">
                                                        {moment(item?.publishedAt).format('MMM DD, YYYY')}
                                                    </li>
                                                    <li><i className="las la-comments" />{item?.commentCount}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="recent-post-btn text-center mt-50">
                        <Link href="/blogs" className="default-btn">Load More</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
