import React, { createContext, useState, useContext, useEffect } from "react";

const FlashMessageContext = createContext();

export const FlashMessageProvider = ({ children }) => {
    const [message, setMessage] = useState(null);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const storedMessage = sessionStorage.getItem("flashMessage");
        if (storedMessage) {
            setMessage(storedMessage);
            setFade(false);
            setTimeout(() => {
                setFade(true);
            }, 3000); // 5秒後にフェードアウト
            setTimeout(() => {
                setMessage(null);
                sessionStorage.removeItem("flashMessage");
            }, 5500); // 5.5秒後にメッセージを消す
        }
    }, []);

    const showMessage = (msg) => {
        setMessage(msg);
        setFade(false);
        sessionStorage.setItem("flashMessage", msg);
        setTimeout(() => {
            setFade(true);
        }, 5000); // 5秒後にフェードアウト
        setTimeout(() => {
            setMessage(null);
            sessionStorage.removeItem("flashMessage");
        }, 6000); // 5.5秒後にメッセージを消す
    };

    return (
        <FlashMessageContext.Provider value={{ message, fade, showMessage }}>
            {children}
        </FlashMessageContext.Provider>
    );
};

export const useFlashMessage = () => useContext(FlashMessageContext);
