import { postImage, postLink } from "@/lib/postlink";
import moment from "moment";
import Link from "next/link";
import React from "react";

const LetestPostCard = ({ post }) => {
  return (
    <div className="post-card news-post">
      <div className="post-thumb">
        <Link href={postLink(post)}>
          <img src={postImage(post)} alt={post?.title} />
        </Link>
      </div>
      <div className="post-content">
        {
          post?.tags?.slice(0, 2).map((tag, i) => (
            <Link
              href={`/category/${tag.slug}`}
              key={i}
              className="card-btn me-2 bg-blue-light"
            >
              {tag.name}
            </Link>
          ))
        }
        <h3 className="title">
          <Link href={postLink(post)}>
            {post?.title?.slice(0, 80)}...
          </Link>
        </h3>
        <ul className="post-list">
          <li className="author">
            by{" "}
            <span>
              <Link href="/author-details">Tamiz Uddin</Link>
            </span>
          </li>
          <li className="date">{moment(post?.publishedAt).format("MMM DD, YYYY")}</li>
          <li>
            <i className="las la-comments" />{post?.commentCount}
          </li>
        </ul>
        <p>
          {post?.brief?.slice(0, 120)}...
        </p>
        <Link href={postLink(post)} className="news-post-btn">
          <i className="las la-arrow-right" />
        </Link>
      </div>
    </div>
  );
};

export default LetestPostCard;
