'use client'
import { fetcher } from '@/lib/dataFetcher';
import { postImage, postLink } from '@/lib/postlink';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import Link from 'next/link';
import React from 'react';

const TrendingPosts = () => {
    const { data: tranding } = useQuery({
        queryKey: ["letest-blogs"],
        queryFn: async () => {
            const blogs = await fetcher({ path: `/blog/blogs?limit=7&trending=true` });
            return blogs;
        },
    });
    return (
        <div className="trending-post-wrap">
            <div className="section-heading mb-30">
                <h3 className="section-title title-border">
                    <span>Trending Posts</span>
                </h3>
            </div>
            <div className="list-post-area list-2">
                {
                    tranding?.data?.map((item, i) => (
                        <div className="list-post-card" key={i}>
                            <div className="post-img">
                                <Link href={postLink(item)}>
                                    <img
                                        src={postImage(item)}
                                        alt="post"
                                    />
                                </Link>
                            </div>
                            <div className="post-content">
                                <h3 className="title">
                                    <Link href={postLink(item)}>
                                        {item?.title?.slice(0, 50)}...
                                    </Link>
                                </h3>
                                <span>{moment(item?.publishedAt).format("MMM DD, YYYY")}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TrendingPosts;