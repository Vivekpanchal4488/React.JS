import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
// import App from './fetchMethod'
// import App from './axiosMethod';
import App from "./App2";
import ThemeContext from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ThemeContext>
    <App />
  </ThemeContext>,
  // </StrictMode>,
);
