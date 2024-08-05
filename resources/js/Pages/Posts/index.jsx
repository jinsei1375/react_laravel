import axios from "axios";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PostList from "@/Components/PostList";
import { useState } from "react";
import { Link } from "@inertiajs/react";

const Index = ({ auth, initialPosts }) => {
    // 状態管理
    const [posts, setPosts] = useState(initialPosts);
    console.log(posts);

    const fetchAllPosts = async () => {
        try {
            const response = await axios.get("/all-posts");
            setPosts(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    // postsから自分の投稿のみを取得
    const fetchMyPosts = async () => {
        const userPosts = posts.filter((post) => post.user_id === auth.user.id);
        setPosts(userPosts);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    投稿一覧
                </h2>
            }
        >
            <div>
                <button onClick={fetchAllPosts}>
                    他ユーザー含む全投稿を表示
                </button>
                <br />
                <button onClick={fetchMyPosts}>自分の投稿を表示</button>
                <br />
                <Link href={route("create.post.get")}>投稿追加</Link>
            </div>
            {posts.length === 0 ? (
                <div>投稿がありません</div>
            ) : (
                <PostList posts={posts} auth={auth} />
            )}
        </AuthenticatedLayout>
    );
};

export default Index;
