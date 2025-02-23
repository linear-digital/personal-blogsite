"use client";

import { fetcher } from "@/lib/dataFetcher";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import LetestPostCard from "../Card/LetestPostCard";
import { useEffect, useState } from "react";
import { Skeleton } from "antd";
import { useRouter } from "next/navigation";
import { postImage, postLink } from "@/lib/postlink";
import moment from "moment";
export default function NewsPost1() {
    const [page, setPage] = useState(1);
    const { data, isLoading } = useQuery({
        queryKey: ["letest-blogs", page],
        queryFn: async () => {
            const blogs = await fetcher({ path: `/blog/blogs?limit=5&page=${page}` });
            return blogs;
        },
    });
    const { data: tranding } = useQuery({
        queryKey: ["letest-blogs", page],
        queryFn: async () => {
            const blogs = await fetcher({ path: `/blog/blogs?limit=6&trending=true` });
            return blogs;
        },
    });
    const { data: tags } = useQuery({
        queryKey: ["tags"],
        queryFn: async () => {
            const blogs = await fetcher({ path: `/blog/tags` });
            return blogs;
        },
    });
    const router = useRouter();
    useEffect(() => {
        router.push("/#letest");
    }, [page]);
    return (
        <>
            <section className="news-post-area padding pt-0" id="letest">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="news-post-wrap">
                                <div className="section-heading mb-40">
                                    <h3 className="section-title title-border">
                                        <span>Latest Posts</span>
                                    </h3>
                                </div>
                                {isLoading ? (
                                    <>
                                        {Array.from({ length: 5 }).map((item, i) => (
                                            <Skeleton key={i} active />
                                        ))}
                                    </>
                                ) : (
                                    data?.data?.map((item, i) => (
                                        <LetestPostCard post={item} key={i} />
                                    ))
                                )}
                                <div className="d-flex justify-content-center mt-5">
                                    <Link href="/blogs" className="default-btn ">See All Post</Link>
                                </div>
                                {/* <div className="post-pagination">
                                    <ul className="pagination-list">
                                        <div className="pagination-right">
                                            <button
                                                disabled={page === 1}
                                                onClick={() => setPage(page - 1)}
                                            >
                                                <i className="las la-angle-left" />
                                            </button>
                                        </div>
                                        {Array.from({
                                            length:
                                                Math.ceil(data?.total / 5) > 5
                                                    ? 5
                                                    : Math.ceil(data?.total / 5),
                                        }).map((item, i) => (
                                            <li key={i}>
                                                <button
                                                    onClick={() => setPage(i + 1)}
                                                    className={page === i + 1 ? "active" : ""}
                                                >
                                                    <span>{i + 1}</span>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="pagination-right">
                                        <button
                                            onClick={() => setPage(page - 1)}
                                            disabled={page === Math.ceil(data?.total / 5)}
                                        >
                                            <i className="las la-angle-right" />
                                        </button>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="trending-post-wrap">
                                <div className="section-heading mb-30">
                                    <h3 className="section-title title-border">
                                        <span>Trending Posts</span>
                                    </h3>
                                </div>
                                <div className="list-post-area list-2">
                                    {
                                        tranding?.data?.map((item, i) => (
                                            <div className="list-post-card">
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
                            <div className="categorie-wrap">
                                <div className="section-heading mb-30">
                                    <h3 className="section-title title-border">
                                        <span>Categories</span>
                                    </h3>
                                </div>
                                <ul className="categorie-list">
                                    {
                                        tags?.slice(0, 8)?.map((item, i) => (
                                            <li key={i}>
                                                <Link href={`/category/${item?.slug}`} >
                                                    <h4 className="list-title">
                                                        {item?.name} <span>({item?.count})</span>
                                                    </h4>
                                                    <i className="las la-arrow-right" />
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}
