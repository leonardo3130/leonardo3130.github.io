import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { LanguageProvider } from "./lib/i18n";
import { AboutPage } from "./pages/AboutPage";
import { CvPage } from "./pages/CvPage";
import { ProjectsPage } from "./pages/ProjectsPage";

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="cv" element={<CvPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </LanguageProvider>
  );
}
