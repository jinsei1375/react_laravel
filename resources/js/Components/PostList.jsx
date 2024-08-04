import React from "react";

import { formatDate } from "@/Utils/date";
import { Link } from "@inertiajs/react";

const PostList = ({ posts, auth }) => {
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    {auth.user && post.user_id === auth.user.id ? (
                        <Link href={route("post.show.get", post.id)}>
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
