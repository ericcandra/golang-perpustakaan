import { useEffect, useState } from "react";
import SidebarSiswa from "../components/SidebarSiswa";
import api from "../services/api";

export default function DashboardSiswa() {

  const [jumlahBuku, setJumlahBuku] = useState(0);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {

    try {

      const response = await api.get("/api/buku");

      console.log(response.data);

      setJumlahBuku(
        response.data.data.records.length
      );

    } catch (error) {

      console.error(error);

    }
  };

  return (
    <div className="flex bg-slate-100 min-h-screen">

      <SidebarSiswa />

      <div className="flex-1 p-8">

        <h1 className="text-5xl font-bold mb-2">
          Dashboard Siswa
        </h1>

        <p className="text-gray-500 mb-8">
          Selamat datang di Portal Perpustakaan
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-green-600 text-white p-6 rounded-2xl shadow">

            <h3>Buku Tersedia</h3>

            <h1 className="text-5xl font-bold mt-4">
              {jumlahBuku}
            </h1>

          </div>

          <div className="bg-blue-600 text-white p-6 rounded-2xl shadow">

            <h3>Sedang Dipinjam</h3>

            <h1 className="text-5xl font-bold mt-4">
              0
            </h1>

          </div>

          <div className="bg-red-600 text-white p-6 rounded-2xl shadow">

            <h3>Denda</h3>

            <h1 className="text-5xl font-bold mt-4">
              Rp 0
            </h1>

          </div>

        </div>

      </div>

    </div>
  );
}