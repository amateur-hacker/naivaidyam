import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import WebFont from "webfontloader";
import { BrowserRouter } from "react-router-dom";

WebFont.load({
  google: {
    families: ["Dancing Script: 500", "Montserrat: 400,500,600,700"],
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
