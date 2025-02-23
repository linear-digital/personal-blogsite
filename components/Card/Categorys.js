'use client'
import { fetcher } from '@/lib/dataFetcher';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react';

const Categorys = () => {
    const { data: tags } = useQuery({
        queryKey: ["tags"],
        queryFn: async () => {
            const blogs = await fetcher({ path: `/blog/tags` });
            return blogs;
        },
    });
    return (
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
    );
};

export default Categorys;