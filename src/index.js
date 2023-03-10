import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { CategoriesProvider } from "./context/category.context";
import { PostProvider } from "./context/post.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoriesProvider>
        <PostProvider>
          <App />
        </PostProvider>
      </CategoriesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
