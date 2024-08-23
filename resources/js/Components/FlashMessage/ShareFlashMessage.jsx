import React, { useEffect } from "react";
import { usePage } from "@inertiajs/react";
import useFlashMessage from "@/Utils/flashMessage";
import "./FlashMessage.css";

const ShareFlashMessage = () => {
    const { message, type, visible, showFlashMessage } = useFlashMessage();
    const { flash } = usePage().props;

    useEffect(() => {
        console.log(flash);
        if (flash.message) {
            console.log("flash.message exists");
            showFlashMessage(flash.message, "success");
        }
    }, [flash, showFlashMessage]);

    if (!visible) return null;

    return <div className={`flash-message ${type}`}>{message}</div>;
};

export default ShareFlashMessage;
