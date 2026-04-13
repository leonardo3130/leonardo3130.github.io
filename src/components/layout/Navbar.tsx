import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../lib/i18n";
import { withIframeLevel } from "../../lib/iframeLevel";

const linkStyle = ({ isActive }: { isActive: boolean }): string =>
  [
    "cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors",
    isActive
      ? "bg-[var(--pill-active-bg)] text-[var(--accent-strong)]"
      : "text-[var(--text-muted)] hover:bg-[var(--pill-hover-bg)] hover:text-[var(--text-strong)]",
  ].join(" ");

type NavProps = {
  labels: {
    about: string;
    projects: string;
    cv: string;
  };
  onNavigate?: () => void;
};

const NavLinks = ({ labels, onNavigate }: NavProps) => (
  <>
    <NavLink
      to={withIframeLevel("/")}
      end
      className={linkStyle}
      onClick={onNavigate}
    >
      {labels.about}
    </NavLink>
    <NavLink
      to={withIframeLevel("/projects")}
      className={linkStyle}
      onClick={onNavigate}
    >
      {labels.projects}
    </NavLink>
    <NavLink
      to={withIframeLevel("/cv")}
      className={linkStyle}
      onClick={onNavigate}
    >
      {labels.cv}
    </NavLink>
  </>
);

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [theme, setTheme] = useState<"light" | "dark">(
    document.documentElement.dataset.theme === "light" ? "light" : "dark",
  );

  const navLabels = {
    about: t({ en: "About", it: "Chi Sono" }),
    projects: t({ en: "Projects", it: "Progetti" }),
    cv: t({ en: "CV", it: "CV" }),
  };

  const languageLabel = t({ en: "Language", it: "Lingua" });

  const themeButtonText =
    theme === "dark"
      ? t({ en: "Light mode", it: "Modalita chiara" })
      : t({ en: "Dark mode", it: "Modalita scura" });

  const menuButtonText = open
    ? t({ en: "Close", it: "Chiudi" })
    : t({ en: "Menu", it: "Menu" });

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <nav className="sticky top-0 z-40 border-b border-(--nav-border) bg-(--nav-bg) backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <NavLink
          to={withIframeLevel("/")}
          className="brand-font text-lg font-bold tracking-wide text-(--accent-strong)"
        >
          Leonardo Po
        </NavLink>

        <div className="hidden items-center gap-2 md:flex">
          <NavLinks labels={navLabels} />
          <div className="flex items-center gap-1 rounded-full border border-(--border-soft) bg-(--button-bg) p-1">
            <span className="sr-only">{languageLabel}</span>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
              className={`cursor-pointer rounded-full px-2 py-1 text-xs font-semibold transition ${language === "en" ? "bg-(--pill-active-bg) text-(--text-strong)" : "text-(--text-muted)"}`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("it")}
              aria-pressed={language === "it"}
              className={`cursor-pointer rounded-full px-2 py-1 text-xs font-semibold transition ${language === "it" ? "bg-(--pill-active-bg) text-(--text-strong)" : "text-(--text-muted)"}`}
            >
              IT
            </button>
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            className="cursor-pointer rounded-full border border-(--border-soft) bg-(--button-bg) px-3 py-1.5 text-xs font-semibold text-(--text-strong) transition hover:bg-(--button-hover-bg)"
            aria-label={themeButtonText}
          >
            {themeButtonText}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <div className="flex items-center gap-1 rounded-lg border border-(--border-soft) bg-(--button-bg) p-1">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-label="English"
              aria-pressed={language === "en"}
              className={`cursor-pointer rounded px-2 py-1 text-xs font-semibold ${language === "en" ? "bg-(--pill-active-bg) text-(--text-strong)" : "text-(--text-muted)"}`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("it")}
              aria-label="Italiano"
              aria-pressed={language === "it"}
              className={`cursor-pointer rounded px-2 py-1 text-xs font-semibold ${language === "it" ? "bg-(--pill-active-bg) text-(--text-strong)" : "text-(--text-muted)"}`}
            >
              IT
            </button>
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            className="cursor-pointer rounded-lg border border-(--border-soft) px-3 py-2 text-sm text-(--text-strong)"
            aria-label={themeButtonText}
          >
            {theme === "dark"
              ? t({ en: "Light", it: "Chiaro" })
              : t({ en: "Dark", it: "Scuro" })}
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-lg border border-(--border-soft) px-3 py-2 text-sm text-(--text-strong)"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={menuButtonText}
          >
            {menuButtonText}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-(--nav-border) px-4 py-3 md:hidden">
          <div className="flex flex-col gap-2">
            <NavLinks labels={navLabels} onNavigate={() => setOpen(false)} />
          </div>
        </div>
      ) : null}
    </nav>
  );
};
