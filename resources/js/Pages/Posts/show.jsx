import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";

const show = ({ auth, post }) => {
    const handleDelete = async () => {
        if (confirm("削除しますか？")) {
            const response = await axios.post(`/delete-post/${post.id}`);
            console.log(response);
            if (response.status === 200) {
                Inertia.visit("/posts");
            }
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    投稿詳細
                </h2>
            }
        >
            <div>
                <p>投稿者: {post.user.name}</p>
                <p>{post.content}</p>
                <Link href={route("posts.index")}>戻る</Link>
                <br />
                <button onClick={handleDelete}>削除</button>
            </div>
        </AuthenticatedLayout>
    );
};

export default show;
