import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {ProductContext} from "./context/productContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductContext>
      <App />
    </ProductContext>
  </React.StrictMode>
);
