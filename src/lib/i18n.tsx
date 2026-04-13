import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "it";

type LocalizedText = Record<Language, string>;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (text: LocalizedText) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const getInitialLanguage = (): Language => {
  const stored = window.localStorage.getItem("language");
  if (stored === "en" || stored === "it") {
    return stored;
  }

  return window.navigator.language.toLowerCase().startsWith("it") ? "it" : "en";
};

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const docLanguage = document.documentElement.lang;
    if (docLanguage === "it" || docLanguage === "en") {
      return docLanguage;
    }
    return getInitialLanguage();
  });

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    document.documentElement.lang = nextLanguage;
    window.localStorage.setItem("language", nextLanguage);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (text: LocalizedText) => text[language],
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
};
