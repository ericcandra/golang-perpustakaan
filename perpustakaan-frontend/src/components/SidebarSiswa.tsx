import { Link, useNavigate } from "react-router-dom";

export default function SidebarSiswa() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.clear();

    navigate("/");
  };

  return (
    <div className="w-72 bg-green-700 text-white min-h-screen flex flex-col">

      {/* Header */}
      <div className="p-6 border-b border-green-500">

        <h1 className="text-2xl font-bold">
          🎓 Portal Siswa
        </h1>

        <p className="text-green-100 text-sm mt-1">
          Student Dashboard
        </p>

      </div>

      {/* Menu */}
      <div className="p-4 space-y-3 flex-1">

        <Link
          to="/dashboard-siswa"
          className="
          block
          bg-green-600
          hover:bg-green-500
          p-4
          rounded-xl
          transition
          "
        >
          📊 Dashboard
        </Link>

        <Link
          to="/katalog"
          className="
          block
          bg-green-600
          hover:bg-green-500
          p-4
          rounded-xl
          transition
          "
        >
          📚 Katalog Buku
        </Link>

      </div>

      {/* Logout selalu di bawah */}
      <div className="p-4 border-t border-green-500">

        <button
          onClick={logout}
          className="
          w-full
          bg-red-600
          hover:bg-red-700
          text-white
          p-4
          rounded-xl
          font-semibold
          transition
          "
        >
          🚪 Logout
        </button>

      </div>

    </div>
  );
}