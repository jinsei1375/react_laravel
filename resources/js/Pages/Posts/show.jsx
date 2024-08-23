import React, { useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, usePage } from "@inertiajs/react";
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";
import useFlashMessage from "@/Utils/flashMessage";

const show = ({ auth, post }) => {
    const [content, setContent] = React.useState(post.content);
    const { showFlashMessage } = useFlashMessage();

    // 削除処理
    const handleDelete = async () => {
        if (confirm("削除しますか？")) {
            const response = await axios.post(`/delete-post/${post.id}`);
            if (response.status === 200) {
                Inertia.visit("/posts");
            }
        }
    };

    // 更新処理
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(`/update-post/${post.id}`, {
            content,
        });
        if (response.status === 200) {
            console.log(response);
            showFlashMessage("更新しました");
            // Inertia.visit(`/post/${post.id}`);
            console.log("更新しました");
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
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <button type="submit">更新</button>
                </form>
                <Link href={route("posts.index")}>戻る</Link>
                <br />
                <button onClick={handleDelete}>削除</button>
            </div>
        </AuthenticatedLayout>
    );
};

export default show;
