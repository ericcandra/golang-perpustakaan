import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(
  localStorage.getItem("theme") === "dark"
);

const toggleTheme = () => {

  const newTheme = !darkMode;

  setDarkMode(newTheme);

  localStorage.setItem(
    "theme",
    newTheme ? "dark" : "light"
  );

  if (newTheme) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

  const handleLogout = () => {

  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("role");

  navigate("/");
};

  return (
    <>
      {/* Header Mobile */}
      <div className="lg:hidden bg-slate-900 text-white p-4 flex justify-between items-center">

        <h1 className="font-bold text-xl">
          📚 Perpustakaan
        </h1>

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl"
        >
          ☰
        </button>

      </div>

      {/* Overlay Mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static
        top-0 left-0
        z-50
        w-72
        min-h-screen
        bg-slate-900
        text-white
        flex flex-col
        transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
        `}
      >

        <div className="p-6 border-b border-slate-700">

          <h1 className="text-2xl font-bold">
            📚 Perpustakaan
          </h1>

          <p className="text-slate-400 text-sm">
            Admin Dashboard
          </p>

        </div>

        <div className="p-4 space-y-3 flex-1">

          <Link
            to="/dashboard"
            className="block bg-slate-800 p-4 rounded-xl hover:bg-blue-600"
          >
            📊 Dashboard
          </Link>

          <Link
            to="/buku"
            className="block bg-slate-800 p-4 rounded-xl hover:bg-blue-600"
          >
            📚 Data Buku
          </Link>

        </div>

        <div className="p-4 border-t border-slate-700">

          <button
    onClick={toggleTheme}
    className="
    w-full
    bg-yellow-500
    hover:bg-yellow-600
    text-white
    p-4
    rounded-xl
    mb-3
    "
  >
    {darkMode
      ? "☀️ Light Mode"
      : "🌙 Dark Mode"}
  </button>

          <button
            onClick={handleLogout}
            className="
            w-full
            bg-red-600
            hover:bg-red-700
            p-4
            rounded-xl
            "
          >
            🚪 Logout
          </button>

        </div>

      </div>
    </>
  );
}