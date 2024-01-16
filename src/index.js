import React from "react";
import ReactDOM from "react-dom/client";

import "./general.css";
import "./CSS/header.css";
import "./CSS/intro-section.css";
import "./CSS/resume-section.css";
import "./CSS/projects-section.css";
import "./CSS/footer.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
