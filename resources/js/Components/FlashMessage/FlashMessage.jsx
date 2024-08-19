import { useFlashMessage } from "@/Context/FlashMessageContext";
import "./FlashMessage.css";
import React from "react";

const FlashMessage = () => {
    const { message, fade } = useFlashMessage();
    if (!message) return null;

    return (
        <div className={`flash-message ${fade ? "fadeOut" : ""}`}>
            {message}
        </div>
    );
};

export default FlashMessage;

// import React from "react";
// import { usePage } from "@inertiajs/inertia-react";

// const FlashMessage = () => {
//     const { flashMessage } = usePage().props;

//     if (!flashMessage) return null;

//     return (
//         <div
//             className={`flash-message ${flashMessage ? "fade-in" : "fade-out"}`}
//         >
//             {flashMessage}
//         </div>
//     );
// };

// export default FlashMessage;
