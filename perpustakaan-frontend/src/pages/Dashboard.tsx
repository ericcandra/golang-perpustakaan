import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

export default function Dashboard() {
  const [totalBuku, setTotalBuku] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await api.get("/api/buku");

      setTotalBuku(
        response.data.data.total_record
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex bg-slate-100 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-4 md:p-8">

        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              Dashboard Admin
            </h1>

            <p className="text-gray-500 mt-2">
              Selamat datang di Sistem Informasi Perpustakaan
            </p>
          </div>

          <div className="bg-white px-5 py-3 rounded-xl shadow mt-4 md:mt-0">

            <p className="text-sm text-gray-500">
              Tanggal Hari Ini
            </p>

            <p className="font-semibold">
              {new Date().toLocaleDateString("id-ID")}
            </p>

          </div>

        </div>

        {/* Statistik */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg">

            <p>Total Buku</p>

            <h2 className="text-5xl font-bold mt-3">
              {totalBuku}
            </h2>

          </div>

          <div className="bg-green-600 text-white p-6 rounded-2xl shadow-lg">

            <p>Status Sistem</p>

            <h2 className="text-3xl font-bold mt-3">
              Online
            </h2>

          </div>

        </div>

      </div>

    </div>
  );
}