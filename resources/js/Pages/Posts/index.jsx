import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PostList from "@/Components/PostList";
import { useState } from "react";

const Index = ({ auth, initialPosts }) => {
    const [posts, setPosts] = useState(initialPosts);
    console.log(posts);
    const navigate = useNavigate();

    const fetchAllPosts = async () => {
        try {
            const response = await axios.get("/all-posts");
            setPosts(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchUserPosts = async () => {
        try {
            const response = await axios.get("/user-posts");
            setPosts(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Post
                </h2>
            }
        >
            <div>
                <h1>投稿一覧</h1>
            </div>
            <div>
                <button onClick={fetchAllPosts}>
                    他ユーザー含む全投稿を表示
                </button>
                <br />
                <button onClick={fetchUserPosts}>自分の投稿を表示</button>
                <br />
                <button onClick={() => navigate("/posts/create")}>
                    投稿追加
                </button>
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
