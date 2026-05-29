import SidebarSiswa from "../components/SidebarSiswa.tsx";

export default function DashboardSiswa() {

  return (
    <div className="flex bg-slate-100 min-h-screen">

      <SidebarSiswa />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Dashboard Siswa
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow">

            <h2 className="text-gray-500">
              Buku Tersedia
            </h2>

            <p className="text-5xl font-bold mt-3">
              120
            </p>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow">

            <h2 className="text-gray-500">
              Sedang Dipinjam
            </h2>

            <p className="text-5xl font-bold mt-3">
              2
            </p>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow">

            <h2 className="text-gray-500">
              Denda
            </h2>

            <p className="text-5xl font-bold mt-3">
              0
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}