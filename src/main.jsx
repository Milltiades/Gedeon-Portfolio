import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ParallaxProvider } from "react-scroll-parallax";
import {  HashRouter  } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </HashRouter>
  </React.StrictMode>
);
