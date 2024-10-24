import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ResultProvider from "./Provider/ResultProvider.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ResultProvider>
        <App />
      </ResultProvider>
    </BrowserRouter>
  </StrictMode>
);
