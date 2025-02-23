import { author, postImage, postLink } from "@/lib/postlink";
import moment from "moment";
import Link from "next/link";
import React from "react";

const TopPost = ({ post }) => {
  return (
    <div className="post-card top-post mb-25">
      <div className="post-thumb overlay-cover">
        <Link href={postLink(post)}>
          <img src={postImage(post)} alt={post.title} />
        </Link>
      </div>
      <div className="post-content">
        {post?.tags?.slice(0, 2).map((tag, i) => (
          <Link
            href={`/category/${tag.slug}`}
            key={i}
            className="card-btn bg-blue me-2"
          >
            {tag.name}
          </Link>
        ))}
        <h3 className="title bg-black p-1">
          <Link href={postLink(post)}>
            {post?.title?.slice(0, 60)}
          </Link>
        </h3>
        <ul className="post-list bg-black p-1">
          <li className="author ">
            by{" "}
            <span className="">
              <Link href={'/author-details'}>Tamiz Uddin</Link>
            </span>
          </li>
          <li className="date">{moment(post?.publishedAt).format("MMM DD, YYYY")}</li>
          <li>
            <i className="las la-comments" /> {post?.commentCount}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopPost;
