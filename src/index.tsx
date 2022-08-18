import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import "./styles/style.scss";
import App from "./App.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
