// ExampleComponent.jsx
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const ExampleComponent = () => {
    const [flg, setFlg] = useState(true);

    return (
        <div>
            <h1>Reactエリア</h1>
            <p>{flg ? "true" : "false"}</p>
            <button onClick={() => setFlg(!flg)}>Click</button>
        </div>
    );
};

export default ExampleComponent;

// BladeにReactコンポーネントを差し込む
const target = document.getElementById("example");
if (target) {
    const dataset = target.dataset;
    const root = createRoot(target);
    root.render(<ExampleComponent {...dataset} />);
}
