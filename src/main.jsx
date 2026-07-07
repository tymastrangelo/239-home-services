import React from "react";
import ReactDOM from "react-dom/client";
import { MotionConfig } from "framer-motion";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Use Vite's BASE_URL so the app works both on root deployments (Vercel) and on subpath deployments (GitHub Pages). */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {/* Honor the user's reduced-motion preference across all animations */}
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </BrowserRouter>
  </React.StrictMode>
);
