// ExampleComponent.jsx
import React, { useState } from "react";

const ExampleComponent = () => {
    const [flg, setFlg] = useState(true);

    return (
        <div>
            <h1>{flg ? "React" : "Blade"}</h1>
            <button onClick={() => setFlg(!flg)}>Click</button>
        </div>
    );
};

export default ExampleComponent;
