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
            }, 2000);
            setTimeout(() => {
                setMessage(null);
                sessionStorage.removeItem("flashMessage");
            }, 3000);
        }
    }, []);

    const showMessage = (msg) => {
        setMessage(msg);
        setFade(false);
        sessionStorage.setItem("flashMessage", msg);
        setTimeout(() => {
            setFade(true);
        }, 2000);
        setTimeout(() => {
            setMessage(null);
            sessionStorage.removeItem("flashMessage");
        }, 3000);
    };

    return (
        <FlashMessageContext.Provider value={{ message, fade, showMessage }}>
            {children}
        </FlashMessageContext.Provider>
    );
};

export const useFlashMessage = () => useContext(FlashMessageContext);
