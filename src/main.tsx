import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { getInitialLanguage } from "./lib/i18n";
import "./styles.css";

const storedTheme = window.localStorage.getItem("theme");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
const initialTheme =
  storedTheme === "light" || storedTheme === "dark"
    ? storedTheme
    : prefersLight
      ? "light"
      : "dark";
document.documentElement.dataset.theme = initialTheme;

const initialLanguage = getInitialLanguage();
document.documentElement.lang = initialLanguage;

const redirectPath = new URLSearchParams(window.location.search).get(
  "redirect",
);
if (redirectPath) {
  window.history.replaceState(null, "", decodeURIComponent(redirectPath));
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
