import { useState } from "react";

const useFlashMessage = () => {
    const [message, setMessage] = useState("");
    const [type, setType] = useState("success");
    const [visible, setVisible] = useState(false);

    const showFlashMessage = (newMessage, newType = "success") => {
        setVisible(false); // まずvisibleをfalseにリセット
        setTimeout(() => {
            setMessage(newMessage);
            setType(newType);
            setVisible(true);
            setTimeout(() => {
                setVisible(false);
            }, 3000); // 5秒後に非表示
        }, 0); // 少しの遅延を入れてからvisibleをtrueに設定
    };

    return {
        message,
        type,
        visible,
        showFlashMessage,
    };
};

export default useFlashMessage;
