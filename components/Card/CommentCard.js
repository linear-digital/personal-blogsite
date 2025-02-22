'use client'
import { fetcher } from '@/lib/dataFetcher';
import { Button, Form, Modal, Popover } from 'antd';
import moment from 'moment';
import Link from 'next/link';
import React from 'react';

const CommentCard = ({ comment, refetch, user }) => {
    const [open, setOpen] = React.useState(false)

    const commenthandler = async (e) => {
        e.preventDefault()
        const name = e.target.fullname.value
        const email = e.target.email.value
        const message = e.target.message.value
        const newComment = {
            post: comment?.post,
            name,
            email,
            content: message,
            comment: comment?._id,
            type: "reply"
        }
        try {
            const res = await fetcher({
                path: '/blog/reply',
                method: 'POST',
                body: newComment
            })
            refetch()
            setOpen(false)
            e.target.message.value = ""
        } catch (error) {
            console.error(error);
        }
    }
    const [showReply, setShowReply] = React.useState(false)
    return (
        <div>
            <div className="comment-item">
                <div className="comment-thumb">
                    <img src="/assets/img/blog/avatar.png" alt="author" />
                </div>
                <div className="comment-info-wrap">
                    <div className="comment-info">
                        <h3 className="author">{comment?.name} <span>{moment(comment?.createdAt).fromNow()}</span></h3>
                        <button onClick={() => setOpen(true)} className="reply">Reply</button>
                    </div>
                    <p>
                        {comment?.content}
                    </p>
                </div>
                <Modal open={open} footer={null} onCancel={() => setOpen(false)}
                >
                    <div className="blog-form-wrap">
                        <h3 className="layout-title">Reply to "{comment?.name}"</h3>
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
                </Modal>
            </div>
           
            {
                showReply && <>
                    {
                        comment?.reply?.length > 0 && comment?.reply?.map(item => (
                            <div className="comment-item item-2">
                                <div className="comment-thumb">
                                    <img src="/assets/img/blog/avatar.png" alt="author" />
                                </div>
                                <div className="comment-info-wrap">
                                    <div className="comment-info">
                                        <h3 className="author">{item?.name} <span>{moment(comment?.createdAt).fromNow()}</span></h3>
                                    </div>
                                    <p>
                                        {item?.content}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </>
            }
             {
                comment?.reply?.length > 0 && <button onClick={() => setShowReply(!showReply)} className='show-reply'>{showReply ? "Hide" : "Show"} {comment?.reply?.length} replies</button>
            }
        </div>
    );
};

export default CommentCard;