import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";

const create = ({ auth }) => {
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("/create-post", {
            content: content,
        });
        setContent("");
        Inertia.visit("/posts");
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    投稿追加
                </h2>
            }
        >
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="content">投稿内容</label>
                    <textarea
                        id="content"
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>
                <div>
                    <button type="submit">投稿</button>
                </div>
            </form>
        </AuthenticatedLayout>
    );
};

export default create;
