import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<main className="page-shell"><p>Loading course details…</p></main>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
);
