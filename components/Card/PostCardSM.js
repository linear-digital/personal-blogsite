import moment from 'moment';
import Link from 'next/link';
import React from 'react';

const PostCardSM = ({ blogs }) => {

    return (
        <div className="post-card editor-post">
            <div className="post-thumb">
                <Link href={`/${blogs?.slug}`}><img src={blogs?.coverImage?.url} alt={blogs?.title} /></Link>
            </div>
            <div className="post-content">
                {
                    blogs?.tags?.slice(0, 2).map((tag, i) => (
                        <Link key={i} href={`/category/${tag.slug}`} className="card-btn bg-yellow">{tag.name}</Link>
                    ))
                }
                <h3 className="title" >
                    <Link href={`/${blogs?.slug}`}>{blogs?.title?.slice(0, 50)}..</Link>
                </h3>
                <ul className="post-list">
                    <li className="author">
                        by <span><Link href="/author-details">{blogs?.author?.name}</Link></span>
                    </li>
                    <li className="date">
                        {moment(blogs?.publishedAt).format('MMM DD, YYYY')}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PostCardSM;