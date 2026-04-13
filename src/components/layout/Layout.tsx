import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <>
      <div className="noise-overlay" />
      <div className="page-shell">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6">
          <Outlet />
        </main>
      </div>
    </>
  );
};
