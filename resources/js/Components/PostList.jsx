import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "@/Utils/date";

const PostList = ({ posts, auth }) => {
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    {auth.user && post.user_id === auth.user.id ? (
                        <Link to={`/post/${post.id}`}>
                            ユーザー：{post.user.name}
                            <br />
                            投稿内容：{post.content} <br />
                            投稿日時：{formatDate(post.created_at)}
                        </Link>
                    ) : (
                        <div>
                            ユーザー：{post.user.name}
                            <br />
                            投稿内容：{post.content} <br />
                            投稿日時：{formatDate(post.created_at)}
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default PostList;
