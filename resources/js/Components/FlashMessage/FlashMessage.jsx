import { useFlashMessage } from "@/Context/FlashMessageContext";
import "./FlashMessage.css";
import React from "react";

const FlashMessage = () => {
    const { message, fade } = useFlashMessage();
    console.log(fade);
    if (!message) return null;

    return (
        <div className={`flash-message ${fade ? "fadeOut" : ""}`}>
            {message}
        </div>
    );
};

export default FlashMessage;
