import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";
import { useFlashMessage } from "@/Context/FlashMessageContext";

const show = ({ auth, post }) => {
    const [content, setContent] = React.useState(post.content);
    const { showMessage } = useFlashMessage();

    // 削除処理
    const handleDelete = async () => {
        if (confirm("削除しますか？")) {
            const response = await axios.post(`/delete-post/${post.id}`);
            console.log(response);
            if (response.status === 200) {
                showMessage("削除しました");
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
        console.log(response);
        if (response.status === 200) {
            showMessage("更新しました");
            Inertia.visit(`/posts/`);
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
