"use client";

import { fetcher } from "@/lib/dataFetcher";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import LetestPostCard from "../Card/LetestPostCard";
import { useEffect, useState } from "react";
import { Skeleton } from "antd";
import { useRouter } from "next/navigation";
import TrendingPosts from '../Card/TrendingPosts';
import Categorys from '../Card/Categorys';
export default function NewsPost1() {
    const [page, setPage] = useState(1);
    const { data, isLoading } = useQuery({
        queryKey: ["letest-blogs", page],
        queryFn: async () => {
            const blogs = await fetcher({ path: `/blog/blogs?limit=5&page=${page}` });
            return blogs;
        },
    });
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
                            <TrendingPosts />
                            <Categorys />
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}
