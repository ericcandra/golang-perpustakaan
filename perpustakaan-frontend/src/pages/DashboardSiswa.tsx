import { useEffect, useState } from "react";
import SidebarSiswa from "../components/SidebarSiswa";
import api from "../services/api";

export default function DashboardSiswa() {

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

      <SidebarSiswa />

      <div className="flex-1 p-4 md:p-8">

        <div className="mb-8">

          <h1 className="text-4xl font-bold">
            Dashboard Siswa
          </h1>

          <p className="text-gray-500 mt-2">
            Selamat datang di Portal Perpustakaan
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-green-600 text-white p-6 rounded-2xl shadow">

            <p>Buku Tersedia</p>

            <h2 className="text-5xl font-bold mt-3">
              {totalBuku}
            </h2>

          </div>

          <div className="bg-blue-600 text-white p-6 rounded-2xl shadow">

            <p>Sedang Dipinjam</p>

            <h2 className="text-5xl font-bold mt-3">
              0
            </h2>

          </div>

          <div className="bg-red-600 text-white p-6 rounded-2xl shadow">

            <p>Denda</p>

            <h2 className="text-5xl font-bold mt-3">
              Rp 0
            </h2>

          </div>

        </div>

        <div className="mt-8 bg-white p-6 rounded-2xl shadow">

          <h2 className="text-2xl font-bold mb-4">
            Informasi
          </h2>

          <p className="text-gray-600">
            Gunakan menu Katalog Buku untuk melihat seluruh koleksi
            buku yang tersedia di perpustakaan.
          </p>

        </div>

      </div>

    </div>
  );
}