import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { BrowserRouter, Router } from "react-router-dom";
import FlashMessage from "./Components/FlashMessage/FlashMessage";
import { FlashMessageProvider } from "./Context/FlashMessageContext";
import React from "react";
import ShareFlashMessage from "./Components/FlashMessage/ShareFlashMessage";
import { InertiaApp } from "@inertiajs/inertia-react";

if (document.getElementById("example")) {
    console.log("example");
    // const container = document.getElementById("example");
    // const root = createRoot(container);
    // root.render(<ExampleComponent />);
} else {
    console.log("inertia");
    const appName = import.meta.env.VITE_APP_NAME || "Laravel";

    createInertiaApp({
        title: (title) => `${title} - ${appName}`,
        resolve: (name) =>
            resolvePageComponent(
                `./Pages/${name}.jsx`,
                import.meta.glob("./Pages/**/*.jsx")
            ),
        setup({ el, App, props }) {
            const root = createRoot(el);

            root.render(
                <BrowserRouter>
                    <FlashMessageProvider>
                        <App {...props} />
                        <FlashMessage />
                    </FlashMessageProvider>
                </BrowserRouter>
            );
        },
        progress: {
            color: "#4B5563",
        },
    });
}
