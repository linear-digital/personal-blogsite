'use client';
import { fetcher } from '@/lib/dataFetcher';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import CommentCard from './CommentCard';

const PostComent = ({ post }) => {
    const { data, refetch } = useQuery({
        queryKey: ['comment', post._id],
        queryFn: async () => {
            const res = await fetcher({ path: `/blog/comments/${post._id}` })
            return res
        }
    })
    const [user, setUser] = React.useState(null)
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    }, [])
    const commenthandler = async (e) => {
        e.preventDefault()
        const name = e.target.fullname.value
        const email = e.target.email.value
        const message = e.target.message.value
        localStorage.setItem("user", JSON.stringify({ name, email }))
        const newComment = {
            post: post._id,
            name,
            email,
            content: message
        }
        try {
            const res = await fetcher({
                path: '/blog/comment',
                method: 'POST',
                body: newComment
            })
            e.target.message.value = ""
            refetch()
        } catch (error) {
            console.error(error);
        }

    }
    return (
        <div>
            <div className="comment-area">
                <h3 className="layout-title">Comments</h3>

                {
                    data?.map((comment, i) => (
                        <CommentCard
                            comment={comment}
                            key={i}
                            user={user}
                            refetch={refetch}
                        />
                    ))
                }
            </div>
            <div className="blog-form-wrap">
                <h3 className="layout-title">Leave a comment</h3>
                <p>Your email address will not be published. Required fields are marked *</p>
                <div className="blog-form">
                    <form method="post" id="ajax_contact" className="form-horizontal"
                        onSubmit={commenthandler}
                    >
                        <div className="form-group row">
                            <div className="col-md-6">
                                <input defaultValue={user?.name} type="text" id="fullname" name="fullname" className="form-control" placeholder="Name*" required />
                            </div>
                            <div className="col-md-6">
                                <input defaultValue={user?.email} type="email" id="email" name="email" className="form-control" placeholder="Email*" required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <textarea id="message" name="message" cols={30} rows={5} className="form-control address" placeholder="Comment*" required />
                            </div>
                        </div>
                        <button id="submit" className="default-btn" type="submit">Post Comment</button>
                        <div id="form-messages" className="alert" role="alert" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PostComent;