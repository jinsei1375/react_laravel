import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { formatDate } from '@/Utils/date';

const Index = ({ auth, posts }) => {
    console.log(posts);
    const navigate = useNavigate();


    const fetchAllPosts = async () => {
        try {
            const response = await axios.get('/all-posts');
            setPosts(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Post</h2>}
        >
            <div>
                <h1>投稿一覧</h1>
            </div>
            <div>
                <button onClick={fetchAllPosts}>他ユーザー含む全投稿を表示</button>
                <button onClick={() => navigate('/posts')}>自分の投稿を表示</button>
                <button onClick={() => navigate('/posts/create')}>投稿追加</button>
            </div>
            {posts.length === 0 ? (
                <div>投稿がありません</div>
            ) : (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            {auth.user && post.user_id === auth.user.id ? (
                                <Link to={`/post/${post.id}`}>
                                    ユーザー：{post.user.name}<br />
                                    投稿内容：{post.content} <br />
                                    投稿日時：{formatDate(post.created_at)}
                                </Link>
                            ) : (
                                <div>
                                    ユーザー：{post.user.name}<br />
                                    投稿内容：{post.content} <br />
                                    投稿日時：{formatDate(post.created_at)}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </AuthenticatedLayout>
    );
};

export default Index;