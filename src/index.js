import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./scss/main.scss";
import "./less/main.less";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);