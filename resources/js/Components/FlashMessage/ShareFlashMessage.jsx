// Inertia::shareを使った場合
import React from "react";
import { usePage } from "@inertiajs/react";
import "./FlashMessage.css";

const ShareFlashMessage = () => {
    const { flash } = usePage().props;

    console.log(flash); // ここでflashオブジェクトを確認

    if (!flash.message) return null;

    return (
        <div className={`flash-message ${flash.message ? "fadeOut" : ""}`}>
            {flash.message}
        </div>
    );
};

export default ShareFlashMessage;
